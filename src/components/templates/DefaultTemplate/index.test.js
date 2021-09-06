import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import DefaultTemplate from "./index";

describe('DefaultTemplate', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <DefaultTemplate children={<div/>}/>);
        expect(wrapper.find(DefaultTemplate)).toHaveLength(1);
    });
});
