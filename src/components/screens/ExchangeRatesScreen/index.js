import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {useStores} from "stores";
import {navigateTo} from "helpers/navigation";
import {CONVERTER_SCREEN_URL} from "config/urls";
import ExchangeRates from "components/organisms/ExchangeRates";
import Loader from "components/atoms/Loader";

const ExchangeRatesScreen = observer(() => {
    const {currenciesStore, exchangeRatesStore} = useStores();
    const {baseCurrency} = currenciesStore
    const {
        fetchExchangeRates,
        fetching,
        fetched,
        exchangeRates,
        clearExchangeRates,
        loadExchangeRatesFromLocalStorage
    } = exchangeRatesStore

    if (!baseCurrency) navigateTo([CONVERTER_SCREEN_URL]);

    useEffect(() => {
        if (!fetched) fetchExchangeRates()
    }, [])

    if (!fetched) return <Loader/>
    return (
        <ExchangeRates
            exchangeRates={exchangeRates}
            onClearClick={clearExchangeRates}
            loadFromLocalStorage={loadExchangeRatesFromLocalStorage}
            onRefreshClick={fetchExchangeRates}
            loading={fetching}
        />
    )
})

export default ExchangeRatesScreen;
