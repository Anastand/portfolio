"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export default function ThemeProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  // attribute "class" will toggle "dark" on <html> (or body) depending on theme
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
