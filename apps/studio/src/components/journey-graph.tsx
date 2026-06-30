"use client";

import { useCallback } from "react";
import {
  Background,
  BaseEdge,
  Controls,
  EdgeLabelRenderer,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type EdgeProps,
  type ReactFlowInstance,
  getSmoothStepPath,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import type { StudioJourneySummary } from "@cognidesk/studio-contracts";
import {
  JOURNEY_GRAPH_LEVEL_SPACING,
  JOURNEY_GRAPH_NODE_HEIGHT,
  JOURNEY_GRAPH_NODE_WIDTH,
  layoutJourneyGraph,
  placeJourneyEdgeLabel,
  type JourneyGraphEdgeLabelPlacement,
} from "./journey-graph-layout";

type JourneyNodeData = {
  label: string;
  type: string;
  isEntry: boolean;
  summary?: string;
};

type JourneyEdgeData = {
  labelPosition: JourneyGraphEdgeLabelPlacement;
};

type JourneyGraphEdge = Edge<JourneyEdgeData, "journeyEdge">;

function JourneyNode({ data }: NodeProps<Node<JourneyNodeData>>) {
  return (
    <div
      data-journey-entry={data.isEntry ? "true" : "false"}
      className={`overflow-hidden rounded-lg border bg-white p-3 text-slate-950 shadow-sm ${
        data.isEntry ? "border-emerald-400 ring-2 ring-emerald-200" : "border-slate-300"
      }`}
      style={{ width: JOURNEY_GRAPH_NODE_WIDTH, height: JOURNEY_GRAPH_NODE_HEIGHT }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="flex items-start justify-between gap-3">
        <strong className="line-clamp-2 min-w-0 text-sm leading-5">{data.label}</strong>
        {data.isEntry ? (
          <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
            Entry
          </span>
        ) : null}
      </div>
      <span className="mt-1 block text-xs font-medium text-emerald-600">{data.type}</span>
      {data.summary ? <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">{data.summary}</p> : null}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

const nodeTypes = {
  journeyNode: JourneyNode,
};

const edgeTypes = {
  journeyEdge: JourneyEdge,
};

function JourneyEdge({
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  markerEnd,
  markerStart,
  style,
  label,
  interactionWidth,
  data,
}: EdgeProps<JourneyGraphEdge>) {
  const labelPosition = data?.labelPosition ?? {
    x: sourceX + (targetX - sourceX) * 0.5,
    y: sourceY + (targetY >= sourceY ? 112 : -112),
  };
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 14,
    centerY: labelPosition.y,
    offset: 38,
  });

  return (
    <>
      <BaseEdge
        path={edgePath}
        {...(markerEnd ? { markerEnd } : {})}
        {...(markerStart ? { markerStart } : {})}
        {...(style ? { style } : {})}
        {...(interactionWidth !== undefined ? { interactionWidth } : {})}
      />
      {label ? (
        <EdgeLabelRenderer>
          <div
            data-journey-edge-label="true"
            className="nopan pointer-events-none absolute max-w-56 rounded-md border border-slate-200 bg-white/95 px-2 py-1 text-center text-[11px] font-medium leading-4 text-slate-600 shadow-sm"
            style={{
              transform: `translate(-50%, -50%) translate(${labelPosition.x}px, ${labelPosition.y}px)`,
            }}
          >
            <span className="line-clamp-2 break-words">{label}</span>
          </div>
        </EdgeLabelRenderer>
      ) : null}
    </>
  );
}

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
  const stateIds = new Set(graphStates.map((state) => state.id));
  const layout = layoutJourneyGraph(graphStates, journey.graph.initialStateId);
  const entryNodeId = layout.entryStateId ?? graphStates[0]?.id ?? journey.id;
  const entryFitViewOptions = {
    padding: 1.4,
    maxZoom: 1,
    nodes: [{ id: entryNodeId }],
  };
  const focusEntryNode = useCallback((instance: ReactFlowInstance<Node<JourneyNodeData>, JourneyGraphEdge>) => {
    requestAnimationFrame(() => {
      void instance.fitView({
        padding: 1.4,
        maxZoom: 1,
        nodes: [{ id: entryNodeId }],
      });
    });
  }, [entryNodeId]);
  const nodes: Node<JourneyNodeData>[] = graphStates.map((state, index) => {
    const placement = layout.placements.get(state.id) ?? {
      x: index * JOURNEY_GRAPH_NODE_WIDTH,
      y: index * JOURNEY_GRAPH_LEVEL_SPACING,
    };
    const data: JourneyNodeData = {
      label: state.id,
      type: state.type,
      isEntry: state.id === entryNodeId,
    };
    const summary = state.summary ?? state.instructions;
    if (summary) data.summary = summary;
    return {
      id: state.id,
      type: "journeyNode",
      position: {
        x: placement.x,
        y: placement.y,
      },
      width: JOURNEY_GRAPH_NODE_WIDTH,
      height: JOURNEY_GRAPH_NODE_HEIGHT,
      selected: state.id === entryNodeId,
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      data,
    };
  });
  const edges: JourneyGraphEdge[] = graphStates.flatMap((state) =>
    state.transitions.flatMap((transition, index) => {
      if (!stateIds.has(transition.targetId)) return [];
      const sourcePlacement = layout.placements.get(state.id);
      const targetPlacement = layout.placements.get(transition.targetId);
      if (!sourcePlacement || !targetPlacement) return [];
      return [{
        id: `${state.id}-${transition.targetId}-${index}`,
        source: state.id,
        target: transition.targetId,
        label: transition.description ?? transition.eventName ?? transition.kind,
        type: "journeyEdge",
        data: {
          labelPosition: placeJourneyEdgeLabel(sourcePlacement, targetPlacement, layout.placements.values()),
        },
        markerEnd: { type: MarkerType.ArrowClosed },
        interactionWidth: 18,
        style: { stroke: "#64748b", strokeWidth: 1.35 },
      }];
    }),
  );

  return (
    <div className="h-[620px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
      <ReactFlow<Node<JourneyNodeData>, JourneyGraphEdge>
        key={journey.id}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onInit={focusEntryNode}
        fitView
        fitViewOptions={entryFitViewOptions}
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
