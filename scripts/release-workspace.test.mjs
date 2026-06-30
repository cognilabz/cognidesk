import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import {
  allWorkspacePackages,
  assertFixedStablePackageVersion,
  assertNoWorkspaceProtocolDependencies,
  isNpmNotFound,
  materializeWorkspaceDependencies,
  nextAvailablePatchVersion,
  packageWorkspaces,
  platformPackageWorkspaces,
  providerPackageWorkspaces,
  updatePackageVersions,
  updatePackageTrain,
} from "./release-workspace.mjs";

test("discovers publishable packages and nested provider workspaces", async () => {
  await withFixtureWorkspace(async (root) => {
    const allPackages = allWorkspacePackages(root).map((pkg) => pkg.name);
    assert.deepEqual(allPackages, [
      "@cognidesk/core",
      "@cognidesk/integration-email-gmail",
      "@cognidesk/react",
      "@cognidesk/studio",
      "@cognidesk/test-app",
    ]);

    assert.deepEqual(packageWorkspaces(root).map((pkg) => pkg.name), [
      "@cognidesk/core",
      "@cognidesk/integration-email-gmail",
      "@cognidesk/react",
      "@cognidesk/studio",
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

test("rejects provider workspaces without integration-prefixed category package names", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "cognidesk-release-workspace-"));
  try {
    await writePackage(root, "integrations/email/gmail", {
      name: ["@cognidesk", "email-gmail"].join("/"),
      version: "0.4.0",
      publishConfig: { access: "public" },
    });

    assert.throws(
      () => providerPackageWorkspaces(root),
      /integrations\/email\/gmail must be named @cognidesk\/integration-email-gmail/,
    );
  } finally {
    await rm(root, { force: true, recursive: true });
  }
});

test("rejects provider package names that do not match their workspace path", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "cognidesk-release-workspace-"));
  try {
    await writePackage(root, "integrations/email/gmail", {
      name: "@cognidesk/integration-email-outlook",
      version: "0.4.0",
      publishConfig: { access: "public" },
    });

    assert.throws(
      () => packageWorkspaces(root),
      /integrations\/email\/gmail must be named @cognidesk\/integration-email-gmail/,
    );
  } finally {
    await rm(root, { force: true, recursive: true });
  }
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

test("platform source version updates preserve workspace dependency links", async () => {
  await withFixtureWorkspace(async (root) => {
    const platformPackages = platformPackageWorkspaces(root);

    updatePackageVersions(platformPackages, "1.2.4");

    const react = platformPackages.find((pkg) => pkg.name === "@cognidesk/react");

    assert.equal(react.packageJson.version, "1.2.4");
    assert.equal(react.packageJson.dependencies["@cognidesk/core"], "workspace:*");
  });
});

test("publish manifests materialize internal workspace dependency links", () => {
  const materialized = materializeWorkspaceDependencies({
    name: "@cognidesk/react",
    version: "1.2.4",
    dependencies: {
      "@cognidesk/core": "workspace:*",
      "@cognidesk/ui": "workspace:^",
      "streamdown": "^2.5.0",
    },
  }, new Map([
    ["@cognidesk/core", "1.2.4"],
    ["@cognidesk/ui", "1.2.4"],
  ]));

  assert.equal(materialized.dependencies["@cognidesk/core"], "1.2.4");
  assert.equal(materialized.dependencies["@cognidesk/ui"], "^1.2.4");
  assert.equal(materialized.dependencies.streamdown, "^2.5.0");
  assert.doesNotThrow(() => assertNoWorkspaceProtocolDependencies(materialized));
});

test("publish manifest guard rejects workspace protocol dependency links", () => {
  assert.throws(
    () => assertNoWorkspaceProtocolDependencies({
      name: "@cognidesk/integration-email-gmail",
      version: "0.4.0",
      dependencies: {
        "@cognidesk/core": "workspace:*",
      },
      devDependencies: {
        "@cognidesk/test-harness": "workspace:^",
      },
    }),
    /contains workspace protocol dependency ranges: dependencies\.@cognidesk\/core=workspace:\*, devDependencies\.@cognidesk\/test-harness=workspace:\^/,
  );
});

test("stable release version advances to the next unpublished patch", () => {
  const published = new Set(["1.2.3", "1.2.4"]);

  assert.equal(
    nextAvailablePatchVersion("1.2.3", (version) => published.has(version)),
    "1.2.5",
  );
  assert.equal(
    nextAvailablePatchVersion("1.2.6", (version) => published.has(version)),
    "1.2.6",
  );
});

test("npm not-found detection ignores spawn failures without stderr", () => {
  assert.equal(isNpmNotFound({ error: new Error("spawn npm ENOENT") }), false);
  assert.equal(isNpmNotFound({ stderr: undefined }), false);
  assert.equal(isNpmNotFound({ stderr: "npm ERR! code E404" }), true);
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
    await writePackage(root, "apps/studio", {
      name: "@cognidesk/studio",
      version: "0.1.0",
      dependencies: {
        "@cognidesk/core": "workspace:*",
      },
      publishConfig: { access: "public" },
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
