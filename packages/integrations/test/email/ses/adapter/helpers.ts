import type { SesCryptoProvider } from "../../../../src/email/ses/index.js";

export const deterministicCrypto: SesCryptoProvider = {
  async sha256Hex(input) {
    return `hash-${input.length}`.padEnd(64, "0").slice(0, 64);
  },
  async hmacSha256(_key, input) {
    return new Uint8Array(Array.from({ length: 32 }, (_, index) => (input.charCodeAt(index % input.length) + index) % 256));
  },
};
