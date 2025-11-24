import { render, screen, fireEvent } from '@testing-library/react';
import MobileSidebar from './mobile-sidebar';

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
    // Mock properties
    activeFilters = [];
    availableVariables = [];
    onAddFilter = jest.fn();
    onRemoveFilter = jest.fn();
    onClearFilters = jest.fn();
    onApplyFilters = jest.fn();
};

// Mock pointer
Element.prototype.setPointerCapture = jest.fn();
Element.prototype.releasePointerCapture = jest.fn();
Element.prototype.hasPointerCapture = jest.fn();

describe('MobileSidebar', () => {
    const mockProps = {
        xAxis: "Oven Temperature",
        setXAxis: jest.fn(),
        yAxis: "Viscosity",
        setYAxis: jest.fn(),
        mode: "scatter" as const,
        activeFilters: [],
        availableVariables: [],
        onAddFilter: jest.fn(),
        onRemoveFilter: jest.fn(),
        onClearFilters: jest.fn(),
        onApplyFilters: jest.fn(),
        onUpdateFilter: jest.fn(),
        onClearAll: jest.fn(),
    };

    it('renders trigger button', () => {
        render(<MobileSidebar {...mockProps} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('opens sheet when button is clicked', () => {
        render(<MobileSidebar {...mockProps} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(screen.getByText('Data Controls')).toBeInTheDocument();
        expect(screen.getByText('X-Axis Variable')).toBeInTheDocument();
    });
});
