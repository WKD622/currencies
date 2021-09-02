import React from 'react';
import DefaultTemplate from "./components/templates/DefaultTemplate";
import {CONVERTER_SCREEN_URL, EXCHANGE_RATES_SCREEN_URL} from "config/urls";
import ExchangeRatesScreen from "components/screens/ExchangeRatesScreen";
import ConverterScreen from "components/screens/ConverterScreen";

const routesDefinitions = [
    {
        children: <DefaultTemplate children={<ConverterScreen/>}/>,
        path: CONVERTER_SCREEN_URL,
        exactPath: true,
    },
    {
        children: <DefaultTemplate children={<ExchangeRatesScreen/>}/>,
        path: EXCHANGE_RATES_SCREEN_URL,
        exactPath: true,
    }
]

export default routesDefinitions;
