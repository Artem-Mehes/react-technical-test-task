import { formatDate, formatMonth } from './date';

describe('month is formatted correctly', () => {
	test('2019-02-26T16:52:36.244Z formatted into February', () => {
		expect(formatMonth('2019-02-26T16:52:36.244Z')).toBe('February');
	});

	test('2019-09-19T09:34:32.083Z formatted into September', () => {
		expect(formatMonth('2019-09-19T09:34:32.083Z')).toBe('September');
    });
    
    test('sdfa12412 formatted into Invalid Date', () => {
		expect(formatMonth('sdfa12412')).toBe('Invalid Date');
    });
    
    test('empty string formatted into Invalid Date', () => {
		expect(formatMonth('')).toBe('Invalid Date');
	});
});

describe('date is formatted correctly', () => {
	test('2019-02-26T16:52:36.244Z formatted into February 26, 2019 year', () => {
		expect(formatDate('2019-02-26T16:52:36.244Z')).toBe('February 26, 2019 year');
	});

	test('2019-09-19T09:34:32.083Z formatted into September 19, 2019 year', () => {
		expect(formatDate('2019-09-19T09:34:32.083Z')).toBe('September 19, 2019 year');
    });
    
    test('sdfa12412 formatted into Invalid Date', () => {
		expect(formatDate('sdfa12412')).toBe('Invalid Date');
    });
    
    test('empty string formatted into Invalid Date', () => {
		expect(formatDate('')).toBe('Invalid Date');
	});
});
