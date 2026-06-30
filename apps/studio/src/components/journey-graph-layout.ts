export type JourneyGraphLayoutState = {
  id: string;
  parentId?: string | undefined;
  transitions: Array<{ targetId: string }>;
};

export type JourneyGraphNodePlacement = {
  id: string;
  level: number;
  column: number;
  x: number;
  y: number;
};

export type JourneyGraphLayout = {
  entryStateId: string | null;
  placements: Map<string, JourneyGraphNodePlacement>;
};

export type JourneyGraphEdgeLabelPlacement = {
  x: number;
  y: number;
};

export const JOURNEY_GRAPH_NODE_WIDTH = 288;
export const JOURNEY_GRAPH_NODE_HEIGHT = 136;
export const JOURNEY_GRAPH_COLUMN_SPACING = 472;
export const JOURNEY_GRAPH_LEVEL_SPACING = 356;

const ORPHAN_COLUMNS = 4;
const EDGE_LABEL_WIDTH = 272;
const EDGE_LABEL_HEIGHT = 56;
const EDGE_LABEL_NODE_PADDING = 24;

export function resolveJourneyEntryStateId(states: JourneyGraphLayoutState[], initialStateId?: string) {
  if (initialStateId && states.some((state) => state.id === initialStateId)) return initialStateId;
  return states[0]?.id ?? null;
}

export function layoutJourneyGraph(states: JourneyGraphLayoutState[], initialStateId?: string): JourneyGraphLayout {
  const entryStateId = resolveJourneyEntryStateId(states, initialStateId);
  if (!entryStateId) return { entryStateId: null, placements: new Map() };

  const statesById = new Map(states.map((state) => [state.id, state]));
  const originalIndex = new Map(states.map((state, index) => [state.id, index]));
  const incomingByTarget = incomingTransitionsByTarget(states, statesById);
  const levels = assignLevels(states, statesById, entryStateId);
  const orderedLevels = orderStatesWithinLevels(states, levels, incomingByTarget, statesById, originalIndex);
  const widestLevel = Math.max(1, ...orderedLevels.map((ids) => ids.length));
  const placements = new Map<string, JourneyGraphNodePlacement>();

  orderedLevels.forEach((ids, level) => {
    const levelOffset = ((widestLevel - ids.length) * JOURNEY_GRAPH_COLUMN_SPACING) / 2;
    ids.forEach((id, column) => {
      placements.set(id, {
        id,
        level,
        column,
        x: levelOffset + column * JOURNEY_GRAPH_COLUMN_SPACING,
        y: level * JOURNEY_GRAPH_LEVEL_SPACING,
      });
    });
  });

  return { entryStateId, placements };
}

export function placeJourneyEdgeLabel(
  source: JourneyGraphNodePlacement,
  target: JourneyGraphNodePlacement,
  nodes: Iterable<JourneyGraphNodePlacement>,
): JourneyGraphEdgeLabelPlacement {
  const sourceX = source.x + JOURNEY_GRAPH_NODE_WIDTH / 2;
  const sourceY = source.y + JOURNEY_GRAPH_NODE_HEIGHT;
  const targetX = target.x + JOURNEY_GRAPH_NODE_WIDTH / 2;
  const targetY = target.y;
  const base = edgeLabelPosition(sourceX, sourceY, targetX, targetY);
  const direction = targetY >= sourceY ? 1 : -1;
  const horizontalStep = EDGE_LABEL_WIDTH * 0.72;
  const verticalStep = EDGE_LABEL_HEIGHT + EDGE_LABEL_NODE_PADDING;
  const candidates = labelCandidates(base, direction, horizontalStep, verticalStep);
  const nodeRects = Array.from(nodes).map((node) => ({
    left: node.x,
    right: node.x + JOURNEY_GRAPH_NODE_WIDTH,
    top: node.y,
    bottom: node.y + JOURNEY_GRAPH_NODE_HEIGHT,
  }));

  return candidates.find((candidate) => !nodeRects.some((node) => intersects(labelRect(candidate), node)))
    ?? base;
}

function labelCandidates(
  base: JourneyGraphEdgeLabelPlacement,
  direction: number,
  horizontalStep: number,
  verticalStep: number,
) {
  const horizontalOffsets = [0, -1, 1, -2, 2, -3, 3];
  const verticalOffsets = [0, 1, -1, 2, -2];
  const candidates: JourneyGraphEdgeLabelPlacement[] = [];

  for (const verticalOffset of verticalOffsets) {
    for (const horizontalOffset of horizontalOffsets) {
      candidates.push({
        x: base.x + horizontalOffset * horizontalStep,
        y: base.y + verticalOffset * direction * verticalStep,
      });
    }
  }

  return candidates;
}

function assignLevels(
  states: JourneyGraphLayoutState[],
  statesById: Map<string, JourneyGraphLayoutState>,
  entryStateId: string,
) {
  const levels = new Map<string, number>();
  const queue: Array<{ id: string; level: number }> = [{ id: entryStateId, level: 0 }];

  for (let index = 0; index < queue.length; index += 1) {
    const item = queue[index];
    if (!item) continue;

    const currentLevel = levels.get(item.id);
    if (currentLevel !== undefined && currentLevel <= item.level) continue;

    levels.set(item.id, item.level);
    const state = statesById.get(item.id);
    for (const targetId of validTransitionTargets(state, statesById)) {
      queue.push({ id: targetId, level: item.level + 1 });
    }
  }

  separateNonCyclicForwardEdges(states, statesById, levels);

  const reachableMaxLevel = Math.max(0, ...levels.values());
  let orphanIndex = 0;
  for (const state of states) {
    if (levels.has(state.id)) continue;
    levels.set(state.id, reachableMaxLevel + 1 + Math.floor(orphanIndex / ORPHAN_COLUMNS));
    orphanIndex += 1;
  }

  return levels;
}

function separateNonCyclicForwardEdges(
  states: JourneyGraphLayoutState[],
  statesById: Map<string, JourneyGraphLayoutState>,
  levels: Map<string, number>,
) {
  for (let pass = 0; pass < states.length; pass += 1) {
    let changed = false;

    for (const state of states) {
      const sourceLevel = levels.get(state.id);
      if (sourceLevel === undefined) continue;

      for (const targetId of validTransitionTargets(state, statesById)) {
        if (targetId === state.id || canReach(targetId, state.id, statesById)) continue;

        const targetLevel = levels.get(targetId);
        if (targetLevel === undefined || targetLevel > sourceLevel) continue;

        levels.set(targetId, sourceLevel + 1);
        changed = true;
      }
    }

    if (!changed) break;
  }
}

function orderStatesWithinLevels(
  states: JourneyGraphLayoutState[],
  levels: Map<string, number>,
  incomingByTarget: Map<string, string[]>,
  statesById: Map<string, JourneyGraphLayoutState>,
  originalIndex: Map<string, number>,
) {
  const maxLevel = Math.max(0, ...levels.values());
  const columnsById = new Map<string, number>();
  const orderedLevels: string[][] = [];

  for (let level = 0; level <= maxLevel; level += 1) {
    const ids = states
      .filter((state) => levels.get(state.id) === level)
      .map((state) => state.id)
      .sort((a, b) => {
        const scoreDelta = parentColumnScore(a, incomingByTarget, statesById, columnsById, originalIndex)
          - parentColumnScore(b, incomingByTarget, statesById, columnsById, originalIndex);
        if (scoreDelta !== 0) return scoreDelta;
        return (originalIndex.get(a) ?? 0) - (originalIndex.get(b) ?? 0);
      });

    ids.forEach((id, column) => columnsById.set(id, column));
    orderedLevels[level] = ids;
  }

  return orderedLevels;
}

function parentColumnScore(
  id: string,
  incomingByTarget: Map<string, string[]>,
  statesById: Map<string, JourneyGraphLayoutState>,
  columnsById: Map<string, number>,
  originalIndex: Map<string, number>,
) {
  const parentColumns: number[] = [];
  for (const sourceId of incomingByTarget.get(id) ?? []) {
    const column = columnsById.get(sourceId);
    if (column !== undefined) parentColumns.push(column);
  }

  const structuralParentId = statesById.get(id)?.parentId;
  if (structuralParentId) {
    const column = columnsById.get(structuralParentId);
    if (column !== undefined) parentColumns.push(column);
  }

  if (parentColumns.length === 0) return originalIndex.get(id) ?? 0;
  return parentColumns.reduce((total, column) => total + column, 0) / parentColumns.length;
}

function incomingTransitionsByTarget(
  states: JourneyGraphLayoutState[],
  statesById: Map<string, JourneyGraphLayoutState>,
) {
  const incoming = new Map<string, string[]>();
  for (const state of states) {
    for (const targetId of validTransitionTargets(state, statesById)) {
      const sources = incoming.get(targetId) ?? [];
      if (!sources.includes(state.id)) sources.push(state.id);
      incoming.set(targetId, sources);
    }
  }
  return incoming;
}

function validTransitionTargets(
  state: JourneyGraphLayoutState | undefined,
  statesById: Map<string, JourneyGraphLayoutState>,
) {
  const targets: string[] = [];
  for (const transition of state?.transitions ?? []) {
    if (!statesById.has(transition.targetId) || targets.includes(transition.targetId)) continue;
    targets.push(transition.targetId);
  }
  return targets;
}

function canReach(
  startId: string,
  targetId: string,
  statesById: Map<string, JourneyGraphLayoutState>,
) {
  const visited = new Set<string>();
  const stack = [startId];

  while (stack.length > 0) {
    const id = stack.pop();
    if (!id || visited.has(id)) continue;
    if (id === targetId) return true;
    visited.add(id);

    const state = statesById.get(id);
    for (const nextId of validTransitionTargets(state, statesById)) {
      stack.push(nextId);
    }
  }

  return false;
}

function edgeLabelPosition(sourceX: number, sourceY: number, targetX: number, targetY: number) {
  const verticalDistance = Math.abs(targetY - sourceY);
  const direction = targetY >= sourceY ? 1 : -1;
  const corridorOffset = verticalDistance < 64
    ? 112
    : Math.min(112, Math.max(76, verticalDistance / 2));

  return {
    x: sourceX + (targetX - sourceX) * 0.5,
    y: sourceY + direction * corridorOffset,
  };
}

function labelRect(center: JourneyGraphEdgeLabelPlacement) {
  return {
    left: center.x - EDGE_LABEL_WIDTH / 2,
    right: center.x + EDGE_LABEL_WIDTH / 2,
    top: center.y - EDGE_LABEL_HEIGHT / 2,
    bottom: center.y + EDGE_LABEL_HEIGHT / 2,
  };
}

function intersects(
  first: { left: number; right: number; top: number; bottom: number },
  second: { left: number; right: number; top: number; bottom: number },
) {
  return !(
    first.right + EDGE_LABEL_NODE_PADDING <= second.left
    || second.right + EDGE_LABEL_NODE_PADDING <= first.left
    || first.bottom + EDGE_LABEL_NODE_PADDING <= second.top
    || second.bottom + EDGE_LABEL_NODE_PADDING <= first.top
  );
}
