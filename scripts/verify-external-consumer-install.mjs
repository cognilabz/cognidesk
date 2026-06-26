#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  assertNoWorkspaceProtocolDependencies,
  materializeWorkspaceDependencies,
  packageWorkspaces,
} from "./release-workspace.mjs";

const root = process.cwd();
const args = process.argv.slice(2);
const keepTemp = args.includes("--keep-temp");
const skipInstall = args.includes("--skip-install");
const requestedPackages = readRepeatedOption("--package");
const requestedImports = readRepeatedOption("--import");
const packages = packageWorkspaces(root);
const packageVersions = new Map(packages.map((pkg) => [pkg.name, pkg.packageJson.version]));
const packageByName = new Map(packages.map((pkg) => [pkg.name, pkg]));
const rootInstallPackageNames = requestedPackages.length > 0
  ? requestedPackages.map((name) => {
    const pkg = packageByName.get(name);
    if (!pkg) throw new Error(`Unknown publishable package ${name}.`);
    return pkg.name;
  })
  : packages.map((pkg) => pkg.name);

const defaultImports = [
  "@cognidesk/core",
  "@cognidesk/integration-kit",
  "@cognidesk/voice-websocket",
  "@cognidesk/integration-voice-openai",
  "@cognidesk/integration-voice-openai/manifest",
];
const importSpecifiers = requestedImports.length > 0 ? requestedImports : defaultImports;
for (const specifier of importSpecifiers) {
  const packageName = packageNameFromSpecifier(specifier);
  if (packageByName.has(packageName) && !rootInstallPackageNames.includes(packageName)) {
    rootInstallPackageNames.push(packageName);
  }
}
const tempRoot = await mkdtemp(path.join(tmpdir(), "cognidesk-external-consumer-"));

try {
  const tarballDir = path.join(tempRoot, "tarballs");
  await mkdir(tarballDir, { recursive: true });

  const tarballs = new Map();
  for (const pkg of packages) {
    const tarball = packMaterializedPackage(pkg, tarballDir);
    tarballs.set(pkg.name, tarball);
    const packedPackageJson = readPackedPackageJson(tarball);
    assertNoWorkspaceProtocolDependencies(
      packedPackageJson,
      `${pkg.name}@${pkg.packageJson.version} packed package.json`,
    );
  }

  console.log(`Packed ${tarballs.size} materialized package tarballs.`);

  if (!skipInstall) {
    await verifyConsumerInstall(tarballs, rootInstallPackageNames);
  }
} finally {
  if (keepTemp) {
    console.log(`Kept temp directory: ${tempRoot}`);
  } else {
    await rm(tempRoot, { force: true, recursive: true });
  }
}

function readRepeatedOption(name) {
  const values = [];
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] !== name) continue;
    const value = args[index + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Expected a value after ${name}.`);
    }
    values.push(value);
    index += 1;
  }
  return values;
}

function packageNameFromSpecifier(specifier) {
  if (specifier.startsWith("@")) {
    const [scope, name] = specifier.split("/");
    return `${scope}/${name}`;
  }

  return specifier.split("/")[0];
}

function packMaterializedPackage(pkg, tarballDir) {
  const packageDir = path.join(root, ...pkg.dir.split("/"));
  const originalPackageJson = readFileSync(pkg.packageJsonPath, "utf8");
  const packageJson = materializeWorkspaceDependencies(pkg.packageJson, packageVersions);
  assertNoWorkspaceProtocolDependencies(packageJson, `${pkg.name}@${pkg.packageJson.version} pack manifest`);

  try {
    writeFileSync(pkg.packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
    const result = spawnSync("npm", ["pack", "--json", "--pack-destination", tarballDir], {
      cwd: packageDir,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });

    if (result.status !== 0) {
      process.stderr.write(result.stdout);
      process.stderr.write(result.stderr);
      throw new Error(`npm pack failed for ${pkg.name}`);
    }

    const report = parsePackReport(result.stdout, pkg.name);
    const filename = report.filename;
    if (!filename) {
      throw new Error(`npm pack did not report a filename for ${pkg.name}`);
    }

    const tarball = path.isAbsolute(filename) ? filename : path.join(tarballDir, filename);
    if (!existsSync(tarball)) {
      throw new Error(`npm pack reported missing tarball for ${pkg.name}: ${tarball}`);
    }
    return tarball;
  } finally {
    writeFileSync(pkg.packageJsonPath, originalPackageJson);
  }
}

function parsePackReport(stdout, packageName) {
  try {
    const parsed = JSON.parse(stdout);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed[0];
  } catch (error) {
    throw new Error(`Unable to parse npm pack JSON for ${packageName}: ${error.message}`);
  }

  throw new Error(`npm pack returned no report for ${packageName}`);
}

function readPackedPackageJson(tarball) {
  const result = spawnSync("tar", ["-xOf", tarball, "package/package.json"], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (result.status !== 0) {
    process.stderr.write(result.stderr);
    throw new Error(`Unable to read package/package.json from ${tarball}`);
  }

  return JSON.parse(result.stdout);
}

async function verifyConsumerInstall(tarballs, rootPackageNames) {
  const consumerDir = path.join(tempRoot, "consumer");
  await mkdir(consumerDir, { recursive: true });

  const tarballOverrides = Object.fromEntries(
    [...tarballs.entries()].map(([name, tarball]) => [name, `file:${tarball}`]),
  );
  const tarballDependencies = Object.fromEntries(
    rootPackageNames.map((name) => [name, tarballOverrides[name]]),
  );

  await writeFile(
    path.join(consumerDir, "package.json"),
    `${JSON.stringify({
      name: "cognidesk-external-consumer-smoke",
      version: "0.0.0",
      private: true,
      type: "module",
      dependencies: tarballDependencies,
    }, null, 2)}\n`,
  );
  await writeFile(
    path.join(consumerDir, "pnpm-workspace.yaml"),
    externalConsumerWorkspaceYaml(tarballOverrides),
  );

  run("corepack", ["pnpm", "install", "--ignore-scripts", "--reporter", "append-only"], consumerDir);

  const lockfilePath = path.join(consumerDir, "pnpm-lock.yaml");
  const lockfile = readFileSync(lockfilePath, "utf8");
  if (lockfile.includes("workspace:")) {
    throw new Error("External consumer lockfile still contains workspace protocol ranges.");
  }
  assertInstalledPackageManifests(consumerDir, rootPackageNames);

  const smokeScript = path.join(consumerDir, "smoke-imports.mjs");
  await writeFile(smokeScript, importSmokeSource(importSpecifiers));
  run(process.execPath, [smokeScript], consumerDir);

  console.log(`External consumer install passed for ${tarballs.size} package tarballs.`);
}

function assertInstalledPackageManifests(consumerDir, packageNames) {
  for (const packageName of packageNames) {
    const packageJsonPath = path.join(consumerDir, "node_modules", ...packageName.split("/"), "package.json");
    if (!existsSync(packageJsonPath)) {
      throw new Error(`External consumer install did not link ${packageName}.`);
    }

    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
    assertNoWorkspaceProtocolDependencies(packageJson, `${packageName} installed package.json`);
  }
}

function externalConsumerWorkspaceYaml(overrides) {
  const lines = [
    "packages: []",
    "overrides:",
  ];

  for (const [name, specifier] of Object.entries(overrides).sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`  ${JSON.stringify(name)}: ${JSON.stringify(specifier)}`);
  }

  return `${lines.join("\n")}\n`;
}

function run(command, commandArgs, cwd) {
  const result = spawnSync(command, commandArgs, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (result.status !== 0) {
    process.stdout.write(result.stdout);
    process.stderr.write(result.stderr);
    throw new Error(`${command} ${commandArgs.join(" ")} failed`);
  }
}

function importSmokeSource(specifiers) {
  return `const specifiers = ${JSON.stringify(specifiers, null, 2)};
const failures = [];

for (const specifier of specifiers) {
  try {
    await import(specifier);
  } catch (error) {
    failures.push({
      specifier,
      error: error?.stack ?? error?.message ?? String(error),
    });
  }
}

if (failures.length > 0) {
  console.error(\`Failed to import \${failures.length} external consumer specifier\${failures.length === 1 ? "" : "s"}:\`);
  for (const failure of failures) {
    console.error(\`  \${failure.specifier}\`);
    console.error(failure.error);
  }
  process.exit(1);
}

console.log(\`Imported \${specifiers.length} external consumer specifier\${specifiers.length === 1 ? "" : "s"}.\`);
`;
}
