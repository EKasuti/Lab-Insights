"use client";

import Sidebar from "../components/sidebar";
import { useLabData } from "../hooks/useLabData";


export default function Home() {
  const experiments = useLabData();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <main className="flex-1 p-10">
        <h1 className="mb-4 text-3xl font-bold">Experiment Analysis Dashboard</h1>
        <p className="mb-8 text-sm text-gray-600">
          {experiments.length} of {experiments.length} experiments displayed
        </p>

        {/* Chart Container */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
          {/* TODO: Scatter plot */}
          <h2 className="mb-4 text-lg font-semibold">Scatter Plot</h2>
        </div>
      </main>
    </div>
  );
}
