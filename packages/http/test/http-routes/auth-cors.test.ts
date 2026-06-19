import { describe, expect, it, vi } from "vitest";
import { createCognideskHttpHandler } from "../../src/index.js";
import { FakeRuntime } from "../fixtures.js";

describe("HTTP authorization and CORS routes", () => {
  it("authorizes requests before reading bodies or calling runtime methods", async () => {
      const runtime = new FakeRuntime();
      const createConversation = vi.spyOn(runtime, "createConversation");
      const authorizedPaths: string[] = [];
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
        authorize({ path, request }) {
          authorizedPaths.push(`${request.method} ${path}`);
          return false;
        },
      });
      const request = new Request("http://localhost/conversations", {
        method: "POST",
        body: "{not json",
      });

      const response = await handler.handle(request);

      expect(response.status).toBe(401);
      expect(await response.json()).toEqual({ error: "Unauthorized" });
      expect(await request.text()).toBe("{not json");
      expect(authorizedPaths).toEqual(["POST /conversations"]);
      expect(createConversation).not.toHaveBeenCalled();
    });

    it("supports custom authorization responses with configured CORS headers", async () => {
      const runtime = new FakeRuntime();
      const listEvents = vi.spyOn(runtime, "listEvents");
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
        cors: {
          origins: ["https://app.example.com"],
          credentials: true,
          exposedHeaders: ["www-authenticate"],
        },
        async authorize() {
          return new Response("Forbidden", {
            status: 403,
            headers: {
              "www-authenticate": "Bearer",
            },
          });
        },
      });

      const response = await handler.handle(new Request("http://localhost/conversations/conversation_1/events", {
        headers: {
          origin: "https://app.example.com",
        },
      }));

      expect(response.status).toBe(403);
      expect(await response.text()).toBe("Forbidden");
      expect(response.headers.get("www-authenticate")).toBe("Bearer");
      expect(response.headers.get("access-control-allow-origin")).toBe("https://app.example.com");
      expect(response.headers.get("access-control-allow-credentials")).toBe("true");
      expect(response.headers.get("access-control-expose-headers")).toBe("www-authenticate");
      expect(response.headers.get("vary")).toBe("Origin");
      expect(listEvents).not.toHaveBeenCalled();
    });

    it("supports configured CORS origins and preflight requests without wildcarding", async () => {
      const runtime = new FakeRuntime();
      const createConversation = vi.spyOn(runtime, "createConversation");
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
        cors: {
          origins: ["https://app.example.com"],
          methods: ["GET", "POST", "OPTIONS"],
          allowedHeaders: ["content-type", "authorization", "x-cognidesk-client"],
          credentials: true,
          maxAgeSeconds: 300,
        },
      });

      const preflight = await handler.handle(new Request("http://localhost/conversations", {
        method: "OPTIONS",
        headers: {
          origin: "https://app.example.com",
          "access-control-request-method": "POST",
        },
      }));

      expect(preflight.status).toBe(204);
      expect(preflight.headers.get("access-control-allow-origin")).toBe("https://app.example.com");
      expect(preflight.headers.get("access-control-allow-methods")).toBe("GET,POST,OPTIONS");
      expect(preflight.headers.get("access-control-allow-headers")).toBe("content-type,authorization,x-cognidesk-client");
      expect(preflight.headers.get("access-control-allow-credentials")).toBe("true");
      expect(preflight.headers.get("access-control-max-age")).toBe("300");
      expect(preflight.headers.get("vary")).toBe("Origin");
      expect(createConversation).not.toHaveBeenCalled();

      const allowed = await handler.handle(new Request("http://localhost/conversations", {
        method: "POST",
        headers: {
          origin: "https://app.example.com",
        },
        body: "{}",
      }));
      expect(allowed.status).toBe(201);
      expect(allowed.headers.get("access-control-allow-origin")).toBe("https://app.example.com");

      const disallowed = await handler.handle(new Request("http://localhost/conversations", {
        method: "POST",
        headers: {
          origin: "https://other.example.com",
        },
        body: "{}",
      }));
      expect(disallowed.status).toBe(201);
      expect(disallowed.headers.get("access-control-allow-origin")).toBeNull();
    });
});
