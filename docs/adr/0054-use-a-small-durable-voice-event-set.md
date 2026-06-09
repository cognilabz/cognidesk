# Use a small durable voice event set

Cognidesk v1 voice support will add a small set of durable Runtime Events for voice-specific history: `voice.segment.started`, `voice.segment.ended`, `voice.connection.failed`, `voice.interrupted`, `voice.recording.started`, `voice.recording.completed`, and `voice.transcript.committed`. Existing `message.*`, `tool.*`, `knowledge.*`, `journey.*`, and lifecycle events remain responsible for the shared conversation behavior, while high-frequency provider and media signals stay outside the durable Event Stream.

Final voice transcript text is still persisted through canonical `message.completed` events so existing chat, replay, eval, and compaction consumers see a normal conversation transcript. `voice.transcript.committed` records voice-specific metadata such as Channel Segment, speaker, recording offsets or timestamps when available, transcription source, and the linked message event id.
