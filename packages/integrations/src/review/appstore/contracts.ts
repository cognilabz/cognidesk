import type {
  AppStoreFullApiGeneratedClient,
  AppStoreGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type AppStoreReviewsJsonPrimitive = string | number | boolean | null;
export type AppStoreReviewsJsonValue =
  | AppStoreReviewsJsonPrimitive
  | AppStoreReviewsJsonObject
  | readonly AppStoreReviewsJsonValue[];
export type AppStoreReviewsProviderExtensionValue = AppStoreReviewsJsonValue | object | undefined;
export interface AppStoreReviewsJsonObject {
  [key: string]: AppStoreReviewsProviderExtensionValue;
}
export type AppStoreReviewsProviderPayload = AppStoreReviewsJsonObject | object;
export type AppStoreReviewsProviderQuery = Record<string, AppStoreReviewsProviderExtensionValue>;
export interface AppStoreReviewsProviderResponse extends AppStoreReviewsJsonObject {}
export interface AppStoreReviewsProviderExtensionFields extends AppStoreReviewsJsonObject {}

export interface AppStoreReviewsClientOptions {
  issuerId: string;
  keyId: string;
  privateKey?: string;
  appId: string;
  apiBaseUrl?: string;
  jwtFactory?: () => string | Promise<string>;
  fetch?: typeof fetch;
}

export interface AppStoreCredentialStatusInput {
  issuerId?: string;
  keyId?: string;
  privateKeyConfigured?: boolean;
  appId?: string;
  responsePolicyConfigured?: boolean;
  expiresAt?: string;
}

export interface AppStoreListReviewsInput {
  limit?: number;
  sort?: "createdDate" | "-createdDate" | "rating" | "-rating" | (string & {});
  fields?: Partial<Record<AppStoreReviewFieldResource, string[]>>;
  filter?: Partial<Record<AppStoreReviewFilter, string | string[]>>;
  include?: AppStoreReviewInclude[];
  cursor?: string;
}

export type AppStoreReviewInclude = "response" | (string & {});
export type AppStoreReviewFilter = "rating" | "territory" | "existsPublishedResponse" | (string & {});
export type AppStoreReviewFieldResource = "apps" | "customerReviews" | "customerReviewResponses" | (string & {});

export interface AppStoreJsonApiResource<
  TType extends string = string,
  TAttributes extends object = AppStoreReviewsJsonObject,
  TRelationships extends object = AppStoreReviewsJsonObject,
> {
  type: TType;
  id: string;
  attributes?: TAttributes;
  relationships?: TRelationships;
  links?: { self?: string } & AppStoreReviewsJsonObject;
}

export interface AppStoreCustomerReviewAttributes {
  rating?: number;
  title?: string;
  body?: string;
  reviewerNickname?: string;
  createdDate?: string;
  territory?: string;
  appVersionString?: string;
  [providerField: string]: AppStoreReviewsProviderExtensionValue;
}

export interface AppStoreCustomerReviewRelationships {
  response?: {
    data?: AppStoreRelationshipData<"customerReviewResponses"> | null;
    links?: AppStoreRelationshipLinks;
  };
  [providerField: string]: AppStoreReviewsProviderExtensionValue;
}

export interface AppStoreCustomerReviewResponseAttributes {
  responseBody?: string;
  lastModifiedDate?: string;
  state?: string;
  [providerField: string]: AppStoreReviewsProviderExtensionValue;
}

export interface AppStoreCustomerReviewResponseRelationships {
  review?: {
    data?: AppStoreRelationshipData<"customerReviews"> | null;
    links?: AppStoreRelationshipLinks;
  };
  [providerField: string]: AppStoreReviewsProviderExtensionValue;
}

export interface AppStoreAppAttributes {
  name?: string;
  bundleId?: string;
  sku?: string;
  primaryLocale?: string;
  [providerField: string]: AppStoreReviewsProviderExtensionValue;
}

export interface AppStoreRelationshipData<TType extends string = string> {
  type: TType;
  id: string;
}

export interface AppStoreRelationshipLinks {
  self?: string;
  related?: string;
}

export type AppStoreCustomerReviewResource = AppStoreJsonApiResource<
  "customerReviews",
  AppStoreCustomerReviewAttributes,
  AppStoreCustomerReviewRelationships
>;

export type AppStoreCustomerReviewResponseResource = AppStoreJsonApiResource<
  "customerReviewResponses",
  AppStoreCustomerReviewResponseAttributes,
  AppStoreCustomerReviewResponseRelationships
>;

export type AppStoreAppResource = AppStoreJsonApiResource<"apps", AppStoreAppAttributes>;

export interface AppStoreResourceDocument<
  TData extends AppStoreReviewsProviderExtensionValue = AppStoreJsonApiResource | AppStoreJsonApiResource[] | undefined,
  TIncluded extends AppStoreReviewsProviderExtensionValue = AppStoreJsonApiResource,
> {
  data?: TData;
  included?: TIncluded[];
  links?: AppStorePagedDocumentLinks & AppStoreReviewsJsonObject;
  meta?: AppStoreReviewsJsonObject;
  [providerField: string]: AppStoreReviewsProviderExtensionValue;
}

export interface AppStorePagedDocumentLinks {
  self?: string;
  first?: string;
  next?: string;
}

export type AppStoreReviewsListResponse = AppStoreResourceDocument<
  AppStoreCustomerReviewResource[],
  AppStoreCustomerReviewResponseResource
>;
export type AppStoreReviewResponse = AppStoreResourceDocument<
  AppStoreCustomerReviewResource,
  AppStoreCustomerReviewResponseResource
>;
export type AppStoreCustomerReviewResponseDocument = AppStoreResourceDocument<AppStoreCustomerReviewResponseResource>;
export type AppStoreAppResponse = AppStoreResourceDocument<AppStoreAppResource>;

export interface AppStoreReviewResponseInput {
  reviewId: string;
  responseBody: string;
}

export interface AppStoreUpdateReviewResponseInput {
  reviewId: string;
  responseBody: string;
}

export type AppStoreHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface AppStoreResource {
  [key: string]: AppStoreReviewsProviderExtensionValue;
}

export interface AppStoreClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: AppStoreReviewsProviderQuery | undefined;
  body?: AppStoreReviewsProviderPayload | undefined;
}

export interface AppStoreOperationRequestInput extends AppStoreClientRequestInput {}

export interface AppStoreKnownOperationRequestMap {
  apps_customerReviews_getToManyRelated: AppStoreOperationRequestInput & {
    pathParams: { id: string };
    query?: AppStoreListReviewsInput;
  };
  customerReviews_getInstance: AppStoreOperationRequestInput & {
    pathParams: { id: string };
    query?: Pick<AppStoreListReviewsInput, "include" | "fields">;
  };
  customerReviewResponses_createInstance: AppStoreOperationRequestInput & {
    body: {
      data: {
        type: "customerReviewResponses";
        attributes?: { responseBody?: string };
        relationships?: AppStoreCustomerReviewResponseRelationships | AppStoreReviewsJsonObject;
      };
    };
  };
  customerReviewResponses_deleteInstance: AppStoreOperationRequestInput & { pathParams: { id: string } };
}

export interface AppStoreKnownOperationResponseMap {
  apps_customerReviews_getToManyRelated: AppStoreReviewsListResponse;
  customerReviews_getInstance: AppStoreReviewResponse;
  customerReviewResponses_createInstance: AppStoreCustomerReviewResponseDocument;
  customerReviewResponses_deleteInstance: void;
}

export type AppStoreKnownOperationId = keyof AppStoreKnownOperationRequestMap;

export interface AppStoreReviewsClient {
  fullApi: AppStoreFullApiGeneratedClient;
  requestOperation: AppStoreGeneratedOperationCaller;
  listReviews(input?: AppStoreListReviewsInput): Promise<AppStoreReviewsListResponse>;
  listReviewsPage(pageUrl: string): Promise<AppStoreReviewsListResponse>;
  getReview(reviewId: string, input?: Pick<AppStoreListReviewsInput, "include" | "fields">): Promise<AppStoreReviewResponse>;
  createOrUpdateReviewResponse(input: AppStoreReviewResponseInput): Promise<AppStoreCustomerReviewResponseDocument>;
  updateReviewResponse(input: AppStoreUpdateReviewResponseInput): Promise<AppStoreCustomerReviewResponseDocument>;
  deleteReviewResponse(responseId: string): Promise<void>;
  getApp(): Promise<AppStoreAppResponse>;
}

export interface AppStoreLiveCheckOptions extends AppStoreReviewsClientOptions {
  client?: Pick<AppStoreReviewsClient, "getApp">;
}

export interface AppStoreJwtOptions {
  issuerId: string;
  keyId: string;
  privateKey: string;
  audience?: string;
  ttlSeconds?: number;
  now?: () => number;
  jti?: string;
}
