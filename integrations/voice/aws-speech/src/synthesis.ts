import type { SpeechPipelineSynthesis } from "./speech-pipeline.js";
import type { AwsPollyOutputFormat } from "./contracts.js";

export const DEFAULT_POLLY_PCM_SAMPLE_RATE = "16000";

export async function normalizePollyAudioStream(audioStream: unknown): Promise<SpeechPipelineSynthesis["audio"]> {
  if (audioStream instanceof ArrayBuffer) return audioStream;
  if (ArrayBuffer.isView(audioStream)) return copyArrayBufferView(audioStream);
  if (isReadableStream(audioStream)) return audioStream;
  if (isBlob(audioStream)) return audioStream.arrayBuffer();
  if (isTransformingSdkStream(audioStream)) {
    if (typeof audioStream.transformToWebStream === "function") {
      const stream = audioStream.transformToWebStream();
      if (isReadableStream(stream)) return stream;
    }
    if (typeof audioStream.transformToByteArray === "function") {
      return copyArrayBufferView(await audioStream.transformToByteArray());
    }
  }
  if (isAsyncIterable(audioStream)) {
    return readableStreamFromAsyncIterable(audioStream);
  }
  throw new Error("Amazon Polly AudioStream is not a supported binary stream type.");
}

export function defaultPollyCommandSampleRate(outputFormat: AwsPollyOutputFormat): { SampleRate: string } | Record<string, never> {
  return outputFormat === "pcm" ? { SampleRate: DEFAULT_POLLY_PCM_SAMPLE_RATE } : {};
}

export async function resamplePcm16Audio(
  audio: SpeechPipelineSynthesis["audio"],
  fromSampleRate: number,
  toSampleRate: number,
): Promise<SpeechPipelineSynthesis["audio"]> {
  assertPositiveFiniteSampleRate(fromSampleRate, "fromSampleRate");
  assertPositiveFiniteSampleRate(toSampleRate, "toSampleRate");
  if (fromSampleRate === toSampleRate) return audio;
  const bytes = await collectAudioBytes(audio);
  return resamplePcm16Bytes(bytes, fromSampleRate, toSampleRate);
}

function readableStreamFromAsyncIterable(iterable: AsyncIterable<unknown>): ReadableStream<Uint8Array> {
  const iterator = iterable[Symbol.asyncIterator]();
  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      const next = await iterator.next();
      if (next.done) {
        controller.close();
        return;
      }
      controller.enqueue(chunkToBytes(next.value));
    },
    async cancel() {
      await iterator.return?.();
    },
  });
}

function chunkToBytes(chunk: unknown): Uint8Array {
  if (typeof chunk === "string") return new TextEncoder().encode(chunk);
  if (chunk instanceof ArrayBuffer) return new Uint8Array(chunk);
  if (ArrayBuffer.isView(chunk)) return copyArrayBufferView(chunk);
  throw new Error("Amazon Polly stream yielded an unsupported chunk type.");
}

function copyArrayBufferView(view: ArrayBufferView): Uint8Array {
  const copy = new Uint8Array(view.byteLength);
  copy.set(new Uint8Array(view.buffer, view.byteOffset, view.byteLength));
  return copy;
}

async function collectAudioBytes(audio: SpeechPipelineSynthesis["audio"]): Promise<Uint8Array> {
  if (audio instanceof ArrayBuffer) return new Uint8Array(audio);
  if (audio instanceof Uint8Array) return audio;
  const chunks: Uint8Array[] = [];
  const reader = audio.getReader();
  try {
    while (true) {
      const next = await reader.read();
      if (next.done) break;
      chunks.push(next.value);
    }
  } finally {
    reader.releaseLock();
  }
  const total = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
  const output = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    output.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return output;
}

function resamplePcm16Bytes(bytes: Uint8Array, fromSampleRate: number, toSampleRate: number): Uint8Array {
  assertPositiveFiniteSampleRate(fromSampleRate, "fromSampleRate");
  assertPositiveFiniteSampleRate(toSampleRate, "toSampleRate");
  const inputSampleCount = Math.floor(bytes.byteLength / 2);
  if (inputSampleCount === 0) return new Uint8Array();
  const outputSampleCount = Math.max(1, Math.round(inputSampleCount * toSampleRate / fromSampleRate));
  const input = new DataView(bytes.buffer, bytes.byteOffset, inputSampleCount * 2);
  const output = new Uint8Array(outputSampleCount * 2);
  const outputView = new DataView(output.buffer);
  for (let outputIndex = 0; outputIndex < outputSampleCount; outputIndex += 1) {
    const sourceIndex = outputIndex * (fromSampleRate / toSampleRate);
    const lowerIndex = Math.floor(sourceIndex);
    const upperIndex = Math.min(inputSampleCount - 1, lowerIndex + 1);
    const ratio = sourceIndex - lowerIndex;
    const lower = input.getInt16(lowerIndex * 2, true);
    const upper = input.getInt16(upperIndex * 2, true);
    const sample = Math.round(lower + (upper - lower) * ratio);
    outputView.setInt16(outputIndex * 2, sample, true);
  }
  return output;
}

function assertPositiveFiniteSampleRate(value: number, name: string) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${name} must be a positive finite number.`);
  }
}

function isReadableStream(value: unknown): value is ReadableStream<Uint8Array> {
  return typeof ReadableStream !== "undefined" && value instanceof ReadableStream;
}

function isBlob(value: unknown): value is Blob {
  return typeof Blob !== "undefined" && value instanceof Blob;
}

function isAsyncIterable(value: unknown): value is AsyncIterable<unknown> {
  return typeof value === "object" && value !== null && Symbol.asyncIterator in value;
}

function isTransformingSdkStream(value: unknown): value is {
  transformToByteArray?: () => Promise<Uint8Array>;
  transformToWebStream?: () => ReadableStream<Uint8Array>;
} {
  return typeof value === "object" && value !== null
    && ("transformToByteArray" in value || "transformToWebStream" in value);
}
