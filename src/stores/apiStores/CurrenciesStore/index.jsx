import {makeObservable as _, runInAction, observable, action, computed} from 'mobx';
import ApiStore from "stores/apiStores/ApiStore";
import {currencyConverterAPI} from "helpers/api";
import {unpackData} from "helpers/requests";
import {FETCHED, FETCHING, FETCHING_ERROR} from "stores/apiStores/ApiStore/consts";

class CurrenciesStore extends ApiStore {
    constructor(rootStore) {
        super(rootStore);
        this.rootStore = rootStore;
        this.initFields();
        this.bindMethods();
        this.makeObservable();
        this.fetchAvailableCurrencies()
    }

    makeObservable() {
        _(this, {
            currencies: observable,
            baseCurrency: observable,
            hasBaseCurrency: computed,
            setBaseCurrency: action.bound,
            fetchAvailableCurrencies: action.bound,
        });
    }

    bindMethods() {
        this.handleCurrenciesFetching = this.handleCurrenciesFetching.bind(this)
        this.handleCurrenciesFetchingError = this.handleCurrenciesFetchingError.bind(this)
    }

    setBaseCurrency(baseCurrency) {
        this.baseCurrency = baseCurrency
    }

    setCurrencies(currencies) {
        this.currencies = currencies
    }

    get hasBaseCurrency() {
        return Boolean(this.baseCurrency)
    }

    fetchAvailableCurrencies() {
        this.changeState(FETCHING)
        currencyConverterAPI.listOfCurrencies()
            .then(this.handleCurrenciesFetching)
            .catch(this.handleCurrenciesFetchingError)
    }


    handleCurrenciesFetching(response) {
        const currenciesObj = unpackData(response)
        const currenciesMap = new Map(Object.entries(currenciesObj))
        const currenciesArray = Array.from(currenciesMap, ([name, value]) => (value));
        this.setCurrencies(currenciesArray.sort((a, b) => a.id.localeCompare(b.id)))
        this.changeState(FETCHED)
    }

    handleCurrenciesFetchingError(error) {
        this.changeState(FETCHING_ERROR)
    }

    initFields() {
        runInAction(() => {
            this.baseCurrency = undefined;
            this.currencies = [];
        });
    }

}

export default CurrenciesStore;
