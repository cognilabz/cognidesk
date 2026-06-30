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
  isActive: boolean;
  summary?: string;
};

type JourneyEdgeData = {
  labelPosition: JourneyGraphEdgeLabelPlacement;
};

type JourneyGraphEdge = Edge<JourneyEdgeData, "journeyEdge">;

function JourneyNode({ data }: NodeProps<Node<JourneyNodeData>>) {
  const nodeStateClass = data.isActive
    ? "border-blue-400 ring-2 ring-blue-200"
    : data.isEntry ? "border-emerald-400 ring-2 ring-emerald-200" : "border-slate-300";
  return (
    <div
      data-journey-entry={data.isEntry ? "true" : "false"}
      data-journey-active={data.isActive ? "true" : "false"}
      className={`overflow-hidden rounded-lg border bg-white p-3 text-slate-950 shadow-sm ${nodeStateClass}`}
      style={{ width: JOURNEY_GRAPH_NODE_WIDTH, height: JOURNEY_GRAPH_NODE_HEIGHT }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="flex items-start justify-between gap-3">
        <strong className="line-clamp-2 min-w-0 text-sm leading-5">{data.label}</strong>
        <span className="flex shrink-0 flex-col items-end gap-1">
          {data.isActive ? (
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
              Active
            </span>
          ) : null}
          {data.isEntry ? (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              Entry
            </span>
          ) : null}
        </span>
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

export function JourneyGraph({
  journey,
  activeStateIds = [],
  className,
  interactive = true,
  focusMode = "fit",
}: {
  journey: StudioJourneySummary;
  activeStateIds?: string[];
  className?: string;
  interactive?: boolean;
  focusMode?: "fit" | "center";
}) {
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
  const activeStateIdSet = new Set(activeStateIds.filter((stateId) => stateIds.has(stateId)));
  const focusNodeIds = activeStateIdSet.size > 0 ? Array.from(activeStateIdSet) : [entryNodeId];
  const centeredFocusNodeId = focusNodeIds[0] ?? entryNodeId;
  const entryFitViewOptions = {
    padding: activeStateIdSet.size > 0 ? 0.9 : 1.4,
    maxZoom: 1,
    nodes: focusNodeIds.map((id) => ({ id })),
  };
  const focusEntryNode = useCallback((instance: ReactFlowInstance<Node<JourneyNodeData>, JourneyGraphEdge>) => {
    requestAnimationFrame(() => {
      if (focusMode === "center") {
        const placement = layout.placements.get(centeredFocusNodeId);
        if (!placement) return;
        void instance.setCenter(
          placement.x + JOURNEY_GRAPH_NODE_WIDTH / 2,
          placement.y + JOURNEY_GRAPH_NODE_HEIGHT / 2,
          { duration: 0, zoom: 1 },
        );
        return;
      }
      void instance.fitView(entryFitViewOptions);
    });
  }, [centeredFocusNodeId, entryFitViewOptions, focusMode, layout.placements]);
  const nodes: Node<JourneyNodeData>[] = graphStates.map((state, index) => {
    const placement = layout.placements.get(state.id) ?? {
      x: index * JOURNEY_GRAPH_NODE_WIDTH,
      y: index * JOURNEY_GRAPH_LEVEL_SPACING,
    };
    const data: JourneyNodeData = {
      label: state.id,
      type: state.type,
      isEntry: state.id === entryNodeId,
      isActive: activeStateIdSet.has(state.id),
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
      selected: activeStateIdSet.has(state.id) || state.id === entryNodeId,
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
    <div className={`${className ?? "h-[620px]"} overflow-hidden rounded-lg border border-slate-200 bg-slate-50`}>
      <ReactFlow<Node<JourneyNodeData>, JourneyGraphEdge>
        key={`${journey.id}:${focusNodeIds.join(",")}`}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onInit={focusEntryNode}
        fitView={focusMode === "fit"}
        fitViewOptions={entryFitViewOptions}
        panOnDrag={interactive}
        panOnScroll={interactive}
        preventScrolling={interactive}
        zoomOnDoubleClick={interactive}
        zoomOnPinch={interactive}
        zoomOnScroll={interactive}
        elementsSelectable={interactive}
        edgesFocusable={interactive}
        nodesFocusable={interactive}
        nodesDraggable={false}
        nodesConnectable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={16} size={1} />
        {interactive ? <Controls showInteractive={false} /> : null}
      </ReactFlow>
    </div>
  );
}
