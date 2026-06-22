import { AccountClient, ServerClient, type Models } from "postmark";
import { defineIntegration, normalizeIntegrationError } from "@cognidesk/integration-kit";
import { postmarkEmailProviderManifest } from "./manifest.js";
import {
  parsePostmarkInboundWebhook,
  type ParsePostmarkInboundWebhookOptions,
  type PostmarkWebhookBasicAuthCredentials,
} from "./webhooks.js";

export interface PostmarkRawClients {
  server: ServerClient;
  account?: AccountClient;
}

export interface PostmarkEmailClientOptions {
  serverToken: string;
  accountToken?: string;
  rawClients?: PostmarkRawClients;
  webhookBasicAuth?: PostmarkWebhookBasicAuthCredentials;
  requireWebhookBasicAuth?: boolean;
}

export interface PostmarkEmailClient {
  rawClients: PostmarkRawClients;
  sendEmail(input: Models.Message): Promise<Models.MessageSendingResponse>;
  sendEmailWithTemplate(input: Models.TemplatedMessage): Promise<Models.MessageSendingResponse>;
  getOutboundMessageDetails(messageId: string): Promise<Models.OutboundMessageDetails>;
  getInboundMessageDetails(messageId: string): Promise<Models.InboundMessageDetails>;
  listMessageStreams(input?: Models.MessageStreamsFilteringParameters): Promise<Models.MessageStreams>;
  createSuppressions(messageStream: string, input: Models.CreateSuppressionsRequest): Promise<Models.SuppressionStatuses>;
  deleteSuppressions(messageStream: string, input: Models.DeleteSuppressionsRequest): Promise<Models.SuppressionStatuses>;
}

export function createPostmarkEmailClient(options: PostmarkEmailClientOptions): PostmarkEmailClient {
  const rawClients = options.rawClients ?? {
    server: new ServerClient(options.serverToken),
    ...(options.accountToken ? { account: new AccountClient(options.accountToken) } : {}),
  };
  const call = async <T>(operation: () => Promise<T>) => {
    try {
      return await operation();
    } catch (error) {
      throw normalizeIntegrationError(error, { provider: "postmark" });
    }
  };

  return {
    rawClients,
    sendEmail(input) {
      return call(() => rawClients.server.sendEmail(input));
    },
    sendEmailWithTemplate(input) {
      return call(() => rawClients.server.sendEmailWithTemplate(input));
    },
    getOutboundMessageDetails(messageId) {
      return call(() => rawClients.server.getOutboundMessageDetails(messageId));
    },
    getInboundMessageDetails(messageId) {
      return call(() => rawClients.server.getInboundMessageDetails(messageId));
    },
    listMessageStreams(input = {}) {
      return call(() => rawClients.server.getMessageStreams(input));
    },
    createSuppressions(messageStream, input) {
      return call(() => rawClients.server.createSuppressions(messageStream, input));
    },
    deleteSuppressions(messageStream, input) {
      return call(() => rawClients.server.deleteSuppressions(messageStream, input));
    },
  };
}

export function createPostmarkEmailIntegration(options: PostmarkEmailClientOptions) {
  const client = createPostmarkEmailClient(options);
  return {
    ...defineIntegration({
      manifest: postmarkEmailProviderManifest,
      operations: {
        "email.receive": (input: unknown) => parsePostmarkInboundWebhook(input as Request, postmarkWebhookParserOptions(options)),
        "email.send": (input: unknown) => client.sendEmail(input as Models.Message),
        "email.reply.send": (input: unknown) => client.sendEmail(input as Models.Message),
        "email.deliveryStatus.read": (input: unknown) => {
          const detailsInput = input as { messageId: string; direction?: "inbound" | "outbound" };
          return detailsInput.direction === "inbound"
            ? client.getInboundMessageDetails(detailsInput.messageId)
            : client.getOutboundMessageDetails(detailsInput.messageId);
        },
        "postmark.messageStreams.list": (input: unknown) => client.listMessageStreams(input as Models.MessageStreamsFilteringParameters | undefined),
        "postmark.suppressions.create": (input: unknown) => {
          const suppressionInput = input as { messageStream: string; suppressions: Models.CreateSuppressionsRequest };
          return client.createSuppressions(suppressionInput.messageStream, suppressionInput.suppressions);
        },
        "postmark.suppressions.delete": (input: unknown) => {
          const suppressionInput = input as { messageStream: string; suppressions: Models.DeleteSuppressionsRequest };
          return client.deleteSuppressions(suppressionInput.messageStream, suppressionInput.suppressions);
        },
      },
    }),
    rawClients: client.rawClients,
    client,
  };
}

export function createPostmarkEmailLiveChecks(options: PostmarkEmailClientOptions) {
  return [{
    id: "server",
    description: "Postmark server can be read through the official SDK.",
    requiredCredentialIds: ["postmark-server-token"],
    async run(context: { abortSignal?: AbortSignal }) {
      if (context.abortSignal?.aborted) throw new Error("Postmark live server check aborted.");
      const server = await createPostmarkEmailClient(options).rawClients.server.getServer();
      if (context.abortSignal?.aborted) throw new Error("Postmark live server check aborted.");
      return { details: { server } };
    },
  }];
}

function postmarkWebhookParserOptions(options: PostmarkEmailClientOptions): ParsePostmarkInboundWebhookOptions {
  return {
    ...(options.webhookBasicAuth ? { basicAuth: options.webhookBasicAuth } : {}),
    ...(options.requireWebhookBasicAuth !== undefined ? { requireBasicAuth: options.requireWebhookBasicAuth } : {}),
  };
}
