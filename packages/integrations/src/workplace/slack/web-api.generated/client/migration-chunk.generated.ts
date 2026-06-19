// Generated endpoint chunk for SlackWebApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  SlackWebApiGeneratedOperationCaller,
  SlackWebApiOperationArgs,
  SlackWebApiOperationInput,
  SlackWebApiPathParamValue,
} from "../../web-api-client.generated.js";
import type { SlackWebApiOperationResponseMap } from "../../web-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const SlackWebApiMigrationOperationKeys = [
  "GET /migration.exchange"
] as const;
export type SlackWebApiMigrationOperationKey = typeof SlackWebApiMigrationOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiMigrationOperationPathParamMap {
  "GET /migration.exchange": {};
}

export interface SlackWebApiMigrationOperationRequestMap {
  "GET /migration.exchange": SlackWebApiOperationInput<"GET /migration.exchange">;
}

export interface SlackWebApiMigrationGeneratedClient {
  MigrationExchange(...args: SlackWebApiOperationArgs<"GET /migration.exchange">): Promise<SlackWebApiOperationResponseMap["GET /migration.exchange"]>;
}

export const SlackWebApiMigrationGeneratedFunctionNames = [
  "MigrationExchange"
] as const satisfies readonly (keyof SlackWebApiMigrationGeneratedClient)[];

export function createSlackWebApiMigrationGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiMigrationGeneratedClient {
  return {
    MigrationExchange: (...args) => callOperation("GET /migration.exchange", ...(args as SlackWebApiOperationArgs<"GET /migration.exchange">)),
  };
}
