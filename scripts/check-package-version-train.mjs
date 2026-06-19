#!/usr/bin/env node
import {
  assertFixedStablePackageVersion,
  packageWorkspaces,
} from "./release-workspace.mjs";

const packages = packageWorkspaces(process.cwd());
const version = assertFixedStablePackageVersion(packages);

console.log("Verified publishable package version train:");
console.log(`  version: ${version}`);
console.log(`  publishable packages: ${packages.length}`);
