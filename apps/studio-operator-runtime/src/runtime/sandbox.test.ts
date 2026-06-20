import { access, mkdir, mkdtemp, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const validSessionId = "11111111-1111-4111-8111-111111111111";

vi.mock("@cognidesk/studio-operator-skills", () => ({
  getStudioOperatorSkillPack: () => ({
    defaultSystemPrompt: "test prompt",
    skills: [],
  }),
}));

describe("operator runtime sandbox paths", () => {
  let root: string;

  beforeEach(async () => {
    vi.resetModules();
    root = await mkdtemp(join(tmpdir(), "cognidesk-sandbox-test-"));
    vi.stubEnv("STUDIO_OPERATOR_SANDBOX_ROOT", root);
    vi.stubEnv("STUDIO_SOURCE_REPO_PATH", "");
    vi.stubEnv("STUDIO_SOURCE_REPO_URL", "");
  });

  afterEach(async () => {
    vi.unstubAllEnvs();
    await rm(root, { recursive: true, force: true });
  });

  it("creates valid UUID session sandboxes under the sandbox root", async () => {
    const { prepareSandbox, sandboxPathForSession } = await import("./sandbox.js");

    const sandboxPath = await prepareSandbox(validSessionId);

    expect(sandboxPath).toBe(join(root, validSessionId));
    expect(sandboxPathForSession(validSessionId)).toBe(join(root, validSessionId));
    await expect(access(join(root, validSessionId, "AGENTS.md"))).resolves.toBeUndefined();
  });

  it("rejects traversal session ids before removing a directory", async () => {
    const outside = join(root, "..", "outside");
    await rm(outside, { recursive: true, force: true });
    await mkdir(outside);
    const { prepareSandbox, sandboxPathForSession } = await import("./sandbox.js");

    expect(() => sandboxPathForSession("../outside")).toThrow("Invalid operator session id");
    await expect(prepareSandbox("../outside")).rejects.toThrow("Invalid operator session id");
    await expect(access(outside)).resolves.toBeUndefined();
    await rm(outside, { recursive: true, force: true });
  });
});
