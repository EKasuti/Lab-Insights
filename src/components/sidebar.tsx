"use client";

import { Separator } from "./ui/separator";
import SidebarControls from "./sidebar-controls";
import { ActiveFilter } from "./filter-section";

interface SidebarProps {
  xAxis: string;
  setXAxis: (value: string) => void;
  yAxis: string;
  setYAxis: (value: string) => void;
  mode: "scatter" | "histogram";
  activeFilters: ActiveFilter[];
  availableVariables: { label: string; value: string }[];
  onAddFilter: (variable: string) => void;
  onRemoveFilter: (variable: string) => void;
  onUpdateFilter: (variable: string, range: [number, number]) => void;
  onClearAll: () => void;
}

export default function Sidebar({
  xAxis,
  setXAxis,
  yAxis,
  setYAxis,
  mode,
  activeFilters,
  availableVariables,
  onAddFilter,
  onRemoveFilter,
  onUpdateFilter,
  onClearAll,
}: SidebarProps) {
  return (
    <aside className="hidden md:block w-64 border-r border-gray-200 bg-white p-6 pt-10 sticky top-0 h-screen overflow-y-auto">
      <h2 className="mb-6 text-lg font-semibold">Controls</h2>

      <SidebarControls
        xAxis={xAxis}
        setXAxis={setXAxis}
        yAxis={yAxis}
        setYAxis={setYAxis}
        mode={mode}
        activeFilters={activeFilters}
        availableVariables={availableVariables}
        onAddFilter={onAddFilter}
        onRemoveFilter={onRemoveFilter}
        onUpdateFilter={onUpdateFilter}
        onClearAll={onClearAll}
      />

      <Separator className="my-4" />
    </aside>
  );
}