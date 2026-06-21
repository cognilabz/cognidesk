import { ImapFlow, type FetchQueryObject, type ImapFlowOptions, type SearchObject } from "imapflow";
import { defineIntegration, normalizeIntegrationError } from "@cognidesk/integration-kit";
import { imapEmailProviderManifest } from "./manifest.js";

export interface ImapRawClient {
  connect(): Promise<void>;
  logout(): Promise<void>;
  mailboxOpen(path: string): Promise<{ path: string; uidValidity: bigint | number; exists: number; readOnly?: boolean }>;
  status(path: string, query: { messages?: boolean; unseen?: boolean; uidValidity?: boolean }): Promise<unknown>;
  search(query: SearchObject, options?: { uid?: boolean }): Promise<number[] | false>;
  fetch(range: string | number[] | SearchObject, query: FetchQueryObject, options?: { uid?: boolean }): AsyncIterable<unknown>;
}

export interface ImapEmailClientOptions {
  connection: ImapFlowOptions;
  mailbox?: string;
  rawClient?: ImapRawClient;
  leaveOpen?: boolean;
}

export interface ImapMailboxReadiness {
  ready: boolean;
  mailbox: string;
  status?: unknown;
  readOnly?: boolean;
  uidValidity?: string | number;
  messagesTotal?: number;
}

export interface ImapEmailClient {
  rawClient: ImapRawClient;
  checkMailbox(): Promise<ImapMailboxReadiness>;
  searchMessages(input: { query: SearchObject; uid?: boolean }): Promise<number[]>;
  fetchMessages(input: { range: string | number[] | SearchObject; query: FetchQueryObject; uid?: boolean }): Promise<unknown[]>;
  close(): Promise<void>;
}

export function createImapEmailClient(options: ImapEmailClientOptions): ImapEmailClient {
  const rawClient = (options.rawClient ?? new ImapFlow(options.connection)) as ImapRawClient;
  const mailbox = options.mailbox ?? "INBOX";
  let connected = Boolean(options.rawClient);
  const call = async <T>(operation: () => Promise<T>) => {
    try {
      if (!connected) {
        await rawClient.connect();
        connected = true;
      }
      return await operation();
    } catch (error) {
      throw normalizeIntegrationError(error, { provider: "imap" });
    }
  };

  return {
    rawClient,
    async checkMailbox() {
      return call(async () => {
        const opened = await rawClient.mailboxOpen(mailbox);
        const status = await rawClient.status(mailbox, { messages: true, unseen: true, uidValidity: true });
        return {
          ready: true,
          mailbox,
          status,
          uidValidity: typeof opened.uidValidity === "bigint" ? opened.uidValidity.toString() : opened.uidValidity,
          messagesTotal: opened.exists,
          ...(opened.readOnly === undefined ? {} : { readOnly: opened.readOnly }),
        };
      });
    },
    async searchMessages(input) {
      return call(async () => {
        await rawClient.mailboxOpen(mailbox);
        const result = await rawClient.search(input.query, { uid: input.uid ?? true });
        return result === false ? [] : result;
      });
    },
    async fetchMessages(input) {
      return call(async () => {
        await rawClient.mailboxOpen(mailbox);
        const messages: unknown[] = [];
        for await (const message of rawClient.fetch(input.range, input.query, { uid: input.uid ?? true })) {
          messages.push(message);
        }
        return messages;
      });
    },
    async close() {
      if (connected && !options.leaveOpen) {
        await rawClient.logout();
        connected = false;
      }
    },
  };
}

export function createImapEmailIntegration(options: ImapEmailClientOptions) {
  const client = createImapEmailClient(options);
  return {
    ...defineIntegration({
      manifest: imapEmailProviderManifest,
      operations: {
        "imap.mailbox.check": () => client.checkMailbox(),
        "email.thread.search": (input: unknown) => client.searchMessages(input as { query: SearchObject; uid?: boolean }),
        "email.thread.read": (input: unknown) =>
          client.fetchMessages(input as { range: string | number[] | SearchObject; query: FetchQueryObject; uid?: boolean }),
      },
    }),
    rawClient: client.rawClient,
    client,
  };
}

export function createImapEmailLiveChecks(options: ImapEmailClientOptions) {
  return [{
    id: "mailbox",
    description: "IMAP mailbox is reachable through ImapFlow.",
    requiredCredentialIds: ["imap-server", "imap-mailbox-credentials"],
    async run(context: { abortSignal?: AbortSignal }) {
      const client = createImapEmailClient(options);
      try {
        const readiness = await client.checkMailbox();
        if (context.abortSignal?.aborted) throw new Error("IMAP live mailbox check aborted.");
        return { details: readiness };
      } finally {
        await client.close();
      }
    },
  }];
}
