import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import Loader from './index';
import {MOUNT} from "helpers/testsHelpers/consts";

describe('Loader', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <Loader/>);
        expect(wrapper.find(Loader)).toHaveLength(1);
    });
});
