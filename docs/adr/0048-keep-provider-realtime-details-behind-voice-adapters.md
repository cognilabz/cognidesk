# Keep provider realtime details behind voice adapters

Cognidesk Core will expose voice concepts through SDK-owned abstractions such as Voice Profile, Voice Model Set, Voice Connection Adapter, Voice Control Channel, and Voice Recording Policy. OpenAI Realtime specifics such as `gpt-realtime-2`, voice names, reasoning effort, VAD settings, raw session overrides, and provider event names belong in the OpenAI voice adapter or an explicit Voice Provider Escape Hatch rather than the normal Core API.
