"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { StudioConversationRow } from "./types";
import { formatDateTime } from "./format";
import { Panel, PanelHeader } from "./ui";

type LifecycleFilter = "all" | StudioConversationRow["lifecycle"];

export function ConversationSearchPanel({ conversations }: { conversations: StudioConversationRow[] }) {
  const [query, setQuery] = useState("");
  const [lifecycle, setLifecycle] = useState<LifecycleFilter>("all");
  const filteredConversations = useMemo(
    () => filterConversations(conversations, query, lifecycle),
    [conversations, query, lifecycle],
  );

  return (
    <Panel>
      <PanelHeader
        title="Latest conversations"
        detail={`${filteredConversations.length} of ${conversations.length} shown`}
        actions={(
          <div className="flex flex-wrap items-center justify-end gap-2">
            <label className="relative block min-w-60 max-w-80">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input
                aria-label="Search conversations"
                className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                placeholder="Search ID, journey, trace, summary"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <select
              aria-label="Filter conversation state"
              className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              value={lifecycle}
              onChange={(event) => setLifecycle(event.target.value as LifecycleFilter)}
            >
              <option value="all">All states</option>
              <option value="active">Active</option>
              <option value="handoff">Handoff</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        )}
      />
      <div className="max-w-full overflow-x-auto overscroll-x-contain">
        <table className="w-full table-fixed border-collapse text-sm" style={{ minWidth: 860 }}>
          <thead>
            <tr>
              {["Customer", "State", "Journey", "Events", "Updated", "Summary"].map((column) => (
                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium text-slate-500" key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredConversations.length ? filteredConversations.map((conversation) => (
              <tr className="group" key={conversation.id}>
                <td className="border-b border-slate-100 px-4 py-3 align-top">
                  <Link
                    className="block max-w-[18rem] leading-6 text-slate-950 underline-offset-4 group-hover:underline"
                    href={`/conversations/${encodeURIComponent(conversation.id)}`}
                  >
                    <span className="block truncate font-medium">{conversation.customerLabel}</span>
                    <span className="block truncate text-xs text-slate-500">{conversation.id}</span>
                  </Link>
                </td>
                <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{labelLifecycle(conversation.lifecycle)}</td>
                <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                  <span className="block max-w-[12rem] truncate" title={conversation.activeJourneyId ?? "-"}>{conversation.activeJourneyId ?? "-"}</span>
                </td>
                <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{conversation.eventCount ?? "-"}</td>
                <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{formatDateTime(conversation.updatedAt)}</td>
                <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                  <span className="block max-w-[34rem] whitespace-normal break-words leading-6 [overflow-wrap:anywhere]" title={conversation.summary}>
                    {conversation.summary}
                  </span>
                </td>
              </tr>
            )) : (
              <tr>
                <td className="px-4 py-8 text-center text-slate-500" colSpan={6}>
                  No conversations match the current search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export function filterConversations(
  conversations: StudioConversationRow[],
  query: string,
  lifecycle: LifecycleFilter = "all",
) {
  const normalizedQuery = query.trim().toLowerCase();
  return conversations.filter((conversation) => {
    if (lifecycle !== "all" && conversation.lifecycle !== lifecycle) return false;
    if (!normalizedQuery) return true;
    return conversationSearchText(conversation).includes(normalizedQuery);
  });
}

function conversationSearchText(conversation: StudioConversationRow) {
  return [
    conversation.id,
    conversation.agentId,
    conversation.customerLabel,
    conversation.lifecycle,
    conversation.activeJourneyId,
    conversation.activeStateIds.join(" "),
    conversation.traceIds.join(" "),
    conversation.summary,
  ].filter(Boolean).join(" ").toLowerCase();
}

function labelLifecycle(value: string) {
  return value[0]?.toUpperCase() + value.slice(1);
}
