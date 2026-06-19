// Generated from Postmark official Swagger files (https://postmarkapp.com/swagger/server.yml, https://postmarkapp.com/swagger/account.yml).
// Do not edit by hand; run scripts/generate-postmark-full-api.mjs after checking upstream docs.

export const POSTMARK_FULL_API_GENERATED_AT = "2026-06-18";
export const POSTMARK_FULL_API_DOCS_SOURCE = "https://postmarkapp.com/api-explorer";
export const POSTMARK_FULL_API_SERVER_SPEC_SOURCE = "https://postmarkapp.com/swagger/server.yml";
export const POSTMARK_FULL_API_ACCOUNT_SPEC_SOURCE = "https://postmarkapp.com/swagger/account.yml";
export const POSTMARK_FULL_API_SPEC_VERSION = "postmark-swagger-2026-06-18";
export const POSTMARK_FULL_API_PATH_COUNT = 52;
export const POSTMARK_FULL_API_OPERATION_COUNT = 66;

export type PostmarkFullApiSurface = "server" | "account";

export interface PostmarkFullApiOperation {
  uid: string;
  operationId: string;
  functionName: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  summary: string;
  surface: PostmarkFullApiSurface;
  tokenHeader: "X-Postmark-Server-Token" | "X-Postmark-Account-Token";
  sourceUrl: string;
}

export const POSTMARK_FULL_API_SPEC = JSON.parse("{\"source\":\"https://postmarkapp.com/api-explorer\",\"docs\":\"https://postmarkapp.com/api-explorer\",\"swagger\":\"2.0\",\"specs\":[{\"surface\":\"server\",\"source\":\"https://postmarkapp.com/swagger/server.yml\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"pathCount\":38,\"operationCount\":43},{\"surface\":\"account\",\"source\":\"https://postmarkapp.com/swagger/account.yml\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"pathCount\":14,\"operationCount\":23}],\"documentedPathCount\":52,\"documentedOperationCount\":66}") as {
  source: string;
  docs: string;
  swagger: string;
  specs: readonly { surface: PostmarkFullApiSurface; source: string; tokenHeader: string; pathCount: number; operationCount: number }[];
  documentedPathCount: number;
  documentedOperationCount: number;
};

export const POSTMARK_FULL_API_OPERATIONS = JSON.parse("[{\"uid\":\"server:PUT:/bounces/{bounceid}/activate\",\"operationId\":\"activateBounce\",\"functionName\":\"ActivateBounce\",\"method\":\"PUT\",\"path\":\"/bounces/{bounceid}/activate\",\"summary\":\"Activate a bounce\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:PUT:/messages/inbound/{messageid}/bypass\",\"operationId\":\"bypassRulesForInboundMessage\",\"functionName\":\"BypassRulesForInboundMessage\",\"method\":\"PUT\",\"path\":\"/messages/inbound/{messageid}/bypass\",\"summary\":\"Bypass rules for a blocked inbound message\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:POST:/domains\",\"operationId\":\"createDomain\",\"functionName\":\"CreateDomain\",\"method\":\"POST\",\"path\":\"/domains\",\"summary\":\"Create a Domain\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:POST:/triggers/inboundrules\",\"operationId\":\"createInboundRule\",\"functionName\":\"CreateInboundRule\",\"method\":\"POST\",\"path\":\"/triggers/inboundrules\",\"summary\":\"Create an inbound rule trigger\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:POST:/senders\",\"operationId\":\"createSenderSignature\",\"functionName\":\"CreateSenderSignature\",\"method\":\"POST\",\"path\":\"/senders\",\"summary\":\"Create a Sender Signature\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:POST:/servers\",\"operationId\":\"createServer\",\"functionName\":\"CreateServer\",\"method\":\"POST\",\"path\":\"/servers\",\"summary\":\"Create a Server\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:DELETE:/domains/{domainid}\",\"operationId\":\"deleteDomain\",\"functionName\":\"DeleteDomain\",\"method\":\"DELETE\",\"path\":\"/domains/{domainid}\",\"summary\":\"Delete a Domain\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:DELETE:/triggers/inboundrules/{triggerid}\",\"operationId\":\"deleteInboundRule\",\"functionName\":\"DeleteInboundRule\",\"method\":\"DELETE\",\"path\":\"/triggers/inboundrules/{triggerid}\",\"summary\":\"Delete a single trigger\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:DELETE:/senders/{signatureid}\",\"operationId\":\"deleteSenderSignature\",\"functionName\":\"DeleteSenderSignature\",\"method\":\"DELETE\",\"path\":\"/senders/{signatureid}\",\"summary\":\"Delete a Sender Signature\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:DELETE:/servers/{serverid}\",\"operationId\":\"deleteServer\",\"functionName\":\"DeleteServer\",\"method\":\"DELETE\",\"path\":\"/servers/{serverid}\",\"summary\":\"Delete a Server\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:DELETE:/templates/{templateIdOrAlias}\",\"operationId\":\"deleteTemplate\",\"functionName\":\"DeleteTemplate\",\"method\":\"DELETE\",\"path\":\"/templates/{templateIdOrAlias}\",\"summary\":\"Delete a Template\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:PUT:/server\",\"operationId\":\"editCurrentServerConfiguration\",\"functionName\":\"EditCurrentServerConfiguration\",\"method\":\"PUT\",\"path\":\"/server\",\"summary\":\"Edit Server Configuration\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:PUT:/domains/{domainid}\",\"operationId\":\"editDomain\",\"functionName\":\"EditDomain\",\"method\":\"PUT\",\"path\":\"/domains/{domainid}\",\"summary\":\"Update a Domain\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:PUT:/senders/{signatureid}\",\"operationId\":\"editSenderSignature\",\"functionName\":\"EditSenderSignature\",\"method\":\"PUT\",\"path\":\"/senders/{signatureid}\",\"summary\":\"Update a Sender Signature\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:PUT:/servers/{serverid}\",\"operationId\":\"editServerInformation\",\"functionName\":\"EditServerInformation\",\"method\":\"PUT\",\"path\":\"/servers/{serverid}\",\"summary\":\"Edit a Server\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:GET:/stats/outbound/bounces\",\"operationId\":\"getBounceCounts\",\"functionName\":\"GetBounceCounts\",\"method\":\"GET\",\"path\":\"/stats/outbound/bounces\",\"summary\":\"Get bounce counts\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/bounces\",\"operationId\":\"getBounces\",\"functionName\":\"GetBounces\",\"method\":\"GET\",\"path\":\"/bounces\",\"summary\":\"Get bounces\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/bounces/{bounceid}/dump\",\"operationId\":\"gETBouncesBounceidDump\",\"functionName\":\"GETBouncesBounceidDump\",\"method\":\"GET\",\"path\":\"/bounces/{bounceid}/dump\",\"summary\":\"Get bounce dump\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/messages/outbound/clicks/{messageid}\",\"operationId\":\"getClicksForSingleOutboundMessage\",\"functionName\":\"GetClicksForSingleOutboundMessage\",\"method\":\"GET\",\"path\":\"/messages/outbound/clicks/{messageid}\",\"summary\":\"Retrieve Message Clicks\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/server\",\"operationId\":\"getCurrentServerConfiguration\",\"functionName\":\"GetCurrentServerConfiguration\",\"method\":\"GET\",\"path\":\"/server\",\"summary\":\"Get Server Configuration\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/deliverystats\",\"operationId\":\"getDeliveryStats\",\"functionName\":\"GetDeliveryStats\",\"method\":\"GET\",\"path\":\"/deliverystats\",\"summary\":\"Get delivery stats\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:GET:/domains/{domainid}\",\"operationId\":\"getDomain\",\"functionName\":\"GetDomain\",\"method\":\"GET\",\"path\":\"/domains/{domainid}\",\"summary\":\"Get a Domain\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:GET:/messages/inbound/{messageid}/details\",\"operationId\":\"getInboundMessageDetails\",\"functionName\":\"GetInboundMessageDetails\",\"method\":\"GET\",\"path\":\"/messages/inbound/{messageid}/details\",\"summary\":\"Inbound message details\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/messages/outbound/opens/{messageid}\",\"operationId\":\"getOpensForSingleOutboundMessage\",\"functionName\":\"GetOpensForSingleOutboundMessage\",\"method\":\"GET\",\"path\":\"/messages/outbound/opens/{messageid}\",\"summary\":\"Retrieve Message Opens\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound/clicks\",\"operationId\":\"getOutboundClickCounts\",\"functionName\":\"GetOutboundClickCounts\",\"method\":\"GET\",\"path\":\"/stats/outbound/clicks\",\"summary\":\"Get click counts\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound/clicks/browserfamilies\",\"operationId\":\"getOutboundClickCountsByBrowserFamily\",\"functionName\":\"GetOutboundClickCountsByBrowserFamily\",\"method\":\"GET\",\"path\":\"/stats/outbound/clicks/browserfamilies\",\"summary\":\"Get browser usage by family\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound/clicks/location\",\"operationId\":\"getOutboundClickCountsByLocation\",\"functionName\":\"GetOutboundClickCountsByLocation\",\"method\":\"GET\",\"path\":\"/stats/outbound/clicks/location\",\"summary\":\"Get clicks by body location\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound/clicks/platforms\",\"operationId\":\"getOutboundClickCountsByPlatform\",\"functionName\":\"GetOutboundClickCountsByPlatform\",\"method\":\"GET\",\"path\":\"/stats/outbound/clicks/platforms\",\"summary\":\"Get browser plaform usage\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/messages/outbound/{messageid}/details\",\"operationId\":\"getOutboundMessageDetails\",\"functionName\":\"GetOutboundMessageDetails\",\"method\":\"GET\",\"path\":\"/messages/outbound/{messageid}/details\",\"summary\":\"Outbound message details\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/messages/outbound/{messageid}/dump\",\"operationId\":\"getOutboundMessageDump\",\"functionName\":\"GetOutboundMessageDump\",\"method\":\"GET\",\"path\":\"/messages/outbound/{messageid}/dump\",\"summary\":\"Outbound message dump\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound/opens\",\"operationId\":\"getOutboundOpenCounts\",\"functionName\":\"GetOutboundOpenCounts\",\"method\":\"GET\",\"path\":\"/stats/outbound/opens\",\"summary\":\"Get email open counts\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound/opens/emailclients\",\"operationId\":\"getOutboundOpenCountsByEmailClient\",\"functionName\":\"GetOutboundOpenCountsByEmailClient\",\"method\":\"GET\",\"path\":\"/stats/outbound/opens/emailclients\",\"summary\":\"Get email client usage\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound/opens/platforms\",\"operationId\":\"getOutboundOpenCountsByPlatform\",\"functionName\":\"GetOutboundOpenCountsByPlatform\",\"method\":\"GET\",\"path\":\"/stats/outbound/opens/platforms\",\"summary\":\"Get email platform usage\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound\",\"operationId\":\"getOutboundOverviewStatistics\",\"functionName\":\"GetOutboundOverviewStatistics\",\"method\":\"GET\",\"path\":\"/stats/outbound\",\"summary\":\"Get outbound overview\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:GET:/senders/{signatureid}\",\"operationId\":\"getSenderSignature\",\"functionName\":\"GetSenderSignature\",\"method\":\"GET\",\"path\":\"/senders/{signatureid}\",\"summary\":\"Get a Sender Signature\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:GET:/stats/outbound/sends\",\"operationId\":\"getSentCounts\",\"functionName\":\"GetSentCounts\",\"method\":\"GET\",\"path\":\"/stats/outbound/sends\",\"summary\":\"Get sent counts\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:GET:/servers/{serverid}\",\"operationId\":\"getServerInformation\",\"functionName\":\"GetServerInformation\",\"method\":\"GET\",\"path\":\"/servers/{serverid}\",\"summary\":\"Get a Server\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:GET:/bounces/{bounceid}\",\"operationId\":\"getSingleBounce\",\"functionName\":\"GetSingleBounce\",\"method\":\"GET\",\"path\":\"/bounces/{bounceid}\",\"summary\":\"Get a single bounce\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/templates/{templateIdOrAlias}\",\"operationId\":\"getSingleTemplate\",\"functionName\":\"GetSingleTemplate\",\"method\":\"GET\",\"path\":\"/templates/{templateIdOrAlias}\",\"summary\":\"Get a Template\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound/spam\",\"operationId\":\"getSpamComplaints\",\"functionName\":\"GetSpamComplaints\",\"method\":\"GET\",\"path\":\"/stats/outbound/spam\",\"summary\":\"Get spam complaints\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/stats/outbound/tracked\",\"operationId\":\"getTrackedEmailCounts\",\"functionName\":\"GetTrackedEmailCounts\",\"method\":\"GET\",\"path\":\"/stats/outbound/tracked\",\"summary\":\"Get tracked email counts\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:GET:/domains\",\"operationId\":\"listDomains\",\"functionName\":\"ListDomains\",\"method\":\"GET\",\"path\":\"/domains\",\"summary\":\"List Domains\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:GET:/triggers/inboundrules\",\"operationId\":\"listInboundRules\",\"functionName\":\"ListInboundRules\",\"method\":\"GET\",\"path\":\"/triggers/inboundrules\",\"summary\":\"List inbound rule triggers\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:GET:/senders\",\"operationId\":\"listSenderSignatures\",\"functionName\":\"ListSenderSignatures\",\"method\":\"GET\",\"path\":\"/senders\",\"summary\":\"List Sender Signatures\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:GET:/servers\",\"operationId\":\"listServers\",\"functionName\":\"ListServers\",\"method\":\"GET\",\"path\":\"/servers\",\"summary\":\"List servers\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:GET:/templates\",\"operationId\":\"listTemplates\",\"functionName\":\"ListTemplates\",\"method\":\"GET\",\"path\":\"/templates\",\"summary\":\"Get the Templates associated with this Server\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:POST:/templates\",\"operationId\":\"pOSTTemplates\",\"functionName\":\"POSTTemplates\",\"method\":\"POST\",\"path\":\"/templates\",\"summary\":\"Create a Template\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:PUT:/templates/push\",\"operationId\":\"pushTemplates\",\"functionName\":\"PushTemplates\",\"method\":\"PUT\",\"path\":\"/templates/push\",\"summary\":\"Push templates from one server to another\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:PUT:/domains/{domainid}/verifydkim\",\"operationId\":\"requestDkimVerificationForDomain\",\"functionName\":\"RequestDkimVerificationForDomain\",\"method\":\"PUT\",\"path\":\"/domains/{domainid}/verifydkim\",\"summary\":\"Request DNS Verification for DKIM\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:POST:/senders/{signatureid}/requestnewdkim\",\"operationId\":\"requestNewDKIMKeyForSenderSignature\",\"functionName\":\"RequestNewDKIMKeyForSenderSignature\",\"method\":\"POST\",\"path\":\"/senders/{signatureid}/requestnewdkim\",\"summary\":\"Request a new DKIM Key\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:PUT:/domains/{domainid}/verifyreturnpath\",\"operationId\":\"requestReturnPathVerificationForDomain\",\"functionName\":\"RequestReturnPathVerificationForDomain\",\"method\":\"PUT\",\"path\":\"/domains/{domainid}/verifyreturnpath\",\"summary\":\"Request DNS Verification for Return-Path\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:POST:/domains/{domainid}/verifyspf\",\"operationId\":\"requestSPFVerificationForDomain\",\"functionName\":\"RequestSPFVerificationForDomain\",\"method\":\"POST\",\"path\":\"/domains/{domainid}/verifyspf\",\"summary\":\"Request DNS Verification for SPF\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:POST:/senders/{signatureid}/verifyspf\",\"operationId\":\"requestSPFVerificationForSenderSignature\",\"functionName\":\"RequestSPFVerificationForSenderSignature\",\"method\":\"POST\",\"path\":\"/senders/{signatureid}/verifyspf\",\"summary\":\"Request DNS Verification for SPF\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"account:POST:/senders/{signatureid}/resend\",\"operationId\":\"resendSenderSignatureConfirmationEmail\",\"functionName\":\"ResendSenderSignatureConfirmationEmail\",\"method\":\"POST\",\"path\":\"/senders/{signatureid}/resend\",\"summary\":\"Resend Signature Confirmation Email\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:PUT:/messages/inbound/{messageid}/retry\",\"operationId\":\"retryInboundMessageProcessing\",\"functionName\":\"RetryInboundMessageProcessing\",\"method\":\"PUT\",\"path\":\"/messages/inbound/{messageid}/retry\",\"summary\":\"Retry a failed inbound message for processing\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"account:POST:/domains/{domainid}/rotatedkim\",\"operationId\":\"rotateDKIMKeyForDomain\",\"functionName\":\"RotateDKIMKeyForDomain\",\"method\":\"POST\",\"path\":\"/domains/{domainid}/rotatedkim\",\"summary\":\"Rotate DKIM Key\",\"surface\":\"account\",\"tokenHeader\":\"X-Postmark-Account-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/account.yml\"},{\"uid\":\"server:GET:/messages/outbound/clicks\",\"operationId\":\"searchClicksForOutboundMessages\",\"functionName\":\"SearchClicksForOutboundMessages\",\"method\":\"GET\",\"path\":\"/messages/outbound/clicks\",\"summary\":\"Clicks for a all messages\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/messages/inbound\",\"operationId\":\"searchInboundMessages\",\"functionName\":\"SearchInboundMessages\",\"method\":\"GET\",\"path\":\"/messages/inbound\",\"summary\":\"Inbound message search\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/messages/outbound/opens\",\"operationId\":\"searchOpensForOutboundMessages\",\"functionName\":\"SearchOpensForOutboundMessages\",\"method\":\"GET\",\"path\":\"/messages/outbound/opens\",\"summary\":\"Opens for all messages\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:GET:/messages/outbound\",\"operationId\":\"searchOutboundMessages\",\"functionName\":\"SearchOutboundMessages\",\"method\":\"GET\",\"path\":\"/messages/outbound\",\"summary\":\"Outbound message search\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:POST:/email\",\"operationId\":\"sendEmail\",\"functionName\":\"SendEmail\",\"method\":\"POST\",\"path\":\"/email\",\"summary\":\"Send a single email\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:POST:/email/batch\",\"operationId\":\"sendEmailBatch\",\"functionName\":\"SendEmailBatch\",\"method\":\"POST\",\"path\":\"/email/batch\",\"summary\":\"Send a batch of emails\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:POST:/email/batchWithTemplates\",\"operationId\":\"sendEmailBatchWithTemplates\",\"functionName\":\"SendEmailBatchWithTemplates\",\"method\":\"POST\",\"path\":\"/email/batchWithTemplates\",\"summary\":\"Send a batch of email using templates.\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:POST:/email/withTemplate\",\"operationId\":\"sendEmailWithTemplate\",\"functionName\":\"SendEmailWithTemplate\",\"method\":\"POST\",\"path\":\"/email/withTemplate\",\"summary\":\"Send an email using a Template\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:POST:/templates/validate\",\"operationId\":\"testTemplateContent\",\"functionName\":\"TestTemplateContent\",\"method\":\"POST\",\"path\":\"/templates/validate\",\"summary\":\"Test Template Content\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"},{\"uid\":\"server:PUT:/templates/{templateIdOrAlias}\",\"operationId\":\"updateTemplate\",\"functionName\":\"UpdateTemplate\",\"method\":\"PUT\",\"path\":\"/templates/{templateIdOrAlias}\",\"summary\":\"Update a Template\",\"surface\":\"server\",\"tokenHeader\":\"X-Postmark-Server-Token\",\"sourceUrl\":\"https://postmarkapp.com/swagger/server.yml\"}]") as readonly PostmarkFullApiOperation[];

// Hardened literal operation keys for generated SDK typing.
export const POSTMARK_FULL_API_OPERATION_IDS = [
  "activateBounce",
  "bypassRulesForInboundMessage",
  "createDomain",
  "createInboundRule",
  "createSenderSignature",
  "createServer",
  "deleteDomain",
  "deleteInboundRule",
  "deleteSenderSignature",
  "deleteServer",
  "deleteTemplate",
  "editCurrentServerConfiguration",
  "editDomain",
  "editSenderSignature",
  "editServerInformation",
  "getBounceCounts",
  "getBounces",
  "gETBouncesBounceidDump",
  "getClicksForSingleOutboundMessage",
  "getCurrentServerConfiguration",
  "getDeliveryStats",
  "getDomain",
  "getInboundMessageDetails",
  "getOpensForSingleOutboundMessage",
  "getOutboundClickCounts",
  "getOutboundClickCountsByBrowserFamily",
  "getOutboundClickCountsByLocation",
  "getOutboundClickCountsByPlatform",
  "getOutboundMessageDetails",
  "getOutboundMessageDump",
  "getOutboundOpenCounts",
  "getOutboundOpenCountsByEmailClient",
  "getOutboundOpenCountsByPlatform",
  "getOutboundOverviewStatistics",
  "getSenderSignature",
  "getSentCounts",
  "getServerInformation",
  "getSingleBounce",
  "getSingleTemplate",
  "getSpamComplaints",
  "getTrackedEmailCounts",
  "listDomains",
  "listInboundRules",
  "listSenderSignatures",
  "listServers",
  "listTemplates",
  "pOSTTemplates",
  "pushTemplates",
  "requestDkimVerificationForDomain",
  "requestNewDKIMKeyForSenderSignature",
  "requestReturnPathVerificationForDomain",
  "requestSPFVerificationForDomain",
  "requestSPFVerificationForSenderSignature",
  "resendSenderSignatureConfirmationEmail",
  "retryInboundMessageProcessing",
  "rotateDKIMKeyForDomain",
  "searchClicksForOutboundMessages",
  "searchInboundMessages",
  "searchOpensForOutboundMessages",
  "searchOutboundMessages",
  "sendEmail",
  "sendEmailBatch",
  "sendEmailBatchWithTemplates",
  "sendEmailWithTemplate",
  "testTemplateContent",
  "updateTemplate"
] as const;
export const POSTMARK_FULL_API_OPERATION_OPERATION_IDS = [
  "activateBounce",
  "bypassRulesForInboundMessage",
  "createDomain",
  "createInboundRule",
  "createSenderSignature",
  "createServer",
  "deleteDomain",
  "deleteInboundRule",
  "deleteSenderSignature",
  "deleteServer",
  "deleteTemplate",
  "editCurrentServerConfiguration",
  "editDomain",
  "editSenderSignature",
  "editServerInformation",
  "getBounceCounts",
  "getBounces",
  "gETBouncesBounceidDump",
  "getClicksForSingleOutboundMessage",
  "getCurrentServerConfiguration",
  "getDeliveryStats",
  "getDomain",
  "getInboundMessageDetails",
  "getOpensForSingleOutboundMessage",
  "getOutboundClickCounts",
  "getOutboundClickCountsByBrowserFamily",
  "getOutboundClickCountsByLocation",
  "getOutboundClickCountsByPlatform",
  "getOutboundMessageDetails",
  "getOutboundMessageDump",
  "getOutboundOpenCounts",
  "getOutboundOpenCountsByEmailClient",
  "getOutboundOpenCountsByPlatform",
  "getOutboundOverviewStatistics",
  "getSenderSignature",
  "getSentCounts",
  "getServerInformation",
  "getSingleBounce",
  "getSingleTemplate",
  "getSpamComplaints",
  "getTrackedEmailCounts",
  "listDomains",
  "listInboundRules",
  "listSenderSignatures",
  "listServers",
  "listTemplates",
  "pOSTTemplates",
  "pushTemplates",
  "requestDkimVerificationForDomain",
  "requestNewDKIMKeyForSenderSignature",
  "requestReturnPathVerificationForDomain",
  "requestSPFVerificationForDomain",
  "requestSPFVerificationForSenderSignature",
  "resendSenderSignatureConfirmationEmail",
  "retryInboundMessageProcessing",
  "rotateDKIMKeyForDomain",
  "searchClicksForOutboundMessages",
  "searchInboundMessages",
  "searchOpensForOutboundMessages",
  "searchOutboundMessages",
  "sendEmail",
  "sendEmailBatch",
  "sendEmailBatchWithTemplates",
  "sendEmailWithTemplate",
  "testTemplateContent",
  "updateTemplate"
] as const;
export const POSTMARK_FULL_API_OPERATION_UIDS = [
  "server:PUT:/bounces/{bounceid}/activate",
  "server:PUT:/messages/inbound/{messageid}/bypass",
  "account:POST:/domains",
  "server:POST:/triggers/inboundrules",
  "account:POST:/senders",
  "account:POST:/servers",
  "account:DELETE:/domains/{domainid}",
  "server:DELETE:/triggers/inboundrules/{triggerid}",
  "account:DELETE:/senders/{signatureid}",
  "account:DELETE:/servers/{serverid}",
  "server:DELETE:/templates/{templateIdOrAlias}",
  "server:PUT:/server",
  "account:PUT:/domains/{domainid}",
  "account:PUT:/senders/{signatureid}",
  "account:PUT:/servers/{serverid}",
  "server:GET:/stats/outbound/bounces",
  "server:GET:/bounces",
  "server:GET:/bounces/{bounceid}/dump",
  "server:GET:/messages/outbound/clicks/{messageid}",
  "server:GET:/server",
  "server:GET:/deliverystats",
  "account:GET:/domains/{domainid}",
  "server:GET:/messages/inbound/{messageid}/details",
  "server:GET:/messages/outbound/opens/{messageid}",
  "server:GET:/stats/outbound/clicks",
  "server:GET:/stats/outbound/clicks/browserfamilies",
  "server:GET:/stats/outbound/clicks/location",
  "server:GET:/stats/outbound/clicks/platforms",
  "server:GET:/messages/outbound/{messageid}/details",
  "server:GET:/messages/outbound/{messageid}/dump",
  "server:GET:/stats/outbound/opens",
  "server:GET:/stats/outbound/opens/emailclients",
  "server:GET:/stats/outbound/opens/platforms",
  "server:GET:/stats/outbound",
  "account:GET:/senders/{signatureid}",
  "server:GET:/stats/outbound/sends",
  "account:GET:/servers/{serverid}",
  "server:GET:/bounces/{bounceid}",
  "server:GET:/templates/{templateIdOrAlias}",
  "server:GET:/stats/outbound/spam",
  "server:GET:/stats/outbound/tracked",
  "account:GET:/domains",
  "server:GET:/triggers/inboundrules",
  "account:GET:/senders",
  "account:GET:/servers",
  "server:GET:/templates",
  "server:POST:/templates",
  "account:PUT:/templates/push",
  "account:PUT:/domains/{domainid}/verifydkim",
  "account:POST:/senders/{signatureid}/requestnewdkim",
  "account:PUT:/domains/{domainid}/verifyreturnpath",
  "account:POST:/domains/{domainid}/verifyspf",
  "account:POST:/senders/{signatureid}/verifyspf",
  "account:POST:/senders/{signatureid}/resend",
  "server:PUT:/messages/inbound/{messageid}/retry",
  "account:POST:/domains/{domainid}/rotatedkim",
  "server:GET:/messages/outbound/clicks",
  "server:GET:/messages/inbound",
  "server:GET:/messages/outbound/opens",
  "server:GET:/messages/outbound",
  "server:POST:/email",
  "server:POST:/email/batch",
  "server:POST:/email/batchWithTemplates",
  "server:POST:/email/withTemplate",
  "server:POST:/templates/validate",
  "server:PUT:/templates/{templateIdOrAlias}"
] as const;
// End hardened literal operation keys.
export const POSTMARK_FULL_API_OPERATION_BY_UID = new Map(POSTMARK_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));
export const POSTMARK_FULL_API_OPERATION_BY_ID = new Map<string, PostmarkFullApiOperation>();
for (const operation of POSTMARK_FULL_API_OPERATIONS) {
  if (!POSTMARK_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {
    POSTMARK_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);
  }
}

export type PostmarkFullApiOperationUid = typeof POSTMARK_FULL_API_OPERATION_UIDS[number];
