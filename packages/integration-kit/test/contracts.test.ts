import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, expectTypeOf, it } from "vitest";
import {
  assertIntegrationReady,
  collectIntegrationPages,
  contactCenterOperationAliasMap,
  createOperationBindingReport,
  defineIntegration,
  defineIntegrationProviderPackage,
  ecommerceOperationAliasMap,
  emailOperationAliasMap,
  integrationCategoryProfiles,
  IntegrationError,
  integrationErrorToJSON,
  normalizeIntegrationError,
  parsedWebhookEvent,
  rejectedWebhook,
  smsOperationAliasMap,
  summarizeIntegrationReadiness,
  ticketingOperationAliasMap,
  verifiedWebhook,
  voiceOperationAliasMap,
  workplaceOperationAliasMap,
  type IntegrationOperationHandler,
} from "../src/index.js";
import {
  assertIntegrationConformance,
  collectIntegrationConformanceIssues,
  createOperationHandlerStubs,
} from "../src/testing/index.js";

describe("integration kit contracts", () => {
  it("exports typed provider-neutral operation maps for migration categories", () => {
    expect(emailOperationAliasMap["email.receive"]).toBe("email.receive");
    expect(workplaceOperationAliasMap["workplace.message.send"]).toBe("workplace.message.send");
    expect(ticketingOperationAliasMap["ticket.read"]).toBe("ticket.read");
    expect(ecommerceOperationAliasMap["ecommerce.order.read"]).toBe("ecommerce.order.read");
    expect(smsOperationAliasMap["sms.message.send"]).toBe("sms.message.send");
    expect(voiceOperationAliasMap["voice.call.start"]).toBe("voice.call.start");
    expect(contactCenterOperationAliasMap["contactCenter.transfer.request"]).toBe("contactCenter.transfer.request");

    expectTypeOf(emailOperationAliasMap["email.receive"]).toEqualTypeOf<"email.receive">();
    expectTypeOf(ecommerceOperationAliasMap["ecommerce.refund.create"]).toEqualTypeOf<"ecommerce.refund.create">();
    expect(integrationCategoryProfiles.map((profile) => profile.id)).toEqual(expect.arrayContaining([
      "email",
      "workplace",
      "ticketing",
      "ecommerce",
      "sms",
      "voice",
      "contact-center",
    ]));
  });

  it("binds manifest operation declarations to executable handlers", async () => {
    const integration = defineIntegration({
      manifest: {
        id: "email.acme",
        name: "Acme Mail",
        packageName: "@cognidesk/email-acme",
        provider: "acme",
        category: "email",
        directions: ["bidirectional"],
        capabilities: [
          { capability: "receive" },
        ],
        operations: [
          {
            alias: "email.receive",
            capability: "receive",
            providerObject: "emailMessage",
          },
        ],
      },
      operations: {
        "email.receive": async (input: { id: string }) => ({ received: input.id }),
      },
    });

    await expect(integration.run("email.receive", { id: "evt_1" })).resolves.toEqual({ received: "evt_1" });
    expect(integration.bindingReport).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(integration.manifest.metadata?.categoryProfile).toMatchObject({
      id: "email",
      matchedOperations: ["email.receive"],
    });
  });

  it("prioritizes per-call operation context credentials", async () => {
    const manifest = {
      id: "email.acme",
      name: "Acme Mail",
      packageName: "@cognidesk/integration-acme-mail",
      provider: "acme",
      category: "email",
      directions: ["bidirectional" as const],
      capabilities: [
        { capability: "receive" },
      ],
      operations: [
        {
          alias: "email.receive" as const,
          capability: "receive",
          providerObject: "emailMessage",
        },
      ],
    };
    type CredentialHandlers = {
      "email.receive": IntegrationOperationHandler<{ id: string }, { token: string | undefined }, { token: string }>;
    };

    const integration = defineIntegration<typeof manifest, { token: string }, CredentialHandlers>({
      manifest,
      credentials: { token: "default-token" },
      operations: {
        "email.receive": async (_input, context) => ({
          token: context.credentials?.token,
        }),
      },
    });

    await expect(integration.run("email.receive", { id: "evt_1" })).resolves.toEqual({ token: "default-token" });
    await expect(integration.run("email.receive", { id: "evt_2" }, { credentials: { token: "request-token" } })).resolves.toEqual({ token: "request-token" });
  });

  it("keeps instrumentation hook failures out of operation flow", async () => {
    const integration = defineIntegration({
      manifest: {
        id: "email.acme",
        name: "Acme Mail",
        packageName: "@cognidesk/integration-acme-mail",
        provider: "acme",
        category: "email",
        directions: ["bidirectional"],
        capabilities: [
          { capability: "receive" },
        ],
        operations: [
          {
            alias: "email.receive",
            capability: "receive",
            providerObject: "emailMessage",
          },
        ],
      },
      instrumentation: {
        onOperationStart() {
          throw new Error("start hook failed");
        },
        onOperationSuccess() {
          throw new Error("success hook failed");
        },
        onOperationError() {
          throw new Error("error hook failed");
        },
      },
      operations: {
        "email.receive": async (input: { id: string }) => ({ received: input.id }),
      },
    });

    await expect(integration.run("email.receive", { id: "evt_1" })).resolves.toEqual({ received: "evt_1" });
  });

  it("reports missing and extra operation handlers at runtime", () => {
    const manifest = defineIntegrationProviderPackage({
      id: "sms.acme",
      name: "Acme SMS",
      packageName: "@cognidesk/sms-acme",
      provider: "acme",
      category: "sms",
      directions: ["bidirectional"],
      capabilities: [
        { capability: "send" },
      ],
      operations: [
        {
          alias: "sms.message.send",
          capability: "send",
          providerObject: "smsMessage",
        },
      ],
    });

    expect(createOperationBindingReport(manifest, {})).toMatchObject({
      missingHandlerAliases: ["sms.message.send"],
    });
    expect(() => defineIntegration({
      manifest,
      operations: {} as never,
    })).toThrow(IntegrationError);
    expect(() => defineIntegration({
      manifest,
      operations: {
        "sms.message.send": async () => undefined,
        "sms.message.receive": async () => undefined,
      } as never,
    })).toThrow(IntegrationError);
  });

  it("requires provider extension operation aliases to be namespaced", () => {
    expect(() => defineIntegration({
      manifest: {
        id: "email.acme",
        name: "Acme Mail",
        packageName: "@cognidesk/email-acme",
        provider: "acme",
        category: "email",
        directions: ["bidirectional"],
        capabilities: [
          { capability: "send" },
        ],
        operations: [
          {
            alias: "raw.send",
            capability: "send",
            extension: true,
          },
        ],
      },
      operations: {
        "raw.send": async () => undefined,
      } as never,
    })).toThrow(/provider-namespaced/);

    expect(() => defineIntegration({
      manifest: {
        id: "email.acme",
        name: "Acme Mail",
        packageName: "@cognidesk/email-acme",
        provider: "acme",
        category: "email",
        directions: ["bidirectional"],
        capabilities: [
          { capability: "send" },
        ],
        operations: [
          {
            alias: "acme.raw.send",
            capability: "send",
            extension: true,
          },
        ],
      },
      operations: {
        "acme.raw.send": async () => undefined,
      },
    })).not.toThrow();
  });

  it("summarizes readiness and fails closed when required credentials are unavailable", () => {
    const ready = summarizeIntegrationReadiness([
      { providerPackageId: "email.acme", requirementId: "api-key", state: "configured" },
    ], { providerPackageId: "email.acme" });
    expect(ready.ready).toBe(true);

    const notReady = summarizeIntegrationReadiness([
      { providerPackageId: "email.acme", requirementId: "api-key", state: "missing" },
      { providerPackageId: "email.acme", requirementId: "webhook-secret", state: "not-required" },
    ], { providerPackageId: "email.acme" });
    expect(notReady).toMatchObject({
      ready: false,
      blockingRequirementIds: ["api-key"],
      missingRequirementIds: ["api-key"],
    });
    expect(() => assertIntegrationReady(notReady)).toThrow(IntegrationError);

    const missingRequiredStatus = summarizeIntegrationReadiness([
      { providerPackageId: "email.acme", requirementId: "api-key", state: "configured" },
    ], {
      providerPackageId: "email.acme",
      requiredRequirementIds: ["api-key", "webhook-secret"],
    });
    expect(missingRequiredStatus).toMatchObject({
      ready: false,
      blockingRequirementIds: ["webhook-secret"],
      missingRequirementIds: ["webhook-secret"],
    });
  });

  it("fails closed on invalid cursor pagination responses", async () => {
    let calls = 0;
    await expect(collectIntegrationPages({}, () => {
      calls += 1;
      return {
        items: [calls],
        pageInfo: { hasNextPage: true },
      };
    })).rejects.toThrow("hasNextPage=true but nextCursor is undefined");
    expect(calls).toBe(1);

    await expect(collectIntegrationPages({}, () => ({
      items: [],
      pageInfo: { hasNextPage: false },
    }), { maxPages: 0 })).rejects.toThrow("maxPages >= 1");
  });

  it("normalizes provider errors and exposes stable webhook result shapes", () => {
    const normalized = normalizeIntegrationError({ statusCode: 429, message: "slow down" }, {
      providerPackageId: "ecommerce.acme",
      operationAlias: "ecommerce.order.read",
    });
    expect(integrationErrorToJSON(normalized)).toMatchObject({
      code: "provider-rate-limited",
      providerPackageId: "ecommerce.acme",
      operationAlias: "ecommerce.order.read",
    });
    expect(integrationErrorToJSON(new IntegrationError("unknown", "failed", {
      cause: { token: "secret-token" },
    }))).not.toHaveProperty("cause");

    expect(verifiedWebhook({ providerPackageId: "ecommerce.acme", eventId: "evt_1" })).toMatchObject({
      status: "verified",
      eventId: "evt_1",
    });
    expect(rejectedWebhook({ reason: "bad signature" })).toMatchObject({
      status: "rejected",
      reason: "bad signature",
    });
    expect(parsedWebhookEvent({
      providerPackageId: "ecommerce.acme",
      eventType: "order.updated",
      payload: { id: "order_1" },
      receivedAt: "2026-06-21T00:00:00.000Z",
    })).toMatchObject({
      eventType: "order.updated",
      payload: { id: "order_1" },
    });
  });

  it("provides reusable conformance helpers under the testing subpath", () => {
    const manifest = defineIntegrationProviderPackage({
      id: "sms.acme",
      name: "Acme SMS",
      packageName: "@cognidesk/sms-acme",
      provider: "acme",
      category: "sms",
      directions: ["bidirectional"],
      capabilities: [
        { capability: "send" },
      ],
      operations: [
        {
          alias: "sms.message.send",
          capability: "send",
          providerObject: "smsMessage",
        },
      ],
    });

    expect(collectIntegrationConformanceIssues({ manifest, operations: {} })).toMatchObject([
      { code: "missing-operation-handler", alias: "sms.message.send" },
    ]);
    const operations = createOperationHandlerStubs(manifest);
    expect(assertIntegrationConformance({ manifest, operations })).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
    });
  });

  it("declares package metadata and avoids provider SDK imports", () => {
    const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
    const packageJson = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8")) as {
      name: string;
      exports: Record<string, unknown>;
      dependencies?: Record<string, string>;
    };

    expect(packageJson).toMatchObject({
      name: "@cognidesk/integration-kit",
      exports: {
        ".": expect.any(Object),
        "./category-profiles": expect.any(Object),
        "./testing": expect.any(Object),
      },
      dependencies: {
        "@cognidesk/core": "workspace:*",
      },
    });

    const externalImports = new Set<string>();
    for (const file of sourceFiles(join(packageRoot, "src"))) {
      const source = readFileSync(file, "utf8");
      for (const match of source.matchAll(/\bfrom\s+["']([^"']+)["']/g)) {
        const specifier = match[1];
        if (specifier && !specifier.startsWith(".") && !specifier.startsWith("node:")) {
          externalImports.add(specifier);
        }
      }
    }
    expect([...externalImports].sort()).toEqual(["@cognidesk/core"]);
  });
});

function typecheckOnly() {
  defineIntegration({
    manifest: {
      id: "email.types",
      name: "Type Mail",
      packageName: "@cognidesk/email-typemail",
      provider: "typemail",
      category: "email",
      directions: ["bidirectional"],
      capabilities: [
        { capability: "receive" },
      ],
      operations: [
        {
          alias: "email.receive",
          capability: "receive",
          providerObject: "emailMessage",
        },
      ],
    },
    // @ts-expect-error operation declared by the manifest must have a handler
    operations: {},
  });

  defineIntegration({
    manifest: {
      id: "email.types",
      name: "Type Mail",
      packageName: "@cognidesk/email-typemail",
      provider: "typemail",
      category: "email",
      directions: ["bidirectional"],
      capabilities: [
        { capability: "receive" },
      ],
      operations: [
        {
          alias: "email.receive",
          capability: "receive",
          providerObject: "emailMessage",
        },
      ],
    },
    operations: {
      "email.receive": async () => undefined,
      // @ts-expect-error handlers must be declared by the manifest
      "email.send": async () => undefined,
    },
  });
}

void typecheckOnly;

function sourceFiles(root: string): string[] {
  return readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(root, entry.name);
    if (entry.isDirectory()) return sourceFiles(fullPath);
    return entry.name.endsWith(".ts") ? [fullPath] : [];
  });
}
