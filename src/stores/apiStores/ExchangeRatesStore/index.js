import {action, makeObservable as _, observable, runInAction} from 'mobx';
import ApiStore from "stores/apiStores/ApiStore";
import {currencyConverterAPI} from "helpers/api";
import {FETCHED, FETCHING, FETCHING_ERROR} from "stores/apiStores/ApiStore/consts";
import {CURRENCIES_TO_SHOW, EXCHANGE_RATES_LOCAL_STORAGE_KEY} from "./consts";

class ExchangeRatesStore extends ApiStore {
    constructor(rootStore) {
        super(rootStore);
        this.rootStore = rootStore;
        this.initFields();
        this.bindMethods();
        this.makeObservable();
    }

    makeObservable() {
        _(this, {
            exchangeRates: observable,
            fetchExchangeRates: action.bound,
            setExchangeRates: action.bound,
            clearExchangeRates: action.bound,
        });
    }

    bindMethods() {
        this.handleExchangeRatesFetching = this.handleExchangeRatesFetching.bind(this)
        this.handleExchangeRatesFetchingError = this.handleExchangeRatesFetchingError.bind(this)
        this.loadExchangeRatesFromLocalStorage = this.loadExchangeRatesFromLocalStorage.bind(this)
        this.saveExchangeRatesToLocalStorage = this.saveExchangeRatesToLocalStorage.bind(this)
    }

    setExchangeRates(exchangeRates) {
        this.exchangeRates = exchangeRates
    }

    get baseCurrency() {
        return this.rootStore.currenciesStore.baseCurrency
    }

    fetchExchangeRates() {
        this.changeState(FETCHING)
        currencyConverterAPI.exchange(CURRENCIES_TO_SHOW.map((currency) => {
            return {
                currency1: this.baseCurrency,
                currency2: currency
            }
        }))
            .then(this.handleExchangeRatesFetching)
            .catch(this.handleExchangeRatesFetchingError)
    }


    saveExchangeRatesToLocalStorage() {
        window.localStorage.setItem(EXCHANGE_RATES_LOCAL_STORAGE_KEY, JSON.stringify(this.exchangeRates))
    }

    loadExchangeRatesFromLocalStorage() {
        this.setExchangeRates(JSON.parse(localStorage.getItem(EXCHANGE_RATES_LOCAL_STORAGE_KEY)));
    }

    clearExchangeRates() {
        this.exchangeRates = []
    }

    handleExchangeRatesFetching(response) {
        const newExchangeRates = []
        Object.entries(response.data).forEach(([key, value]) => {
            newExchangeRates.push({
                baseCurrency: this.baseCurrency,
                exchangeCurrency: key.substr(4),
                value
            })
        })
        this.setExchangeRates(newExchangeRates)
        this.saveExchangeRatesToLocalStorage()
        this.changeState(FETCHED)
    }

    handleExchangeRatesFetchingError(error) {
        this.loadExchangeRatesFromLocalStorage()
        this.changeState(FETCHING_ERROR)
    }

    initFields() {
        runInAction(() => {
            this.exchangeRates = [];
        });
    }

}

export default ExchangeRatesStore;
