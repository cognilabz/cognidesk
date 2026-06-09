---
status: accepted
---

# Keep voice socket session mechanics outside Core

Voice socket token claiming, reconnect token rotation, media acknowledgements, accepted socket identity, and live provider connection handles will live in the Voice WebSocket Adapter layer and its Voice Session Store rather than in Core runtime storage. Core remains responsible for durable conversation semantics, Voice Profiles, Voice Channel Segment lifecycle, Final Voice Transcripts, Voice Interruptions, and Runtime Events.
