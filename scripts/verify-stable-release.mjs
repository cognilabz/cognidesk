#!/usr/bin/env node
import {
  assertFixedStablePackageVersion,
  platformPackageWorkspaces,
  providerPackageWorkspaces,
} from "./release-workspace.mjs";

const args = process.argv.slice(2);
const tag = readOption("--tag")
  ?? (process.env.GITHUB_REF_TYPE === "tag" ? process.env.GITHUB_REF_NAME : undefined);

function readOption(name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  return args[index + 1];
}

const root = process.cwd();
const packages = platformPackageWorkspaces(root);
const providers = providerPackageWorkspaces(root);
const version = assertFixedStablePackageVersion(packages, "platform SDK packages");

if (tag) {
  const tagVersion = tag.startsWith("v") ? tag.slice(1) : tag;
  if (tagVersion !== version) {
    throw new Error(`Release tag ${tag} does not match package version ${version}.`);
  }
}

console.log("Verified SDK stable release:");
console.log(`  version: ${version}`);
console.log(`  platform SDK packages: ${packages.length}`);
console.log(`  independent provider packages: ${providers.length}`);
