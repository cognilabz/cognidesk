// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiExchangeRatesOperationKeys = [
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates",
  "settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates",
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/current",
  "settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates/update-visibility",
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}",
  "settings:multicurrency:2026-03:patch-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}"
] as const;
export type HubSpotFullApiExchangeRatesOperationKey = typeof HubSpotFullApiExchangeRatesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiExchangeRatesOperationPathParamMap {
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates": {};
  "settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates": {};
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/current": {};
  "settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates/update-visibility": {};
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}": { "exchangeRateId": HubSpotFullApiPathParamValue };
  "settings:multicurrency:2026-03:patch-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}": { "exchangeRateId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiExchangeRatesOperationRequestMap {
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates": HubSpotFullApiOperationInput<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates">;
  "settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates": HubSpotFullApiOperationInput<"settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates">;
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/current": HubSpotFullApiOperationInput<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/current">;
  "settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates/update-visibility": HubSpotFullApiOperationInput<"settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates/update-visibility">;
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}": HubSpotFullApiOperationInput<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}">;
  "settings:multicurrency:2026-03:patch-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}": HubSpotFullApiOperationInput<"settings:multicurrency:2026-03:patch-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}">;
}

export interface HubSpotFullApiExchangeRatesGeneratedClient {
  MulticurrencyGetSettingsCurrencies202603ExchangeRates(...args: HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates">): Promise<HubSpotFullApiOperationResponseMap["settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates"]>;
  MulticurrencyPostSettingsCurrencies202603ExchangeRates(...args: HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates">): Promise<HubSpotFullApiOperationResponseMap["settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates"]>;
  MulticurrencyGetSettingsCurrencies202603ExchangeRatesCurrent(...args: HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/current">): Promise<HubSpotFullApiOperationResponseMap["settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/current"]>;
  MulticurrencyPostSettingsCurrencies202603ExchangeRatesUpdateVisibility(...args: HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates/update-visibility">): Promise<HubSpotFullApiOperationResponseMap["settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates/update-visibility"]>;
  MulticurrencyGetSettingsCurrencies202603ExchangeRatesExchangeRateId(...args: HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}">): Promise<HubSpotFullApiOperationResponseMap["settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}"]>;
  MulticurrencyPatchSettingsCurrencies202603ExchangeRatesExchangeRateId(...args: HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:patch-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}">): Promise<HubSpotFullApiOperationResponseMap["settings:multicurrency:2026-03:patch-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}"]>;
}

export const HubSpotFullApiExchangeRatesGeneratedFunctionNames = [
  "MulticurrencyGetSettingsCurrencies202603ExchangeRates",
  "MulticurrencyPostSettingsCurrencies202603ExchangeRates",
  "MulticurrencyGetSettingsCurrencies202603ExchangeRatesCurrent",
  "MulticurrencyPostSettingsCurrencies202603ExchangeRatesUpdateVisibility",
  "MulticurrencyGetSettingsCurrencies202603ExchangeRatesExchangeRateId",
  "MulticurrencyPatchSettingsCurrencies202603ExchangeRatesExchangeRateId"
] as const satisfies readonly (keyof HubSpotFullApiExchangeRatesGeneratedClient)[];

export function createHubSpotFullApiExchangeRatesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiExchangeRatesGeneratedClient {
  return {
    MulticurrencyGetSettingsCurrencies202603ExchangeRates: (...args) => callOperation("settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates", ...(args as HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates">)),
    MulticurrencyPostSettingsCurrencies202603ExchangeRates: (...args) => callOperation("settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates", ...(args as HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates">)),
    MulticurrencyGetSettingsCurrencies202603ExchangeRatesCurrent: (...args) => callOperation("settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/current", ...(args as HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/current">)),
    MulticurrencyPostSettingsCurrencies202603ExchangeRatesUpdateVisibility: (...args) => callOperation("settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates/update-visibility", ...(args as HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:post-/settings/currencies/2026-03/exchange-rates/update-visibility">)),
    MulticurrencyGetSettingsCurrencies202603ExchangeRatesExchangeRateId: (...args) => callOperation("settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}", ...(args as HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}">)),
    MulticurrencyPatchSettingsCurrencies202603ExchangeRatesExchangeRateId: (...args) => callOperation("settings:multicurrency:2026-03:patch-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}", ...(args as HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:patch-/settings/currencies/2026-03/exchange-rates/{exchangeRateId}">)),
  };
}
