import { renderHook } from '@testing-library/react';
import { useLabData } from './useLabData';

// Mock the data source
jest.mock('../lib/data/dataset.json', () => ({
    'exp-1': {
        inputs: { a: 1, b: 2 },
        outputs: { x: 10, y: 20 }
    },
    'exp-2': {
        inputs: { a: 3, b: 4 },
        outputs: { x: 30, y: 40 }
    }
}));

describe('useLabData', () => {
    it('should transform data correctly', () => {
        const { result } = renderHook(() => useLabData());

        expect(result.current).toHaveLength(2);

        expect(result.current[0]).toEqual({
            id: 'exp-1',
            inputs: { a: 1, b: 2 },
            outputs: { x: 10, y: 20 }
        });

        expect(result.current[1]).toEqual({
            id: 'exp-2',
            inputs: { a: 3, b: 4 },
            outputs: { x: 30, y: 40 }
        });
    });
});
