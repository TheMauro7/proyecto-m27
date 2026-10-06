const { sumArray, countWords, findMax, isDivisible } = require('../functions.js');

//SumArray
describe("sumArray", () => {
    it('test with an array of positive numbers', () => {
        expect(sumArray([1, 2, 3, 4,])).toBe(10);
    });

    it('test with an array of negative numbers', () => {
        expect(sumArray([-1, -2, -3, -4])).toBe(-10);
    });
    it('test with an empty array (should return 0)', () => {
        expect(sumArray([])).toBe(0);
    });
    it('test with an array that includes 0', () => {
        expect(sumArray([1, 0, 3, 4])).toBe(8)
    })
});
//CountWords
describe("countWords", () => {
    it('test with a normal text string.', () => {
        expect(countWords(['Hellow World'])).toBe(6);
    });
    it('test with a string with spaces at the beginning and end.', () => {
        expect(countWords('  Hellow World  ')).toBe(2);
    });

    it('test with an empty string (should return 0).', () => {
        expect(countWords('')).toBe(0);
    });

    it('test with a string with consecutive spaces between words.', () => {
        expect(countWords('Hello    world   this is a test')).toBe(6);
    });
});
//FindMax
describe('findMax', () => {
    it('test with an array of positive numbers.', () => {
        expect(findMax([5, 2, 9, 3])).toBe(9);
    });

    it('test with an array of negative numbers.', () => {
        expect(findMax([-5, -2, -9, -3])).toBe(-2);
    });

    it('test with an empty array (should return null).', () => {
        expect(findMax([])).toBeNull();
    });

    it('test with an array where all numbers are the same.', () => {
        expect(findMax([7, 7, 7, 7])).toBe(7);
    });
});
//IsDivisible
describe('isDivisible', () => {
    it('test with divisible numbers.', () => {
        expect(isDivisible(10, 2)).toBe(true);
    });

    it('test with non-divisible numbers.', () => {
        expect(isDivisible(10, 3)).toBe(false);
    });

    it('test with the divisor being 0 (should return an error message).', () => {
        expect(isDivisible(10, 0)).toBe(
            'you cannot divide by 0'
        );
    });

    it('test with negative numbers as input.', () => {
        expect(isDivisible(-10, 2)).toBe(true);
        expect(isDivisible(-10, 3)).toBe(false);
    });
});