import type { TwilioSmsLiveCheckOptions } from "./contracts.js";
import { createTwilioSmsClient } from "./client.js";

export function createTwilioSmsLiveChecks(options: TwilioSmsLiveCheckOptions) {
  return [
    {
      id: "account",
      description: "Twilio account credentials can access the Messaging REST API account resource.",
      requiredCredentialIds: ["twilio-account"],
      async run(context: { signal?: AbortSignal }) {
        const client = options.client ?? createTwilioSmsClient(options);
        const account = await client.fetchAccount();
        if (context.signal?.aborted) throw new Error("Twilio SMS live account check aborted.");
        return {
          details: {
            sid: typeof account.sid === "string" ? account.sid : undefined,
            status: typeof account.status === "string" ? account.status : undefined,
          },
        };
      },
    },
    {
      id: "sender",
      description: "Twilio SMS sender phone number is reachable and reports SMS capability.",
      requiredCredentialIds: ["twilio-account", "twilio-sms-sender"],
      async run(context: { signal?: AbortSignal }) {
        if (!options.fromNumber) {
          return { details: { sender: "messaging-service-or-unchecked" } };
        }
        const client = options.client ?? createTwilioSmsClient(options);
        const numbers = await client.listIncomingPhoneNumbers({ phoneNumber: options.fromNumber });
        if (context.signal?.aborted) throw new Error("Twilio SMS sender readiness check aborted.");
        const number = numbers.find((candidate) => candidate.phone_number === options.fromNumber) ?? numbers[0];
        if (!number) throw new Error("Twilio SMS sender phone number was not found.");
        if (number.capabilities?.sms !== true) throw new Error("Twilio sender phone number is not SMS-capable.");
        return {
          details: {
            sid: number.sid,
            phoneNumber: number.phone_number,
            sms: number.capabilities.sms,
          },
        };
      },
    },
  ];
}
