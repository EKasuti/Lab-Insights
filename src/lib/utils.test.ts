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
