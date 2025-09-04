import React from "react";
import { cn } from "@/lib/utils";
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-4xl px-4 w-full", className)}>{children}</div>
  );
}
