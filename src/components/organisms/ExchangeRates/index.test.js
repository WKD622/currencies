import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import ExchangeRates from "components/organisms/ExchangeRates/index";

describe('ExchangeRates', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT],
            <ExchangeRates
                exchangeRates={[]}
                onRefreshClick={() => ''}
                loadFromLocalStorage={() => ''}
                onClearClick={() => ''}
                loading={false}
            />);
        expect(wrapper.find(ExchangeRates)).toHaveLength(1);
    });
});
