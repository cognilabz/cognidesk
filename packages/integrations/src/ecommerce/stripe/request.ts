import type { StripeFormValue, StripeResource } from "./contracts.js";

export function appendStripeParams(params: URLSearchParams, input?: object, prefix?: string) {
  if (!input) return;
  for (const [key, value] of Object.entries(input as Record<string, StripeFormValue>)) {
    appendStripeParam(params, prefix ? `${prefix}[${key}]` : key, value);
  }
}

function appendStripeParam(params: URLSearchParams, key: string, value: StripeFormValue) {
  if (value === undefined || value === null) return;
  if (Array.isArray(value)) {
    value.forEach((item, index) => appendStripeParam(params, `${key}[${index}]`, item));
    return;
  }
  if (typeof value === "object") {
    appendStripeParams(params, value as Record<string, StripeFormValue>, key);
    return;
  }
  params.append(key, String(value));
}

export function stripeOperationPath(pathTemplate: string, pathParams: Record<string, string | number | boolean | undefined>) {
  return pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined || value === "") {
      throw new Error(`Stripe operation path parameter '${key}' is required for '${pathTemplate}'.`);
    }
    return encodeURIComponent(String(value));
  });
}

export function stripeErrorMessage(body: StripeResource, status: number) {
  const error = body.error as { message?: string; type?: string; code?: string } | undefined;
  if (error?.message) return `Stripe API ${status}: ${error.message}`;
  return `Stripe API returned ${status}.`;
}
