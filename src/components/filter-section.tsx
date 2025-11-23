"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import FilterCard from "./filter-card";

export interface ActiveFilter {
  variable: string;
  min: number;
  max: number;
  range: [number, number];
}

interface FilterSectionProps {
  activeFilters: ActiveFilter[];
  availableVariables: { label: string; value: string }[];
  onAddFilter: (variable: string) => void;
  onRemoveFilter: (variable: string) => void;
  onUpdateFilter: (variable: string, range: [number, number]) => void;
  onClearAll: () => void;
}

export default function FilterSection({
  activeFilters,
  availableVariables,
  onAddFilter,
  onRemoveFilter,
  onUpdateFilter,
  onClearAll,
}: FilterSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Filters</h3>
        {(activeFilters?.length ?? 0) > 0 && (
          <button
            className="text-xs text-gray-600 hover:text-gray-900"
            onClick={onClearAll}
          >
            Clear all
          </button>
        )}
      </div>

      {(activeFilters?.length ?? 0) > 0 && (
        <div className="space-y-4">
          {activeFilters.map((filter) => (
            <FilterCard
              key={filter.variable}
              label={filter.variable}
              min={filter.min}
              max={filter.max}
              range={filter.range}
              onChange={(newRange) => onUpdateFilter(filter.variable, newRange)}
              onRemove={() => onRemoveFilter(filter.variable)}
            />
          ))}
        </div>
      )}

      {(availableVariables?.length ?? 0) > 0 && (
        <Select onValueChange={onAddFilter} value="">
          <SelectTrigger>
            <SelectValue placeholder="Add filter..." />
          </SelectTrigger>
          <SelectContent>
            {availableVariables.map((variable) => (
              <SelectItem key={variable.value} value={variable.value}>
                {variable.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
