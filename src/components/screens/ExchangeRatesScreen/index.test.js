import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import ExchangeRatesScreen from "./index";

describe('ExchangeRatesScreen', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <ExchangeRatesScreen/>);
        expect(wrapper.find(ExchangeRatesScreen)).toHaveLength(1);
    });
});
