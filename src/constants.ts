export interface Currency {
  name: string;
  flag: string;
  symbol: string;
  value: number;
}

export const currencyByRupee: Currency[] = [
  {
    name: 'DOLLAR',
    flag: '🇺🇸',
    symbol: '$',
    value: 0.012,
  },
  {
    name: 'EURO',
    flag: '🇪🇺',
    symbol: '€',
    value: 0.011,
  },
  {
    name: 'POUND',
    flag: '🇬🇧',
    symbol: '£',
    value: 0.009,
  },
  {
    name: 'YEN',
    flag: '🇯🇵',
    symbol: '¥',
    value: 0.009,
  },
  //   {
  //     name: 'RUPEE',
  //     flag: '🇮🇳',
  //     symbol: '₹',
  //     value: 1,
  //   },
  {
    name: 'YUAN',
    flag: '🇨🇳',
    symbol: '¥',
    value: 0.16,
  },
  {
    name: 'REAL',
    flag: '🇧🇷',
    symbol: 'R$',
    value: 0.04,
  },
  {
    name: 'LIRA',
    flag: '🇹🇷',
    symbol: '₺',
    value: 0.04,
  },
  {
    name: 'FRANC',
    flag: '🇫🇷',
    symbol: '₣',
    value: 0.04,
  },
  {
    name: 'CORONA',
    flag: '🇩🇪',
    symbol: '€',
    value: 0.04,
  },
  {
    name: 'BRL',
    flag: '🇧🇷',
    symbol: 'R$',
    value: 0.04,
  },
  {
    name: 'CHF',
    flag: '🇨🇭',
    symbol: 'CHF',
    value: 0.04,
  },
  {
    name: 'CNY',
    flag: '🇨🇳',
    symbol: '¥',
    value: 0.16,
  },
];
