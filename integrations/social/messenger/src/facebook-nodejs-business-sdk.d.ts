declare module "facebook-nodejs-business-sdk" {
  export class FacebookAdsApi {
    static init(accessToken: string, locale?: string, crashLog?: boolean): FacebookAdsApi;
    call(
      method: "GET" | "POST" | "PUT" | "DELETE" | string,
      path: string | readonly string[],
      params?: Record<string, unknown>,
      files?: Record<string, unknown>,
      useMultipartFormData?: boolean,
      urlOverride?: string,
    ): Promise<unknown>;
  }
}
