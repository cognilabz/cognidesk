import type { RcsBusinessMessagingSdkClient } from "./contracts.js";

declare module "@google/rcsbusinessmessaging/src/rcsbusinessmessaging/v1.js" {
  export const rcsbusinessmessaging_v1: {
    Rcsbusinessmessaging: new (
      options?: Record<string, unknown>,
      google?: unknown,
    ) => RcsBusinessMessagingSdkClient;
  };
}
