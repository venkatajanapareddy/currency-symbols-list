/**
 * currency-symbols-list
 * A complete, typed mapping of ISO 4217 currency codes to their symbols
 *
 * @module currency-symbols-list
 */

// Export types
export * from './types';

// Export data mapping
export { currencySymbolsMap } from './data';

// Export utility functions
export {
  getSymbolByCode,
  getCodeBySymbol,
  getCodesForSymbol,
  getAllCurrencySymbols,
  isValidCurrencyCode,
} from './utils';
