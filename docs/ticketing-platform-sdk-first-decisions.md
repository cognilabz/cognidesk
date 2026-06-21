# Ticketing Platform SDK-First Decisions

Date: 2026-06-21

This spike covers the CRM/platform-style ticketing providers currently owned under
`packages/integrations/src/ticketing/{hubspot,intercom,salesforce,servicenow,dynamics365,zoho-desk}`.

## Reconciled Foundation State

This branch reconciles the #20 and #21 foundations before provider runtime migration.

- `pnpm-workspace.yaml` includes `integrations/*/*` for nested provider/category packages.
- `packages/integration-kit` provides `@cognidesk/integration-kit` contracts, category profiles, readiness/error/webhook helpers, and test utilities.
- ADR-0085 is the active architecture source: provider runtime packages use `@cognidesk/{category}-{provider}` names and old `@cognidesk/integrations/*` imports are removed rather than bridged.
- GitHub issue #36 is the dedicated CRM/platform ticketing workstream tracker.

Provider packages can now be implemented against the local foundations. HubSpot, Intercom, and Salesforce have SDK-backed packages in this branch; ServiceNow, Dynamics 365, and Zoho Desk have reviewed direct support-slice packages because no suitable server-side runtime SDK was found for those adapter surfaces. The legacy aggregate ticketing subpaths are removed for these six providers once package, catalog, import-smoke, and deletion checks pass.

## Provider Matrix

| Provider | Current local shape | Candidate transport | Decision | Notes |
| --- | --- | --- | --- | --- |
| HubSpot | Generated full API clone plus typed Service Hub helpers | `@hubspot/api-client` | Implemented as `@cognidesk/ticketing-hubspot` SDK-backed package | npm shows `@hubspot/api-client` 13.5.0, modified 2026-04-27, repository `HubSpot/hubspot-api-nodejs`. Replacement package wraps normalized ticket operations and exposes rawClient; generated monolith clone is removed from the aggregate package in this branch. |
| Intercom | Generated REST 2.15 clone plus typed conversation/ticket helpers | `intercom-client` | Implemented as `@cognidesk/ticketing-intercom` SDK-backed package | npm shows `intercom-client` 7.0.3, modified 2026-04-30, repository `intercom/intercom-node`. Package pins 7.0.3 and records a supply-chain guard against compromised 7.0.4. |
| Salesforce | Direct REST helper for Case, comments, feed, SOQL, readiness, event relay parsing | `jsforce` | Implemented as `@cognidesk/ticketing-salesforce` maintained-library package | npm shows `jsforce` 3.10.16, modified 2026-06-12. Package keeps Cognidesk operations bounded to Service Cloud Case support slices; generic SOQL remains SDK-user-owned escape hatch, not a full Salesforce coverage claim. |
| ServiceNow | Single-file direct Table API, Attachment API, Import Set support slice | Direct reviewed support slice | No viable REST runtime SDK found for this adapter | The unscoped `servicenow` npm package is stale, GPLv3, modified 2022-06-26, and not sufficient. `@servicenow/sdk` is maintained but is app/source-code authoring tooling, not a Table API runtime client for external support adapters. Keep direct REST slice with source/version/checksum/allowlist metadata. |
| Dynamics 365 Customer Service | Single-file direct Dataverse incident, annotation, queue/activity support slice | Direct reviewed support slice, official auth support optional | No official maintained Dataverse Node runtime SDK found | Microsoft Graph client is current but Graph is not the Dataverse Customer Service incident API. `dynamics-web-api` is maintained but community-owned. Use Dataverse Web API directly for the reviewed support slice; optionally document `@azure/identity` or `@azure/msal-node` for app-owned token acquisition, not as the provider runtime. |
| Zoho Desk | Single-file direct Desk tickets, comments, threads, replies, org readiness support slice | Direct reviewed support slice | No official maintained Zoho Desk Node runtime SDK found | `zoho-desk-sdk` is community beta, stale, and explicitly not official. Zoho has CRM SDKs and Desk REST/Web SDK docs, but not a suitable server-side Desk SDK package. Keep direct REST slice with source/version/checksum/allowlist metadata. |

## Provider Package Shape

Create or continue these packages against the reconciled nested-workspace and `@cognidesk/integration-kit` foundations:

- `integrations/ticketing/hubspot` published as `@cognidesk/ticketing-hubspot`
- `integrations/ticketing/intercom` published as `@cognidesk/ticketing-intercom`
- `integrations/ticketing/salesforce` published as `@cognidesk/ticketing-salesforce`
- `integrations/ticketing/servicenow` published as `@cognidesk/ticketing-servicenow`
- `integrations/ticketing/dynamics365` published as `@cognidesk/ticketing-dynamics365`
- `integrations/ticketing/zoho-desk` published as `@cognidesk/ticketing-zoho-desk`

For SDK-backed providers:

- keep normalized ticketing operations, readiness, mappers, manifests, webhooks/events, and conformance tests;
- expose the configured provider SDK client as the raw-client escape hatch;
- remove generated full-provider API clones and change coverage away from `full-provider-api`;
- ensure manifest-only imports do not import provider SDK runtime modules or initialize clients.

For direct support-slice providers:

- keep direct HTTP code inside the owning provider package only;
- keep checked provider API coverage metadata, source links, reviewed operation counts, and allowlist-style channel coverage inside the provider manifest;
- keep coverage scoped to `support-workflow-subset` or `provider-api-subset`;
- fail closed when tenant-specific metadata, credentials, or provider-side schemas are unavailable.

## Existing Support Operation Slices

HubSpot normalized slice:

- ticket/contact/company/note create/read/update/search where locally implemented;
- ticket associations and association label reads;
- properties, owners, ticket pipelines, account readiness;
- webhook payload parsing and v3 signature validation.

Intercom normalized slice:

- conversation create/read/update/reply/manage/search;
- ticket create/read/update/search;
- admin identity readiness through `/me`;
- webhook signature validation.

Salesforce normalized slice:

- Case create/read/update/search;
- CaseComment and FeedItem create/list;
- Contact/Account reads and bounded search;
- sObject describe, user info, org readiness;
- SDK-user event relay parsing and verifier hooks.

ServiceNow normalized slice:

- Table API record create/read/update/search;
- incident creation and comment/work-note update patterns;
- Attachment API upload/list;
- Import Set insert/read;
- readiness search.

Dynamics 365 normalized slice:

- Dataverse incident create/read/update/search;
- entity definition and WhoAmI readiness helpers;
- annotation case notes with bounded inline document fields;
- queue/activity reads and AddToQueue.

Zoho Desk normalized slice:

- ticket create/read/update/list;
- ticket comment list/create;
- ticket thread list;
- send ticket reply;
- organization readiness.

## GitHub Issue #36 Alignment

Tracking issue: https://github.com/cognilabz/cognidesk/issues/36

Owned providers from #36:

- HubSpot Service Hub
- Intercom
- Salesforce Service Cloud
- ServiceNow
- Microsoft Dynamics 365 Customer Service
- Zoho Desk

SDK decisions to carry into implementation:

- HubSpot: use `@hubspot/api-client`; remove generated full-provider API clones; keep normalized Service Hub ticket/contact/company/note/association/readiness/webhook operations.
- Intercom: use `intercom-client`; avoid compromised versions; remove generated full-provider API clones; keep conversations, tickets, replies, admin identity, readiness, and signed webhook operations.
- Salesforce: use `jsforce` v3; keep Service Cloud Case-focused operations and SDK-user-owned SOQL escape hatch; do not claim full org coverage.
- ServiceNow: no viable maintained Table API runtime SDK found; keep a reviewed direct Table API/Attachment API/Import Set support slice with source/version/checksum/allowlist metadata.
- Dynamics 365: no official maintained Dataverse Node runtime SDK found; keep reviewed direct Dataverse Web API support slice, with optional app-owned Microsoft auth helpers documented separately.
- Zoho Desk: no official maintained server-side Desk JS SDK found; keep reviewed direct Desk REST support slice with source/version/checksum/allowlist metadata.

## Evidence Links

- GitHub #19: https://github.com/cognilabz/cognidesk/issues/19
- GitHub #20: https://github.com/cognilabz/cognidesk/issues/20
- GitHub #21: https://github.com/cognilabz/cognidesk/issues/21
- GitHub #22: https://github.com/cognilabz/cognidesk/issues/22
- GitHub #26: https://github.com/cognilabz/cognidesk/issues/26
- GitHub #27: https://github.com/cognilabz/cognidesk/issues/27
- GitHub #28: https://github.com/cognilabz/cognidesk/issues/28
- GitHub #36: https://github.com/cognilabz/cognidesk/issues/36
- HubSpot Node client: https://github.com/HubSpot/hubspot-api-nodejs
- Intercom Node client: https://github.com/intercom/intercom-node
- JSforce: https://github.com/jsforce/jsforce
- ServiceNow SDK docs: https://www.servicenow.com/docs/r/application-development/servicenow-sdk/install-servicenow-sdk.html
- ServiceNow SDK API reference: https://servicenow.github.io/sdk/
- Microsoft Dataverse Web API: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview
- DynamicsWebApi candidate: https://github.com/AleksandrRogov/DynamicsWebApi
- Zoho Desk API docs: https://desk.zoho.com/DeskAPIDocument
- Zoho Desk community SDK disclaimer: https://github.com/Trifoia/zoho-desk-sdk
