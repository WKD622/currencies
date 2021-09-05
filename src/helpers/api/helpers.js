export const currenciesStringPair = (currency1, currency2) => `${currency1}_${currency2}`
export const getCurrenciesPairsString = (currenciesPairs) => currenciesPairs.map(({currency1, currency2}) => currenciesStringPair(currency1, currency2)).join(',')

