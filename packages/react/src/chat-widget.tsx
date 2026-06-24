import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Streamdown } from "streamdown";
import type { AppearanceConfiguration } from "@cognidesk/ui";
import {
  elementKeys,
  resolveElementClassName,
  resolveInlineStyle,
} from "@cognidesk/ui";
import { PENDING_PROMPT_DISPLAY_OFFSET, type ChatActivity, type ChatMessage } from "./event-reducer.js";
import { defaultWidgetRenderers } from "./default-widgets.js";
import { collectSupportSourceLinks, type SupportSourceLink } from "./support-references.js";
import type { ChatWidgetProps } from "./types.js";
import { useChat } from "./use-chat.js";

export function ChatWidget(props: ChatWidgetProps) {
  const chat = useChat(props);
  const [draft, setDraft] = useState("");
  const messageListRef = useRef<HTMLDivElement | null>(null);
  const appearance = props.appearance;
  const busy = chat.status === "starting" || chat.status === "sending";
  const hasStreamingText = chat.messages.some((message) => (
    message.role === "assistant" && message.status === "streaming" && message.text.length > 0
  ));
  const activities = chat.activities.length > 0
    ? chat.activities
    : busy && !hasStreamingText
      ? [{ id: "thinking", label: "Thinking", status: "running" as const }]
      : [];
  const widgets = useMemo(() => ({
    ...defaultWidgetRenderers,
    ...props.widgets,
  }), [props.widgets]);
  const timeline = useMemo(() => ([
    ...chat.messages.map((message) => ({
      type: "message" as const,
      id: message.id,
      offset: message.offset ?? Number.MAX_SAFE_INTEGER,
      message,
    })),
    ...chat.prompts
      .filter((prompt) => prompt.displayOffset !== PENDING_PROMPT_DISPLAY_OFFSET)
      .map((prompt) => ({
        type: "prompt" as const,
        id: prompt.promptId,
        offset: prompt.displayOffset ?? prompt.offset,
        originalOffset: prompt.offset,
        prompt,
      })),
  ].sort((left, right) => left.offset - right.offset || ("originalOffset" in left ? left.originalOffset : left.offset) - ("originalOffset" in right ? right.originalOffset : right.offset) || (left.type === "message" ? -1 : 1))), [chat.messages, chat.prompts]);
  const scrollKey = [
    chat.messages.map((message) => `${message.id}:${message.status}:${message.text.length}`).join("|"),
    chat.prompts.map((prompt) => `${prompt.promptId}:${prompt.status}:${JSON.stringify(prompt.output ?? null)}`).join("|"),
    chat.activities.map((activity) => `${activity.id}:${activity.status}`).join("|"),
  ].join("::");

  useEffect(() => {
    const messageList = messageListRef.current;
    if (!messageList) return;
    messageList.scrollTop = messageList.scrollHeight;
  }, [scrollKey]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const value = draft;
    setDraft("");
    void chat.sendMessage(value);
  };

  return (
    <div className={resolveElementClassName(elementKeys.root, appearance)} style={resolveInlineStyle(elementKeys.root, appearance)}>
      {props.title ? (
        <div className={resolveElementClassName(elementKeys.header, appearance)} style={resolveInlineStyle(elementKeys.header, appearance)}>
          {props.title}
        </div>
      ) : null}
      <div
        ref={messageListRef}
        className={resolveElementClassName(elementKeys.messageList, appearance)}
        style={resolveInlineStyle(elementKeys.messageList, appearance)}
        role="log"
        aria-live="polite"
        aria-relevant="additions text"
      >
        {timeline.map((item) => {
          if (item.type === "message") {
            const { message } = item;
            return (
              <div
                key={message.id}
                className={resolveElementClassName(message.role === "user" ? elementKeys.messageUser : elementKeys.messageAssistant, appearance)}
                style={resolveInlineStyle(message.role === "user" ? elementKeys.messageUser : elementKeys.messageAssistant, appearance)}
                data-status={message.status}
              >
                <MessageContent message={message} appearance={appearance} />
              </div>
            );
          }
          const { prompt } = item;
          const Widget = widgets[prompt.kind];
          if (!Widget) return null;
          return (
            <div
              key={prompt.promptId}
              className={resolveElementClassName(elementKeys.widgetContainer, appearance)}
              style={resolveInlineStyle(elementKeys.widgetContainer, appearance)}
            >
              {Widget({
                promptId: prompt.promptId,
                kind: prompt.kind,
                input: prompt.input,
                output: prompt.output,
                disabled: busy || prompt.status === "submitted",
                submitted: prompt.status === "submitted",
                ...(appearance ? { appearance } : {}),
                submit: (output) => {
                  void chat.submitWidget({
                    promptId: prompt.promptId,
                    widgetKind: prompt.kind,
                    output,
                  }).then(() => {
                    props.onWidgetSubmit?.({ promptId: prompt.promptId, kind: prompt.kind, output });
                  });
                },
              })}
            </div>
          );
        })}
        {activities.length > 0 ? <ActivityIndicator activities={activities} appearance={appearance} /> : null}
      </div>
      {props.composer === false ? null : props.composer ?? (
        <form className={resolveElementClassName(elementKeys.composer, appearance)} style={resolveInlineStyle(elementKeys.composer, appearance)} onSubmit={submit}>
          <input
            className={resolveElementClassName(elementKeys.composerInput, appearance)}
            style={resolveInlineStyle(elementKeys.composerInput, appearance)}
            value={draft}
            aria-label="Message"
            placeholder={props.placeholder ?? "Message..."}
            onChange={(event) => setDraft(event.currentTarget.value)}
            disabled={busy}
          />
          <button
            className={resolveElementClassName(elementKeys.composerSendButton, appearance)}
            style={resolveInlineStyle(elementKeys.composerSendButton, appearance)}
            type="submit"
            disabled={busy || draft.trim().length === 0}
          >
            {props.sendLabel ?? "Send"}
          </button>
        </form>
      )}
      {chat.error ? (
        <div className={resolveElementClassName(elementKeys.error, appearance)} style={resolveInlineStyle(elementKeys.error, appearance)}>
          {chat.error.message}
        </div>
      ) : null}
    </div>
  );
}

function MessageContent(props: { message: ChatMessage; appearance: AppearanceConfiguration | undefined }) {
  if (props.message.role === "user") return <>{props.message.text}</>;
  const isAnimating = props.message.role === "assistant" && props.message.status === "streaming";
  const sources = collectMessageSources(props.message);
  if (!props.message.segments?.length) {
    return (
      <>
        <Streamdown isAnimating={isAnimating}>
          {props.message.text}
        </Streamdown>
        <MessageSources sources={sources} appearance={props.appearance} />
      </>
    );
  }
  return (
    <>
      {props.message.segments.map((segment) => {
        if (!segment.references?.length) {
          return (
            <Streamdown key={segment.id} isAnimating={isAnimating}>
              {segment.text}
            </Streamdown>
          );
        }
        return (
          <span
            key={segment.id}
            className={resolveElementClassName(elementKeys.messageSourceSegment, props.appearance)}
            style={resolveInlineStyle(elementKeys.messageSourceSegment, props.appearance)}
          >
            <Streamdown isAnimating={isAnimating}>
              {segment.text}
            </Streamdown>
          </span>
        );
      })}
      <MessageSources sources={sources} appearance={props.appearance} />
    </>
  );
}

function ActivityIndicator(props: { activities: ChatActivity[]; appearance: AppearanceConfiguration | undefined }) {
  const latest = props.activities.at(-1);
  if (!latest) return null;
  return (
    <div
      className={resolveElementClassName(elementKeys.activityIndicator, props.appearance)}
      style={resolveInlineStyle(elementKeys.activityIndicator, props.appearance)}
      aria-live="polite"
    >
      <span
        className={resolveElementClassName(elementKeys.activityDot, props.appearance)}
        style={resolveInlineStyle(elementKeys.activityDot, props.appearance)}
        aria-hidden="true"
      />
      <span>{latest.label}</span>
    </div>
  );
}

function MessageSources(props: { sources: SupportSourceLink[]; appearance: AppearanceConfiguration | undefined }) {
  if (props.sources.length === 0) return null;
  return (
    <div
      className={resolveElementClassName(elementKeys.messageSources, props.appearance)}
      style={resolveInlineStyle(elementKeys.messageSources, props.appearance)}
      aria-label="Sources"
    >
      <span>Sources</span>
      {props.sources.map((source) => source.url ? (
        <a
          key={`${source.label}:${source.url}`}
          className={resolveElementClassName(elementKeys.messageSourceLink, props.appearance)}
          style={resolveInlineStyle(elementKeys.messageSourceLink, props.appearance)}
          href={source.url}
          target="_blank"
          rel="noreferrer"
        >
          {source.label}
        </a>
      ) : (
        <span
          key={`${source.label}:${source.id}`}
          className={resolveElementClassName(elementKeys.messageSourceLink, props.appearance)}
          style={resolveInlineStyle(elementKeys.messageSourceLink, props.appearance)}
        >
          {source.label}
        </span>
      ))}
    </div>
  );
}

function collectMessageSources(message: ChatMessage) {
  const byKey = new Map<string, SupportSourceLink>();
  for (const source of message.segments?.flatMap((segment) => collectSupportSourceLinks(segment.references)) ?? []) {
    byKey.set(`${source.label}:${source.url ?? source.id}`, source);
  }
  return [...byKey.values()];
}
