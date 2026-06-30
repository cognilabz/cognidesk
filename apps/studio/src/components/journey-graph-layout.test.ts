import { describe, expect, it } from "vitest";
import {
  JOURNEY_GRAPH_COLUMN_SPACING,
  JOURNEY_GRAPH_LEVEL_SPACING,
  JOURNEY_GRAPH_NODE_HEIGHT,
  JOURNEY_GRAPH_NODE_WIDTH,
  layoutJourneyGraph,
  placeJourneyEdgeLabel,
  resolveJourneyEntryStateId,
  type JourneyGraphLayoutState,
  type JourneyGraphNodePlacement,
} from "./journey-graph-layout";

describe("journey graph layout", () => {
  it("uses the configured initial state as the entry focus", () => {
    const states = [
      state("first"),
      state("configured-entry"),
    ];

    expect(resolveJourneyEntryStateId(states, "configured-entry")).toBe("configured-entry");
    expect(resolveJourneyEntryStateId(states, "missing")).toBe("first");
  });

  it("keeps branched journey nodes separated with a label corridor between levels", () => {
    const states = [
      state("start", ["collect-passenger", "collect-trip"]),
      state("collect-passenger", ["review"]),
      state("collect-trip", ["review"]),
      state("review", ["done"]),
      state("done"),
    ];

    const layout = layoutJourneyGraph(states, "start");
    const placements = Array.from(layout.placements.values());

    expect(layout.entryStateId).toBe("start");
    expect(placements).toHaveLength(states.length);
    expectNoNodeOverlap(placements);
    expect(JOURNEY_GRAPH_LEVEL_SPACING - JOURNEY_GRAPH_NODE_HEIGHT).toBeGreaterThanOrEqual(200);
  });

  it("moves shared downstream states below same-level branches", () => {
    const states = [
      state("start", ["collect", "review"]),
      state("collect", ["review"]),
      state("review"),
    ];

    const layout = layoutJourneyGraph(states, "start");

    expect(layout.placements.get("collect")?.level).toBe(1);
    expect(layout.placements.get("review")?.level).toBe(2);
  });

  it("packs disconnected states into rows instead of a tall empty stack", () => {
    const states = [
      state("start"),
      state("orphan-1"),
      state("orphan-2"),
      state("orphan-3"),
      state("orphan-4"),
      state("orphan-5"),
    ];

    const layout = layoutJourneyGraph(states, "start");
    const orphanRows = new Set(
      states
        .slice(1)
        .map((orphan) => layout.placements.get(orphan.id)?.level),
    );

    expect(orphanRows.size).toBe(2);
    expectNoNodeOverlap(Array.from(layout.placements.values()));
  });

  it("places long-edge labels outside known node rectangles", () => {
    const states = [
      state("start", ["middle", "done"]),
      state("middle", ["almost-done"]),
      state("almost-done", ["done"]),
      state("done"),
    ];
    const layout = layoutJourneyGraph(states, "start");
    const source = layout.placements.get("start");
    const target = layout.placements.get("done");

    expect(source).toBeDefined();
    expect(target).toBeDefined();
    if (!source || !target) return;

    const label = placeJourneyEdgeLabel(source, target, layout.placements.values());

    for (const placement of layout.placements.values()) {
      expect(labelOverlapsNode(label, placement), `label overlaps ${placement.id}`).toBe(false);
    }
  });
});

function state(id: string, targets: string[] = []): JourneyGraphLayoutState {
  return {
    id,
    transitions: targets.map((targetId) => ({ targetId })),
  };
}

function expectNoNodeOverlap(placements: JourneyGraphNodePlacement[]) {
  for (let outerIndex = 0; outerIndex < placements.length; outerIndex += 1) {
    const outer = placements[outerIndex];
    if (!outer) continue;

    for (let innerIndex = outerIndex + 1; innerIndex < placements.length; innerIndex += 1) {
      const inner = placements[innerIndex];
      if (!inner) continue;

      const separatedHorizontally = outer.x + JOURNEY_GRAPH_NODE_WIDTH <= inner.x
        || inner.x + JOURNEY_GRAPH_NODE_WIDTH <= outer.x;
      const separatedVertically = outer.y + JOURNEY_GRAPH_NODE_HEIGHT <= inner.y
        || inner.y + JOURNEY_GRAPH_NODE_HEIGHT <= outer.y;

      expect(
        separatedHorizontally || separatedVertically,
        `${outer.id} overlaps ${inner.id}`,
      ).toBe(true);
    }
  }

  expect(JOURNEY_GRAPH_COLUMN_SPACING - JOURNEY_GRAPH_NODE_WIDTH).toBeGreaterThanOrEqual(160);
}

function labelOverlapsNode(
  label: { x: number; y: number },
  node: JourneyGraphNodePlacement,
) {
  const labelWidth = 224;
  const labelHeight = 44;
  return !(
    label.x + labelWidth / 2 <= node.x
    || node.x + JOURNEY_GRAPH_NODE_WIDTH <= label.x - labelWidth / 2
    || label.y + labelHeight / 2 <= node.y
    || node.y + JOURNEY_GRAPH_NODE_HEIGHT <= label.y - labelHeight / 2
  );
}
