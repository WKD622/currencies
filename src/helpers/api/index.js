import api from 'api';
import interceptorsSetup from "helpers/interceptors";
import {getCurrenciesPairsString} from "helpers/api/helpers";

interceptorsSetup();

const currencyConverterAPI = {
    listOfCurrencies: () => api.get('currencies'),
    exchange: (currenciesPairs) => api.get(`convert?q=${getCurrenciesPairsString(currenciesPairs)}&compact=ultra`)
};


export {
    currencyConverterAPI
};
