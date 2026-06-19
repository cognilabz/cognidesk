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
export const HubSpotFullApiCentralFXRatesOperationKeys = [
  "settings:multicurrency:2026-03:post-/settings/currencies/2026-03/central-fx-rates/add-currency_/settings/v3/currencies/central-fx-rates/add-currency",
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/information_/settings/v3/currencies/central-fx-rates/information",
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies"
] as const;
export type HubSpotFullApiCentralFXRatesOperationKey = typeof HubSpotFullApiCentralFXRatesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiCentralFXRatesOperationPathParamMap {
  "settings:multicurrency:2026-03:post-/settings/currencies/2026-03/central-fx-rates/add-currency_/settings/v3/currencies/central-fx-rates/add-currency": {};
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/information_/settings/v3/currencies/central-fx-rates/information": {};
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies": {};
}

export interface HubSpotFullApiCentralFXRatesOperationRequestMap {
  "settings:multicurrency:2026-03:post-/settings/currencies/2026-03/central-fx-rates/add-currency_/settings/v3/currencies/central-fx-rates/add-currency": HubSpotFullApiOperationInput<"settings:multicurrency:2026-03:post-/settings/currencies/2026-03/central-fx-rates/add-currency_/settings/v3/currencies/central-fx-rates/add-currency">;
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/information_/settings/v3/currencies/central-fx-rates/information": HubSpotFullApiOperationInput<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/information_/settings/v3/currencies/central-fx-rates/information">;
  "settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies": HubSpotFullApiOperationInput<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies">;
}

export interface HubSpotFullApiCentralFXRatesGeneratedClient {
  MulticurrencyPostSettingsCurrencies202603CentralFxRatesAddCurrencySettingsV3CurrenciesCentralFxRatesAddCurrency(...args: HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:post-/settings/currencies/2026-03/central-fx-rates/add-currency_/settings/v3/currencies/central-fx-rates/add-currency">): Promise<HubSpotFullApiOperationResponseMap["settings:multicurrency:2026-03:post-/settings/currencies/2026-03/central-fx-rates/add-currency_/settings/v3/currencies/central-fx-rates/add-currency"]>;
  MulticurrencyGetSettingsCurrencies202603CentralFxRatesInformationSettingsV3CurrenciesCentralFxRatesInformation(...args: HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/information_/settings/v3/currencies/central-fx-rates/information">): Promise<HubSpotFullApiOperationResponseMap["settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/information_/settings/v3/currencies/central-fx-rates/information"]>;
  MulticurrencyGetSettingsCurrencies202603CentralFxRatesUnsupportedCurrenciesSettingsV3CurrenciesCentralFxRatesUnsupportedCurrencies(...args: HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies">): Promise<HubSpotFullApiOperationResponseMap["settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies"]>;
}

export const HubSpotFullApiCentralFXRatesGeneratedFunctionNames = [
  "MulticurrencyPostSettingsCurrencies202603CentralFxRatesAddCurrencySettingsV3CurrenciesCentralFxRatesAddCurrency",
  "MulticurrencyGetSettingsCurrencies202603CentralFxRatesInformationSettingsV3CurrenciesCentralFxRatesInformation",
  "MulticurrencyGetSettingsCurrencies202603CentralFxRatesUnsupportedCurrenciesSettingsV3CurrenciesCentralFxRatesUnsupportedCurrencies"
] as const satisfies readonly (keyof HubSpotFullApiCentralFXRatesGeneratedClient)[];

export function createHubSpotFullApiCentralFXRatesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiCentralFXRatesGeneratedClient {
  return {
    MulticurrencyPostSettingsCurrencies202603CentralFxRatesAddCurrencySettingsV3CurrenciesCentralFxRatesAddCurrency: (...args) => callOperation("settings:multicurrency:2026-03:post-/settings/currencies/2026-03/central-fx-rates/add-currency_/settings/v3/currencies/central-fx-rates/add-currency", ...(args as HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:post-/settings/currencies/2026-03/central-fx-rates/add-currency_/settings/v3/currencies/central-fx-rates/add-currency">)),
    MulticurrencyGetSettingsCurrencies202603CentralFxRatesInformationSettingsV3CurrenciesCentralFxRatesInformation: (...args) => callOperation("settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/information_/settings/v3/currencies/central-fx-rates/information", ...(args as HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/information_/settings/v3/currencies/central-fx-rates/information">)),
    MulticurrencyGetSettingsCurrencies202603CentralFxRatesUnsupportedCurrenciesSettingsV3CurrenciesCentralFxRatesUnsupportedCurrencies: (...args) => callOperation("settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies", ...(args as HubSpotFullApiOperationArgs<"settings:multicurrency:2026-03:get-/settings/currencies/2026-03/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies">)),
  };
}
