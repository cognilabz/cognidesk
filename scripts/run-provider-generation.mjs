import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const generatorArgs = process.argv.slice(2);

run("scripts/generate-provider-surfaces.mjs", generatorArgs);
run("scripts/harden-generated-client-types.mjs");
run("scripts/split-generated-client-modules.mjs");

function run(script, args = []) {
  const result = spawnSync(process.execPath, [path.join(repoRoot, script), ...args], {
    cwd: repoRoot,
    env: process.env,
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
