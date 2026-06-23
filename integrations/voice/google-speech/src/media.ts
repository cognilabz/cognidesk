export function languageFromVoiceName(voiceName: string) {
  const match = /^([a-z]{2,3}(?:-[A-Za-z]{4})?-[A-Z]{2,3})/.exec(voiceName);
  return match?.[1];
}

export function stripWavHeader(audio: ArrayBuffer): ArrayBuffer {
  const bytes = new Uint8Array(audio);
  if (bytes.byteLength < 44) return audio;
  if (asciiAt(bytes, 0, "RIFF") !== true || asciiAt(bytes, 8, "WAVE") !== true) return audio;
  let offset = 12;
  while (offset + 8 <= bytes.byteLength) {
    const chunkSize = readUint32Le(bytes, offset + 4);
    const dataStart = offset + 8;
    if (asciiAt(bytes, offset, "data")) {
      const dataEnd = Math.min(dataStart + chunkSize, bytes.byteLength);
      return arrayBufferFromBytes(bytes.slice(dataStart, dataEnd));
    }
    offset = dataStart + chunkSize + chunkSize % 2;
  }
  return audio;
}

export function bytesFromBase64(value: string) {
  return new Uint8Array(Buffer.from(value, "base64"));
}

export function base64FromBytes(value: Uint8Array) {
  return Buffer.from(value).toString("base64");
}

export function arrayBufferFromBytes(bytes: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy.buffer;
}

function asciiAt(bytes: Uint8Array, offset: number, value: string) {
  for (let index = 0; index < value.length; index += 1) {
    if (bytes[offset + index] !== value.charCodeAt(index)) return false;
  }
  return true;
}

function readUint32Le(bytes: Uint8Array, offset: number) {
  return (bytes[offset] ?? 0)
    | ((bytes[offset + 1] ?? 0) << 8)
    | ((bytes[offset + 2] ?? 0) << 16)
    | ((bytes[offset + 3] ?? 0) << 24);
}
