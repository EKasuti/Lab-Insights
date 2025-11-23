import { useState } from "react";
import { ActiveFilter } from "@/components/filter-section";
import { ALL_VARIABLES } from "@/constants/variables";
import { Experiment } from "@/lib/types/experiments";

export function useFilters(experiments: Experiment[]) {
  const [filters, setFilters] = useState<ActiveFilter[]>([]);

  // availableVariables are those not currently used in active filters
  const availableVariables = ALL_VARIABLES.filter(
    (v) => !filters.some((f) => f.variable === v.value)
  );

  // Apply filters to experiments
  const filteredData = experiments.filter((exp) => {
    return filters.every((filter) => {
      const value = (exp.inputs as any)[filter.variable] || (exp.outputs as any)[filter.variable];
      return value >= filter.range[0] && value <= filter.range[1];
    });
  });

  const addFilter = (variable: string) => {
    // min and max values for the variable across all experiments
    let min = Infinity;
    let max = -Infinity;

    experiments.forEach((exp) => {
      const value = (exp.inputs as any)[variable] || (exp.outputs as any)[variable];
      if (value < min) min = value;
      if (value > max) max = value;
    });

    // new filter with full range
    setFilters([...filters, { variable, min, max, range: [min, max] }]);
  };

  const removeFilter = (variable: string) => {
    setFilters(filters.filter((f) => f.variable !== variable));
  };

  const updateFilter = (variable: string, range: [number, number]) => {
    setFilters(filters.map((f) => (f.variable === variable ? { ...f, range } : f)));
  };

  const clearAllFilters = () => setFilters([]);

  return {
    filters,
    availableVariables,
    filteredData,
    addFilter,
    removeFilter,
    updateFilter,
    clearAllFilters,
  };
}
