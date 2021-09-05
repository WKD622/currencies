import React from 'react';
import {observer} from "mobx-react";
import {TextContainer} from "components/molecules/ExchangRate/styles";
import PropTypes from "prop-types";

const ExchangeRate = observer(({baseCurrency, exchangeCurrency, value}) => (
    <div>
        <TextContainer>1 {baseCurrency} = {value} {exchangeCurrency}</TextContainer>
    </div>
))

ExchangeRate.propTypes = {
    baseCurrency: PropTypes.string.isRequired,
    exchangeCurrency: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

export default ExchangeRate;
