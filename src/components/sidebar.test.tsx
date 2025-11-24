import { render, screen } from '@testing-library/react';
import Sidebar from './sidebar';

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
};

// Mock pointer
Element.prototype.setPointerCapture = jest.fn();
Element.prototype.releasePointerCapture = jest.fn();
Element.prototype.hasPointerCapture = jest.fn();

describe('Sidebar', () => {
    const mockProps = {
        xAxis: "Oven Temperature",
        setXAxis: jest.fn(),
        yAxis: "Viscosity",
        setYAxis: jest.fn(),
        mode: "scatter" as const,
        activeFilters: [],
        availableVariables: [
            { label: "Oven Temperature", value: "Oven Temperature" },
            { label: "Viscosity", value: "Viscosity" },
        ],
        onAddFilter: jest.fn(),
        onRemoveFilter: jest.fn(),
        onClearFilters: jest.fn(),
        onUpdateFilter: jest.fn(),
        onClearAll: jest.fn(),
    };

    it('renders correctly', () => {
        render(<Sidebar {...mockProps} />);

        expect(screen.getByText('Data Controls')).toBeInTheDocument();
        expect(screen.getByText('X-Axis Variable')).toBeInTheDocument();
        expect(screen.getByText('Y-Axis Variable')).toBeInTheDocument();

        // Check if default values are selected
        expect(screen.getByText('Oven Temperature')).toBeInTheDocument();
        expect(screen.getByText('Viscosity')).toBeInTheDocument();
    });
});
