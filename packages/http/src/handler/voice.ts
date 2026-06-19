export function withVoiceEventsUrl<T extends { conversation: { id: string } }>(result: T, basePath: string) {
  return {
    ...result,
    eventsUrl: `${basePath}/conversations/${encodeURIComponent(result.conversation.id)}/events/stream`,
  };
}
