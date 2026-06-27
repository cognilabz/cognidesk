import type { ReactNode } from "react";

export function PageHeader(props: { eyebrow: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 px-8 py-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-slate-500">{props.eyebrow}</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">{props.title}</h1>
        {props.description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{props.description}</p> : null}
      </div>
      {props.actions ? <div className="flex flex-wrap items-center gap-2">{props.actions}</div> : null}
    </header>
  );
}

export function Button(props: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  title?: string;
  disabled?: boolean;
  variant?: "default" | "primary" | "ghost";
  className?: string;
}) {
  const variant = props.variant ?? "default";
  const classes = {
    default: "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
    primary: "border-slate-950 bg-slate-950 text-white hover:bg-slate-800",
    ghost: "border-transparent bg-transparent text-slate-600 hover:bg-slate-100",
  }[variant];
  return (
    <button
      className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border px-3 text-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${classes} ${props.className ?? ""}`}
      type={props.type ?? "button"}
      onClick={props.onClick}
      title={props.title}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export function Panel(props: { children: ReactNode; className?: string }) {
  return (
    <section className={`min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white ${props.className ?? ""}`}>
      {props.children}
    </section>
  );
}

export function PanelHeader(props: { title: string; detail?: string; actions?: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4">
      <div className="min-w-0">
        <h2 className="text-base font-semibold text-slate-950">{props.title}</h2>
        {props.detail ? <p className="mt-1 text-sm text-slate-500">{props.detail}</p> : null}
      </div>
      {props.actions}
    </div>
  );
}

export function Metric(props: { label: string; value: string; detail?: string; tone?: "green" | "red" | "blue" | "violet" | "slate" }) {
  const tone = {
    green: "bg-emerald-500",
    red: "bg-rose-500",
    blue: "bg-blue-500",
    violet: "bg-violet-500",
    slate: "bg-slate-400",
  }[props.tone ?? "slate"];
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4">
      <span className="text-sm text-slate-500">{props.label}</span>
      <strong className="mt-3 flex items-center gap-2 text-2xl font-semibold text-slate-950">
        <i className={`h-2.5 w-2.5 rounded-full ${tone}`} />
        {props.value}
      </strong>
      {props.detail ? <small className="mt-2 block break-words text-xs leading-5 text-slate-500">{props.detail}</small> : null}
    </article>
  );
}

export function DataTable(props: { columns: string[]; rows: string[][]; emptyText?: string }) {
  const minWidth = props.columns.length <= 2 ? "100%" : Math.max(640, props.columns.length * 148);
  return (
    <div className="max-w-full overflow-x-auto overscroll-x-contain">
      <table className="w-full table-fixed border-collapse text-sm" style={{ minWidth }}>
        <thead>
          <tr>
            {props.columns.map((column) => (
              <th className="border-b border-slate-200 px-4 py-3 text-left font-medium text-slate-500" key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.length ? props.rows.map((row, rowIndex) => (
            <tr key={`${row.join("\u0000")}\u0000${rowIndex}`}>
              {props.columns.map((column, columnIndex) => {
                const value = row[columnIndex] ?? "-";
                return (
                  <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700" key={`${column}-${columnIndex}`}>
                    <span className="block max-w-[32rem] whitespace-normal break-words leading-6 [overflow-wrap:anywhere]" title={value}>
                      {value}
                    </span>
                  </td>
                );
              })}
            </tr>
          )) : (
            <tr>
              <td className="px-4 py-8 text-center text-slate-500" colSpan={props.columns.length}>
                {props.emptyText ?? "No entries."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function EmptyState(props: { title: string; text: string }) {
  return (
    <div className="grid min-h-72 place-items-center rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
      <div>
        <h2 className="text-base font-semibold text-slate-950">{props.title}</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">{props.text}</p>
      </div>
    </div>
  );
}
