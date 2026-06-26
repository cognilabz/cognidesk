import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  createForumCommunityIntegration,
  forumCommunityProviderManifest as forumCommunityProviderManifestFromRoot,
  type ForumCommunityClient,
} from "../src/index.js";
import { forumCommunityProviderManifest } from "../src/manifest.js";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
type OperationRunner = (alias: string, input: unknown) => Promise<unknown>;

function operationAliases(manifest: { operations?: readonly { alias: string }[] }) {
  return manifest.operations?.map((operation) => operation.alias) ?? [];
}

describe("@cognidesk/integration-community-forum", () => {
  it("binds forum operations to executable handlers", async () => {
    const client: ForumCommunityClient = {
      async createTopic() {
        return { id: 1 };
      },
      async createReply() {
        return { id: 2 };
      },
      async getTopic(topicId) {
        return { id: topicId };
      },
      async getPost(postId) {
        return { id: postId };
      },
      async search(input) {
        return { topics: [{ id: 1 }], query: input.query };
      },
      async latest() {
        return { topics: [] };
      },
      async getCurrentUser() {
        return { id: 1, username: "system" };
      },
    };
    const integration = createForumCommunityIntegration({ client });

    expect(assertIntegrationConformance(integration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
    });
    await expect((integration.run as unknown as OperationRunner)("forum.search", { query: "reset password" }))
      .resolves.toMatchObject({ topics: [{ id: 1 }] });
  });

  it("fails closed when no host provider client is injected", async () => {
    const integration = createForumCommunityIntegration();

    await expect((integration.run as unknown as OperationRunner)("forum.topic.read", { topicId: 55 }))
      .rejects.toThrow("Forum provider client is not configured.");
  });

  it("exports the same operation aliases from root and manifest subpath", () => {
    expect(operationAliases(forumCommunityProviderManifestFromRoot)).toEqual(operationAliases(forumCommunityProviderManifest));
    expect(operationAliases(forumCommunityProviderManifestFromRoot)).toEqual([
      "forum.topic.create",
      "forum.reply.create",
      "forum.topic.read",
      "forum.post.read",
      "forum.search",
      "forum.webhook.parse",
    ]);
  });

  it("keeps the manifest subpath runtime-light and avoids a fake SDK dependency", async () => {
    const source = await readFile(resolve(packageRoot, "src/manifest.ts"), "utf8");
    const runtimeSource = await readFile(resolve(packageRoot, "src/index.ts"), "utf8");
    const packageJson = JSON.parse(await readFile(resolve(packageRoot, "package.json"), "utf8")) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
      cognidesk?: {
        providerRestAdapterException?: {
          result?: string;
          defaultClientPolicy?: string;
          typedClientOverride?: string;
          rejectedSdkPackages?: { packageName?: string; ecosystem?: string }[];
        };
      };
    };

    expect(forumCommunityProviderManifest.packageName).toBe("@cognidesk/integration-community-forum");
    expect(source).not.toContain("node:crypto");
    expect(source).not.toContain("./index");
    expect(runtimeSource).toContain("providerJsonRequest");
    expect(runtimeSource).toContain("Api-Key");
    expect(runtimeSource).toContain("posts.json");
    expect(runtimeSource).not.toContain("URLSearchParams");
    expect(Object.keys(packageJson.dependencies ?? {}).sort()).toEqual([
      "@cognidesk/core",
      "@cognidesk/integration-kit",
    ]);
    expect(packageJson.cognidesk?.providerRestAdapterException).toMatchObject({
      result: "no-applicable-official-js-ts-sdk",
      defaultClientPolicy: "built-in-discourse-rest-adapter-when-configured",
      typedClientOverride: "ForumCommunityProviderClient",
      rejectedSdkPackages: expect.arrayContaining([
        expect.objectContaining({
          packageName: "discourse_api",
          ecosystem: "ruby",
        }),
        expect.objectContaining({
          packageName: "discourse-api-sdk",
          ecosystem: "npm",
        }),
        expect.objectContaining({
          packageName: "@discourse/mcp",
          ecosystem: "npm",
        }),
        expect.objectContaining({
          packageName: "discourse-sdk",
          ecosystem: "npm",
        }),
      ]),
    });
    expect(packageJson.dependencies).not.toHaveProperty("discourse2");
    expect(packageJson.dependencies).not.toHaveProperty("discourse_api");
    expect(packageJson.dependencies).not.toHaveProperty("discourse-api-sdk");
    expect(packageJson.dependencies).not.toHaveProperty("@discourse/mcp");
    expect(packageJson.dependencies).not.toHaveProperty("discourse-sdk");
    expect(packageJson.devDependencies).not.toHaveProperty("discourse2");
    expect(packageJson.devDependencies).not.toHaveProperty("discourse_api");
    expect(packageJson.devDependencies).not.toHaveProperty("discourse-api-sdk");
    expect(packageJson.devDependencies).not.toHaveProperty("@discourse/mcp");
    expect(packageJson.devDependencies).not.toHaveProperty("discourse-sdk");
  });
});
