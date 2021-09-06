import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import DeleteIcon from "./index";

describe('DeleteIcon', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <DeleteIcon/>);
        expect(wrapper.find(DeleteIcon)).toHaveLength(1);
    });
});
