#!/usr/bin/env node
import {
  assertFixedStablePackageVersion,
  platformPackageWorkspaces,
  providerPackageWorkspaces,
} from "./release-workspace.mjs";

const root = process.cwd();
const packages = platformPackageWorkspaces(root);
const providers = providerPackageWorkspaces(root);
const version = assertFixedStablePackageVersion(packages, "platform SDK packages");

console.log("Verified platform package version train:");
console.log(`  version: ${version}`);
console.log(`  platform SDK packages: ${packages.length}`);
console.log(`  independent provider packages: ${providers.length}`);
