"use client";

import {
  CheckIcon,
  PanelRightOpenIcon,
  SparklesIcon,
} from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  ModelSelectorLogo,
  ModelSelectorName,
} from "@/components/ai-elements/model-selector";
import {
  PromptInput,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  reasoningLabel,
  shouldMarkItemContinuing,
  shouldShowStandaloneWorkingIndicator,
} from "./activity";
import { operatorSuggestions, reasoningEfforts } from "./config";
import { useOperatorController, type OperatorViewProps } from "./controller";
import {
  ChatMessage,
  InlineWorkingIndicator,
  OperatorEventWidget,
} from "./events";
import {
  DashboardFloatingControls,
  DashboardSidebar,
  DeleteSessionDialog,
  ResizeHandle,
  SessionSidebar,
} from "./panels";

export function OperatorView(props: OperatorViewProps) {
  const {
    activeSession,
    artifacts,
    assistantIsTyping,
    beginRenameSession,
    canStartNewSession,
    checkDashboardFromChat,
    closeDashboardPanel,
    commitRenameSession,
    confirmDeleteSession,
    dashboardActionError,
    dashboardChecks,
    dashboardPanelVisible,
    deleteDashboardFromChat,
    diffFiles,
    effectiveDashboardPanelMaximized,
    filteredSessions,
    hasUserMessages,
    input,
    isWorking,
    modelSelectorOpen,
    openDashboardFromChat,
    openDashboardPanel,
    openOperatorSession,
    operatorGridStyle,
    operatorLayoutRef,
    operatorSessionId,
    pendingDeleteSession,
    previewDashboard,
    publishDashboardFromChat,
    renamingSessionId,
    renamingTitle,
    reviseDashboardFromPanel,
    selectedModel,
    selectedModelData,
    selectedReasoningEffort,
    sendOperatorMessage,
    sessionSearch,
    sessionSidebarCollapsed,
    setInput,
    setModelSelectorOpen,
    setPendingDeleteSession,
    setRenamingSessionId,
    setRenamingTitle,
    setSelectedModel,
    setSelectedReasoningEffort,
    setSessionSearch,
    setSessionSidebarCollapsed,
    startDashboardResize,
    startNewSession,
    startSessionSidebarResize,
    stopOperatorTurn,
    toggleDashboardMaximized,
    visibleChatItems,
  } = useOperatorController(props);

  return (
    <section
      className={cn(
        "operator-layout relative grid h-[calc(100vh-4rem)] min-h-0 overflow-hidden bg-white text-slate-950",
        "max-lg:grid-cols-[minmax(0,1fr)]"
      )}
      data-dashboard-maximized={effectiveDashboardPanelMaximized ? "true" : undefined}
      data-dashboard-open={dashboardPanelVisible ? "true" : undefined}
      ref={operatorLayoutRef}
      style={operatorGridStyle}
    >
      <ResizeHandle
        ariaLabel={sessionSidebarCollapsed ? "Resize or expand chat history" : "Resize chat history"}
        onPointerDown={startSessionSidebarResize}
        style={{ left: "var(--session-column)" }}
      />

      {dashboardPanelVisible && previewDashboard ? (
        <ResizeHandle
          ariaLabel="Resize dashboard sidebar"
          onPointerDown={startDashboardResize}
          style={{ left: "calc(100% - var(--dashboard-column))" }}
          testId="dashboard-resize-handle"
        />
      ) : null}

      {dashboardPanelVisible ? (
        <DashboardFloatingControls
          maximized={effectiveDashboardPanelMaximized}
          onClose={() => closeDashboardPanel()}
          onToggleMaximized={toggleDashboardMaximized}
        />
      ) : null}

      <SessionSidebar
        collapsed={sessionSidebarCollapsed}
        filteredSessions={filteredSessions}
        operatorSessionId={operatorSessionId}
        onBeginRename={beginRenameSession}
        onCancelRename={() => {
          setRenamingSessionId(null);
          setRenamingTitle("");
        }}
        onCommitRename={(sessionId) => void commitRenameSession(sessionId)}
        onDelete={setPendingDeleteSession}
        onOpenSession={(sessionId) => void openOperatorSession(sessionId)}
        onSearchChange={setSessionSearch}
        onStartNewSession={startNewSession}
        startNewSessionDisabled={!canStartNewSession}
        onToggleCollapsed={() => setSessionSidebarCollapsed((value) => !value)}
        renamingSessionId={renamingSessionId}
        renamingTitle={renamingTitle}
        search={sessionSearch}
        setRenamingTitle={setRenamingTitle}
      />

      <section className="grid min-h-0 min-w-0 max-w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden dark:bg-slate-950">
        <header className="flex min-h-16 w-full min-w-0 max-w-full items-center justify-between gap-4 overflow-hidden border-b border-slate-200 bg-white px-5 max-md:flex-col max-md:items-stretch max-md:py-4 dark:border-slate-700 dark:bg-slate-950">
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold text-slate-950">{activeSession?.title ?? "Studio Operator"}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1">{props.manifest.target.name}</span>
              {diffFiles.length ? <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-emerald-700">{diffFiles.length} changed</span> : null}
              {artifacts.length ? <span className="rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-sky-700">{artifacts.length} artifacts</span> : null}
            </div>
          </div>
          {previewDashboard && !dashboardPanelVisible ? (
            <Button
              className="shrink-0 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              onClick={() => openDashboardPanel()}
              size="sm"
              type="button"
              variant="outline"
            >
              <PanelRightOpenIcon />
              Dashboard
            </Button>
          ) : null}
        </header>

        <Conversation className="min-h-0 min-w-0 max-w-full overflow-hidden bg-white dark:bg-slate-950">
          <ConversationContent className="h-full w-full min-w-0 max-w-full gap-5 overflow-y-auto overflow-x-hidden px-4 py-8">
            <div className="operator-chat-flow mx-auto flex w-full min-w-0 max-w-full flex-col gap-5">
              {visibleChatItems.map((item) => item.type === "message" ? (
                <ChatMessage
                  continuing={shouldMarkItemContinuing(item, visibleChatItems, isWorking, assistantIsTyping)}
                  item={item}
                  key={item.id}
                />
              ) : (
                <OperatorEventWidget
                  checkResult={item.event.dashboardId ? dashboardChecks[item.event.dashboardId] ?? null : null}
                  continuing={shouldMarkItemContinuing(item, visibleChatItems, isWorking, assistantIsTyping)}
                  event={item.event}
                  key={item.id}
                  onCheckDashboard={checkDashboardFromChat}
                  onDeleteDashboard={deleteDashboardFromChat}
                  onOpenDashboard={openDashboardFromChat}
                  onPublishDashboard={publishDashboardFromChat}
                />
              ))}
              {shouldShowStandaloneWorkingIndicator(visibleChatItems, isWorking, assistantIsTyping) ? <InlineWorkingIndicator /> : null}

              {!hasUserMessages ? (
                <Suggestions className="px-0">
                  {operatorSuggestions.map((suggestion) => (
                    <Suggestion
                      className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                      disabled={isWorking}
                      key={suggestion.label}
                      onClick={() => void sendOperatorMessage(suggestion.prompt)}
                      suggestion={suggestion.label}
                      variant="outline"
                    >
                      <SparklesIcon className="size-4" />
                      {suggestion.label}
                    </Suggestion>
                  ))}
                </Suggestions>
              ) : null}
            </div>
          </ConversationContent>
          <ConversationScrollButton className="bottom-5 border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800" />
        </Conversation>

        <footer className="w-full min-w-0 max-w-full overflow-hidden border-t border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
          <div className="mx-auto w-full min-w-0 max-w-4xl">
            <PromptInput
              className="rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 dark:border-slate-600 dark:bg-slate-900 dark:shadow-none dark:ring-1 dark:ring-slate-700"
              onSubmit={(message) => void sendOperatorMessage(message.text)}
            >
              <PromptInputBody>
                <PromptInputTextarea
                  className="min-h-20 resize-none text-slate-950 placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void sendOperatorMessage();
                    }
                  }}
                  placeholder="Ask Operator to explain, edit, create dashboards, or save work"
                  value={input}
                />
              </PromptInputBody>
              <PromptInputFooter className="flex-wrap">
                <PromptInputTools className="flex-1 flex-wrap">
                  <Popover onOpenChange={setModelSelectorOpen} open={modelSelectorOpen}>
                    <PopoverTrigger asChild>
                      <PromptInputButton
                        aria-label="Select model"
                        className="min-w-0 max-w-40 justify-start text-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                        title="Select model"
                        type="button"
                        variant="ghost"
                      >
                        <ModelSelectorLogo provider="openai" />
                        <span className="truncate">{selectedModelData?.label ?? selectedModel}</span>
                        <span className="text-slate-400">/</span>
                        <span className="text-slate-500">{reasoningLabel(selectedReasoningEffort)}</span>
                      </PromptInputButton>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-80 border-slate-200 bg-white p-0 text-slate-950 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" side="top">
                      <Command className="bg-white dark:bg-slate-900">
                        <CommandInput placeholder="Search models..." />
                        <CommandList>
                          <CommandEmpty>No models found.</CommandEmpty>
                          <CommandGroup heading="Available models">
                            {props.manifest.operator.models.map((model) => (
                              <CommandItem
                                key={model.id}
                                onSelect={() => {
                                  setSelectedModel(model.id);
                                  setModelSelectorOpen(false);
                                }}
                                value={model.id}
                              >
                                <ModelSelectorLogo provider="openai" />
                                <ModelSelectorName>{model.label}</ModelSelectorName>
                                {model.id === selectedModel ? <CheckIcon className="ml-auto size-4" /> : <span className="ml-auto size-4" />}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                          <CommandGroup heading="Reasoning effort">
                            {reasoningEfforts.map((effort) => (
                              <CommandItem
                                key={effort.id}
                                onSelect={() => {
                                  setSelectedReasoningEffort(effort.id);
                                  setModelSelectorOpen(false);
                                }}
                                value={`reasoning ${effort.id} ${effort.label}`}
                              >
                                <span className="min-w-0 flex-1 truncate">{effort.label}</span>
                                {effort.id === selectedReasoningEffort ? <CheckIcon className="ml-auto size-4" /> : <span className="ml-auto size-4" />}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <PromptInputButton className="text-slate-500 dark:text-slate-300" disabled type="button" variant="ghost">
                    <span className={cn("size-2 rounded-full", isWorking ? "animate-pulse bg-emerald-500" : "bg-slate-400")} />
                    {isWorking ? "Working" : "Ready"}
                  </PromptInputButton>
                </PromptInputTools>
                <PromptInputSubmit
                  disabled={!isWorking && !input.trim()}
                  onStop={() => void stopOperatorTurn()}
                  status={isWorking ? "streaming" : "ready"}
                />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </footer>
      </section>

      {dashboardPanelVisible && previewDashboard ? (
        <DashboardSidebar
          actionError={dashboardActionError}
          checkResult={dashboardChecks[previewDashboard.artifact.id] ?? null}
          previewDashboard={previewDashboard}
          onCheck={(id) => void checkDashboardFromChat(id)}
          onDelete={(id) => void deleteDashboardFromChat(id)}
          onPublish={(id) => void publishDashboardFromChat(id)}
          onRevise={reviseDashboardFromPanel}
        />
      ) : null}

      <DeleteSessionDialog
        pendingSession={pendingDeleteSession}
        onCancel={() => setPendingDeleteSession(null)}
        onConfirm={() => void confirmDeleteSession()}
      />
    </section>
  );
}
