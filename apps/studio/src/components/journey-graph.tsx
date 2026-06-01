"use client";

import {
  Background,
  Controls,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import type { StudioJourneySummary } from "@cognidesk/studio-contracts";

type JourneyNodeData = {
  label: string;
  type: string;
  summary?: string;
};

function JourneyNode({ data }: NodeProps<Node<JourneyNodeData>>) {
  return (
    <div className="w-60 rounded-lg border border-slate-300 bg-white p-3 text-slate-950 shadow-sm">
      <Handle type="target" position={Position.Top} />
      <strong className="block truncate text-sm">{data.label}</strong>
      <span className="mt-1 block text-xs text-emerald-600">{data.type}</span>
      {data.summary ? <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">{data.summary}</p> : null}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

const nodeTypes = {
  journeyNode: JourneyNode,
};

export function JourneyGraph({ journey }: { journey: StudioJourneySummary }) {
  const graphStates = journey.graph.states.length > 0
    ? journey.graph.states
    : [{
        id: journey.id,
        type: "state" as const,
        collected: [],
        transitions: [],
        actions: [],
        requiresVisit: false,
        summary: journey.delegation?.goal ?? journey.condition,
      }];
  const levels = layoutLevels(graphStates);
  const nodes: Node<JourneyNodeData>[] = graphStates.map((state, index) => {
    const level = levels.get(state.id) ?? Math.floor(index / 3);
    const column = graphStates.filter((candidate) => (levels.get(candidate.id) ?? 0) === level).findIndex((candidate) => candidate.id === state.id);
    const data: JourneyNodeData = {
      label: state.id,
      type: state.type,
    };
    const summary = state.summary ?? state.instructions;
    if (summary) data.summary = summary;
    return {
      id: state.id,
      type: "journeyNode",
      position: {
        x: column * 330,
        y: level * 230,
      },
      data,
    };
  });
  const edges: Edge[] = graphStates.flatMap((state) =>
    state.transitions.map((transition, index) => ({
      id: `${state.id}-${transition.targetId}-${index}`,
      source: state.id,
      target: transition.targetId,
      label: transition.description ?? transition.eventName ?? transition.kind,
      type: "smoothstep",
      markerEnd: { type: MarkerType.ArrowClosed },
    })),
  );

  return (
    <div className="h-[620px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={16} size={1} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}

function layoutLevels(states: Array<{ id: string; transitions: Array<{ targetId: string }> }>) {
  const levels = new Map<string, number>();
  const statesById = new Map(states.map((state) => [state.id, state]));
  const first = states[0]?.id;
  if (!first) return levels;
  const queue: Array<{ id: string; level: number }> = [{ id: first, level: 0 }];
  while (queue.length) {
    const next = queue.shift();
    if (!next) break;
    const current = levels.get(next.id);
    if (current !== undefined && current <= next.level) continue;
    levels.set(next.id, next.level);
    const state = statesById.get(next.id);
    for (const transition of state?.transitions ?? []) {
      queue.push({ id: transition.targetId, level: next.level + 1 });
    }
  }
  for (const state of states) {
    if (!levels.has(state.id)) levels.set(state.id, Math.max(0, levels.size));
  }
  return levels;
}
