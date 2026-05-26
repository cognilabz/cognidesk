import type { AnyTool } from "../types.js";
import type { ToolRunOptions } from "./primitives.js";
import type {
  CollectedField,
  FieldWidgetOption,
} from "./state-builder-types.js";

export function resolveFieldWidget(widgetOption: FieldWidgetOption | undefined) {
  if (!widgetOption) return null;
  if ("widget" in widgetOption) {
    return {
      widget: widgetOption.widget,
      input: widgetOption.input,
    };
  }
  return { widget: widgetOption };
}

export function compileAssignments<TContext>(
  assign: ToolRunOptions<AnyTool, TContext>["assign"] | undefined,
): Array<{ path: string; value: (args: { output: unknown; context: unknown }) => unknown }> {
  if (!assign) return [];
  return Object.entries(assign).map(([path, value]) => ({
    path,
    value: value as (args: { output: unknown; context: unknown }) => unknown,
  }));
}

export function mergeCollectedFields<TField extends CollectedField>(
  inherited: TField[],
  own: TField[],
) {
  const byPath = new Map<string, TField>();
  for (const field of inherited) byPath.set(field.path, field);
  for (const field of own) byPath.set(field.path, field);
  return [...byPath.values()];
}
