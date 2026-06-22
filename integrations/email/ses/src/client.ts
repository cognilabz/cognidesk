import { SESClient, SendRawEmailCommand, type SendRawEmailCommandInput } from "@aws-sdk/client-ses";
import {
  DeleteSuppressedDestinationCommand,
  GetAccountCommand,
  ListEmailIdentitiesCommand,
  SendEmailCommand,
  SESv2Client,
  type DeleteSuppressedDestinationCommandInput,
  type GetAccountCommandOutput,
  type ListEmailIdentitiesCommandInput,
  type ListEmailIdentitiesCommandOutput,
  type SendEmailCommandInput,
  type SendEmailCommandOutput,
} from "@aws-sdk/client-sesv2";
import { defineIntegration, normalizeIntegrationError } from "@cognidesk/integration-kit";
import { sesEmailProviderManifest } from "./manifest.js";
import { parseSesSnsNotification, type ParseSesSnsNotificationOptions } from "./sns.js";

export interface SesRawClients {
  sesv2: Pick<SESv2Client, "send">;
  ses?: Pick<SESClient, "send">;
}

export interface SesEmailClientOptions {
  region: string;
  credentials?: {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
  };
  rawClients?: SesRawClients;
  snsParseOptions?: ParseSesSnsNotificationOptions;
}

export interface SesEmailClient {
  rawClients: SesRawClients;
  sendEmail(input: SendEmailCommandInput): Promise<SendEmailCommandOutput>;
  sendRawEmail(input: SendRawEmailCommandInput): Promise<unknown>;
  getAccount(): Promise<GetAccountCommandOutput>;
  listEmailIdentities(input?: ListEmailIdentitiesCommandInput): Promise<ListEmailIdentitiesCommandOutput>;
  deleteSuppressedDestination(input: DeleteSuppressedDestinationCommandInput): Promise<unknown>;
}

export function createSesEmailClient(options: SesEmailClientOptions): SesEmailClient {
  const rawClients = options.rawClients ?? {
    sesv2: new SESv2Client({ region: options.region, ...(options.credentials ? { credentials: options.credentials } : {}) }),
    ses: new SESClient({ region: options.region, ...(options.credentials ? { credentials: options.credentials } : {}) }),
  };
  const call = async <T>(operation: () => Promise<T>) => {
    try {
      return await operation();
    } catch (error) {
      throw normalizeIntegrationError(error, { provider: "ses" });
    }
  };

  return {
    rawClients,
    sendEmail(input) {
      return call(() => rawClients.sesv2.send(new SendEmailCommand(input)));
    },
    sendRawEmail(input) {
      if (!rawClients.ses) throw new Error("Classic SES client is required for SendRawEmail.");
      return call(() => rawClients.ses!.send(new SendRawEmailCommand(input)));
    },
    getAccount() {
      return call(() => rawClients.sesv2.send(new GetAccountCommand({})));
    },
    listEmailIdentities(input = {}) {
      return call(() => rawClients.sesv2.send(new ListEmailIdentitiesCommand(input)));
    },
    deleteSuppressedDestination(input) {
      return call(() => rawClients.sesv2.send(new DeleteSuppressedDestinationCommand(input)));
    },
  };
}

export function createSesEmailIntegration(options: SesEmailClientOptions) {
  const client = createSesEmailClient(options);
  const snsParseOptions = sesSnsParseOptions(options);
  return {
    ...defineIntegration({
      manifest: sesEmailProviderManifest,
      operations: {
        "ses.snsNotification.receive": (input: unknown) => parseSesSnsNotification(input as Request, snsParseOptions),
        "email.send": (input: unknown) => client.sendEmail(input as SendEmailCommandInput),
        "email.deliveryStatus.read": (input: unknown) => parseSesSnsNotification(input as Request, snsParseOptions),
        "ses.account.read": () => client.getAccount(),
        "ses.identities.list": (input: unknown) => client.listEmailIdentities((input as ListEmailIdentitiesCommandInput | undefined) ?? {}),
        "ses.suppressedDestination.delete": (input: unknown) => client.deleteSuppressedDestination(input as DeleteSuppressedDestinationCommandInput),
      },
    }),
    rawClients: client.rawClients,
    client,
  };
}

export function createSesEmailLiveChecks(options: SesEmailClientOptions) {
  return [{
    id: "account",
    description: "Amazon SES account can be read through AWS SDK v3.",
    requiredCredentialIds: ["aws-credentials", "aws-region"],
    async run(context: { abortSignal?: AbortSignal }) {
      if (context.abortSignal?.aborted) throw new Error("Amazon SES live account check aborted.");
      const account = await createSesEmailClient(options).getAccount();
      if (account.SendingEnabled === false) throw new Error("Amazon SES sending is disabled in this Region.");
      return { details: account };
    },
  }];
}

function sesSnsParseOptions(options: SesEmailClientOptions): ParseSesSnsNotificationOptions {
  return {
    requireSignatureVerification: true,
    ...options.snsParseOptions,
  };
}
