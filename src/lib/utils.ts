import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateHistogramData(data: any[], key: string, binCount = 10) {
  const values = data.map((d) => d.inputs[key] ?? d.outputs[key] ?? 0);
  if (values.length === 0) return [];

  const min = Math.min(...values);
  const max = Math.max(...values);
  const binWidth = (max - min) / binCount || 1;

  const bins = Array.from({ length: binCount }, (_, i) => ({
    name: (min + i * binWidth).toFixed(1),
    count: 0,
  }));

  values.forEach((v) => {
    const index = Math.min(Math.floor((v - min) / binWidth), binCount - 1);
    if (index >= 0) bins[index].count++;
  });

  return bins;
}
