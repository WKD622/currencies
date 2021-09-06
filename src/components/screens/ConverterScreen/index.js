import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {useStores} from "stores";
import {Box, MenuItem, TextField} from "@material-ui/core";
import {EUR_CURRENCY_ID} from "consts/currencies";
import {
    AmountContainer,
    CurrencyContainer,
    InnerContainer,
    TextContainer
} from "components/screens/ConverterScreen/styles";
import {currencyConverterAPI} from "helpers/api";
import Loader from "components/atoms/Loader";
import {currenciesStringPair} from "helpers/api/helpers";

const ConverterScreen = observer(() => {
    const {currenciesStore} = useStores();
    const {currencies, fetched} = currenciesStore
    const [currency1, setCurrency1] = useState(EUR_CURRENCY_ID);
    const [currency2, setCurrency2] = useState(EUR_CURRENCY_ID);
    const [amount, setAmount] = useState(1)
    const [result, setResult] = useState(1)

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            exchangeCurrencies(currency1, currency2, amount);
        }, 200);
        return () => clearTimeout(delayDebounceFn);
    }, [amount, currency1, currency2]);

    const onCurrency1Change = (event) => {
        setCurrency1(event.target.value)
    }

    const onCurrency2Change = (event) => {
        setCurrency2(event.target.value)
    }

    const onAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const exchangeCurrencies = (currency1, currency2, amount) => {
        currencyConverterAPI.exchange([{currency1, currency2}])
            .then((response) => {
                setResult(amount * response.data[currenciesStringPair(currency1, currency2)])
            })
            .catch()
    }

    if (!fetched) return <Loader/>

    return (
        <Box display='flex' alignItems='center' justifyContent='center' m={0}>
            <InnerContainer>
                <AmountContainer>
                    <TextField
                        value={amount}
                        onChange={onAmountChange}
                        label="Amount"
                        variant="outlined"
                        fullWidth
                    />
                </AmountContainer>
                <CurrencyContainer>
                    <TextField
                        select
                        value={currency1}
                        onChange={onCurrency1Change}
                        label="Currency 1"
                        variant="outlined"
                        fullWidth
                    >
                        {currencies.map(({currencyName, currencySymbol, id}) => (
                            <MenuItem key={id} value={id}>
                                {id} ({currencyName})
                            </MenuItem>
                        ))}
                    </TextField>
                </CurrencyContainer>
                <TextContainer>
                    =
                </TextContainer>
                <TextContainer>
                    {result.toFixed(3)}
                </TextContainer>
                <CurrencyContainer>
                    <TextField
                        select
                        fullWidth
                        value={currency2}
                        onChange={onCurrency2Change}
                        label="Currency 2"
                        variant="outlined"
                    >
                        {currencies.map(({currencyName, currencySymbol, id}) => (
                            <MenuItem key={id} value={id}>
                                {id} ({currencyName})
                            </MenuItem>
                        ))}
                    </TextField>
                </CurrencyContainer>
            </InnerContainer>
        </Box>
    )
})

export default ConverterScreen;
