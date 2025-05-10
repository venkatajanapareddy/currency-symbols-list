import {
  getSymbolByCode,
  getCodeBySymbol,
  getCodesForSymbol,
  getAllCurrencySymbols,
  isValidCurrencyCode,
  currencySymbolsMap,
} from '../src';
import { describe, it, expect } from 'vitest';

describe('currencySymbolsMap', () => {
  it('should be a non-empty object', () => {
    expect(currencySymbolsMap).toBeDefined();
    expect(typeof currencySymbolsMap).toBe('object');
    expect(Object.keys(currencySymbolsMap).length).toBeGreaterThan(0);
  });

  it('should contain well-known currency codes and their symbols', () => {
    expect(currencySymbolsMap['USD']).toBe('$');
    expect(currencySymbolsMap['EUR']).toBe('€');
    expect(currencySymbolsMap['GBP']).toBe('£');
    expect(currencySymbolsMap['JPY']).toBe('¥');
    expect(currencySymbolsMap['INR']).toBe('₹');
  });

  it('should have all keys as uppercase currency codes', () => {
    const allKeys = Object.keys(currencySymbolsMap);
    for (const key of allKeys) {
      expect(key).toBe(key.toUpperCase()); // All keys should be uppercase
      expect(key.length).toBe(3); // ISO 4217 codes are 3 characters
    }
  });

  it('should not have any duplicate currency codes', () => {
    const uniqueCodes = new Set(Object.keys(currencySymbolsMap));
    expect(uniqueCodes.size).toBe(Object.keys(currencySymbolsMap).length);
  });
});

describe('getSymbolByCode', () => {
  it('should return correct symbol for valid currency code', () => {
    expect(getSymbolByCode('USD')).toBe('$');
    expect(getSymbolByCode('EUR')).toBe('€');
    expect(getSymbolByCode('GBP')).toBe('£');
  });

  it('should handle lowercase input', () => {
    expect(getSymbolByCode('usd')).toBe('$');
    expect(getSymbolByCode('eur')).toBe('€');
  });

  it('should return undefined for invalid currency code', () => {
    expect(getSymbolByCode('XYZ')).toBeUndefined();
    expect(getSymbolByCode('ABC')).toBeUndefined();
  });

  it('should handle edge cases', () => {
    expect(getSymbolByCode('')).toBeUndefined();
    // @ts-expect-error - Testing invalid input
    expect(getSymbolByCode(null)).toBeUndefined();
    // @ts-expect-error - Testing invalid input
    expect(getSymbolByCode(undefined)).toBeUndefined();
  });
});

describe('getCodeBySymbol', () => {
  it('should return correct code for unique symbols', () => {
    expect(getCodeBySymbol('€')).toBe('EUR');
    expect(getCodeBySymbol('₹')).toBe('INR');
    expect(getCodeBySymbol('₽')).toBe('RUB');
  });

  it('should handle ambiguous symbols properly', () => {
    // $ is used by multiple currencies, but should return USD as primary
    expect(getCodeBySymbol('$')).toBe('USD');
    // £ is used by multiple currencies, but should return GBP as primary
    expect(getCodeBySymbol('£')).toBe('GBP');
    // ¥ is used by JPY and CNY, but should return JPY as primary
    expect(getCodeBySymbol('¥')).toBe('JPY');
  });

  it('should return undefined for unknown symbols', () => {
    expect(getCodeBySymbol('?')).toBeUndefined();
    expect(getCodeBySymbol('#')).toBeUndefined();
  });

  it('should handle edge cases', () => {
    expect(getCodeBySymbol('')).toBeUndefined();
    // @ts-expect-error - Testing invalid input
    expect(getCodeBySymbol(null)).toBeUndefined();
    // @ts-expect-error - Testing invalid input
    expect(getCodeBySymbol(undefined)).toBeUndefined();
  });
});

describe('getCodesForSymbol', () => {
  it('should return all matching codes for a symbol', () => {
    // Check that $ returns multiple currencies including USD
    const dollarCodes = getCodesForSymbol('$');
    expect(dollarCodes).toContain('USD');
    expect(dollarCodes.length).toBeGreaterThan(1);

    // € should only return EUR
    expect(getCodesForSymbol('€')).toEqual(['EUR']);
  });

  it('should return empty array for unknown symbols', () => {
    expect(getCodesForSymbol('?')).toEqual([]);
    expect(getCodesForSymbol('#')).toEqual([]);
  });

  it('should handle edge cases', () => {
    expect(getCodesForSymbol('')).toEqual([]);
    // @ts-expect-error - Testing invalid input
    expect(getCodesForSymbol(null)).toEqual([]);
    // @ts-expect-error - Testing invalid input
    expect(getCodesForSymbol(undefined)).toEqual([]);
  });
});

describe('getAllCurrencySymbols', () => {
  it('should return array of unique symbols', () => {
    const symbols = getAllCurrencySymbols();

    // Check it's an array with items
    expect(Array.isArray(symbols)).toBe(true);
    expect(symbols.length).toBeGreaterThan(0);

    // Check symbols are unique
    const uniqueSymbols = new Set(symbols);
    expect(uniqueSymbols.size).toBe(symbols.length);

    // Check it contains known symbols
    expect(symbols).toContain('$');
    expect(symbols).toContain('€');
    expect(symbols).toContain('£');
  });
});

describe('isValidCurrencyCode', () => {
  it('should return true for valid currency codes', () => {
    expect(isValidCurrencyCode('USD')).toBe(true);
    expect(isValidCurrencyCode('EUR')).toBe(true);
    expect(isValidCurrencyCode('JPY')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isValidCurrencyCode('usd')).toBe(true);
    expect(isValidCurrencyCode('eur')).toBe(true);
    expect(isValidCurrencyCode('jPy')).toBe(true);
  });

  it('should return false for invalid codes', () => {
    expect(isValidCurrencyCode('XYZ')).toBe(false);
    expect(isValidCurrencyCode('ABC')).toBe(false);
    expect(isValidCurrencyCode('X')).toBe(false);
    expect(isValidCurrencyCode('US')).toBe(false);
    expect(isValidCurrencyCode('USDD')).toBe(false);
  });

  it('should handle edge cases', () => {
    expect(isValidCurrencyCode('')).toBe(false);
    // @ts-expect-error - Testing invalid input
    expect(isValidCurrencyCode(null)).toBe(false);
    // @ts-expect-error - Testing invalid input
    expect(isValidCurrencyCode(undefined)).toBe(false);
  });
});
