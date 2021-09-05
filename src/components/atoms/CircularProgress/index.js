import React from 'react';
import { CircularProgress as MaterialCircularProgress } from '@material-ui/core';
import { observer } from 'mobx-react';

const CircularProgress = (props) => (
  <MaterialCircularProgress {...props} />
);
export default observer(CircularProgress);
