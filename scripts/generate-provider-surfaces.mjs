import { readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const scriptsDir = path.join(repoRoot, "scripts");
const args = process.argv.slice(2);
const listOnly = args.includes("--list");
const onlyArg = args.find((arg) => arg.startsWith("--only="));
const only = onlyArg
  ? new Set(onlyArg.slice("--only=".length).split(",").map((value) => value.trim()).filter(Boolean))
  : undefined;
const excludedGenerators = new Set([
  "generate-provider-surfaces.mjs",
  "generate-provider-integration-catalog.mjs",
  "generate-zendesk-full-api.mjs",
]);

const scripts = (await readdir(scriptsDir))
  .filter((file) => /^generate-.*\.mjs$/.test(file))
  .filter((file) => !excludedGenerators.has(file))
  .filter((file) => !only || only.has(file.replace(/\.mjs$/, "")) || only.has(file))
  .sort((a, b) => a.localeCompare(b));

if (scripts.length === 0) {
  throw new Error(only ? "No provider generator scripts matched --only." : "No provider generator scripts found.");
}

if (listOnly) {
  for (const script of scripts) console.log(script);
  process.exit(0);
}

for (const script of scripts) {
  const scriptPath = path.join(scriptsDir, script);
  console.log(`\n[providers:generate] ${script}`);
  const result = spawnSync(process.execPath, [scriptPath], {
    cwd: repoRoot,
    stdio: "inherit",
    env: process.env,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
