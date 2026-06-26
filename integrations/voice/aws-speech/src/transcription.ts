import type {
  AwsTranscribeSpeechInput,
  AwsTranscribeSpeechResult,
  AwsTranscribeStreamingAudioStreamEvent,
  AwsTranscribeStreamingCommandInput,
  AwsTranscribeStreamingCommandOutput,
  AwsTranscribeStreamingResponseEvent,
} from "./contracts.js";

interface AwsTranscriptSegment {
  text: string;
  resultId?: string;
  startedAtSeconds?: number;
  endedAtSeconds?: number;
}

export function awsTranscribeStreamingCommandInput(input: AwsTranscribeSpeechInput): AwsTranscribeStreamingCommandInput {
  const languageSelectors = [
    input.languageCode !== undefined,
    input.identifyLanguage === true,
    input.identifyMultipleLanguages === true,
  ].filter(Boolean).length;
  if (languageSelectors > 1) {
    throw new Error("Amazon Transcribe requires exactly one language selector: languageCode, identifyLanguage, or identifyMultipleLanguages.");
  }
  return {
    AudioStream: awsAudioEventStream(input.audio),
    MediaEncoding: input.mediaEncoding ?? "pcm",
    MediaSampleRateHertz: input.sampleRate ?? 16_000,
    ...(input.languageCode !== undefined || languageSelectors === 0 ? { LanguageCode: input.languageCode ?? "en-US" } : {}),
    ...(input.identifyLanguage !== undefined ? { IdentifyLanguage: input.identifyLanguage } : {}),
    ...(input.identifyMultipleLanguages !== undefined ? { IdentifyMultipleLanguages: input.identifyMultipleLanguages } : {}),
    ...(input.languageOptions !== undefined ? { LanguageOptions: input.languageOptions.join(",") } : {}),
    ...(input.preferredLanguage !== undefined ? { PreferredLanguage: input.preferredLanguage } : {}),
    ...(input.vocabularyName !== undefined ? { VocabularyName: input.vocabularyName } : {}),
    ...(input.vocabularyNames !== undefined ? { VocabularyNames: input.vocabularyNames.join(",") } : {}),
    ...(input.vocabularyFilterName !== undefined ? { VocabularyFilterName: input.vocabularyFilterName } : {}),
    ...(input.vocabularyFilterNames !== undefined ? { VocabularyFilterNames: input.vocabularyFilterNames.join(",") } : {}),
    ...(input.vocabularyFilterMethod !== undefined ? { VocabularyFilterMethod: input.vocabularyFilterMethod } : {}),
    ...(input.sessionId !== undefined ? { SessionId: input.sessionId } : {}),
    ...(input.showSpeakerLabel !== undefined ? { ShowSpeakerLabel: input.showSpeakerLabel } : {}),
    ...(input.enableChannelIdentification !== undefined ? { EnableChannelIdentification: input.enableChannelIdentification } : {}),
    ...(input.numberOfChannels !== undefined ? { NumberOfChannels: input.numberOfChannels } : {}),
    ...(input.enablePartialResultsStabilization !== undefined
      ? { EnablePartialResultsStabilization: input.enablePartialResultsStabilization }
      : {}),
    ...(input.partialResultsStability !== undefined ? { PartialResultsStability: input.partialResultsStability } : {}),
    ...(input.contentIdentificationType !== undefined ? { ContentIdentificationType: input.contentIdentificationType } : {}),
    ...(input.contentRedactionType !== undefined ? { ContentRedactionType: input.contentRedactionType } : {}),
    ...(input.piiEntityTypes !== undefined ? { PiiEntityTypes: input.piiEntityTypes.join(",") } : {}),
    ...(input.languageModelName !== undefined ? { LanguageModelName: input.languageModelName } : {}),
    ...(input.sessionResumeWindow !== undefined ? { SessionResumeWindow: input.sessionResumeWindow } : {}),
  };
}

export async function collectAwsTranscript(response: AwsTranscribeStreamingCommandOutput): Promise<AwsTranscribeSpeechResult | null> {
  const segments: AwsTranscriptSegment[] = [];
  const resultIds: string[] = [];
  let resultCount = 0;

  for await (const event of response.TranscriptResultStream ?? emptyAsyncIterable<AwsTranscribeStreamingResponseEvent>()) {
    const exceptionMessage = transcribeStreamingExceptionMessage(event);
    if (exceptionMessage) throw new Error(exceptionMessage);
    for (const result of event.TranscriptEvent?.Transcript?.Results ?? []) {
      resultCount += 1;
      if (result.IsPartial) continue;
      const text = result.Alternatives
        ?.map((alternative) => alternative.Transcript?.trim())
        .find((candidate): candidate is string => Boolean(candidate));
      if (!text) continue;
      if (result.ResultId) resultIds.push(result.ResultId);
      segments.push({
        text,
        ...(result.ResultId ? { resultId: result.ResultId } : {}),
        ...(result.StartTime !== undefined ? { startedAtSeconds: result.StartTime } : {}),
        ...(result.EndTime !== undefined ? { endedAtSeconds: result.EndTime } : {}),
      });
    }
  }

  const text = segments.map((segment) => segment.text).join(" ").trim();
  if (!text) return null;
  const firstSegment = segments[0];
  const lastSegment = segments.at(-1);
  return {
    text,
    ...(lastSegment?.resultId ? { resultId: lastSegment.resultId } : {}),
    ...(resultIds.length > 0 ? { resultIds } : {}),
    ...(response.LanguageCode ? { languageCode: response.LanguageCode } : {}),
    ...(firstSegment?.startedAtSeconds !== undefined ? { startedAtSeconds: firstSegment.startedAtSeconds } : {}),
    ...(lastSegment?.endedAtSeconds !== undefined ? { endedAtSeconds: lastSegment.endedAtSeconds } : {}),
    resultCount,
  };
}

async function* awsAudioEventStream(audio: Uint8Array): AsyncIterable<AwsTranscribeStreamingAudioStreamEvent> {
  if (audio.byteLength === 0) return;
  yield {
    AudioEvent: {
      AudioChunk: audio,
    },
  };
}

async function* emptyAsyncIterable<T>(): AsyncIterable<T> {
  return;
}

function transcribeStreamingExceptionMessage(event: AwsTranscribeStreamingResponseEvent) {
  const exception =
    event.BadRequestException
    ?? event.ConflictException
    ?? event.InternalFailureException
    ?? event.LimitExceededException
    ?? event.ServiceUnavailableException;
  if (!exception) return undefined;
  return exception.Message ?? exception.message ?? "Amazon Transcribe Streaming returned an exception event.";
}
