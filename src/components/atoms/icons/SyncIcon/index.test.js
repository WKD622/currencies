import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import SyncIcon from "./index";

describe('SyncIcon', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <SyncIcon/>);
        expect(wrapper.find(SyncIcon)).toHaveLength(1);
    });
});
