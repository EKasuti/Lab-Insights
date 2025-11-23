import { render, screen } from '@testing-library/react';
import SidebarControls from './sidebar-controls';

// Mock pointer
Element.prototype.setPointerCapture = jest.fn();
Element.prototype.releasePointerCapture = jest.fn();
Element.prototype.hasPointerCapture = jest.fn();

describe('SidebarControls', () => {
    const mockProps = {
        xAxis: "Oven Temperature",
        setXAxis: jest.fn(),
        yAxis: "Viscosity",
        setYAxis: jest.fn(),
        mode: "scatter" as const,
    };

    it('renders correctly', () => {
        render(<SidebarControls {...mockProps} />);

        expect(screen.getByText('X-Axis Variable')).toBeInTheDocument();
        expect(screen.getByText('Y-Axis Variable')).toBeInTheDocument();
        expect(screen.getByText('Oven Temperature')).toBeInTheDocument();
        expect(screen.getByText('Viscosity')).toBeInTheDocument();
    });

    it('hides Y-Axis control when mode is histogram', () => {
        render(<SidebarControls {...mockProps} mode="histogram" />);

        expect(screen.getByText('X-Axis Variable')).toBeInTheDocument();
        expect(screen.queryByText('Y-Axis Variable')).not.toBeInTheDocument();
    });
});
