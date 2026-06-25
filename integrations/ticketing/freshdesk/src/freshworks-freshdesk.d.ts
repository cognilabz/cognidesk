declare module "@freshworks/freshdesk" {
  export type FreshdeskSdkJsonObject = Record<string, unknown>;

  export interface FreshdeskSdkOptions {
    domain: string;
    api_key?: string;
    username?: string;
    password?: string;
  }

  export interface FreshdeskSdkTicketsApi {
    createTicket(input: FreshdeskSdkJsonObject): Promise<unknown>;
    getTicket(id: string | number, opts?: FreshdeskSdkJsonObject): Promise<unknown>;
    listTickets(opts?: FreshdeskSdkJsonObject): Promise<unknown>;
    updateTicket(id: string | number, ticket: FreshdeskSdkJsonObject): Promise<unknown>;
    searchTicket(query: string): Promise<unknown>;
    replyTicket(id: string | number, reply: FreshdeskSdkJsonObject): Promise<unknown>;
    addNotes(id: string | number, notes: FreshdeskSdkJsonObject): Promise<unknown>;
  }

  export interface FreshdeskSdkContactsApi {
    getContact(id: string | number): Promise<unknown>;
    searchContacts(opts: FreshdeskSdkJsonObject): Promise<unknown>;
  }

  export interface FreshdeskSdkConversationsApi {
    getAllTicketConversations(id: string | number, opts?: FreshdeskSdkJsonObject): Promise<unknown>;
  }

  export interface FreshdeskSdkClient {
    tickets: FreshdeskSdkTicketsApi;
    contacts: FreshdeskSdkContactsApi;
    conversations: FreshdeskSdkConversationsApi;
  }

  const Freshdesk: {
    new(options: FreshdeskSdkOptions): FreshdeskSdkClient;
  };

  export default Freshdesk;
}
