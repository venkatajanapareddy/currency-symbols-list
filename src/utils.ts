import { ISO4217CurrencyCode, CurrencySymbol } from './types';
import { currencySymbolsMap } from './data';

/**
 * Get a currency symbol by its ISO 4217 currency code
 *
 * @param currencyCode - The ISO 4217 currency code (case-insensitive)
 * @returns The currency symbol or undefined if not found
 *
 * @example
 * ```typescript
 * getSymbolByCode('USD'); // returns '$'
 * getSymbolByCode('usd'); // returns '$' (case-insensitive)
 * getSymbolByCode('XYZ'); // returns undefined (invalid code)
 * ```
 */
export function getSymbolByCode(
  currencyCode: ISO4217CurrencyCode | string
): CurrencySymbol | undefined {
  if (!currencyCode) return undefined;
  return currencySymbolsMap[currencyCode.toUpperCase()];
}

/**
 * Get a currency code by its symbol
 *
 * Note: Some symbols (e.g., "$") are used by multiple currencies.
 * In such cases, this function returns the code for the most prominent currency
 * (e.g., "USD" for "$") or the first one found in the dataset.
 *
 * @param symbol - The currency symbol to look up
 * @returns The ISO 4217 currency code or undefined if not found
 *
 * @example
 * ```typescript
 * getCodeBySymbol('$'); // returns 'USD' (most prominent dollar currency)
 * getCodeBySymbol('€'); // returns 'EUR'
 * getCodeBySymbol('?'); // returns undefined (not a known currency symbol)
 * ```
 */
export function getCodeBySymbol(symbol: CurrencySymbol | string): ISO4217CurrencyCode | undefined {
  if (!symbol) return undefined;

  // For "$" symbol, prioritize major currencies
  if (symbol === '$') return 'USD';
  if (symbol === '£') return 'GBP';
  if (symbol === '¥') return 'JPY';

  // For all other symbols, return the first matching code
  const codes = getCodesForSymbol(symbol);
  return codes.length > 0 ? codes[0] : undefined;
}

/**
 * Get all currency codes that use a specific symbol
 *
 * @param symbol - The currency symbol to look up
 * @returns Array of ISO 4217 currency codes using this symbol, empty array if none found
 *
 * @example
 * ```typescript
 * getCodesForSymbol('$'); // returns ['USD', 'CAD', 'AUD', ...] (all dollar currencies)
 * getCodesForSymbol('€'); // returns ['EUR']
 * getCodesForSymbol('?'); // returns [] (not a known currency symbol)
 * ```
 */
export function getCodesForSymbol(symbol: CurrencySymbol | string): ISO4217CurrencyCode[] {
  if (!symbol) return [];

  return Object.entries(currencySymbolsMap)
    .filter(([, currencySymbol]) => currencySymbol === symbol)
    .map(([code]) => code);
}

/**
 * Get all unique currency symbols from the dataset
 *
 * @returns Array of all unique currency symbols present in the dataset
 *
 * @example
 * ```typescript
 * getAllCurrencySymbols(); // returns ['$', '€', '£', ...]
 * ```
 */
export function getAllCurrencySymbols(): CurrencySymbol[] {
  const uniqueSymbols = new Set(Object.values(currencySymbolsMap));
  return Array.from(uniqueSymbols);
}

/**
 * Check if a string is a valid ISO 4217 currency code present in the dataset
 *
 * @param currencyCode - The string to check
 * @returns True if the string is a known, valid ISO 4217 currency code, false otherwise
 *
 * @example
 * ```typescript
 * isValidCurrencyCode('USD'); // returns true
 * isValidCurrencyCode('usd'); // returns true (case-insensitive)
 * isValidCurrencyCode('XYZ'); // returns false (not a known code)
 * ```
 */
export function isValidCurrencyCode(currencyCode: string): boolean {
  if (!currencyCode) return false;
  return currencyCode.toUpperCase() in currencySymbolsMap;
}
