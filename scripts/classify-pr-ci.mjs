#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const [baseSha = process.env.PR_BASE_SHA, headSha = process.env.PR_HEAD_SHA ?? "HEAD"] = process.argv.slice(2);

if (!baseSha) {
  throw new Error("Expected a base SHA as the first argument or PR_BASE_SHA.");
}

const changedFiles = git(["diff", "--name-only", baseSha, headSha])
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const fullCheckFiles = [];
const providerCheckFiles = [];

for (const file of changedFiles) {
  if (!isLightweightChange(file)) {
    fullCheckFiles.push(file);
  }

  if (isProviderSurfaceChange(file)) {
    providerCheckFiles.push(file);
  }
}

const result = {
  changedFiles,
  fullCheck: fullCheckFiles.length > 0,
  providerChecks: providerCheckFiles.length > 0,
  fullCheckFiles,
  providerCheckFiles,
};

console.log(JSON.stringify(result, null, 2));

if (process.env.GITHUB_OUTPUT) {
  writeFileSync(
    process.env.GITHUB_OUTPUT,
    [
      `full_check=${result.fullCheck}`,
      `provider_checks=${result.providerChecks}`,
      `changed_count=${changedFiles.length}`,
      `full_check_count=${fullCheckFiles.length}`,
      `provider_check_count=${providerCheckFiles.length}`,
    ].join("\n") + "\n",
    { flag: "a" },
  );
}

function isLightweightChange(file) {
  if (file === ".github/workflows/ci.yml") return true;
  if (file === ".github/workflows/publish.yml") return true;
  if (file === "docs/releasing.md") return true;
  if (file === "scripts/classify-pr-ci.mjs") return true;
  if (file === "scripts/sync-package-readmes.mjs") return true;
  if (file === "scripts/verify-package-readmes.mjs") return true;
  if (file === "scripts/verify-package-smoke.mjs") return true;

  if (isPackageReadme(file)) return true;
  if (isPublishablePackageJson(file)) return isVersionOnlyPackageJson(file);

  return false;
}

function isProviderSurfaceChange(file) {
  if (isPackageReadme(file)) return false;
  if (isPublishablePackageJson(file) && isVersionOnlyPackageJson(file)) return false;

  if (file.startsWith("integrations/")) return true;

  if (/^packages\/(?:integration-catalog|integration-kit|test-harness)\//.test(file)) {
    return true;
  }

  if (/^scripts\/(?:check-integration-package-architecture|verify-provider-package-conformance|generate-integration-catalog|harden-generated-client-types)/.test(file)) {
    return true;
  }

  return file === "package.json"
    || file === "pnpm-lock.yaml"
    || file === "pnpm-workspace.yaml";
}

function isPackageReadme(file) {
  return /^packages\/[^/]+\/README\.md$/.test(file)
    || /^integrations\/[^/]+\/[^/]+\/README\.md$/.test(file);
}

function isPublishablePackageJson(file) {
  return /^packages\/[^/]+\/package\.json$/.test(file)
    || /^integrations\/[^/]+\/[^/]+\/package\.json$/.test(file);
}

function isVersionOnlyPackageJson(file) {
  const before = readJsonAt(baseSha, file);
  const after = readJsonAt(headSha, file);
  if (!before || !after) return false;

  const beforeWithoutVersion = { ...before };
  const afterWithoutVersion = { ...after };
  delete beforeWithoutVersion.version;
  delete afterWithoutVersion.version;

  return JSON.stringify(beforeWithoutVersion) === JSON.stringify(afterWithoutVersion)
    && before.version !== after.version;
}

function readJsonAt(ref, file) {
  const result = spawnSync("git", ["show", `${ref}:${file}`], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (result.status !== 0) return undefined;
  return JSON.parse(result.stdout);
}

function git(args) {
  const result = spawnSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (result.status !== 0) {
    throw new Error(result.stderr || `git ${args.join(" ")} failed`);
  }

  return result.stdout;
}
