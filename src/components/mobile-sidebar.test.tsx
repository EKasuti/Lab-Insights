import { render, screen, fireEvent } from '@testing-library/react';
import MobileSidebar from './mobile-sidebar';

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

describe('MobileSidebar', () => {
    const mockProps = {
        xAxis: "Oven Temperature",
        setXAxis: jest.fn(),
        yAxis: "Viscosity",
        setYAxis: jest.fn(),
        mode: "scatter" as const,
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

        expect(screen.getByText('Controls')).toBeInTheDocument();
        expect(screen.getByText('X-Axis Variable')).toBeInTheDocument();
    });
});
