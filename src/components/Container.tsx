import React from "react";
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-amber-300 max-w-2xl m-auto h-screen ${className}`}>
      {children}
    </div>
  );
}
