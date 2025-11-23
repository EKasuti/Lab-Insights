"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { X_AXIS_VARIABLES, Y_AXIS_VARIABLES } from "@/constants/variables";

interface SidebarControlsProps {
    xAxis: string;
    setXAxis: (value: string) => void;
    yAxis: string;
    setYAxis: (value: string) => void;
    mode: "scatter" | "histogram";
}

export default function SidebarControls({
    xAxis,
    setXAxis,
    yAxis,
    setYAxis,
    mode,
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
        </div>
    );
}
