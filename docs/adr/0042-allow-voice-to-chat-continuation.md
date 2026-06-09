# Allow voice-to-chat continuation within a conversation

Cognidesk Voice Conversations may continue into chat while retaining one durable conversation identity, but v1 does not treat chat-to-voice continuation as a default flow. Runtime Events should make Channel Segments and voice connection lifecycle inspectable, and the runtime should allow at most one active realtime voice connection for a Conversation by default so WebRTC, SIP, and future voice adapters can hand off cleanly into chat without creating a separate support case.

V1 does not support typed chat messages while a live Voice Connection is active. Chat continuation begins after the voice Channel Segment ends so turn ordering, interruption semantics, and realtime session context remain unambiguous.
