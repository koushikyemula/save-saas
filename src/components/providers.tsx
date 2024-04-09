"use client";

import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";

type ProviderProps = {
  children: ReactNode;
};

export function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
