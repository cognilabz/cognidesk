import type {
  SesCryptoProvider,
  SesEmailClientOptions,
  SesHttpMethod,
} from "./contracts.js";

export async function signSesRequest(input: {
  method: SesHttpMethod;
  url: string;
  body: string;
  options: SesEmailClientOptions;
  contentType?: string;
  headers?: Record<string, string>;
}): Promise<Record<string, string>> {
  const cryptoProvider = input.options.crypto ?? webCryptoProvider();
  const requestDate = input.options.now?.() ?? new Date();
  const amzDate = toAmzDate(requestDate);
  const dateStamp = amzDate.slice(0, 8);
  const url = new URL(input.url);
  const payloadHash = await cryptoProvider.sha256Hex(input.body);
  const headers: Record<string, string> = {
    accept: "application/json",
    host: url.host,
    "x-amz-date": amzDate,
    "x-amz-content-sha256": payloadHash,
    ...(input.headers ?? {}),
  };
  if (input.body) headers["content-type"] = input.contentType ?? "application/json";
  if (input.options.sessionToken) headers["x-amz-security-token"] = input.options.sessionToken;

  const signedHeaderNames = Object.keys(headers).map((header) => header.toLowerCase()).sort();
  const canonicalHeaders = signedHeaderNames
    .map((name) => `${name}:${normalizeHeaderValue(headers[name] ?? headers[headerKey(headers, name)] ?? "")}\n`)
    .join("");
  const signedHeaders = signedHeaderNames.join(";");
  const canonicalRequest = [
    input.method,
    url.pathname || "/",
    canonicalQueryString(url),
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join("\n");
  const credentialScope = `${dateStamp}/${input.options.region}/ses/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    await cryptoProvider.sha256Hex(canonicalRequest),
  ].join("\n");
  const signingKey = await deriveSigningKey(cryptoProvider, input.options.secretAccessKey, dateStamp, input.options.region);
  const signature = toHex(await cryptoProvider.hmacSha256(signingKey, stringToSign));

  return {
    ...headers,
    authorization: `AWS4-HMAC-SHA256 Credential=${input.options.accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`,
  };
}

async function deriveSigningKey(
  cryptoProvider: SesCryptoProvider,
  secretAccessKey: string,
  dateStamp: string,
  region: string,
): Promise<Uint8Array> {
  const dateKey = await cryptoProvider.hmacSha256(`AWS4${secretAccessKey}`, dateStamp);
  const dateRegionKey = await cryptoProvider.hmacSha256(dateKey, region);
  const dateRegionServiceKey = await cryptoProvider.hmacSha256(dateRegionKey, "ses");
  return await cryptoProvider.hmacSha256(dateRegionServiceKey, "aws4_request");
}

function webCryptoProvider(): SesCryptoProvider {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new Error("Web Crypto is required for AWS Signature Version 4 signing. Provide options.crypto in this runtime.");
  }
  return {
    async sha256Hex(input) {
      const digest = await subtle.digest("SHA-256", toArrayBuffer(utf8(input)));
      return toHex(new Uint8Array(digest));
    },
    async hmacSha256(key, input) {
      const cryptoKey = await subtle.importKey(
        "raw",
        toArrayBuffer(typeof key === "string" ? utf8(key) : key),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"],
      );
      const signature = await subtle.sign("HMAC", cryptoKey, toArrayBuffer(utf8(input)));
      return new Uint8Array(signature);
    },
  };
}

function canonicalQueryString(url: URL): string {
  return [...url.searchParams.entries()]
    .sort(([leftName, leftValue], [rightName, rightValue]) =>
      leftName === rightName ? leftValue.localeCompare(rightValue) : leftName.localeCompare(rightName)
    )
    .map(([name, value]) => `${awsEncode(name)}=${awsEncode(value)}`)
    .join("&");
}

function toAmzDate(date: Date): string {
  return date.toISOString().replace(/[:-]|\.\d{3}/g, "");
}

function normalizeHeaderValue(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

function headerKey(headers: Record<string, string>, lowerCaseName: string): string {
  return Object.keys(headers).find((key) => key.toLowerCase() === lowerCaseName) ?? lowerCaseName;
}

function awsEncode(value: string): string {
  return encodeURIComponent(value).replace(/[!'()*]/g, (char) =>
    `%${char.charCodeAt(0).toString(16).toUpperCase()}`
  );
}

function utf8(input: string): Uint8Array {
  return new TextEncoder().encode(input);
}

function toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  const buffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(buffer).set(bytes);
  return buffer;
}

function toHex(bytes: Uint8Array): string {
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
