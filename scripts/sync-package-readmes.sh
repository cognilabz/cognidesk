#!/usr/bin/env bash
set -euo pipefail

source_readme="${1:-README.md}"

if [[ ! -f "${source_readme}" ]]; then
  echo "README source not found: ${source_readme}" >&2
  exit 1
fi

for package_json in packages/*/package.json; do
  package_dir="$(dirname "${package_json}")"
  package_name="$(node -p "require('./${package_json}').name")"
  cp "${source_readme}" "${package_dir}/README.md"
  echo "Synced ${source_readme} -> ${package_dir}/README.md (${package_name})"
done