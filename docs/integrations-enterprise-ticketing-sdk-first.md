# Enterprise Ticketing SDK-First Decisions

Date: 2026-06-21

Scope:

- `integrations/ticketing/oracle-service`
- `integrations/ticketing/pega-customer-service`
- `integrations/ticketing/sap-service-cloud`

This audit began blocked by:

- #20, nested `integrations/*/*` workspaces and independent provider releases.
- #21, `@cognidesk/integration-kit` executable operation contracts and testing utilities.
- #22, metadata-only catalog shape and manifest-only import guardrails.

Issues `#20`, `#21`, and `#22` are now reconciled in this worktree. The new provider packages exist under `integrations/ticketing/*`, keep `/manifest` metadata-only exports, and are preferred by the generated integration catalog over same-ID monolith references. The legacy `@cognidesk/integrations` runtime loader no longer registers the migrated Oracle, Pega, or SAP IDs.

## Decision Matrix

| Provider | Target package | SDK decision | Final package strategy | Current support-operation slice |
| --- | --- | --- | --- | --- |
| Oracle Service | `@cognidesk/integration-ticketing-oracle-service` | No suitable official JavaScript SDK found for Fusion Service `serviceRequests`. Oracle's maintained `oci-fusionapps` package is for OCI Fusion Apps Service resource management, not the Fusion Service `crmRestApi/resources/.../serviceRequests` API used here. | Keep a direct REST support slice inside the provider package. No generated full-provider clone. Record source docs, Oracle REST API version, allowlisted operations, and checksum metadata for the reviewed slice. | `serviceRequests` create, read by `SrNumber`, patch, collection search, child message create, readiness search. |
| Pega Customer Service | `@cognidesk/integration-ticketing-pega-customer-service` | No suitable maintained server-side JavaScript SDK found for Pega Customer Service/DX API cases. Pega's current JavaScript packages are Constellation UI/client-orchestration assets such as `@pega/constellationjs`, not a support case SDK. | Keep a direct DX API support slice inside the provider package. No generated full-provider clone. Record Pega DX API doc URLs, API base path, allowlisted operations, and checksum metadata for the reviewed slice. | Case create/read/update/search, case-type list, assignment action submit, readiness through case types. |
| SAP Service Cloud | `@cognidesk/integration-ticketing-sap-service-cloud` | Viable maintained SDK-backed strategy exists through SAP Cloud SDK for JavaScript. SAP Cloud SDK supports OData v2/v4, typed OData client generation from EDMX, request execution, destinations/auth, CSRF support, and a maintained HTTP client. | Keep the current allowlisted OData slice for #37 until a redistributable and pinned Service Cloud EDMX/source artifact is available. Record the viable SAP Cloud SDK packages in manifest metadata and do not claim the package is SDK-backed yet. | `ServiceRequestCollection` create, read by `ObjectID`, patch, collection query, CSRF token preflight, readiness query. |

## Candidate Package Metadata

Checked with `npm view` on 2026-06-21.

| Package | Version | Decision | Integrity |
| --- | --- | --- | --- |
| `oci-fusionapps` | `2.135.0` | Rejected for this adapter. Official Oracle-maintained package, but it manages OCI Fusion Apps Service resources and requires OCI credentials; it does not cover Fusion Service service request REST operations. | `sha512-L0mF2w4tYeVBM1DXEDVuufuKysTQqhvS65GCN7meubjWzxUNMRDO9P/EM1ouSguyjJio7NeCr4hQWSP5AEe46Q==` |
| `@pega/constellationjs` | `25.1.3` | Rejected for this adapter. Pega-maintained package, but it delivers ConstellationJS engine files for UI/client orchestration, not a server-side Customer Service case SDK. | `sha512-dPPo+e/ADjMwabHfQ5s9DX2P8IeJiSg6NPXFRLFkFZm1OFbkDevf3YoSpf5/XzWD3IqcBo0dx8NzV7tLjp4EJw==` |
| `@sap-cloud-sdk/odata-v2` | `4.7.0` | Viable runtime dependency for a SAP Cloud for Customer OData v2 provider package. | `sha512-/t1ncLEnm3yTzHRkIgpNcUMGHk7jvQ1nSHrb7YgvgU+/Q2P5Au8llPEH/zudXZ8Bd3k9Qdrfdq/hl+w+YWkBIg==` |
| `@sap-cloud-sdk/generator` | `4.7.0` | Viable dev-only generator if a checked Service Cloud EDMX artifact can be committed and regenerated deterministically. | `sha512-aW17rUVIZl5RA3WoTTErBwwWCX5A3AresM13Vs7fKEc3Z52919KTlH+7Cpf/9qJrNDQUZU6RzCw+bHd5gs8wHA==` |
| `@sap-cloud-sdk/http-client` | `4.7.0` | Viable maintained transport fallback for SAP Service Cloud if generated OData client publication is blocked by tenant-specific metadata or licensing. | `sha512-7+S6ru7SrnyKA2MGimX09oix0EVwmPGcCAz0TRwFZVnglU+VTRmZ8QdcwcVTR26E9YhkR4OVl6EK7jb2Z0OxfQ==` |

## Source And Checksum Policy

For direct support slices:

- Keep the allowlist in package metadata, not only prose: operation id, method, path template, provider API version, source URL, checked date, and a local test id.
- Pin official docs/source artifacts by URL plus a local checksum when a machine-readable or copied artifact is committed.
- Do not claim `full-provider-api`; use `support-workflow-subset` or `provider-api-subset`.
- Do not expose a generic full raw HTTP operation helper as evidence of endpoint coverage.
- Add tests proving manifest coverage, allowlisted request shape, error normalization, readiness, and credential-blocked conformance.

For SAP generated slices:

- Commit the exact EDMX/source artifact only if licensing allows it.
- Store `sha256`, source URL or tenant export provenance, generated-at date, SAP Cloud SDK generator version, and generated operation/entity allowlist.
- Regeneration must be deterministic and package-local. Do not use root full-provider generation.
- If the source cannot be redistributed, keep generated code out of the package and use SAP Cloud SDK HTTP/OData primitives for the same allowlisted operations.

For all three final provider packages:

- Export a manifest-only entry that imports no provider SDK/client runtime.
- Export runtime client construction separately.
- Bind manifest operation aliases to executable handlers through `@cognidesk/integration-kit`.
- Use `@cognidesk/integration-kit/testing` conformance for future shared provider-package suites.

## GitHub Issue #37 Alignment

Issue #37 is the migration tracker for this slice. This branch resolves it by moving the three enterprise ticketing providers into split packages, preserving their request-shape and conformance tests, and removing the matching monolith runtime entries without compatibility re-exports.

## Acceptance Criteria

- Each package installs only shared Cognidesk packages unless a provider SDK is actually adopted.
- Oracle and Pega packages include explicit support-slice allowlists with source URL, provider API version/base path, checked date, and checksum/source policy.
- SAP package records the viable SAP Cloud SDK packages and the blocking condition for adoption: a redistributable, pinned Service Cloud EDMX/source artifact or an equivalent deterministic SDK-backed source.
- Manifest declarations are bound to executable operation handlers through `@cognidesk/integration-kit`.
- Package tests cover manifest-only import, package import, request shape, credential-blocked readiness, live-check injection, and provider conformance.
- Old monolith paths are removed after replacements land, with no compatibility re-export.
