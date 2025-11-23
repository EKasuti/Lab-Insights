"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface FilterCardProps {
  label: string;
  min: number;
  max: number;
  range: [number, number];
  onChange: (value: [number, number]) => void;
  onRemove: () => void;
}

export default function FilterCard({
  label,
  min,
  max,
  range,
  onChange,
  onRemove,
}: FilterCardProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-sm">{label}</Label>
        <button
          className="text-xs text-gray-500 hover:text-gray-900"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
      <Slider
        min={min}
        max={max}
        step={(max - min) / 100}
        value={range}
        onValueChange={onChange}
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>{range[0].toFixed(1)}</span>
        <span>{range[1].toFixed(1)}</span>
      </div>
    </div>
  );
}
