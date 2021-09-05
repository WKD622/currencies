import { createContext, useContext } from 'react';
import CurrenciesStore from "stores/apiStores/CurrenciesStore";
import ExchangeRatesStore from "stores/apiStores/ExchangeRatesStore";

class RootStore {
  constructor() {
    this.currenciesStore = new CurrenciesStore(this);
    this.exchangeRatesStore = new ExchangeRatesStore(this);
  }
}

const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
