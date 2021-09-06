import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import ReplayIcon from "./index";

describe('ReplayIcon', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <ReplayIcon/>);
        expect(wrapper.find(ReplayIcon)).toHaveLength(1);
    });
});
