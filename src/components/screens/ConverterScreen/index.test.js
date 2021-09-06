import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import ConverterScreen from "./index";

describe('ConverterScreen', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <ConverterScreen/>);
        expect(wrapper.find(ConverterScreen)).toHaveLength(1);
    });
});
