import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-contact-center-talkdesk", () => {
  it("records the package-level provider SDK decision", async () => {
    const manifestModule = await import("../src/manifest.js");
    const packageJson = readPackageJson();
    expect(packageJson.cognidesk.providerSdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      typedClientOverride: "TalkdeskProviderClient",
    });
    expect(packageJson.cognidesk.providerSdkDecision.defaultRestPolicy).toContain("rest-adapter");
    expect(packageJson.cognidesk.providerSdkDecision.checkedPackages.length).toBeGreaterThan(0);
    expect(manifestModule.talkdeskSupportSlice.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
    expect(manifestModule.talkdeskProviderManifestInput.metadata.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
  });

  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.talkdeskProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-talkdesk");
    expect(manifestModule.talkdeskSupportSlice.allowedOperations.length).toBeGreaterThan(0);
    expect(manifestModule.talkdeskSupportSlice.allowedOperations.map((operation) => operation.alias))
      .toContain("contact-center.handoff.request");
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createTalkdeskIntegration({
      providerClient: fakeProviderClient(),
      defaultHandoffPath: "/handoff",
      readinessPath: "/ready",
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("delegates handoff and reviewed provider operations to the injected provider client", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createTalkdeskClient({
      providerClient,
      defaultHandoffPath: "/configured/handoff",
    });

    await client.createHandoff({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
    });
    await client.scheduleCallback({ body: { phone: "+15550100" } });
    await client.createTask({ body: { title: "Follow up" } });

    expect(providerClient.createHandoff).toHaveBeenCalledWith({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
    });
    expect(providerClient.scheduleCallback).toHaveBeenCalledWith({
      body: { phone: "+15550100" },
      operationId: "calls-callback-post",
      method: "POST",
      path: "/calls/callback",
    });
    expect(providerClient.createTask).toHaveBeenCalledWith({
      body: { title: "Follow up" },
      operationId: "CreatingACase",
      method: "POST",
      path: "/cm/core/va/cases",
    });
  });

  it("fails closed before injected provider clients receive malformed or override input", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createTalkdeskClient({ providerClient });

    expect(() => client.createHandoff("not-an-object" as never)).toThrow("Talkdesk handoff input object is required.");
    expect(() => client.createHandoff({
      payload: { conversationId: "conv_123" },
      // @ts-expect-error createHandoff intentionally rejects per-call endpoint paths.
      path: "/provider/native-transfer",
    })).toThrow("Talkdesk handoff input does not allow unsupported field 'path'.");
    expect(() => client.scheduleCallback({
      body: { phone: "+15550100" },
      // @ts-expect-error per-call headers can override auth and are intentionally rejected.
      headers: { authorization: "Bearer attacker-token" },
    })).toThrow("Talkdesk operation input does not allow unsupported field 'headers'.");
    expect(() => client.createTask({
      // @ts-expect-error operation bodies must be JSON objects.
      body: new Date(),
    })).toThrow("Talkdesk operation body must be a JSON object.");

    expect(providerClient.createHandoff).not.toHaveBeenCalled();
    expect(providerClient.scheduleCallback).not.toHaveBeenCalled();
    expect(providerClient.createTask).not.toHaveBeenCalled();
  });

  it("executes reviewed REST operations with the built-in adapter", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = mod.createTalkdeskClient({
      baseUrl: "https://api.example.test",
      accessToken: "talkdesk-token",
      defaultHandoffPath: "/configured/handoff",
      fetch: fetchMock,
    });

    await expect(client.scheduleCallback({
      body: { phone: "+15550100" },
      query: { source: "smoke" },
      idempotencyKey: "callback-1",
    })).resolves.toEqual({ ok: true });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://api.example.test/calls/callback?source=smoke");
    expect(init.method).toBe("POST");
    expect(init.headers).toMatchObject({
      accept: "application/json",
      authorization: "Bearer talkdesk-token",
      "content-type": "application/json",
      "idempotency-key": "callback-1",
    });
    expect(JSON.parse(String(init.body))).toEqual({ phone: "+15550100" });
  });

  it("does not retry side-effecting POST requests without an idempotency key", async () => {
    const mod = await import("../src/index.js");
    const nonIdempotentFetch = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: "busy" }), { status: 503 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const nonIdempotentClient = mod.createTalkdeskClient({
      baseUrl: "https://api.example.test",
      accessToken: "talkdesk-token",
      fetch: nonIdempotentFetch,
      retry: { attempts: 2 },
    });

    await expect(nonIdempotentClient.scheduleCallback({ body: { phone: "+15550100" } }))
      .rejects.toMatchObject({ status: 503 });
    expect(nonIdempotentFetch).toHaveBeenCalledTimes(1);

    const idempotentFetch = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: "busy" }), { status: 503 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const idempotentClient = mod.createTalkdeskClient({
      baseUrl: "https://api.example.test",
      accessToken: "talkdesk-token",
      fetch: idempotentFetch,
      retry: { attempts: 2 },
    });

    await expect(idempotentClient.scheduleCallback({
      body: { phone: "+15550100" },
      idempotencyKey: "callback-1",
    })).resolves.toEqual({ ok: true });
    expect(idempotentFetch).toHaveBeenCalledTimes(2);
  });

  it("fails closed for unsafe REST configuration and unreviewed provider-client calls", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));

    expect(() => mod.createTalkdeskClient({
      baseUrl: "http://api.example.test",
      defaultHandoffPath: "/configured/handoff",
      fetch: fetchMock,
    }).createHandoff({ payload: { conversationId: "conv_123" } })).toThrow("Talkdesk baseUrl must be a valid https URL.");

    expect(() => mod.createTalkdeskClient({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "https://evil.example.test/handoff",
      fetch: fetchMock,
    }).createHandoff({ payload: { conversationId: "conv_123" } })).toThrow("Talkdesk handoff path must be a provider-relative path beginning with '/'.");

    const client = mod.createTalkdeskClient({
      baseUrl: "https://api.example.test",
      accessToken: "talkdesk-token",
      fetch: fetchMock,
    });
    expect(() => client.providerClient.scheduleCallback({
      body: { phone: "+15550100" },
      operationId: "CreatingACase",
      method: "POST",
      path: "/cm/core/va/cases",
    })).toThrow("Talkdesk operation 'calls-callback-post' must be reviewed by createTalkdeskClient before execution.");
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

function fakeProviderClient() {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    scheduleCallback: vi.fn(async () => ({ ok: true })),
    createTask: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}

function readPackageJson() {
  return JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
    cognidesk: {
      providerSdkDecision: {
        checkedAt: string;
        typedClientOverride: string;
        defaultRestPolicy: string;
        checkedPackages: unknown[];
      };
    };
  };
}
