# Use the official OpenAI SDK in the OpenAI voice adapter

`@cognidesk/integrations/voice/openai` will use the official OpenAI JavaScript/TypeScript SDK for Realtime session, call, and control-channel integration where the SDK exposes the needed APIs. The OpenAI SDK remains contained inside the adapter package so Core, React, Voice Profiles, and Voice Connection Adapter contracts continue to expose Cognidesk-owned types rather than provider SDK objects.
