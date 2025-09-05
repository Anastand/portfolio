"use client";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { educationItems } from "@/lib/data/Education";
import { workItems } from "@/lib/data/Experience";
import Image from "next/image";

export default function Timeline({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto mt-8 w-full max-w-4xl px-2 shadow-acternity py-4 rounded-4xl ", className)}>
      <Tabs defaultValue="experience" className="w-full">
        {/* Tab Switcher */}
        <TabsList className="flex w-full gap-2 rounded-4xl bg-white/30 px-4 py-1 shadow-lg">
          <TabsTrigger
            value="experience"
            className="data-[state=active]:shadow-acternity flex-1 rounded-4xl px-2 py-2 text-sm font-medium text-neutral-700 transition-all hover:bg-[#C6E1FF]/60 data-[state=active]:bg-white/40"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="data-[state=active]:shadow-acternity flex-1 rounded-4xl px-4 py-2 text-sm font-medium text-neutral-700 transition-all hover:bg-[#C6E1FF]/60 data-[state=active]:bg-white/40"
          >
            Education
          </TabsTrigger>
        </TabsList>

        {/* Content */}
        <div className="px-4">
          {/* Experience Tab */}
          <TabsContent value="experience">
            <ol className="relative border-l border-gray-400">
              {workItems.map((item) => (
                <li key={item.id} className="mb-10 ml-6">
                  {/* Dot */}
                  <span className="absolute -left-1 mt-3 flex h-2 w-2 items-center justify-center rounded-full bg-blue-500 ring-4 ring-white"></span>

                  {/* Content */}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    {item.role} @ {item.name}
                  </p>
                  <time className="block text-xs text-gray-400">
                    {item.start} – {item.end ?? "Present"}
                  </time>
                  {item.bullets && (
                    <ul className="mt-2 list-disc pl-4 text-sm text-gray-600">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <ol className="relative border-l border-gray-400">
              {educationItems.map((item) => (
                <li key={item.id} className="mb-10 ml-6">
                  {/* Dot */}
                  <span className="absolute -left-1 mt-3 flex h-2 w-2 items-center justify-center rounded-full bg-green-500 ring-4 ring-white"></span>
                  {/* Content */}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <a href="https://mdu.ac.in/default.aspx">
                    <p className="text-sm text-gray-600">{item.name}</p>
                  </a>
                  <time className="block text-xs text-gray-500">
                    {item.start ?? ""} – {item.end}
                  </time>
                  {item.bullets && (
                    <ul className="mt-2 list-disc pl-4 text-sm text-gray-600">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
