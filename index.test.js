const stringLength = require('./index.js');
const reverseString = require('./reverse.js');
const Calculator = require('./calculator.js');
const capitalizeString = require('./capitalizeString.js');

//task 1

test('checks if the string is greater than 1', () => {
	const str = 'misdemeanor';
	expect(stringLength(str)).toBeGreaterThanOrEqual(1);
});

test('checks if the string is less than 10', () => {
	const str = 'misdemea';
	expect(stringLength(str)).toBeLessThanOrEqual(10);
});

//task 2

test('checks if the string is less than 10', () => {
	expect(stringLength('string')).toBe(6);
});

test('should reverse the string', () => {
	const str = 'misdemea';
	expect(reverseString(str)).toBe('aemedsim');
});

// task 3

describe('Calculate basic math operations', () => {
	let calculator;

	beforeEach(() => {
		calculator = new Calculator();
	});

	describe('add', () => {
		it('adds two positive numbers', () => {
			expect(calculator.add(2, 2)).toEqual(4);
		});

		it('adds two negative numbers', () => {
			expect(calculator.add(-2, -2)).toEqual(-4);
		});

		it('adds one positive and one negative number', () => {
			expect(calculator.add(3, -2)).toEqual(1);
		});
	});

	describe('subtract', () => {
		it('subtracts two positive numbers', () => {
			expect(calculator.subtract(2, 2)).toEqual(0);
		});
		it('subtracts two negative numbers', () => {
			expect(calculator.subtract(-2, -2)).toEqual(0);
		});
		it('subtracts one positive and one negative number', () => {
			expect(calculator.subtract(2, -2)).toEqual(4);
		});
	});

	describe('multiply', () => {
		it('multiplies two positive numbers', () => {
			expect(calculator.multiply(2, 2)).toEqual(4);
		});
		it('multiplies two negative numbers', () => {
			expect(calculator.multiply(-2, -2)).toEqual(4);
		});
		it('multiplies one positive and one negative number', () => {
			expect(calculator.multiply(2, -2)).toEqual(-4);
		});
	});

	describe('divide', () => {
		it('divides two positive numbers', () => {
			expect(calculator.divide(2, 2)).toEqual(1);
		});
		it('divides two negative numbers', () => {
			expect(calculator.divide(-2, -2)).toEqual(1);
		});
		it('divides one positive and one negative number', () => {
			expect(calculator.divide(2, -2)).toEqual(-1);
		});
		it('divides by 0', () => {
			expect(() => calculator.divide(2, 0).toThrow("Can't divide by 0"));
		});
	});
});

// task 4

describe('capitalize a string', () => {
	it('should capitalize the first letter of the string', () => {
		const str = 'string';
		expect(capitalizeString(str)).toBe('String');
	});
});
