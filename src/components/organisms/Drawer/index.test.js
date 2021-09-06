import React from 'react';
import {wrapMe} from 'helpers/testsHelpers';
import {MOUNT, ROUTER} from "helpers/testsHelpers/consts";
import Drawer from "components/organisms/Drawer/index";

describe('Drawer', () => {
    it('renders without errors', () => {
        const wrapper = wrapMe([ROUTER, MOUNT], <Drawer/>);
        expect(wrapper.find(Drawer)).toHaveLength(1);
    });
});
