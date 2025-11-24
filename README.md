# Lab Insights

An interactive dashboard for aanalyzing scientific experiment data.

## Features

- **Interactive Charts**: Toggle between scatter plots and histograms
- **Dynamic Filtering**: Filter experiments by any input or output variable using range sliders
- **Responsive Design**: Optimized for both desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Testing

```bash
npm test
```

## Tech Stack

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Testing**: Jest + React Testing Library

## Key Components

### Dashboard (`page.tsx`)
Main application component.

### Filters (`useFilters.ts`)
Custom hook that handles all filtering logic:
- Calculates available variables
- Applies filters to experiments
- Manages filter state (add, remove, update, clear)

### Charts
- **Scatter Plot**: Visualizes relationships between two variables
- **Histogram**: Shows distribution of a single variable

## License

MIT