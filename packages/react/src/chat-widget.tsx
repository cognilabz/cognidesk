import { useMemo, useState, type FormEvent } from "react";
import type { AppearanceConfiguration } from "@cognidesk/ui";
import {
  elementKeys,
  resolveElementClassName,
  resolveInlineStyle,
} from "@cognidesk/ui";
import type { ChatMessage } from "./event-reducer.js";
import { defaultWidgetRenderers } from "./default-widgets.js";
import { formatSupportReferences } from "./support-references.js";
import type { ChatWidgetProps } from "./types.js";
import { useChat } from "./use-chat.js";

export function ChatWidget(props: ChatWidgetProps) {
  const chat = useChat(props);
  const [draft, setDraft] = useState("");
  const appearance = props.appearance;
  const widgets = useMemo(() => ({
    ...defaultWidgetRenderers,
    ...props.widgets,
  }), [props.widgets]);

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
      <div className={resolveElementClassName(elementKeys.messageList, appearance)} style={resolveInlineStyle(elementKeys.messageList, appearance)}>
        {chat.messages.map((message) => (
          <div
            key={message.id}
            className={resolveElementClassName(message.role === "user" ? elementKeys.messageUser : elementKeys.messageAssistant, appearance)}
            style={resolveInlineStyle(message.role === "user" ? elementKeys.messageUser : elementKeys.messageAssistant, appearance)}
            data-status={message.status}
          >
            <MessageContent message={message} appearance={appearance} />
          </div>
        ))}
      </div>
      <div className={resolveElementClassName(elementKeys.widgetOutlet, appearance)} style={resolveInlineStyle(elementKeys.widgetOutlet, appearance)}>
        {chat.prompts.map((prompt) => {
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
                ...(appearance ? { appearance } : {}),
                submit: (output) => {
                  props.onWidgetSubmit?.({ promptId: prompt.promptId, kind: prompt.kind, output });
                  if (!chat.conversationId) {
                    chat.clearPrompt(prompt.promptId);
                    return;
                  }
                  void props.client.submitWidget(chat.conversationId, {
                    promptId: prompt.promptId,
                    widgetKind: prompt.kind,
                    output,
                  }).finally(() => chat.clearPrompt(prompt.promptId));
                },
              })}
            </div>
          );
        })}
      </div>
      <form className={resolveElementClassName(elementKeys.composer, appearance)} style={resolveInlineStyle(elementKeys.composer, appearance)} onSubmit={submit}>
        <input
          className={resolveElementClassName(elementKeys.composerInput, appearance)}
          style={resolveInlineStyle(elementKeys.composerInput, appearance)}
          value={draft}
          placeholder={props.placeholder ?? "Message..."}
          onChange={(event) => setDraft(event.currentTarget.value)}
          disabled={chat.status === "starting"}
        />
        <button
          className={resolveElementClassName(elementKeys.composerSendButton, appearance)}
          style={resolveInlineStyle(elementKeys.composerSendButton, appearance)}
          type="submit"
          disabled={chat.status === "starting" || draft.trim().length === 0}
        >
          Send
        </button>
      </form>
      {chat.error ? (
        <div className={resolveElementClassName(elementKeys.error, appearance)} style={resolveInlineStyle(elementKeys.error, appearance)}>
          {chat.error.message}
        </div>
      ) : null}
    </div>
  );
}

function MessageContent(props: { message: ChatMessage; appearance: AppearanceConfiguration | undefined }) {
  if (!props.message.segments?.length) return <>{props.message.text}</>;
  return (
    <>
      {props.message.segments.map((segment) => {
        const title = formatSupportReferences(segment.references);
        if (!title) return <span key={segment.id}>{segment.text}</span>;
        return (
          <span
            key={segment.id}
            className={resolveElementClassName(elementKeys.messageSourceSegment, props.appearance)}
            style={resolveInlineStyle(elementKeys.messageSourceSegment, props.appearance)}
            title={title}
          >
            {segment.text}
          </span>
        );
      })}
    </>
  );
}
