import React from 'react';
import {LoaderBody, Spinner} from 'components/atoms/Loader/styles';
import {observer} from 'mobx-react';

const Loader = observer(({...defaultProps}) => (
    <LoaderBody {...defaultProps}>
        <Spinner/>
    </LoaderBody>
));

export default Loader;
