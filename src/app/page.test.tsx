import { render, screen } from '@testing-library/react';
import Home from './page';
import { useLabData } from '../hooks/useLabData';

// Mock useLabData hook
jest.mock('../hooks/useLabData');

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
};

// Mock pointer capture methods
Element.prototype.setPointerCapture = jest.fn();
Element.prototype.releasePointerCapture = jest.fn();
Element.prototype.hasPointerCapture = jest.fn();

describe('Home Page', () => {
    beforeEach(() => {
        (useLabData as jest.Mock).mockReturnValue([
            { id: '1', inputs: {}, outputs: {} },
            { id: '2', inputs: {}, outputs: {} }
        ]);
    });

    it('renders correctly', () => {
        render(<Home />);

        expect(screen.getByText('Experiment Analysis Dashboard')).toBeInTheDocument();
        expect(screen.getByText('2 of 2 experiments displayed')).toBeInTheDocument();
        expect(screen.getByText('Scatter Plot')).toBeInTheDocument();
    });
});
