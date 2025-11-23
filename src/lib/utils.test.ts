import { cn } from './utils';

describe('cn', () => {
    it('should merge class names correctly', () => {
        expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('should handle conditional class names', () => {
        expect(cn('foo', true && 'bar', false && 'baz')).toBe('foo bar');
    });

    it('should merge tailwind classes correctly', () => {
        expect(cn('p-4', 'p-2')).toBe('p-2');
        expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    });

    it('should handle arrays and objects', () => {
        expect(cn(['foo', 'bar'])).toBe('foo bar');
        expect(cn({ foo: true, bar: false })).toBe('foo');
    });
});

import { calculateHistogramData } from './utils';

describe('calculateHistogramData', () => {
    it('should bin data correctly', () => {
        const data = [
            { inputs: { val: 1 } },
            { inputs: { val: 2 } },
            { inputs: { val: 11 } },
        ];
        const bins = calculateHistogramData(data, 'val', 2);
        // min=1, max=11, range=10, binWidth=5
        // bin1: 1-6 (contains 1, 2) -> count 2
        // bin2: 6-11 (contains 11) -> count 1
        expect(bins).toHaveLength(2);
        expect(bins[0].count).toBe(2);
        expect(bins[1].count).toBe(1);
    });

    it('should handle empty data', () => {
        expect(calculateHistogramData([], 'val')).toEqual([]);
    });

    it('should handle all identical values by returning a single bin', () => {
        const data = [
            { inputs: { val: 5 } },
            { inputs: { val: 5 } },
            { inputs: { val: 5 } },
        ];
        const bins = calculateHistogramData(data, 'val', 10);
        expect(bins).toHaveLength(1);
        expect(bins[0].name).toBe('5.0');
        expect(bins[0].count).toBe(3);
    });

    it('should handle single value', () => {
        const data = [{ inputs: { val: 42 } }];
        const bins = calculateHistogramData(data, 'val', 10);
        expect(bins).toHaveLength(1);
        expect(bins[0].name).toBe('42.0');
        expect(bins[0].count).toBe(1);
    });
});
