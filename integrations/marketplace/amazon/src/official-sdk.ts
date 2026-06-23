export interface AmazonSpApiOfficialSdk {
  SellersSpApi?: {
    ApiClient: new (basePath?: string) => {
      enableAutoRetrievalAccessToken?: (
        clientId: string,
        clientSecret: string,
        refreshToken: string,
        accessToken?: string | null,
      ) => void;
    };
    SellersApi: new (apiClient: unknown) => {
      getMarketplaceParticipations: () => Promise<unknown>;
    };
  };
  OrdersSpApi?: unknown;
  Orders_v2026SpApi?: unknown;
  NotificationsSpApi?: unknown;
  SolicitationsSpApi?: unknown;
  TokensSpApi?: unknown;
}

export async function loadAmazonSpApiOfficialSdk(): Promise<AmazonSpApiOfficialSdk> {
  return await import("@amazon-sp-api-release/amazon-sp-api-sdk-js") as AmazonSpApiOfficialSdk;
}
