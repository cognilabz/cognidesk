// Generated from Gmail API Discovery (https://gmail.googleapis.com/$discovery/rest?version=v1).
// Do not edit by hand; run scripts/generate-gmail-full-api.mjs after checking upstream docs.

export type GmailFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface GmailFullApiSpec {
  sourceUrl: string;
  revision: string;
  version: string;
  documentedOperationCount: number;
}

export interface GmailFullApiOperation {
  id: string;
  functionName: string;
  method: GmailFullApiOperationMethod;
  path: string;
  description: string;
  sourceUrl: string;
}

export const GMAIL_FULL_API_SPEC_SOURCE = "https://gmail.googleapis.com/$discovery/rest?version=v1" as const;
export const GMAIL_FULL_API_SPEC_VERSION = "gmail-20260615-2026-06-17" as const;
export const GMAIL_FULL_API_GENERATED_AT = "2026-06-17" as const;
export const GMAIL_FULL_API_OPERATION_COUNT = 79 as const;

export const GMAIL_FULL_API_SPEC: GmailFullApiSpec = {
  "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1",
  "revision": "20260615",
  "version": "v1",
  "documentedOperationCount": 79
};

export const GMAIL_FULL_API_OPERATIONS: readonly GmailFullApiOperation[] = [
  {
    "id": "users.drafts.create",
    "functionName": "UsersDraftsCreate",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/drafts",
    "description": "Creates a draft with the `DRAFT` label. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.drafts.delete",
    "functionName": "UsersDraftsDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/drafts/{id}",
    "description": "Immediately and permanently deletes the specified draft. Does not simply trash it. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.drafts.get",
    "functionName": "UsersDraftsGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/drafts/{id}",
    "description": "Gets the specified draft. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.drafts.list",
    "functionName": "UsersDraftsList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/drafts",
    "description": "Lists the drafts in the user's mailbox. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.drafts.send",
    "functionName": "UsersDraftsSend",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/drafts/send",
    "description": "Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.drafts.update",
    "functionName": "UsersDraftsUpdate",
    "method": "PUT",
    "path": "gmail/v1/users/{userId}/drafts/{id}",
    "description": "Replaces a draft's content. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.getProfile",
    "functionName": "UsersGetProfile",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/profile",
    "description": "Gets the current user's Gmail profile.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.history.list",
    "functionName": "UsersHistoryList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/history",
    "description": "Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`). For more information, see [Synchronize clients with Gmail](https://developers.google.com/workspace/gmail/api/guides/sync).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.labels.create",
    "functionName": "UsersLabelsCreate",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/labels",
    "description": "Creates a label. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.labels.delete",
    "functionName": "UsersLabelsDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/labels/{id}",
    "description": "Immediately and permanently deletes the specified label and removes it from any messages and threads that it's applied to. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.labels.get",
    "functionName": "UsersLabelsGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/labels/{id}",
    "description": "Gets the specified label. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.labels.list",
    "functionName": "UsersLabelsList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/labels",
    "description": "Lists all labels in the user's mailbox. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.labels.patch",
    "functionName": "UsersLabelsPatch",
    "method": "PATCH",
    "path": "gmail/v1/users/{userId}/labels/{id}",
    "description": "Patch the specified label. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.labels.update",
    "functionName": "UsersLabelsUpdate",
    "method": "PUT",
    "path": "gmail/v1/users/{userId}/labels/{id}",
    "description": "Updates the specified label. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.attachments.get",
    "functionName": "UsersMessagesAttachmentsGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}",
    "description": "Gets the specified message attachment.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.batchDelete",
    "functionName": "UsersMessagesBatchDelete",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/messages/batchDelete",
    "description": "Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.batchModify",
    "functionName": "UsersMessagesBatchModify",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/messages/batchModify",
    "description": "Modifies the labels and the Classification Label values on the specified messages. For administrators modifying messages for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.modify.restricted` scope.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.delete",
    "functionName": "UsersMessagesDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/messages/{id}",
    "description": "Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.get",
    "functionName": "UsersMessagesGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/messages/{id}",
    "description": "Gets the specified message.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.import",
    "functionName": "UsersMessagesImport",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/messages/import",
    "description": "Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note that the maximum size of the message is 150 MB.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.insert",
    "functionName": "UsersMessagesInsert",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/messages",
    "description": "Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message. For more information, see [Create and send email messages](https://developers.google.com/workspace/gmail/api/guides/sending).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.list",
    "functionName": "UsersMessagesList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/messages",
    "description": "Lists the messages in the user's mailbox. For more information, see [List Gmail messages](https://developers.google.com/workspace/gmail/api/guides/list-messages).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.modify",
    "functionName": "UsersMessagesModify",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/messages/{id}/modify",
    "description": "Modifies the labels and the Classification Label values on the specified message. For administrators modifying message for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.modify.restricted` scope.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.send",
    "functionName": "UsersMessagesSend",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/messages/send",
    "description": "Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For more information, see [Create and send email messages](https://developers.google.com/workspace/gmail/api/guides/sending).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.trash",
    "functionName": "UsersMessagesTrash",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/messages/{id}/trash",
    "description": "Moves the specified message to the trash.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.messages.untrash",
    "functionName": "UsersMessagesUntrash",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/messages/{id}/untrash",
    "description": "Removes the specified message from the trash.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.identities.create",
    "functionName": "UsersSettingsCseIdentitiesCreate",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/cse/identities",
    "description": "Creates and configures a client-side encryption identity that's authorized to send mail from the user account. Google publishes the S/MIME certificate to a shared domain-wide directory so that people within a Google Workspace organization can encrypt and send mail to the identity. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.identities.delete",
    "functionName": "UsersSettingsCseIdentitiesDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}",
    "description": "Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages. You cannot restore the identity after you delete it. Instead, use the CreateCseIdentity method to create another identity with the same configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.identities.get",
    "functionName": "UsersSettingsCseIdentitiesGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}",
    "description": "Retrieves a client-side encryption identity configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.identities.list",
    "functionName": "UsersSettingsCseIdentitiesList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/cse/identities",
    "description": "Lists the client-side encrypted identities for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.identities.patch",
    "functionName": "UsersSettingsCseIdentitiesPatch",
    "method": "PATCH",
    "path": "gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}",
    "description": "Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887). For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.keypairs.create",
    "functionName": "UsersSettingsCseKeypairsCreate",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/cse/keypairs",
    "description": "Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.keypairs.disable",
    "functionName": "UsersSettingsCseKeypairsDisable",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable",
    "description": "Turns off a client-side encryption key pair. The authenticated user can no longer use the key pair to decrypt incoming CSE message texts or sign outgoing CSE mail. To regain access, use the EnableCseKeyPair to turn on the key pair. After 30 days, you can permanently delete the key pair by using the ObliterateCseKeyPair method. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.keypairs.enable",
    "functionName": "UsersSettingsCseKeypairsEnable",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable",
    "description": "Turns on a client-side encryption key pair that was turned off. The key pair becomes active again for any associated client-side encryption identities. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.keypairs.get",
    "functionName": "UsersSettingsCseKeypairsGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}",
    "description": "Retrieves an existing client-side encryption key pair. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.keypairs.list",
    "functionName": "UsersSettingsCseKeypairsList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/cse/keypairs",
    "description": "Lists client-side encryption key pairs for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.cse.keypairs.obliterate",
    "functionName": "UsersSettingsCseKeypairsObliterate",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate",
    "description": "Deletes a client-side encryption key pair permanently and immediately. You can only permanently delete key pairs that have been turned off for more than 30 days. To turn off a key pair, use the DisableCseKeyPair method. Gmail can't restore or decrypt any messages that were encrypted by an obliterated key. Authenticated users and Google Workspace administrators lose access to reading the encrypted messages. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.delegates.create",
    "functionName": "UsersSettingsDelegatesCreate",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/delegates",
    "description": "Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings). Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. A delegate user must be referred to by their primary email address, and not an email alias. When a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.delegates.delete",
    "functionName": "UsersSettingsDelegatesDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/settings/delegates/{delegateEmail}",
    "description": "Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings). A delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.delegates.get",
    "functionName": "UsersSettingsDelegatesGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/delegates/{delegateEmail}",
    "description": "Gets the specified delegate. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings). A delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.delegates.list",
    "functionName": "UsersSettingsDelegatesList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/delegates",
    "description": "Lists the delegates for the specified account. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.filters.create",
    "functionName": "UsersSettingsFiltersCreate",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/filters",
    "description": "Creates a filter. Note: you can only create a maximum of 1,000 filters. For more information, see [Manage Gmail filters](https://developers.google.com/workspace/gmail/api/guides/filter_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.filters.delete",
    "functionName": "UsersSettingsFiltersDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/settings/filters/{id}",
    "description": "Immediately and permanently deletes the specified filter. For more information, see [Manage Gmail filters](https://developers.google.com/workspace/gmail/api/guides/filter_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.filters.get",
    "functionName": "UsersSettingsFiltersGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/filters/{id}",
    "description": "Gets a filter. For more information, see [Manage Gmail filters](https://developers.google.com/workspace/gmail/api/guides/filter_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.filters.list",
    "functionName": "UsersSettingsFiltersList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/filters",
    "description": "Lists the message filters of a Gmail user. For more information, see [Manage Gmail filters](https://developers.google.com/workspace/gmail/api/guides/filter_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.forwardingAddresses.create",
    "functionName": "UsersSettingsForwardingAddressesCreate",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/forwardingAddresses",
    "description": "Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.forwardingAddresses.delete",
    "functionName": "UsersSettingsForwardingAddressesDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}",
    "description": "Deletes the specified forwarding address and revokes any verification that may have been required. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.forwardingAddresses.get",
    "functionName": "UsersSettingsForwardingAddressesGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}",
    "description": "Gets the specified forwarding address. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.forwardingAddresses.list",
    "functionName": "UsersSettingsForwardingAddressesList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/forwardingAddresses",
    "description": "Lists the forwarding addresses for the specified account. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.getAutoForwarding",
    "functionName": "UsersSettingsGetAutoForwarding",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/autoForwarding",
    "description": "Gets the auto-forwarding setting for the specified account. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.getImap",
    "functionName": "UsersSettingsGetImap",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/imap",
    "description": "Gets IMAP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.getLanguage",
    "functionName": "UsersSettingsGetLanguage",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/language",
    "description": "Gets language settings. For more information, see [Manage language settings](https://developers.google.com/workspace/gmail/api/guides/language-settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.getPop",
    "functionName": "UsersSettingsGetPop",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/pop",
    "description": "Gets POP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.getVacation",
    "functionName": "UsersSettingsGetVacation",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/vacation",
    "description": "Gets vacation responder settings. For more information, see [Manage vacation settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/vacation_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.create",
    "functionName": "UsersSettingsSendAsCreate",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/sendAs",
    "description": "Creates a custom \"from\" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.delete",
    "functionName": "UsersSettingsSendAsDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}",
    "description": "Deletes the specified send-as alias. Revokes any verification that may have been required for using it. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.get",
    "functionName": "UsersSettingsSendAsGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}",
    "description": "Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.list",
    "functionName": "UsersSettingsSendAsList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/sendAs",
    "description": "Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom \"from\" aliases. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.patch",
    "functionName": "UsersSettingsSendAsPatch",
    "method": "PATCH",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}",
    "description": "Patch the specified send-as alias. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.smimeInfo.delete",
    "functionName": "UsersSettingsSendAsSmimeInfoDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}",
    "description": "Deletes the specified S/MIME config for the specified send-as alias. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.smimeInfo.get",
    "functionName": "UsersSettingsSendAsSmimeInfoGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}",
    "description": "Gets the specified S/MIME config for the specified send-as alias. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.smimeInfo.insert",
    "functionName": "UsersSettingsSendAsSmimeInfoInsert",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo",
    "description": "Insert (upload) the given S/MIME config for the specified send-as alias. Note that `pkcs12` format is required for the key. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.smimeInfo.list",
    "functionName": "UsersSettingsSendAsSmimeInfoList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo",
    "description": "Lists S/MIME configs for the specified send-as alias. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.smimeInfo.setDefault",
    "functionName": "UsersSettingsSendAsSmimeInfoSetDefault",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault",
    "description": "Sets the default S/MIME config for the specified send-as alias. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.update",
    "functionName": "UsersSettingsSendAsUpdate",
    "method": "PUT",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}",
    "description": "Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings). Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.sendAs.verify",
    "functionName": "UsersSettingsSendAsVerify",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify",
    "description": "Sends a verification email to the specified send-as alias address. The verification status must be `pending`. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.updateAutoForwarding",
    "functionName": "UsersSettingsUpdateAutoForwarding",
    "method": "PUT",
    "path": "gmail/v1/users/{userId}/settings/autoForwarding",
    "description": "Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.updateImap",
    "functionName": "UsersSettingsUpdateImap",
    "method": "PUT",
    "path": "gmail/v1/users/{userId}/settings/imap",
    "description": "Updates IMAP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.updateLanguage",
    "functionName": "UsersSettingsUpdateLanguage",
    "method": "PUT",
    "path": "gmail/v1/users/{userId}/settings/language",
    "description": "Updates language settings. For more information, see [Manage language settings](https://developers.google.com/workspace/gmail/api/guides/language-settings). If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.updatePop",
    "functionName": "UsersSettingsUpdatePop",
    "method": "PUT",
    "path": "gmail/v1/users/{userId}/settings/pop",
    "description": "Updates POP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.settings.updateVacation",
    "functionName": "UsersSettingsUpdateVacation",
    "method": "PUT",
    "path": "gmail/v1/users/{userId}/settings/vacation",
    "description": "Updates vacation responder settings. For more information, see [Manage vacation settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/vacation_settings).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.stop",
    "functionName": "UsersStop",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/stop",
    "description": "Turn off push notification delivery for the given user mailbox. For more information, see [Configure push notifications in Gmail API](https://developers.google.com/workspace/gmail/api/guides/push).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.threads.delete",
    "functionName": "UsersThreadsDelete",
    "method": "DELETE",
    "path": "gmail/v1/users/{userId}/threads/{id}",
    "description": "Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.threads.get",
    "functionName": "UsersThreadsGet",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/threads/{id}",
    "description": "Gets the specified thread. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.threads.list",
    "functionName": "UsersThreadsList",
    "method": "GET",
    "path": "gmail/v1/users/{userId}/threads",
    "description": "Lists the threads in the user's mailbox. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.threads.modify",
    "functionName": "UsersThreadsModify",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/threads/{id}/modify",
    "description": "Modifies the labels applied to the thread. This applies to all messages in the thread. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.threads.trash",
    "functionName": "UsersThreadsTrash",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/threads/{id}/trash",
    "description": "Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.threads.untrash",
    "functionName": "UsersThreadsUntrash",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/threads/{id}/untrash",
    "description": "Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  },
  {
    "id": "users.watch",
    "functionName": "UsersWatch",
    "method": "POST",
    "path": "gmail/v1/users/{userId}/watch",
    "description": "Set up or update a push notification watch on the given user mailbox. For more information, see [Configure push notifications in Gmail API](https://developers.google.com/workspace/gmail/api/guides/push).",
    "sourceUrl": "https://gmail.googleapis.com/$discovery/rest?version=v1"
  }
];

// Hardened literal operation keys for generated SDK typing.
export const GMAIL_FULL_API_OPERATION_IDS = [
  "users.drafts.create",
  "users.drafts.delete",
  "users.drafts.get",
  "users.drafts.list",
  "users.drafts.send",
  "users.drafts.update",
  "users.getProfile",
  "users.history.list",
  "users.labels.create",
  "users.labels.delete",
  "users.labels.get",
  "users.labels.list",
  "users.labels.patch",
  "users.labels.update",
  "users.messages.attachments.get",
  "users.messages.batchDelete",
  "users.messages.batchModify",
  "users.messages.delete",
  "users.messages.get",
  "users.messages.import",
  "users.messages.insert",
  "users.messages.list",
  "users.messages.modify",
  "users.messages.send",
  "users.messages.trash",
  "users.messages.untrash",
  "users.settings.cse.identities.create",
  "users.settings.cse.identities.delete",
  "users.settings.cse.identities.get",
  "users.settings.cse.identities.list",
  "users.settings.cse.identities.patch",
  "users.settings.cse.keypairs.create",
  "users.settings.cse.keypairs.disable",
  "users.settings.cse.keypairs.enable",
  "users.settings.cse.keypairs.get",
  "users.settings.cse.keypairs.list",
  "users.settings.cse.keypairs.obliterate",
  "users.settings.delegates.create",
  "users.settings.delegates.delete",
  "users.settings.delegates.get",
  "users.settings.delegates.list",
  "users.settings.filters.create",
  "users.settings.filters.delete",
  "users.settings.filters.get",
  "users.settings.filters.list",
  "users.settings.forwardingAddresses.create",
  "users.settings.forwardingAddresses.delete",
  "users.settings.forwardingAddresses.get",
  "users.settings.forwardingAddresses.list",
  "users.settings.getAutoForwarding",
  "users.settings.getImap",
  "users.settings.getLanguage",
  "users.settings.getPop",
  "users.settings.getVacation",
  "users.settings.sendAs.create",
  "users.settings.sendAs.delete",
  "users.settings.sendAs.get",
  "users.settings.sendAs.list",
  "users.settings.sendAs.patch",
  "users.settings.sendAs.smimeInfo.delete",
  "users.settings.sendAs.smimeInfo.get",
  "users.settings.sendAs.smimeInfo.insert",
  "users.settings.sendAs.smimeInfo.list",
  "users.settings.sendAs.smimeInfo.setDefault",
  "users.settings.sendAs.update",
  "users.settings.sendAs.verify",
  "users.settings.updateAutoForwarding",
  "users.settings.updateImap",
  "users.settings.updateLanguage",
  "users.settings.updatePop",
  "users.settings.updateVacation",
  "users.stop",
  "users.threads.delete",
  "users.threads.get",
  "users.threads.list",
  "users.threads.modify",
  "users.threads.trash",
  "users.threads.untrash",
  "users.watch"
] as const;
// End hardened literal operation keys.

export type GmailFullApiOperationId = typeof GMAIL_FULL_API_OPERATION_IDS[number];

export const GMAIL_FULL_API_OPERATION_BY_ID = new Map<string, GmailFullApiOperation>(
  GMAIL_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]),
);
