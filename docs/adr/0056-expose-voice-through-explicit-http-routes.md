# Expose voice through explicit HTTP routes

Cognidesk v1 voice support will expose HTTP adapter routes separate from chat message submission routes. `POST /voice/conversations` creates a new Conversation and starts its first voice Channel Segment, while `POST /conversations/:id/voice-segments` starts a voice Channel Segment for an existing eligible Conversation; both return server-mediated WebRTC connection data plus the Conversation and Channel Segment identifiers.
