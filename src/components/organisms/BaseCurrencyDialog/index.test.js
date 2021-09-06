import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import BaseCurrencyDialog from "./index";

describe('BaseCurrencyDialog', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT],
            <BaseCurrencyDialog
                isOpened={true}
                currencies={[]}
                onSubmit={() => ""}
            />);
        expect(wrapper.find(BaseCurrencyDialog)).toHaveLength(1);
    });
});
