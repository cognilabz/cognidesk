# Record voice interruptions as runtime events

Cognidesk will persist Voice Interruptions as their own Runtime Events instead of relying only on aborted assistant messages or live adapter signals. This keeps user barge-in behavior inspectable and replayable even when no assistant text message has started, while the existing aborted-message event remains responsible for recording any assistant output that was stopped by the interruption.
