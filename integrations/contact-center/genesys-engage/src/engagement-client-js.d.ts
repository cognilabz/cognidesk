declare module "engagement-client-js" {
  export class ApiClient {
    static instance: ApiClient;
    basePath: string;
  }

  export class CallbacksApi {
    constructor(apiClient?: ApiClient);
    bookCallbackExternal(xApiKey: string, body: unknown): Promise<Record<string, unknown>>;
  }

  const sdk: {
    ApiClient: typeof ApiClient;
    CallbacksApi: typeof CallbacksApi;
  };

  export default sdk;
}
