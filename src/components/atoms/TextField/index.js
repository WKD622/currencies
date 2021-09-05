import React from 'react';
import {TextField as MaterialTextField} from '@material-ui/core';
import {observer} from 'mobx-react';

const TextField = observer((props) => (
    <MaterialTextField {...props}/>
));
export default TextField;
