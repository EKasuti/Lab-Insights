"use client";

import Sidebar from "../components/sidebar";
import MobileSidebar from "@/components/mobile-sidebar";
import InfoTooltip from "@/components/info-tooltip";
import { useState } from "react";
import ScatterPlot from "@/components/charts/scatter-plot";
import Histogram from "@/components/charts/histogram";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFilters, useLabData } from "@/hooks";

export default function Home() {
  const experiments = useLabData();
  const [xAxis, setXAxis] = useState("Oven Temperature");
  const [yAxis, setYAxis] = useState("Viscosity");
  const [mode, setMode] = useState<"scatter" | "histogram">("scatter");

  const {
    filters,
    availableVariables,
    filteredData,
    addFilter,
    removeFilter,
    updateFilter,
    clearAllFilters,
  } = useFilters(experiments);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        xAxis={xAxis}
        setXAxis={setXAxis}
        yAxis={yAxis}
        setYAxis={setYAxis}
        mode={mode}
        activeFilters={filters}
        availableVariables={availableVariables}
        onAddFilter={addFilter}
        onRemoveFilter={removeFilter}
        onUpdateFilter={updateFilter}
        onClearAll={clearAllFilters}
      />
      <MobileSidebar
        xAxis={xAxis}
        setXAxis={setXAxis}
        yAxis={yAxis}
        setYAxis={setYAxis}
        mode={mode}
        activeFilters={filters}
        availableVariables={availableVariables}
        onAddFilter={addFilter}
        onRemoveFilter={removeFilter}
        onUpdateFilter={updateFilter}
        onClearAll={clearAllFilters}
      />

      {/* Main Dashboard */}
      <main className="flex-1 p-4 md:p-10">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-3xl font-bold">Lab Dashboard</h1>
          <InfoTooltip
            content={
              <div className="space-y-2">
                <p className="font-semibold">What you can do:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Select X and Y axes from the sidebar</li>
                  <li>• Switch between scatter plot and histogram</li>
                  <li>• Add filters to narrow down data</li>
                  <li>• Click data points for details</li>
                </ul>
              </div>
            }
          />
        </div>
        <p className="mb-8 text-sm text-gray-600">
          {filteredData.length} of {experiments.length} experiments displayed
        </p>

        {/* Chart Container */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold pl-8">
              {mode === "scatter" ? "Scatter Plot" : "Histogram"}
            </h2>
            <div className="w-36">
              <Select value={mode} onValueChange={(v) => setMode(v as "scatter" | "histogram")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scatter">Scatter Plot</SelectItem>
                  <SelectItem value="histogram">Histogram</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {mode === "scatter" ? (
            <ScatterPlot data={filteredData} xAxis={xAxis} yAxis={yAxis} />
          ) : (
            <Histogram data={filteredData} xAxis={xAxis} />
          )}
        </div>
      </main>
    </div>
  );
}
