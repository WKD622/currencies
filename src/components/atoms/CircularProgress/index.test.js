import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import CircularProgress from "./index";

describe('CircularProgress', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <CircularProgress/>);
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });
});
