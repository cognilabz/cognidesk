# Separate voice connection end from conversation closure

Cognidesk will treat voice connection end as the end of a voice Channel Segment, not as Conversation Closure. Hangups, WebRTC disconnects, SIP call ends, and adapter failures should emit voice lifecycle events and leave the Cognidesk Conversation active by default so it can continue in chat unless explicit agent, tool, or application policy closes it.
