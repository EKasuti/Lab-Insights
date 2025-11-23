"use client";

import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import SidebarControls from "./sidebar-controls";

interface SidebarProps {
  xAxis: string;
  setXAxis: (value: string) => void;
  yAxis: string;
  setYAxis: (value: string) => void;
  mode: "scatter" | "histogram";
}

export default function Sidebar({
  xAxis,
  setXAxis,
  yAxis,
  setYAxis,
  mode,
}: SidebarProps) {
  return (
    <aside className="hidden md:block w-64 border-r border-gray-200 bg-white p-6">
      <ScrollArea className="h-full">
        <h2 className="mb-6 text-lg font-semibold">Controls</h2>

        <SidebarControls
          xAxis={xAxis}
          setXAxis={setXAxis}
          yAxis={yAxis}
          setYAxis={setYAxis}
          mode={mode}
        />

        <Separator className="my-4" />
      </ScrollArea>
    </aside>
  );
}