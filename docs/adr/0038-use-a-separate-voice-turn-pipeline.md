# Use a separate voice turn pipeline

Cognidesk Voice Conversations will use a realtime-optimized Voice Turn Pipeline instead of running the existing chat-oriented turn pipeline behind every spoken exchange. Voice still shares Agent, Journey, Tool, Knowledge, Conversation, Runtime Event, and Snapshot concepts with chat, but live listening, speaking, interruption handling, and low-latency tool-call proposals belong to a voice-specific runtime path so voice interactions remain responsive.
