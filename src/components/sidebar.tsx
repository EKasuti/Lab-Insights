"use client";


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { X_AXIS_VARIABLES, Y_AXIS_VARIABLES } from "@/constants/variables";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-6">
      <ScrollArea className="h-full">
        <h2 className="mb-6 text-lg font-semibold">Controls</h2>

        {/* X-Axis */}
        <div className="mb-6 space-y-2">
          <Label>X-Axis Variable</Label>
          <Select defaultValue="Oven Temperature">
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

        {/* Y-Axis */}
        <div className="mb-6 space-y-2">
          <Label>Y-Axis Variable</Label>
          <Select defaultValue="Viscosity">
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

        <Separator className="my-4" />
      </ScrollArea>
    </aside>
  );
}