import { CurrencySymbolMapData } from './types';

/**
 * A comprehensive mapping of ISO 4217 currency codes to their common symbols.
 * This data is sourced from CLDR and Unicode character data to ensure accuracy.
 *
 * Keys are ISO 4217 alpha-3 currency codes (uppercase, e.g., "USD")
 * Values are the common symbol characters (e.g., "$")
 */
export const currencySymbolsMap: Readonly<CurrencySymbolMapData> = Object.freeze({
  // Major global currencies
  USD: '$', // United States Dollar
  EUR: '€', // Euro
  GBP: '£', // British Pound Sterling
  JPY: '¥', // Japanese Yen
  CNY: '¥', // Chinese Yuan Renminbi
  AUD: '$', // Australian Dollar
  CAD: '$', // Canadian Dollar
  CHF: 'CHF', // Swiss Franc
  HKD: '$', // Hong Kong Dollar
  SGD: '$', // Singapore Dollar
  INR: '₹', // Indian Rupee
  RUB: '₽', // Russian Ruble
  BRL: 'R$', // Brazilian Real
  KRW: '₩', // South Korean Won
  MXN: '$', // Mexican Peso
  ZAR: 'R', // South African Rand

  // Other significant currencies
  AED: 'د.إ', // United Arab Emirates Dirham
  AFN: '؋', // Afghan Afghani
  ALL: 'L', // Albanian Lek
  AMD: '֏', // Armenian Dram
  ANG: 'ƒ', // Netherlands Antillean Guilder
  AOA: 'Kz', // Angolan Kwanza
  ARS: '$', // Argentine Peso
  AWG: 'ƒ', // Aruban Florin
  AZN: '₼', // Azerbaijani Manat
  BAM: 'KM', // Bosnia and Herzegovina Convertible Mark
  BBD: '$', // Barbadian Dollar
  BDT: '৳', // Bangladeshi Taka
  BGN: 'лв', // Bulgarian Lev
  BHD: '.د.ب', // Bahraini Dinar
  BIF: 'FBu', // Burundian Franc
  BMD: '$', // Bermudian Dollar
  BND: '$', // Brunei Dollar
  BOB: 'Bs.', // Bolivian Boliviano
  BSD: '$', // Bahamian Dollar
  BTN: 'Nu.', // Bhutanese Ngultrum
  BWP: 'P', // Botswana Pula
  BYN: 'Br', // Belarusian Ruble
  BZD: 'BZ$', // Belize Dollar
  CDF: 'FC', // Congolese Franc
  CLP: '$', // Chilean Peso
  COP: '$', // Colombian Peso
  CRC: '₡', // Costa Rican Colón
  CUC: '$', // Cuban Convertible Peso
  CUP: '₱', // Cuban Peso
  CVE: '$', // Cape Verdean Escudo
  CZK: 'Kč', // Czech Koruna
  DJF: 'Fdj', // Djiboutian Franc
  DKK: 'kr', // Danish Krone
  DOP: 'RD$', // Dominican Peso
  DZD: 'د.ج', // Algerian Dinar
  EGP: '£', // Egyptian Pound
  ERN: 'Nfk', // Eritrean Nakfa
  ETB: 'Br', // Ethiopian Birr
  FJD: '$', // Fijian Dollar
  FKP: '£', // Falkland Islands Pound
  GEL: '₾', // Georgian Lari
  GHS: '₵', // Ghanaian Cedi
  GIP: '£', // Gibraltar Pound
  GMD: 'D', // Gambian Dalasi
  GNF: 'FG', // Guinean Franc
  GTQ: 'Q', // Guatemalan Quetzal
  GYD: '$', // Guyanese Dollar
  HNL: 'L', // Honduran Lempira
  HRK: 'kn', // Croatian Kuna
  HTG: 'G', // Haitian Gourde
  HUF: 'Ft', // Hungarian Forint
  IDR: 'Rp', // Indonesian Rupiah
  ILS: '₪', // Israeli New Shekel
  IQD: 'ع.د', // Iraqi Dinar
  IRR: '﷼', // Iranian Rial
  ISK: 'kr', // Icelandic Króna
  JMD: 'J$', // Jamaican Dollar
  JOD: 'د.ا', // Jordanian Dinar
  KES: 'KSh', // Kenyan Shilling
  KGS: 'с', // Kyrgyzstani Som
  KHR: '៛', // Cambodian Riel
  KMF: 'CF', // Comorian Franc
  KPW: '₩', // North Korean Won
  KWD: 'د.ك', // Kuwaiti Dinar
  KYD: '$', // Cayman Islands Dollar
  KZT: '₸', // Kazakhstani Tenge
  LAK: '₭', // Lao Kip
  LBP: 'ل.ل', // Lebanese Pound
  LKR: '₨', // Sri Lankan Rupee
  LRD: '$', // Liberian Dollar
  LSL: 'L', // Lesotho Loti
  LYD: 'ل.د', // Libyan Dinar
  MAD: 'د.م.', // Moroccan Dirham
  MDL: 'L', // Moldovan Leu
  MGA: 'Ar', // Malagasy Ariary
  MKD: 'ден', // Macedonian Denar
  MMK: 'K', // Myanmar Kyat
  MNT: '₮', // Mongolian Tögrög
  MOP: 'MOP$', // Macanese Pataca
  MRU: 'UM', // Mauritanian Ouguiya
  MUR: '₨', // Mauritian Rupee
  MVR: 'Rf', // Maldivian Rufiyaa
  MWK: 'MK', // Malawian Kwacha
  MYR: 'RM', // Malaysian Ringgit
  MZN: 'MT', // Mozambican Metical
  NAD: '$', // Namibian Dollar
  NGN: '₦', // Nigerian Naira
  NIO: 'C$', // Nicaraguan Córdoba
  NOK: 'kr', // Norwegian Krone
  NPR: '₨', // Nepalese Rupee
  NZD: '$', // New Zealand Dollar
  OMR: 'ر.ع.', // Omani Rial
  PAB: 'B/.', // Panamanian Balboa
  PEN: 'S/', // Peruvian Sol
  PGK: 'K', // Papua New Guinean Kina
  PHP: '₱', // Philippine Peso
  PKR: '₨', // Pakistani Rupee
  PLN: 'zł', // Polish Złoty
  PYG: '₲', // Paraguayan Guaraní
  QAR: 'ر.ق', // Qatari Riyal
  RON: 'lei', // Romanian Leu
  RSD: 'дин.', // Serbian Dinar
  RWF: 'R₣', // Rwandan Franc
  SAR: 'ر.س', // Saudi Riyal
  SBD: '$', // Solomon Islands Dollar
  SCR: '₨', // Seychellois Rupee
  SDG: 'ج.س.', // Sudanese Pound
  SEK: 'kr', // Swedish Krona
  SHP: '£', // Saint Helena Pound
  SLL: 'Le', // Sierra Leonean Leone
  SOS: 'S', // Somali Shilling
  SRD: '$', // Surinamese Dollar
  SSP: '£', // South Sudanese Pound
  STN: 'Db', // São Tomé and Príncipe Dobra
  SVC: '$', // Salvadoran Colón
  SYP: '£', // Syrian Pound
  SZL: 'E', // Swazi Lilangeni
  THB: '฿', // Thai Baht
  TJS: 'ЅМ', // Tajikistani Somoni
  TMT: 'm', // Turkmenistani Manat
  TND: 'د.ت', // Tunisian Dinar
  TOP: 'T$', // Tongan Paʻanga
  TRY: '₺', // Turkish Lira
  TTD: 'TT$', // Trinidad and Tobago Dollar
  TWD: 'NT$', // New Taiwan Dollar
  TZS: 'TSh', // Tanzanian Shilling
  UAH: '₴', // Ukrainian Hryvnia
  UGX: 'USh', // Ugandan Shilling
  UYU: '$U', // Uruguayan Peso
  UZS: 'лв', // Uzbekistani Som
  VES: 'Bs.S', // Venezuelan Bolívar Soberano
  VND: '₫', // Vietnamese Đồng
  VUV: 'VT', // Vanuatu Vatu
  WST: 'WS$', // Samoan Tālā
  XAF: 'FCFA', // Central African CFA Franc
  XCD: 'EC$', // East Caribbean Dollar
  XOF: 'CFA', // West African CFA Franc
  XPF: '₣', // CFP Franc
  YER: '﷼', // Yemeni Rial
  ZMW: 'ZK', // Zambian Kwacha
  ZWL: '$', // Zimbabwean Dollar
});
