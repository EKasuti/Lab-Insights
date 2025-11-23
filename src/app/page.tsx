"use client";

import Sidebar from "../components/sidebar";
import { useLabData } from "../hooks/useLabData";
import { useState } from "react";
import ScatterPlot from "@/components/charts/scatter-plot";
import Histogram from "@/components/charts/histogram";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  const experiments = useLabData();
  const [xAxis, setXAxis] = useState("Oven Temperature");
  const [yAxis, setYAxis] = useState("Viscosity");
  const [mode, setMode] = useState<"scatter" | "histogram">("scatter");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        xAxis={xAxis}
        setXAxis={setXAxis}
        yAxis={yAxis}
        setYAxis={setYAxis}
        mode={mode}
      />

      {/* Main Dashboard */}
      <main className="flex-1 p-10">
        <h1 className="mb-4 text-3xl font-bold">Experiment Analysis Dashboard</h1>
        <p className="mb-8 text-sm text-gray-600">
          {experiments.length} of {experiments.length} experiments displayed
        </p>

        {/* Chart Container */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {mode === "scatter" ? "Scatter Plot" : "Histogram"}
            </h2>
            <div className="w-[200px]">
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
            <ScatterPlot data={experiments} xAxis={xAxis} yAxis={yAxis} />
          ) : (
            <Histogram data={experiments} xAxis={xAxis} />
          )}
        </div>
      </main>
    </div>
  );
}
