# Use a separate voice model set

Cognidesk Voice Agents will use a Voice Model Set for realtime spoken interaction instead of requiring the chat-oriented Agent Model Set roles in the hot path. This lets voice configure models and settings such as `gpt-realtime-2`, voice, reasoning effort, turn detection, and interruption behavior for low latency while keeping chat matching, extraction, compaction, and embedding roles available only where a Voice Agent deliberately uses them outside the live exchange path.
