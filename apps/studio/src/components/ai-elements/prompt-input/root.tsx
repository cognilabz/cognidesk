"use client";

import { InputGroup } from "@/components/ui/input/group";
import { cn } from "@/lib/utils";
import {
  LocalAttachmentsContext,
  LocalReferencedSourcesContext,
} from "./context.js";
import type { PromptInputProps } from "./types.js";
import { usePromptInputState } from "./use-prompt-input-state.js";

export const PromptInput = ({
  className,
  accept,
  multiple,
  globalDrop,
  syncHiddenInput,
  maxFiles,
  maxFileSize,
  onError,
  onSubmit,
  children,
  ...props
}: PromptInputProps) => {
  const {
    attachmentsCtx,
    formRef,
    handleFileInputChange,
    handleSubmit,
    inputRef,
    refsCtx,
  } = usePromptInputState({
    accept,
    globalDrop,
    maxFileSize,
    maxFiles,
    onError,
    onSubmit,
    syncHiddenInput,
  });

  const inner = (
    <>
      <input
        accept={accept}
        aria-label="Upload files"
        className="hidden"
        multiple={multiple}
        onChange={handleFileInputChange}
        ref={inputRef}
        title="Upload files"
        type="file"
      />
      <form
        className={cn("w-full", className)}
        onSubmit={handleSubmit}
        ref={formRef}
        {...props}
      >
        <InputGroup className="overflow-hidden">{children}</InputGroup>
      </form>
    </>
  );

  const withReferencedSources = (
    <LocalReferencedSourcesContext.Provider value={refsCtx}>
      {inner}
    </LocalReferencedSourcesContext.Provider>
  );

  return (
    <LocalAttachmentsContext.Provider value={attachmentsCtx}>
      {withReferencedSources}
    </LocalAttachmentsContext.Provider>
  );
};
