# currency-symbols-list

[![NPM Version](https://img.shields.io/npm/v/currency-symbols-list.svg)](https://www.npmjs.com/package/currency-symbols-list)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/venkatajanapareddy/currency-symbols-list/workflows/CI/badge.svg)](https://github.com/venkatajanapareddy/currency-symbols-list/actions)

A complete, typed mapping of ISO 4217 currency codes to their common symbols.

This modern, zero-dependency TypeScript library provides comprehensive data on currency symbols with type safety, exposed data, and utilities. Designed as a developer-first alternative to legacy packages.

## Features

- **Complete Symbol Dataset**: Accurate mapping of all ISO 4217 currency codes to their common symbols
- **TypeScript-First**: Strong typings for all data structures and functions
- **Zero Runtime Dependencies**: Lightweight and reliable
- **Dual Format Support**: Works in both ES Modules and CommonJS environments
- **Versatile Utilities**: Functions for lookup, validation, and reverse mapping
- **CLI Tool**: Command-line interface for quick lookups

## Installation

```bash
npm install currency-symbols-list
```

## Usage

### Access the Currency Symbol Map

```typescript
import { currencySymbolsMap } from 'currency-symbols-list';

console.log(currencySymbolsMap['USD']); // "$"
console.log(currencySymbolsMap['EUR']); // "€"
console.log(currencySymbolsMap['GBP']); // "£"
console.log(currencySymbolsMap['JPY']); // "¥"
```

### Utility Functions

```typescript
import {
  getSymbolByCode,
  getCodeBySymbol,
  getCodesForSymbol,
  getAllCurrencySymbols,
  isValidCurrencyCode,
} from 'currency-symbols-list';

// Get symbol by currency code (case-insensitive)
getSymbolByCode('USD'); // "$"
getSymbolByCode('usd'); // "$"

// Get currency code for a symbol (returns primary code for ambiguous symbols)
getCodeBySymbol('$'); // "USD" (returns USD as the primary dollar currency)
getCodeBySymbol('€'); // "EUR"

// Get all currency codes that use a specific symbol
getCodesForSymbol('$'); // ["USD", "CAD", "AUD", ...] (all dollar currencies)
getCodesForSymbol('€'); // ["EUR"]

// Get all unique currency symbols
getAllCurrencySymbols(); // ["$", "€", "£", "¥", ...]

// Check if a string is a valid currency code
isValidCurrencyCode('USD'); // true
isValidCurrencyCode('xyz'); // false
```

### CLI Usage

This package includes a command-line interface for quick lookups:

```bash
# Look up a symbol by currency code
npx currency-symbols-list USD  # Outputs: $

# Look up currency codes by symbol
npx currency-symbols-list $    # Outputs: USD, CAD, AUD, ...
```

## JSON Data Access

The raw currency data is also available as JSON:

```typescript
import currencyData from 'currency-symbols-list/json';
```

## API Reference

### Data

- `currencySymbolsMap`: A readonly object mapping ISO 4217 currency codes to their symbols

### Types

- `ISO4217CurrencyCode`: Type representing an ISO 4217 currency code
- `CurrencySymbol`: Type representing a currency symbol
- `CurrencySymbolMapData`: Interface defining the structure of the currency symbol mapping

### Functions

- `getSymbolByCode(currencyCode: string): string | undefined`

  - Takes an ISO 4217 currency code (case-insensitive) and returns its symbol or `undefined` if not found

- `getCodeBySymbol(symbol: string): string | undefined`

  - Takes a currency symbol and returns its primary ISO 4217 code or `undefined` if not found
  - For ambiguous symbols (like "$"), returns the most prominent currency (e.g., "USD")

- `getCodesForSymbol(symbol: string): string[]`

  - Takes a currency symbol and returns an array of all ISO 4217 codes that use it
  - Returns an empty array if the symbol is not found

- `getAllCurrencySymbols(): string[]`

  - Returns an array of all unique currency symbols in the dataset

- `isValidCurrencyCode(currencyCode: string): boolean`
  - Checks if a string is a valid ISO 4217 currency code present in the dataset (case-insensitive)

## Data Source

The currency symbols data is sourced from the Common Locale Data Repository (CLDR) and Unicode character data to ensure accuracy and completeness.

## Use Cases

This library is useful for various applications including:

- Price displays in e-commerce systems
- Financial dashboards
- Invoicing tools
- International payment forms
- Global commerce applications

## License

MIT © [currency-symbols-list Contributors](https://github.com/venkatajanapareddy/currency-symbols-list)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
