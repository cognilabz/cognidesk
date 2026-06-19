"use client";

import { createContext } from "react";
import type { CodeBlockContextType } from "./types.js";

export const CodeBlockContext = createContext<CodeBlockContextType>({
  code: "",
});
