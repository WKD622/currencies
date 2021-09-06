import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import ExchangeRate from "./index";

describe('ExchangeRate', () => {
    it('renders without errors', () => {
        const baseCurrency = 'EUR'
        const exchangeCurrency = 'PLN'
        const value = 11.6
        const wrapper = wrapMe([MOUNT],
            <ExchangeRate
                baseCurrency={baseCurrency}
                exchangeCurrency={exchangeCurrency}
                value={value}
            />);
        expect(wrapper.find(ExchangeRate)).toHaveLength(1);
    });
});
