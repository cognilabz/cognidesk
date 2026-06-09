---
status: accepted
---

# Use real Realtime agent-to-agent voice tests

The opt-in voice integration suite will include an end-to-end Voice Agent-to-Agent Test that uses two real OpenAI Realtime voice sessions: one for the Cognidesk Voice Agent path and one for a simulated customer. The harness bridges audio between the two sessions and validates durable Cognidesk transcripts and Runtime Events, so the test exercises realtime audio, turn-taking, and provider integration rather than only text simulation or mocked protocol events.
