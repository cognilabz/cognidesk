import { describe, expect, it } from "vitest";
import {
  defaultVoiceMediaConstraints,
  isVoicePlaybackActive,
  shouldSuppressVoiceCapture,
} from "../src/use-voice.js";

describe("useVoice capture safeguards", () => {
  it("requests browser echo safeguards by default", () => {
    expect(defaultVoiceMediaConstraints()).toEqual({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });
    expect(defaultVoiceMediaConstraints()).not.toBe(defaultVoiceMediaConstraints());
  });

  it("detects queued assistant playback with a small lead window", () => {
    expect(isVoicePlaybackActive({ currentTime: 1, playbackUntil: 1.2 })).toBe(true);
    expect(isVoicePlaybackActive({ currentTime: 1, playbackUntil: 1.03 })).toBe(false);
    expect(isVoicePlaybackActive({ playbackUntil: 1.2 })).toBe(false);
  });

  it("suppresses microphone frames while muted or assistant playback is active", () => {
    expect(shouldSuppressVoiceCapture({ muted: true, currentTime: 1, playbackUntil: 1 })).toBe(true);
    expect(shouldSuppressVoiceCapture({ muted: false, currentTime: 1, playbackUntil: 1.2 })).toBe(true);
    expect(shouldSuppressVoiceCapture({ muted: false, currentTime: 1, playbackUntil: 1.2, suppressDuringPlayback: false })).toBe(false);
    expect(shouldSuppressVoiceCapture({ muted: false, currentTime: 1, playbackUntil: 1.03 })).toBe(false);
  });
});
