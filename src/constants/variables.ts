export const X_AXIS_VARIABLES = [
  { label: "Polymer 1", value: "Polymer 1" },
  { label: "Polymer 2", value: "Polymer 2" },
  { label: "Polymer 3", value: "Polymer 3" },
  { label: "Polymer 4", value: "Polymer 4" },

  { label: "Carbon Black High Grade", value: "Carbon Black High Grade" },
  { label: "Carbon Black Low Grade", value: "Carbon Black Low Grade" },

  { label: "Silica Filler 1", value: "Silica Filler 1" },
  { label: "Silica Filler 2", value: "Silica Filler 2" },

  { label: "Plasticizer 1", value: "Plasticizer 1" },
  { label: "Plasticizer 2", value: "Plasticizer 2" },
  { label: "Plasticizer 3", value: "Plasticizer 3" },

  { label: "Antioxidant", value: "Antioxidant" },
  { label: "Coloring Pigment", value: "Coloring Pigment" },

  { label: "Co-Agent 1", value: "Co-Agent 1" },
  { label: "Co-Agent 2", value: "Co-Agent 2" },
  { label: "Co-Agent 3", value: "Co-Agent 3" },

  { label: "Curing Agent 1", value: "Curing Agent 1" },
  { label: "Curing Agent 2", value: "Curing Agent 2" },

  { label: "Oven Temperature", value: "Oven Temperature" },
] as const;

export const Y_AXIS_VARIABLES = [
  { label: "Viscosity", value: "Viscosity" },
  { label: "Cure Time", value: "Cure Time" },
  { label: "Elongation", value: "Elongation" },
  { label: "Tensile Strength", value: "Tensile Strength" },
  { label: "Compression Set", value: "Compression Set" },
] as const;

export const ALL_VARIABLES = [...X_AXIS_VARIABLES, ...Y_AXIS_VARIABLES] as const;
