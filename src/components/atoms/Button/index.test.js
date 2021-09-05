import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT} from "helpers/testsHelpers/consts";
import Button from "./index";
import CircularProgress from "components/atoms/CircularProgress";

describe('Button', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([MOUNT], <Button loading={false}>BUTTON</Button>);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(CircularProgress)).toHaveLength(0);
    });

    it('renders circular progress', () => {
        const wrapper = wrapMe([MOUNT], <Button loading={true}>BUTTON</Button>);
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });
});
