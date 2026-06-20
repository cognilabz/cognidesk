"use client";

import { createContext } from "react";
import type { CodeBlockContextType } from "./types";

export const CodeBlockContext = createContext<CodeBlockContextType>({
  code: "",
});
