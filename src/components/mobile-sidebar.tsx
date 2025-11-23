"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SidebarControls from "./sidebar-controls";
import { useState } from "react";
import { ActiveFilter } from "./filter-section";

interface MobileSidebarProps {
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

export default function MobileSidebar({
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
}: MobileSidebarProps) {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden fixed top-4 right-4 z-50">
                    <Menu className="h-4 w-4" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-6 overflow-y-auto">
                <SheetTitle className="mb-4">Controls</SheetTitle>
                <SheetDescription className="sr-only">
                    Adjust the dashboard controls for the experiment analysis.
                </SheetDescription>
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
            </SheetContent>
        </Sheet>
    );
}
