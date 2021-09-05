import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import TrendingUpIcon from "./index";

describe('TrendingUpIcon', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <TrendingUpIcon/>);
        expect(wrapper.find(TrendingUpIcon)).toHaveLength(1);
    });
});
