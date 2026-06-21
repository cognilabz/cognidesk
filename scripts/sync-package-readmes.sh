#!/usr/bin/env bash
set -euo pipefail

source_readme="${1:-README.md}"

node "$(dirname "$0")/sync-package-readmes.mjs" "${source_readme}"
