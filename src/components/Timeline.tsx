"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Timeline({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto mt-8 w-full max-w-4xl px-2", className)}>
      <div className="flex flex-col">
        <Tabs defaultValue="account" className="w-fulll">
          <TabsList className="flex w-full gap-2 rounded-4xl bg-white/30 px-4 py-1 shadow-lg">
            <TabsTrigger
              value="account"
              className="data-[state=active]:shadow-acternity flex-1 rounded-4xl px-2 py-2 text-sm font-medium text-neutral-700 transition-all hover:bg-[#C6E1FF]/60 data-[state=active]:bg-white/40"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="data-[state=active]:shadow-acternity flex-1 rounded-4xl px-4 py-2 text-sm font-medium text-neutral-700 transition-all hover:bg-[#C6E1FF]/60 data-[state=active]:bg-white/40"
            >
              Password
            </TabsTrigger>
          </TabsList>
          <div className="px-8">
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
