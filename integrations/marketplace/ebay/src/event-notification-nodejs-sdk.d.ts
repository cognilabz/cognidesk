declare module "event-notification-nodejs-sdk" {
  export interface EbayEventNotificationEndpointConfig {
    endpoint: string;
    verificationToken: string;
  }

  export function validateEndpoint(
    challengeCode: string,
    config: EbayEventNotificationEndpointConfig,
  ): string | undefined;

  export function process(
    message: unknown,
    signature: string,
    config: unknown,
    environment: "PRODUCTION" | "SANDBOX" | string,
  ): Promise<number>;
}
