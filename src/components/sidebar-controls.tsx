"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { X_AXIS_VARIABLES, Y_AXIS_VARIABLES } from "@/constants/variables";
import FilterSection, { ActiveFilter } from "./filter-section";

interface SidebarControlsProps {
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

export default function SidebarControls({
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
}: SidebarControlsProps) {
    return (
        <div className="space-y-6">
            {/* X-Axis */}
            <div className="space-y-2">
                <Label>X-Axis Variable</Label>
                <Select value={xAxis} onValueChange={setXAxis}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select variable" />
                    </SelectTrigger>
                    <SelectContent>
                        {X_AXIS_VARIABLES.map((variable) => (
                            <SelectItem key={variable.value} value={variable.value}>
                                {variable.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Y-Axis (Only for scatter plot) */}
            {mode === "scatter" && (
                <div className="space-y-2">
                    <Label>Y-Axis Variable</Label>
                    <Select value={yAxis} onValueChange={setYAxis}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select variable" />
                        </SelectTrigger>
                        <SelectContent>
                            {Y_AXIS_VARIABLES.map((variable) => (
                                <SelectItem key={variable.value} value={variable.value}>
                                    {variable.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            )}

            {/* Filters */}
            <div className="pt-4 border-t">
                <FilterSection
                    activeFilters={activeFilters}
                    availableVariables={availableVariables}
                    onAddFilter={onAddFilter}
                    onRemoveFilter={onRemoveFilter}
                    onUpdateFilter={onUpdateFilter}
                    onClearAll={onClearAll}
                />
            </div>
        </div>
    );
}
