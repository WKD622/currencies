import React from 'react';
import {observer} from "mobx-react";
import ExchangeRate from "components/molecules/ExchangRate";
import PropTypes from "prop-types";
import Button from "components/atoms/Button";
import SyncIcon from "components/atoms/icons/SyncIcon";
import DeleteIcon from "components/atoms/icons/DeleteIcon";
import ReplayIcon from "components/atoms/icons/ReplayIcon";

const ExchangeRates = observer(({exchangeRates, onRefreshClick, loadFromLocalStorage, onClearClick, loading}) => (
    <div>
        {exchangeRates.map(({baseCurrency, exchangeCurrency, value}) => (
            <ExchangeRate
                key={exchangeCurrency}
                baseCurrency={baseCurrency}
                exchangeCurrency={exchangeCurrency}
                value={value}
            />
        ))}
        <Button
            onClick={onRefreshClick}
            variant='contained'
            loading={loading}
            startIcon={<SyncIcon/>}>
            REFRESH
        </Button>
        <Button
            onClick={onClearClick}
            variant='contained'
            startIcon={<DeleteIcon/>}>
            CLEAR
        </Button>
        <Button
            onClick={loadFromLocalStorage}
            variant='contained'
            startIcon={<ReplayIcon/>}>
            LOAD FROM LOCAL STORAGE
        </Button>
    </div>
))

ExchangeRates.propTypes = {
    exchangeRates: PropTypes.array.isRequired,
    onRefreshClick: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default ExchangeRates;
