import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import TextField from './index';
import {MOUNT} from "helpers/testsHelpers/consts";

describe('TextField', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <TextField/>);
        expect(wrapper.find(TextField)).toHaveLength(1);
    });
});
