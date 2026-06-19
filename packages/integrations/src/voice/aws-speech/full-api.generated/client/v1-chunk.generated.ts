// Generated endpoint chunk for AwsSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AwsSpeechGeneratedOperationCaller,
  AwsSpeechFullApiOperationArgs,
  AwsSpeechFullApiOperationInput,
  AwsSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AwsSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AwsSpeechFullApiV1OperationKeys = [
  "polly:DeleteLexicon",
  "polly:DescribeVoices",
  "polly:GetLexicon",
  "polly:GetSpeechSynthesisTask",
  "polly:ListLexicons",
  "polly:ListSpeechSynthesisTasks",
  "polly:PutLexicon",
  "polly:StartSpeechSynthesisStream",
  "polly:StartSpeechSynthesisTask",
  "polly:SynthesizeSpeech"
] as const;
export type AwsSpeechFullApiV1OperationKey = typeof AwsSpeechFullApiV1OperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiV1OperationPathParamMap {
  "polly:DeleteLexicon": { "Name": AwsSpeechFullApiPathParamValue };
  "polly:DescribeVoices": {};
  "polly:GetLexicon": { "Name": AwsSpeechFullApiPathParamValue };
  "polly:GetSpeechSynthesisTask": { "TaskId": AwsSpeechFullApiPathParamValue };
  "polly:ListLexicons": {};
  "polly:ListSpeechSynthesisTasks": {};
  "polly:PutLexicon": { "Name": AwsSpeechFullApiPathParamValue };
  "polly:StartSpeechSynthesisStream": {};
  "polly:StartSpeechSynthesisTask": {};
  "polly:SynthesizeSpeech": {};
}

export interface AwsSpeechFullApiV1OperationRequestMap {
  "polly:DeleteLexicon": AwsSpeechFullApiOperationInput<"polly:DeleteLexicon">;
  "polly:DescribeVoices": AwsSpeechFullApiOperationInput<"polly:DescribeVoices">;
  "polly:GetLexicon": AwsSpeechFullApiOperationInput<"polly:GetLexicon">;
  "polly:GetSpeechSynthesisTask": AwsSpeechFullApiOperationInput<"polly:GetSpeechSynthesisTask">;
  "polly:ListLexicons": AwsSpeechFullApiOperationInput<"polly:ListLexicons">;
  "polly:ListSpeechSynthesisTasks": AwsSpeechFullApiOperationInput<"polly:ListSpeechSynthesisTasks">;
  "polly:PutLexicon": AwsSpeechFullApiOperationInput<"polly:PutLexicon">;
  "polly:StartSpeechSynthesisStream": AwsSpeechFullApiOperationInput<"polly:StartSpeechSynthesisStream">;
  "polly:StartSpeechSynthesisTask": AwsSpeechFullApiOperationInput<"polly:StartSpeechSynthesisTask">;
  "polly:SynthesizeSpeech": AwsSpeechFullApiOperationInput<"polly:SynthesizeSpeech">;
}

export interface AwsSpeechFullApiV1GeneratedClient {
  PollyDeleteLexicon(...args: AwsSpeechFullApiOperationArgs<"polly:DeleteLexicon">): Promise<AwsSpeechFullApiOperationResponseMap["polly:DeleteLexicon"]>;
  PollyDescribeVoices(...args: AwsSpeechFullApiOperationArgs<"polly:DescribeVoices">): Promise<AwsSpeechFullApiOperationResponseMap["polly:DescribeVoices"]>;
  PollyGetLexicon(...args: AwsSpeechFullApiOperationArgs<"polly:GetLexicon">): Promise<AwsSpeechFullApiOperationResponseMap["polly:GetLexicon"]>;
  PollyGetSpeechSynthesisTask(...args: AwsSpeechFullApiOperationArgs<"polly:GetSpeechSynthesisTask">): Promise<AwsSpeechFullApiOperationResponseMap["polly:GetSpeechSynthesisTask"]>;
  PollyListLexicons(...args: AwsSpeechFullApiOperationArgs<"polly:ListLexicons">): Promise<AwsSpeechFullApiOperationResponseMap["polly:ListLexicons"]>;
  PollyListSpeechSynthesisTasks(...args: AwsSpeechFullApiOperationArgs<"polly:ListSpeechSynthesisTasks">): Promise<AwsSpeechFullApiOperationResponseMap["polly:ListSpeechSynthesisTasks"]>;
  PollyPutLexicon(...args: AwsSpeechFullApiOperationArgs<"polly:PutLexicon">): Promise<AwsSpeechFullApiOperationResponseMap["polly:PutLexicon"]>;
  PollyStartSpeechSynthesisStream(...args: AwsSpeechFullApiOperationArgs<"polly:StartSpeechSynthesisStream">): Promise<AwsSpeechFullApiOperationResponseMap["polly:StartSpeechSynthesisStream"]>;
  PollyStartSpeechSynthesisTask(...args: AwsSpeechFullApiOperationArgs<"polly:StartSpeechSynthesisTask">): Promise<AwsSpeechFullApiOperationResponseMap["polly:StartSpeechSynthesisTask"]>;
  PollySynthesizeSpeech(...args: AwsSpeechFullApiOperationArgs<"polly:SynthesizeSpeech">): Promise<AwsSpeechFullApiOperationResponseMap["polly:SynthesizeSpeech"]>;
}

export const AwsSpeechFullApiV1GeneratedFunctionNames = [
  "PollyDeleteLexicon",
  "PollyDescribeVoices",
  "PollyGetLexicon",
  "PollyGetSpeechSynthesisTask",
  "PollyListLexicons",
  "PollyListSpeechSynthesisTasks",
  "PollyPutLexicon",
  "PollyStartSpeechSynthesisStream",
  "PollyStartSpeechSynthesisTask",
  "PollySynthesizeSpeech"
] as const satisfies readonly (keyof AwsSpeechFullApiV1GeneratedClient)[];

export function createAwsSpeechFullApiV1GeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiV1GeneratedClient {
  return {
    PollyDeleteLexicon: (...args) => callOperation("polly:DeleteLexicon", ...(args as AwsSpeechFullApiOperationArgs<"polly:DeleteLexicon">)),
    PollyDescribeVoices: (...args) => callOperation("polly:DescribeVoices", ...(args as AwsSpeechFullApiOperationArgs<"polly:DescribeVoices">)),
    PollyGetLexicon: (...args) => callOperation("polly:GetLexicon", ...(args as AwsSpeechFullApiOperationArgs<"polly:GetLexicon">)),
    PollyGetSpeechSynthesisTask: (...args) => callOperation("polly:GetSpeechSynthesisTask", ...(args as AwsSpeechFullApiOperationArgs<"polly:GetSpeechSynthesisTask">)),
    PollyListLexicons: (...args) => callOperation("polly:ListLexicons", ...(args as AwsSpeechFullApiOperationArgs<"polly:ListLexicons">)),
    PollyListSpeechSynthesisTasks: (...args) => callOperation("polly:ListSpeechSynthesisTasks", ...(args as AwsSpeechFullApiOperationArgs<"polly:ListSpeechSynthesisTasks">)),
    PollyPutLexicon: (...args) => callOperation("polly:PutLexicon", ...(args as AwsSpeechFullApiOperationArgs<"polly:PutLexicon">)),
    PollyStartSpeechSynthesisStream: (...args) => callOperation("polly:StartSpeechSynthesisStream", ...(args as AwsSpeechFullApiOperationArgs<"polly:StartSpeechSynthesisStream">)),
    PollyStartSpeechSynthesisTask: (...args) => callOperation("polly:StartSpeechSynthesisTask", ...(args as AwsSpeechFullApiOperationArgs<"polly:StartSpeechSynthesisTask">)),
    PollySynthesizeSpeech: (...args) => callOperation("polly:SynthesizeSpeech", ...(args as AwsSpeechFullApiOperationArgs<"polly:SynthesizeSpeech">)),
  };
}
