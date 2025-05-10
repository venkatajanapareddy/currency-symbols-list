#!/usr/bin/env node

import { getSymbolByCode, getCodesForSymbol, isValidCurrencyCode } from './utils';

/**
 * Command-line interface for currency-symbols-list.
 *
 * Usage:
 *   npx currency-symbols-list [CODE_OR_SYMBOL]
 *
 * Examples:
 *   npx currency-symbols-list EUR     # Outputs: €
 *   npx currency-symbols-list $       # Outputs: USD, CAD, AUD, ...
 */

const arg = process.argv[2];

if (!arg) {
  console.log(`
Currency Symbols List

Usage:
  npx currency-symbols-list [CODE_OR_SYMBOL]

Examples:
  npx currency-symbols-list EUR     # Outputs: €
  npx currency-symbols-list $       # Outputs: USD, CAD, AUD, ...
`);
  process.exit(0);
}

// Try to look up as a currency code first
if (isValidCurrencyCode(arg)) {
  const symbol = getSymbolByCode(arg);
  console.log(symbol);
} else {
  // If not a valid code, try as a symbol
  const codes = getCodesForSymbol(arg);
  if (codes.length === 0) {
    console.log(`No match found for '${arg}'`);
    process.exit(1);
  } else {
    console.log(codes.join(', '));
  }
}
