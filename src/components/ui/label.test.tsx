import { render, screen } from '@testing-library/react';
import { Label } from './label';

describe('Label', () => {
    it('renders correctly', () => {
        render(<Label>Test Label</Label>);
        expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<Label className="custom-class">Test Label</Label>);
        const label = screen.getByText('Test Label');
        expect(label).toHaveClass('custom-class');
    });
});
