#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const requirementsPath = join(root, "requirements-docs.txt");
const venvDir = join(root, ".cache", "mkdocs-venv");
const pythonBin = process.platform === "win32"
  ? join(venvDir, "Scripts", "python.exe")
  : join(venvDir, "bin", "python");
const stampPath = join(venvDir, ".requirements.sha256");
const python = process.env.PYTHON ?? "python3";
const args = process.argv.slice(2);

if (!existsSync(requirementsPath)) {
  console.error("requirements-docs.txt is required to run MkDocs.");
  process.exit(1);
}

if (!existsSync(pythonBin)) {
  mkdirSync(dirname(venvDir), { recursive: true });
  run(python, ["-m", "venv", venvDir]);
}

const requirements = readFileSync(requirementsPath);
const digest = createHash("sha256").update(requirements).digest("hex");
const currentDigest = existsSync(stampPath) ? readFileSync(stampPath, "utf8").trim() : "";
if (currentDigest !== digest) {
  run(pythonBin, ["-m", "pip", "install", "--disable-pip-version-check", "-r", requirementsPath]);
  writeFileSync(stampPath, `${digest}\n`);
}

run(pythonBin, ["-m", "mkdocs", ...args]);

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  });
  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }
  if (result.status !== 0) process.exit(result.status ?? 1);
}
