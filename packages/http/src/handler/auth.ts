import { json, responseWithCors, type ResponseOptions } from "../responses.js";
import type { CognideskHttpAuthorizeInput, CognideskHttpHandlerOptions } from "../types.js";

export async function authorizeRequest(
  options: CognideskHttpHandlerOptions,
  input: CognideskHttpAuthorizeInput,
  responseOptions: ResponseOptions,
) {
  if (!options.authorize) return undefined;
  const result = await options.authorize(input);
  if (result === true) return undefined;
  if (result instanceof Response) return responseWithCors(result, responseOptions);
  return json({ error: "Unauthorized" }, 401, responseOptions);
}
