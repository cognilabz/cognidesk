import { z } from "zod";
import type { ConnectionJsonValue } from "./types.js";

export const defaultConnectionInputSchema = z.object({
  path: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
  query: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null(), z.undefined()])).optional(),
  headers: z.record(z.string(), z.string()).optional(),
  body: z.lazy((): z.ZodType<ConnectionJsonValue> => connectionJsonSchema).optional(),
}).passthrough();

const connectionJsonSchema: z.ZodType<ConnectionJsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(connectionJsonSchema),
    z.record(z.string(), connectionJsonSchema),
  ]),
);
