import {
  BarChart3Icon,
  CheckIcon,
  ChevronDownIcon,
  EyeIcon,
  RefreshCwIcon,
  SquareTerminalIcon,
  Trash2Icon,
} from "lucide-react";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import { Shimmer } from "@/components/ai-elements/shimmer";
import {
  Task,
  TaskContent,
  TaskItem,
  TaskItemFile,
  TaskTrigger,
} from "@/components/ai-elements/task";
import { Tool, ToolContent, ToolHeader } from "@/components/ai-elements/tool";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  activeActivityTitle,
  activityRunSummary,
  displayHistoryRows,
  formatUnknown,
  isStartedActivityTitle,
  toolStateForEvent,
} from "./activity";
import type { DashboardCheckResult } from "../dashboard-renderer";
import type { OperatorChatMessageItem, OperatorEventEntry } from "../types";

export function ChatMessage({ continuing = false, item }: { continuing?: boolean; item: OperatorChatMessageItem }) {
  return (
    <Message className={cn(item.role === "assistant" && "max-w-[88%]")} data-testid="operator-message" from={item.role}>
      <MessageContent className={cn(item.role === "assistant" && "max-w-3xl text-slate-800")}>
        {item.role === "assistant" ? (
          item.text ? (
            <>
              <MessageResponse isAnimating={item.streaming ?? false}>{item.text}</MessageResponse>
              {continuing ? <InlineContinuationStatus className="mt-3" /> : null}
            </>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              <Shimmer as="span" className="text-slate-500">Thinking</Shimmer>
            </span>
          )
        ) : (
          <p className="whitespace-pre-wrap">{item.text}</p>
        )}
      </MessageContent>
    </Message>
  );
}

export function OperatorEventWidget({
  checkResult,
  continuing = false,
  event,
  onCheckDashboard,
  onDeleteDashboard,
  onOpenDashboard,
  onPublishDashboard,
}: {
  checkResult?: DashboardCheckResult | null | undefined;
  continuing?: boolean;
  event: OperatorEventEntry;
  onCheckDashboard: (id: string) => void | Promise<void>;
  onDeleteDashboard: (id: string) => void | Promise<void>;
  onOpenDashboard: (id: string) => void | Promise<void>;
  onPublishDashboard: (id: string) => void | Promise<void>;
}) {
  if (event.kind === "activity") {
    return <InlineActivityEvent continuing={continuing} event={event} />;
  }
  if (event.kind === "dashboard") {
    return (
      <DashboardEventCard
        checkResult={checkResult ?? null}
        continuing={continuing}
        event={event}
        onCheckDashboard={onCheckDashboard}
        onDeleteDashboard={onDeleteDashboard}
        onOpenDashboard={onOpenDashboard}
        onPublishDashboard={onPublishDashboard}
      />
    );
  }
  if (event.kind === "reasoning") {
    return (
      <div className="operator-event-in w-full max-w-3xl" data-testid="operator-event">
        <Reasoning
          className="mb-0 rounded-lg border border-slate-200 bg-slate-50 p-3"
          defaultOpen={event.status === "running"}
          isStreaming={event.status === "running" || continuing}
        >
          <ReasoningTrigger
            className="text-slate-600 hover:text-slate-950"
            getThinkingMessage={() => (
              <span className="inline-flex items-center gap-2 text-sm">
                <Shimmer as="span" className="text-slate-600">{continuing ? "Continuing to work" : event.title}</Shimmer>
              </span>
            )}
          />
          <ReasoningContent className="mt-3 text-slate-700">{event.detail ?? event.title}</ReasoningContent>
        </Reasoning>
        {continuing ? <InlineContinuationStatus className="mt-2" /> : null}
      </div>
    );
  }
  if (event.kind === "diff") {
    return (
      <div className="operator-event-in w-full max-w-3xl" data-testid="operator-event">
        <Task className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <TaskTrigger className="text-emerald-800" title={event.title} />
          <TaskContent>
            {event.files?.length ? event.files.map((file) => (
              <TaskItem className="flex flex-wrap items-center gap-2 text-slate-700" key={`${file.status}:${file.path}`}>
                <TaskItemFile className="border-emerald-200 bg-emerald-100 text-emerald-800">{file.status}</TaskItemFile>
                <span className="break-all">{file.path}</span>
              </TaskItem>
            )) : <TaskItem>{event.detail}</TaskItem>}
          </TaskContent>
        </Task>
      </div>
    );
  }
  return (
    <div className="operator-event-in w-full max-w-3xl" data-testid="operator-event">
      <Tool className={cn("mb-0 border-slate-200 bg-white", event.kind === "error" && "border-red-200 bg-red-50")} defaultOpen={event.status !== "completed"}>
        <ToolHeader
          state={toolStateForEvent(event)}
          title={event.title}
          toolName={event.name ?? event.kind}
          type="dynamic-tool"
        />
        <ToolContent className="text-slate-700">
          {event.action ? <DetailBlock label="Action" value={event.action} /> : null}
          {event.input !== undefined ? <DetailBlock label="Input" value={event.input} /> : null}
          {event.output !== undefined ? <DetailBlock label="Output" value={event.output} /> : null}
          {event.detail ? <DetailBlock label="Details" value={event.detail} /> : null}
        </ToolContent>
      </Tool>
      {continuing ? <InlineContinuationStatus className="mt-2" /> : null}
    </div>
  );
}

function InlineActivityEvent({ continuing = false, event }: { continuing?: boolean; event: OperatorEventEntry }) {
  const history = event.history ?? [];
  if (history.length > 1) {
    const summary = activityRunSummary(event, history);
    const activeTitle = activeActivityTitle(history);
    const visibleHistory = displayHistoryRows(history);
    const isActive = event.status === "running" && Boolean(activeTitle);
    const isContinuing = continuing && !isActive;
    return (
      <details className="operator-event-in group w-full max-w-3xl text-sm text-slate-500" data-testid="operator-event">
        <summary className="inline-flex max-w-full cursor-pointer list-none items-center gap-2 rounded-md px-0 py-1 text-slate-500 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
          <SquareTerminalIcon className="size-4 shrink-0 text-slate-400" />
          {isActive ? <ActivityStatusDot /> : null}
          <AnimatedActivityText active={isActive} text={activeTitle ?? summary} />
          {isContinuing ? <InlineContinuationStatus /> : null}
          <ChevronDownIcon className="size-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
        </summary>
        <ol className="mt-2 grid gap-1.5 pl-6">
          {visibleHistory.map((entry) => (
            <li className="min-w-0" key={entry.id}>
              <p className="truncate text-slate-500">{entry.count > 1 ? `${entry.title} x${entry.count}` : entry.title}</p>
              {entry.detail ? <p className="truncate text-xs text-slate-400">{entry.detail}</p> : null}
            </li>
          ))}
        </ol>
      </details>
    );
  }

  return (
    <div className="operator-event-in w-full max-w-3xl text-sm text-slate-500" data-testid="operator-event">
      <span className="inline-flex max-w-full items-center gap-2 rounded-md py-1 text-slate-500">
        <SquareTerminalIcon className="size-4 shrink-0 text-slate-400" />
        {event.status === "running" ? <ActivityStatusDot /> : null}
        <AnimatedActivityText active={event.status === "running" && isStartedActivityTitle(event.title)} text={event.title} />
        {event.detail ? <span className="truncate text-slate-400">{event.detail}</span> : null}
        {continuing && event.status !== "running" ? <InlineContinuationStatus /> : null}
      </span>
    </div>
  );
}

function DashboardEventCard({
  checkResult,
  continuing = false,
  event,
  onCheckDashboard,
  onDeleteDashboard,
  onOpenDashboard,
  onPublishDashboard,
}: {
  checkResult?: DashboardCheckResult | null | undefined;
  continuing?: boolean;
  event: OperatorEventEntry;
  onCheckDashboard: (id: string) => void | Promise<void>;
  onDeleteDashboard: (id: string) => void | Promise<void>;
  onOpenDashboard: (id: string) => void | Promise<void>;
  onPublishDashboard: (id: string) => void | Promise<void>;
}) {
  const dashboardId = event.dashboardId;
  const deleted = event.dashboardStatus === "deleted";
  return (
    <div className="operator-event-in w-full max-w-3xl" data-testid="operator-dashboard-event">
      <section className={cn(
        "rounded-lg border bg-white p-4",
        deleted ? "border-slate-200 opacity-75" : "border-sky-200",
      )}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase text-sky-700">
              <BarChart3Icon className="size-4" />
              Dashboard
            </p>
            <h3 className="mt-2 truncate text-base font-semibold text-slate-950">{event.title}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {deleted ? "Deleted" : `${event.dashboardStatus ?? "draft"} / v${event.dashboardVersion ?? 1}`}
              {event.dashboardSlug ? ` / ${event.dashboardSlug}` : ""}
            </p>
          </div>
          {dashboardId && !deleted ? (
            <div className="flex flex-wrap gap-2">
              <Button
                className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                onClick={() => void onOpenDashboard(dashboardId)}
                size="sm"
                type="button"
                variant="outline"
              >
                <EyeIcon />
                Open
              </Button>
              <Button
                className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                onClick={() => void onCheckDashboard(dashboardId)}
                size="sm"
                type="button"
                variant="outline"
              >
                <RefreshCwIcon />
                Check
              </Button>
              {event.dashboardStatus !== "published" ? (
                <Button
                  className="bg-slate-950 text-white hover:bg-slate-800"
                  onClick={() => void onPublishDashboard(dashboardId)}
                  size="sm"
                  type="button"
                >
                  <CheckIcon />
                  Publish
                </Button>
              ) : null}
              <Button
                className="border-red-200 bg-white text-red-600 hover:bg-red-50"
                onClick={() => void onDeleteDashboard(dashboardId)}
                size="sm"
                type="button"
                variant="outline"
              >
                <Trash2Icon />
                Delete
              </Button>
            </div>
          ) : null}
        </div>
        {event.detail ? <p className="mt-3 text-sm leading-6 text-slate-600">{event.detail}</p> : null}
        {event.artifactKey ? (
          <details className="mt-3 rounded-md bg-slate-50 text-xs text-slate-500">
            <summary className="cursor-pointer list-none p-2 font-medium text-slate-600">Artifact info</summary>
            <p className="break-all px-2 pb-2">{event.artifactKey}</p>
          </details>
        ) : null}
        {checkResult ? (
          <div className={cn(
            "mt-3 rounded-md border p-3 text-sm",
            checkResult.status === "passed" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800",
          )}>
            <p className="font-medium">Check {checkResult.status}</p>
            {checkResult.issues.length ? (
              <ul className="mt-2 list-disc pl-5">
                {checkResult.issues.map((issue) => <li key={issue}>{issue}</li>)}
              </ul>
            ) : null}
          </div>
        ) : null}
      </section>
      {continuing ? <InlineContinuationStatus className="mt-2" /> : null}
    </div>
  );
}

function ActivityStatusDot() {
  return <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500" />;
}

export function InlineWorkingIndicator() {
  return (
    <div className="operator-event-in w-full max-w-3xl text-sm" data-testid="operator-working-indicator">
      <span className="inline-flex max-w-full items-center gap-2 rounded-md py-1 text-slate-500">
        <SquareTerminalIcon className="size-4 shrink-0 text-slate-400" />
        <ActivityStatusDot />
        <Shimmer as="span" className="min-w-0 truncate text-slate-500">Thinking</Shimmer>
        <span aria-hidden="true" className="inline-flex w-5 shrink-0 justify-start text-slate-400">
          <span className="animate-pulse">.</span>
          <span className="animate-pulse [animation-delay:150ms]">.</span>
          <span className="animate-pulse [animation-delay:300ms]">.</span>
        </span>
      </span>
    </div>
  );
}

function InlineContinuationStatus({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex shrink-0 items-center gap-1.5 text-xs text-slate-400", className)}>
      <ActivityStatusDot />
      <Shimmer as="span" className="text-slate-400">Continuing to work</Shimmer>
      <span aria-hidden="true" className="inline-flex w-4 justify-start text-slate-400">
        <span className="animate-pulse">.</span>
        <span className="animate-pulse [animation-delay:150ms]">.</span>
        <span className="animate-pulse [animation-delay:300ms]">.</span>
      </span>
    </span>
  );
}

function AnimatedActivityText({ active, text }: { active: boolean; text: string }) {
  return (
    <span className={cn("min-w-0 truncate", active && "text-slate-700")}>
      {text}
      {active ? (
        <span aria-hidden="true" className="inline-flex w-5 justify-start text-slate-400">
          <span className="animate-pulse">.</span>
          <span className="animate-pulse [animation-delay:150ms]">.</span>
          <span className="animate-pulse [animation-delay:300ms]">.</span>
        </span>
      ) : null}
    </span>
  );
}

function DetailBlock(props: { label: string; value: unknown }) {
  return (
    <div className="grid gap-2">
      <span className="text-xs font-medium uppercase text-slate-500">{props.label}</span>
      <pre className="max-h-72 overflow-auto whitespace-pre-wrap rounded-md bg-slate-100 p-3 text-xs leading-5 text-slate-700">
        {formatUnknown(props.value)}
      </pre>
    </div>
  );
}
