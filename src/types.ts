/**
 * ISO 4217 currency code (e.g., 'USD', 'EUR')
 */
export type ISO4217CurrencyCode = string;

/**
 * Currency symbol (e.g., '$', '€')
 */
export type CurrencySymbol = string;

/**
 * Interface defining the structure of the currency symbol mapping data
 */
export interface CurrencySymbolMapData {
  [currencyCode: ISO4217CurrencyCode]: CurrencySymbol;
}
