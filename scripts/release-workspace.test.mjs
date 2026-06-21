import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import {
  allWorkspacePackages,
  assertFixedStablePackageVersion,
  packageWorkspaces,
  platformPackageWorkspaces,
  providerPackageWorkspaces,
  updatePackageTrain,
} from "./release-workspace.mjs";

test("discovers publishable packages and nested provider workspaces", async () => {
  await withFixtureWorkspace(async (root) => {
    const allPackages = allWorkspacePackages(root).map((pkg) => pkg.name);
    assert.deepEqual(allPackages, [
      "@cognidesk/core",
      "@cognidesk/integration-email-gmail",
      "@cognidesk/react",
      "@cognidesk/test-app",
    ]);

    assert.deepEqual(packageWorkspaces(root).map((pkg) => pkg.name), [
      "@cognidesk/core",
      "@cognidesk/integration-email-gmail",
      "@cognidesk/react",
    ]);
    assert.deepEqual(platformPackageWorkspaces(root).map((pkg) => pkg.name), [
      "@cognidesk/core",
      "@cognidesk/react",
    ]);
    assert.deepEqual(providerPackageWorkspaces(root).map((pkg) => pkg.name), [
      "@cognidesk/integration-email-gmail",
    ]);
  });
});

test("platform version train ignores independent provider versions", async () => {
  await withFixtureWorkspace(async (root) => {
    const platformPackages = platformPackageWorkspaces(root);
    const publishablePackages = packageWorkspaces(root);

    assert.equal(
      assertFixedStablePackageVersion(platformPackages, "platform SDK packages"),
      "1.2.3",
    );
    assert.throws(
      () => assertFixedStablePackageVersion(publishablePackages, "publishable packages"),
      /publishable packages must share one version/,
    );
  });
});

test("platform release train updates only platform package dependency links", async () => {
  await withFixtureWorkspace(async (root) => {
    const platformPackages = platformPackageWorkspaces(root);
    const providerPackages = providerPackageWorkspaces(root);

    updatePackageTrain(platformPackages, "1.2.4");

    const react = platformPackages.find((pkg) => pkg.name === "@cognidesk/react");
    const provider = providerPackages.find((pkg) => pkg.name === "@cognidesk/integration-email-gmail");

    assert.equal(react.packageJson.version, "1.2.4");
    assert.equal(react.packageJson.dependencies["@cognidesk/core"], "1.2.4");
    assert.equal(provider.packageJson.version, "0.4.0");
    assert.equal(provider.packageJson.dependencies["@cognidesk/core"], "workspace:*");
  });
});

async function withFixtureWorkspace(callback) {
  const root = await mkdtemp(path.join(tmpdir(), "cognidesk-release-workspace-"));
  try {
    await writePackage(root, "packages/core", {
      name: "@cognidesk/core",
      version: "1.2.3",
      publishConfig: { access: "public" },
    });
    await writePackage(root, "packages/react", {
      name: "@cognidesk/react",
      version: "1.2.3",
      dependencies: {
        "@cognidesk/core": "workspace:*",
      },
      publishConfig: { access: "public" },
    });
    await writePackage(root, "integrations/email/gmail", {
      name: "@cognidesk/integration-email-gmail",
      version: "0.4.0",
      dependencies: {
        "@cognidesk/core": "workspace:*",
      },
      publishConfig: { access: "public" },
    });
    await writePackage(root, "apps/test-app", {
      name: "@cognidesk/test-app",
      version: "0.0.0",
      private: true,
    });

    await callback(root);
  } finally {
    await rm(root, { force: true, recursive: true });
  }
}

async function writePackage(root, dir, packageJson) {
  const packageDir = path.join(root, ...dir.split("/"));
  await mkdir(packageDir, { recursive: true });
  await writeFile(
    path.join(packageDir, "package.json"),
    `${JSON.stringify(packageJson, null, 2)}\n`,
  );
}
