import { useMemo } from "react";
import rawLabData from "../lib/data/dataset.json";
import { Experiment } from "../lib/types/experiments";

export function useLabData(): Experiment[] {
  return useMemo(() => {
    return Object.entries(rawLabData).map(([id, d]) => ({
      id,
      inputs: d.inputs,
      outputs: d.outputs
    })); 
  }, []);
}