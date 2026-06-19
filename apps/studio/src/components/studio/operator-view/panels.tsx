import {
  CheckIcon,
  FileTextIcon,
  Maximize2Icon,
  Minimize2Icon,
  MoreHorizontalIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  PanelRightCloseIcon,
  PencilIcon,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { DashboardRenderer, type DashboardCheckResult } from "../dashboard-renderer";
import { formatDateTime } from "../format";
import type { OperatorSessionRow, PreviewDashboard } from "../types";

export function DashboardFloatingControls(props: {
  maximized: boolean;
  onClose: () => void;
  onToggleMaximized: () => void;
}) {
  return (
    <div className="fixed top-20 right-8 z-50 flex items-center gap-1 max-lg:hidden">
      <Button
        aria-label={props.maximized ? "Restore dashboard sidebar" : "Maximize dashboard sidebar"}
        className="bg-white/95 text-slate-500 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 hover:text-slate-950 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-800 dark:hover:text-white"
        onClick={props.onToggleMaximized}
        size="icon-sm"
        title={props.maximized ? "Restore dashboard sidebar" : "Maximize dashboard sidebar"}
        type="button"
        variant="ghost"
      >
        {props.maximized ? <Minimize2Icon /> : <Maximize2Icon />}
      </Button>
      <Button
        aria-label="Close dashboard sidebar"
        className="bg-white/95 text-slate-500 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 hover:text-slate-950 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-800 dark:hover:text-white"
        onClick={props.onClose}
        size="icon-sm"
        title="Close dashboard sidebar"
        type="button"
        variant="ghost"
      >
        <PanelRightCloseIcon />
      </Button>
    </div>
  );
}

export function SessionSidebar(props: {
  collapsed: boolean;
  filteredSessions: OperatorSessionRow[];
  operatorSessionId: string | null;
  onBeginRename: (session: OperatorSessionRow) => void;
  onCancelRename: () => void;
  onCommitRename: (sessionId: string) => void;
  onDelete: (session: OperatorSessionRow) => void;
  onOpenSession: (sessionId: string) => void;
  onSearchChange: (value: string) => void;
  onStartNewSession: () => void;
  onToggleCollapsed: () => void;
  renamingSessionId: string | null;
  renamingTitle: string;
  search: string;
  setRenamingTitle: (title: string) => void;
}) {
  return (
    <aside className="grid min-h-0 grid-rows-[auto_auto_auto_minmax(0,1fr)] border-r border-slate-200 bg-slate-50 max-lg:hidden dark:border-slate-700 dark:bg-slate-950">
      <div className={cn("flex items-center gap-2 px-3 py-3", props.collapsed ? "justify-center" : "justify-between")}>
        <span className={cn("text-sm font-medium text-slate-600", props.collapsed && "sr-only")}>Sessions</span>
        <Button
          aria-label={props.collapsed ? "Expand sessions" : "Collapse sessions"}
          className="text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          onClick={props.onToggleCollapsed}
          size="icon-sm"
          title={props.collapsed ? "Expand sessions" : "Collapse sessions"}
          type="button"
          variant="ghost"
        >
          {props.collapsed ? <PanelLeftOpenIcon /> : <PanelLeftCloseIcon />}
        </Button>
      </div>

      <div className="px-3 pb-3">
        <Button
          className={cn("w-full justify-start bg-white text-slate-950 hover:bg-slate-100 dark:border dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800", props.collapsed && "justify-center px-0")}
          onClick={props.onStartNewSession}
          title="New session"
          type="button"
        >
          <PlusIcon />
          <span className={props.collapsed ? "sr-only" : ""}>New session</span>
        </Button>
      </div>

      {!props.collapsed ? (
        <div className="px-3 pb-3">
          <label className="relative block" htmlFor="operator-session-search">
            <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-500" />
            <Input
              aria-label="Search sessions"
              className="border-slate-200 bg-white pl-9 text-slate-950 placeholder:text-slate-400 focus-visible:ring-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
              id="operator-session-search"
              onChange={(event) => props.onSearchChange(event.target.value)}
              placeholder="Search sessions"
              value={props.search}
            />
          </label>
        </div>
      ) : null}

      {!props.collapsed ? (
        <div className="studio-scrollbar-hidden min-h-0 overflow-y-auto px-2 pb-3">
          <div className="grid gap-1">
            {props.filteredSessions.slice(0, 60).map((session) => (
              <SessionRow
                active={props.operatorSessionId === session.id}
                collapsed={false}
                key={session.id}
                onDelete={() => props.onDelete(session)}
                onOpen={() => props.onOpenSession(session.id)}
                onRename={() => props.onBeginRename(session)}
                onRenameCommit={() => props.onCommitRename(session.id)}
                onRenameTitleChange={props.setRenamingTitle}
                onRenameCancel={props.onCancelRename}
                renaming={props.renamingSessionId === session.id}
                renamingTitle={props.renamingTitle}
                session={session}
              />
            ))}
          </div>
        </div>
      ) : <div className="min-h-0" />}
    </aside>
  );
}

export function DashboardSidebar(props: {
  actionError: string | null;
  checkResult: DashboardCheckResult | null;
  previewDashboard: NonNullable<PreviewDashboard>;
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
  onPublish: (id: string) => void;
  onRevise: () => void;
}) {
  const dashboardId = props.previewDashboard.artifact.id;
  return (
    <aside className="grid min-h-0 min-w-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden border-l border-slate-200 bg-white max-lg:hidden dark:border-slate-700 dark:bg-slate-950" data-testid="dashboard-sidebar">
      <div className="relative z-20 flex min-h-16 items-center border-b border-slate-200 bg-white px-4 pr-24 dark:border-slate-700 dark:bg-slate-950">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase text-slate-500">Dashboard view</p>
          <h2 className="truncate text-sm font-semibold text-slate-950">
            {props.previewDashboard.artifact.title}
          </h2>
        </div>
      </div>
      <div className="min-h-0 min-w-0 overflow-y-auto overflow-x-hidden bg-slate-50/60 p-4 dark:bg-slate-950">
        {props.actionError ? (
          <div className="mb-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {props.actionError}
          </div>
        ) : null}
        <div className="grid gap-3">
          <div className="flex flex-wrap gap-2">
            <Button
              className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              onClick={props.onRevise}
              size="sm"
              type="button"
              variant="outline"
            >
              <PencilIcon />
              Ask for changes
            </Button>
            <Button
              className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              onClick={() => props.onCheck(dashboardId)}
              size="sm"
              type="button"
              variant="outline"
            >
              <RefreshCwIcon />
              Check
            </Button>
            {props.previewDashboard.artifact.status !== "published" ? (
              <Button className="dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white" onClick={() => props.onPublish(dashboardId)} size="sm" type="button">
                <CheckIcon />
                Publish
              </Button>
            ) : null}
            <Button
              className="border-red-200 bg-white text-red-600 hover:bg-red-50 dark:border-red-500/60 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-900/50"
              onClick={() => props.onDelete(dashboardId)}
              size="sm"
              type="button"
              variant="outline"
            >
              <Trash2Icon />
              Delete
            </Button>
          </div>
          <DashboardRenderer
            checkResult={props.checkResult}
            compact
            previewDashboard={props.previewDashboard}
          />
        </div>
      </div>
    </aside>
  );
}

export function DeleteSessionDialog(props: {
  pendingSession: OperatorSessionRow | null;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) props.onCancel();
      }}
      open={props.pendingSession !== null}
    >
      <DialogContent className="border-slate-200 bg-white text-slate-950">
        <DialogHeader>
          <DialogTitle>Delete session?</DialogTitle>
          <DialogDescription className="text-slate-500">
            {props.pendingSession?.title ?? "This session"} will be removed from Studio.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="border-slate-200 text-slate-700 hover:bg-slate-50"
            onClick={props.onCancel}
            type="button"
            variant="outline"
          >
            Cancel
          </Button>
          <Button onClick={props.onConfirm} type="button" variant="destructive">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ResizeHandle(props: {
  ariaLabel: string;
  onPointerDown: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  style: CSSProperties;
  testId?: string;
}) {
  return (
    <button
      aria-label={props.ariaLabel}
      className="group absolute top-0 bottom-0 z-40 w-6 -translate-x-1/2 cursor-col-resize touch-none max-lg:hidden focus-visible:outline-none"
      data-testid={props.testId}
      onPointerDown={props.onPointerDown}
      style={props.style}
      type="button"
    >
      <span className="mx-auto block h-full w-px bg-transparent transition-colors group-hover:bg-slate-400 group-focus-visible:bg-slate-500" />
    </button>
  );
}

export function beginColumnResize() {
  const previousCursor = document.body.style.cursor;
  const previousUserSelect = document.body.style.userSelect;
  document.body.style.cursor = "col-resize";
  document.body.style.userSelect = "none";
  return () => {
    document.body.style.cursor = previousCursor;
    document.body.style.userSelect = previousUserSelect;
  };
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function SessionRow(props: {
  active: boolean;
  collapsed: boolean;
  onDelete: () => void;
  onOpen: () => void;
  onRename: () => void;
  onRenameCancel: () => void;
  onRenameCommit: () => void;
  onRenameTitleChange: (value: string) => void;
  renaming: boolean;
  renamingTitle: string;
  session: OperatorSessionRow;
}) {
  if (props.renaming && !props.collapsed) {
    return (
      <div className="grid gap-2 rounded-lg border border-slate-200 bg-white p-2">
        <Input
          aria-label="Rename session"
          autoFocus
          className="border-slate-200 bg-white text-slate-950"
          onChange={(event) => props.onRenameTitleChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") props.onRenameCommit();
            if (event.key === "Escape") props.onRenameCancel();
          }}
          value={props.renamingTitle}
        />
        <div className="flex justify-end gap-1">
          <Button onClick={props.onRenameCancel} size="icon-xs" type="button" variant="ghost">
            <XIcon />
          </Button>
          <Button onClick={props.onRenameCommit} size="icon-xs" type="button" variant="secondary">
            <CheckIcon />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group flex items-stretch gap-1 rounded-lg p-1 transition",
        props.active ? "bg-white shadow-sm ring-1 ring-slate-200" : "hover:bg-slate-100",
        props.collapsed && "justify-center"
      )}
    >
      <button
        className={cn(
          "min-w-0 flex-1 rounded-md px-2 py-2 text-left text-sm text-slate-700",
          props.collapsed ? "grid place-items-center px-0" : "grid gap-1"
        )}
        onClick={props.onOpen}
        title={props.session.title}
        type="button"
      >
        {props.collapsed ? <FileTextIcon className="size-4" /> : (
          <>
            <span className="truncate">{props.session.title}</span>
            <span className="text-xs text-slate-500">{formatDateTime(props.session.updatedAt)}</span>
          </>
        )}
      </button>

      {!props.collapsed ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="self-center text-slate-400 opacity-0 hover:bg-slate-100 hover:text-slate-950 group-hover:opacity-100 data-[state=open]:opacity-100"
              size="icon-xs"
              type="button"
              variant="ghost"
            >
              <MoreHorizontalIcon />
              <span className="sr-only">Session actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="border-slate-200 bg-white text-slate-950">
            <DropdownMenuItem onSelect={props.onRename}>
              <PencilIcon className="mr-2 size-4" />
              Rename
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 focus:text-red-700" onSelect={props.onDelete}>
              <Trash2Icon className="mr-2 size-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </div>
  );
}
