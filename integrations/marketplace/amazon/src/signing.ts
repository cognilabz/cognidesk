import { createHash, createHmac } from "node:crypto";

export function signAmazonSpApiRequest(input: {
  method: string;
  url: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
  service?: string;
  headers?: Record<string, string>;
  body?: string;
  now?: Date;
}): Record<string, string> {
  const service = input.service ?? "execute-api";
  const now = input.now ?? new Date();
  const amzDate = toAmzDate(now);
  const dateStamp = amzDate.slice(0, 8);
  const url = new URL(input.url);
  const headers = lowerCaseHeaders({
    host: url.host,
    "x-amz-date": amzDate,
    ...(input.sessionToken ? { "x-amz-security-token": input.sessionToken } : {}),
    ...input.headers,
  });
  const signedHeaderNames = Object.keys(headers).sort();
  const canonicalHeaders = signedHeaderNames.map((key) => `${key}:${headers[key]?.trim() ?? ""}\n`).join("");
  const canonicalRequest = [
    input.method.toUpperCase(),
    url.pathname || "/",
    canonicalQueryString(url),
    canonicalHeaders,
    signedHeaderNames.join(";"),
    createHash("sha256").update(input.body ?? "").digest("hex"),
  ].join("\n");
  const credentialScope = `${dateStamp}/${input.region}/${service}/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    createHash("sha256").update(canonicalRequest).digest("hex"),
  ].join("\n");
  const signature = hmac(
    hmac(hmac(hmac(`AWS4${input.secretAccessKey}`, dateStamp), input.region), service),
    "aws4_request",
    stringToSign,
    "hex",
  );
  return {
    ...headers,
    authorization: `AWS4-HMAC-SHA256 Credential=${input.accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaderNames.join(";")}, Signature=${signature}`,
  };
}

function canonicalQueryString(url: URL) {
  return [...url.searchParams.entries()]
    .sort(([leftKey, leftValue], [rightKey, rightValue]) =>
      leftKey === rightKey ? leftValue.localeCompare(rightValue) : leftKey.localeCompare(rightKey)
    )
    .map(([key, value]) => `${encodeRfc3986(key)}=${encodeRfc3986(value)}`)
    .join("&");
}

function encodeRfc3986(value: string) {
  return encodeURIComponent(value).replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}

function hmac(
  key: string | Buffer,
  value: string,
  finalValue?: string,
  encoding?: "hex",
): Buffer | string {
  const digest = createHmac("sha256", key).update(value).digest();
  if (finalValue === undefined) return digest;
  const finalDigest = createHmac("sha256", digest).update(finalValue).digest();
  return encoding ? finalDigest.toString(encoding) : finalDigest;
}

function toAmzDate(date: Date) {
  return date.toISOString().replace(/[:-]|\.\d{3}/g, "");
}

function lowerCaseHeaders(headers: Record<string, string | undefined>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers)) {
    if (value !== undefined) result[key.toLowerCase()] = value;
  }
  return result;
}
