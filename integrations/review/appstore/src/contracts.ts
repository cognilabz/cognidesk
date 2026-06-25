import type { ProviderJsonRetryOptions } from "@cognidesk/integration-kit";

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

export interface AppStoreReviewsClientOptions {
  appId: string;
  providerClient?: AppStoreReviewsProviderClient;
  issuerId?: string;
  keyId?: string;
  privateKey?: string;
  accessToken?: string;
  getJwt?: () => string | Promise<string>;
  baseUrl?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
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

export interface AppStoreCustomerReviewResponseAttributes {
  responseBody?: string;
  lastModifiedDate?: string;
  state?: string;
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

export interface AppStoreCustomerReviewRelationships {
  response?: {
    data?: AppStoreRelationshipData<"customerReviewResponses"> | null;
    links?: AppStoreRelationshipLinks;
  };
  [providerField: string]: AppStoreReviewsProviderExtensionValue;
}

export interface AppStoreCustomerReviewResponseRelationships {
  review?: {
    data?: AppStoreRelationshipData<"customerReviews"> | null;
    links?: AppStoreRelationshipLinks;
  };
  [providerField: string]: AppStoreReviewsProviderExtensionValue;
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

export interface AppStorePagedDocumentLinks {
  self?: string;
  first?: string;
  next?: string;
}

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

export interface AppStoreRawRequestInput {
  method: AppStoreHttpMethod;
  path: string;
  query?: AppStoreReviewsProviderQuery;
  body?: AppStoreReviewsProviderPayload;
}

export type AppStoreHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface AppStoreReviewsProviderClient {
  listReviews(input?: AppStoreListReviewsInput): Promise<AppStoreReviewsListResponse>;
  listReviewsPage(pageUrl: string): Promise<AppStoreReviewsListResponse>;
  getReview(reviewId: string, input?: Pick<AppStoreListReviewsInput, "include" | "fields">): Promise<AppStoreReviewResponse>;
  createOrUpdateReviewResponse(input: AppStoreReviewResponseInput): Promise<AppStoreCustomerReviewResponseDocument>;
  deleteReviewResponse(responseId: string): Promise<void>;
  getApp(): Promise<AppStoreAppResponse>;
}

export interface AppStoreReviewsClient extends AppStoreReviewsProviderClient {
  providerClient: AppStoreReviewsProviderClient;
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
