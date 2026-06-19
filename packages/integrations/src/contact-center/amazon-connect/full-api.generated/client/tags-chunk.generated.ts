// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiTagsOperationKeys = [
  "appintegrations:ListTagsForResource",
  "appintegrations:TagResource",
  "appintegrations:UntagResource",
  "connect:ListTagsForResource",
  "connect:TagResource",
  "connect:UntagResource",
  "connectcases:ListTagsForResource",
  "connectcases:TagResource",
  "connectcases:UntagResource",
  "connectcampaigns:ListTagsForResource",
  "connectcampaigns:TagResource",
  "connectcampaigns:UntagResource",
  "connecthealth:ListTagsForResource",
  "connecthealth:TagResource",
  "connecthealth:UntagResource",
  "customer-profiles:ListTagsForResource",
  "customer-profiles:TagResource",
  "customer-profiles:UntagResource",
  "qconnect:ListTagsForResource",
  "qconnect:TagResource",
  "qconnect:UntagResource",
  "wisdom:ListTagsForResource",
  "wisdom:TagResource",
  "wisdom:UntagResource"
] as const;
export type AmazonConnectFullApiTagsOperationKey = typeof AmazonConnectFullApiTagsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiTagsOperationPathParamMap {
  "appintegrations:ListTagsForResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "appintegrations:TagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "appintegrations:UntagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "connect:ListTagsForResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "connect:TagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "connect:UntagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "connectcases:ListTagsForResource": { "arn": AmazonConnectFullApiPathParamValue };
  "connectcases:TagResource": { "arn": AmazonConnectFullApiPathParamValue };
  "connectcases:UntagResource": { "arn": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:ListTagsForResource": { "arn": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:TagResource": { "arn": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:UntagResource": { "arn": AmazonConnectFullApiPathParamValue };
  "connecthealth:ListTagsForResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "connecthealth:TagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "connecthealth:UntagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListTagsForResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "customer-profiles:TagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "customer-profiles:UntagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "qconnect:ListTagsForResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "qconnect:TagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "qconnect:UntagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "wisdom:ListTagsForResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "wisdom:TagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
  "wisdom:UntagResource": { "resourceArn": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiTagsOperationRequestMap {
  "appintegrations:ListTagsForResource": AmazonConnectFullApiOperationInput<"appintegrations:ListTagsForResource">;
  "appintegrations:TagResource": AmazonConnectFullApiOperationInput<"appintegrations:TagResource">;
  "appintegrations:UntagResource": AmazonConnectFullApiOperationInput<"appintegrations:UntagResource">;
  "connect:ListTagsForResource": AmazonConnectFullApiOperationInput<"connect:ListTagsForResource">;
  "connect:TagResource": AmazonConnectFullApiOperationInput<"connect:TagResource">;
  "connect:UntagResource": AmazonConnectFullApiOperationInput<"connect:UntagResource">;
  "connectcases:ListTagsForResource": AmazonConnectFullApiOperationInput<"connectcases:ListTagsForResource">;
  "connectcases:TagResource": AmazonConnectFullApiOperationInput<"connectcases:TagResource">;
  "connectcases:UntagResource": AmazonConnectFullApiOperationInput<"connectcases:UntagResource">;
  "connectcampaigns:ListTagsForResource": AmazonConnectFullApiOperationInput<"connectcampaigns:ListTagsForResource">;
  "connectcampaigns:TagResource": AmazonConnectFullApiOperationInput<"connectcampaigns:TagResource">;
  "connectcampaigns:UntagResource": AmazonConnectFullApiOperationInput<"connectcampaigns:UntagResource">;
  "connecthealth:ListTagsForResource": AmazonConnectFullApiOperationInput<"connecthealth:ListTagsForResource">;
  "connecthealth:TagResource": AmazonConnectFullApiOperationInput<"connecthealth:TagResource">;
  "connecthealth:UntagResource": AmazonConnectFullApiOperationInput<"connecthealth:UntagResource">;
  "customer-profiles:ListTagsForResource": AmazonConnectFullApiOperationInput<"customer-profiles:ListTagsForResource">;
  "customer-profiles:TagResource": AmazonConnectFullApiOperationInput<"customer-profiles:TagResource">;
  "customer-profiles:UntagResource": AmazonConnectFullApiOperationInput<"customer-profiles:UntagResource">;
  "qconnect:ListTagsForResource": AmazonConnectFullApiOperationInput<"qconnect:ListTagsForResource">;
  "qconnect:TagResource": AmazonConnectFullApiOperationInput<"qconnect:TagResource">;
  "qconnect:UntagResource": AmazonConnectFullApiOperationInput<"qconnect:UntagResource">;
  "wisdom:ListTagsForResource": AmazonConnectFullApiOperationInput<"wisdom:ListTagsForResource">;
  "wisdom:TagResource": AmazonConnectFullApiOperationInput<"wisdom:TagResource">;
  "wisdom:UntagResource": AmazonConnectFullApiOperationInput<"wisdom:UntagResource">;
}

export interface AmazonConnectFullApiTagsGeneratedClient {
  ListTagsForResource(...args: AmazonConnectFullApiOperationArgs<"appintegrations:ListTagsForResource">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:ListTagsForResource"]>;
  TagResource(...args: AmazonConnectFullApiOperationArgs<"appintegrations:TagResource">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:TagResource"]>;
  UntagResource(...args: AmazonConnectFullApiOperationArgs<"appintegrations:UntagResource">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:UntagResource"]>;
  ListTagsForResourceConnect(...args: AmazonConnectFullApiOperationArgs<"connect:ListTagsForResource">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListTagsForResource"]>;
  TagResourceConnect(...args: AmazonConnectFullApiOperationArgs<"connect:TagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connect:TagResource"]>;
  UntagResourceConnect(...args: AmazonConnectFullApiOperationArgs<"connect:UntagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UntagResource"]>;
  ListTagsForResourceConnectcases(...args: AmazonConnectFullApiOperationArgs<"connectcases:ListTagsForResource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:ListTagsForResource"]>;
  TagResourceConnectcases(...args: AmazonConnectFullApiOperationArgs<"connectcases:TagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:TagResource"]>;
  UntagResourceConnectcases(...args: AmazonConnectFullApiOperationArgs<"connectcases:UntagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcases:UntagResource"]>;
  ListTagsForResourceConnectcampaigns(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:ListTagsForResource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:ListTagsForResource"]>;
  TagResourceConnectcampaigns(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:TagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:TagResource"]>;
  UntagResourceConnectcampaigns(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:UntagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:UntagResource"]>;
  ListTagsForResourceConnecthealth(...args: AmazonConnectFullApiOperationArgs<"connecthealth:ListTagsForResource">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:ListTagsForResource"]>;
  TagResourceConnecthealth(...args: AmazonConnectFullApiOperationArgs<"connecthealth:TagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:TagResource"]>;
  UntagResourceConnecthealth(...args: AmazonConnectFullApiOperationArgs<"connecthealth:UntagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:UntagResource"]>;
  ListTagsForResourceCustomerProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListTagsForResource">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListTagsForResource"]>;
  TagResourceCustomerProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:TagResource">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:TagResource"]>;
  UntagResourceCustomerProfiles(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:UntagResource">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:UntagResource"]>;
  ListTagsForResourceQconnect(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListTagsForResource">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListTagsForResource"]>;
  TagResourceQconnect(...args: AmazonConnectFullApiOperationArgs<"qconnect:TagResource">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:TagResource"]>;
  UntagResourceQconnect(...args: AmazonConnectFullApiOperationArgs<"qconnect:UntagResource">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UntagResource"]>;
  ListTagsForResourceWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:ListTagsForResource">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:ListTagsForResource"]>;
  TagResourceWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:TagResource">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:TagResource"]>;
  UntagResourceWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:UntagResource">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:UntagResource"]>;
}

export const AmazonConnectFullApiTagsGeneratedFunctionNames = [
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "ListTagsForResourceConnect",
  "TagResourceConnect",
  "UntagResourceConnect",
  "ListTagsForResourceConnectcases",
  "TagResourceConnectcases",
  "UntagResourceConnectcases",
  "ListTagsForResourceConnectcampaigns",
  "TagResourceConnectcampaigns",
  "UntagResourceConnectcampaigns",
  "ListTagsForResourceConnecthealth",
  "TagResourceConnecthealth",
  "UntagResourceConnecthealth",
  "ListTagsForResourceCustomerProfiles",
  "TagResourceCustomerProfiles",
  "UntagResourceCustomerProfiles",
  "ListTagsForResourceQconnect",
  "TagResourceQconnect",
  "UntagResourceQconnect",
  "ListTagsForResourceWisdom",
  "TagResourceWisdom",
  "UntagResourceWisdom"
] as const satisfies readonly (keyof AmazonConnectFullApiTagsGeneratedClient)[];

export function createAmazonConnectFullApiTagsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiTagsGeneratedClient {
  return {
    ListTagsForResource: (...args) => callOperation("appintegrations:ListTagsForResource", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:ListTagsForResource">)),
    TagResource: (...args) => callOperation("appintegrations:TagResource", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:TagResource">)),
    UntagResource: (...args) => callOperation("appintegrations:UntagResource", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:UntagResource">)),
    ListTagsForResourceConnect: (...args) => callOperation("connect:ListTagsForResource", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListTagsForResource">)),
    TagResourceConnect: (...args) => callOperation("connect:TagResource", ...(args as AmazonConnectFullApiOperationArgs<"connect:TagResource">)),
    UntagResourceConnect: (...args) => callOperation("connect:UntagResource", ...(args as AmazonConnectFullApiOperationArgs<"connect:UntagResource">)),
    ListTagsForResourceConnectcases: (...args) => callOperation("connectcases:ListTagsForResource", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:ListTagsForResource">)),
    TagResourceConnectcases: (...args) => callOperation("connectcases:TagResource", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:TagResource">)),
    UntagResourceConnectcases: (...args) => callOperation("connectcases:UntagResource", ...(args as AmazonConnectFullApiOperationArgs<"connectcases:UntagResource">)),
    ListTagsForResourceConnectcampaigns: (...args) => callOperation("connectcampaigns:ListTagsForResource", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:ListTagsForResource">)),
    TagResourceConnectcampaigns: (...args) => callOperation("connectcampaigns:TagResource", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:TagResource">)),
    UntagResourceConnectcampaigns: (...args) => callOperation("connectcampaigns:UntagResource", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:UntagResource">)),
    ListTagsForResourceConnecthealth: (...args) => callOperation("connecthealth:ListTagsForResource", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:ListTagsForResource">)),
    TagResourceConnecthealth: (...args) => callOperation("connecthealth:TagResource", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:TagResource">)),
    UntagResourceConnecthealth: (...args) => callOperation("connecthealth:UntagResource", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:UntagResource">)),
    ListTagsForResourceCustomerProfiles: (...args) => callOperation("customer-profiles:ListTagsForResource", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListTagsForResource">)),
    TagResourceCustomerProfiles: (...args) => callOperation("customer-profiles:TagResource", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:TagResource">)),
    UntagResourceCustomerProfiles: (...args) => callOperation("customer-profiles:UntagResource", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:UntagResource">)),
    ListTagsForResourceQconnect: (...args) => callOperation("qconnect:ListTagsForResource", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListTagsForResource">)),
    TagResourceQconnect: (...args) => callOperation("qconnect:TagResource", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:TagResource">)),
    UntagResourceQconnect: (...args) => callOperation("qconnect:UntagResource", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UntagResource">)),
    ListTagsForResourceWisdom: (...args) => callOperation("wisdom:ListTagsForResource", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:ListTagsForResource">)),
    TagResourceWisdom: (...args) => callOperation("wisdom:TagResource", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:TagResource">)),
    UntagResourceWisdom: (...args) => callOperation("wisdom:UntagResource", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:UntagResource">)),
  };
}
