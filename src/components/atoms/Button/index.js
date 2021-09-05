import {Button as MaterialUiButton} from '@material-ui/core';
import CircularProgress from 'components/atoms/CircularProgress';
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

const Button = observer((props) => {
    let {loading, children, startIcon, ...defaultProps} = props;

    if (loading) {
        children = <CircularProgress size={24}/>;
        startIcon = undefined;
    }
    return (
        <MaterialUiButton disabled={loading} startIcon={startIcon} {...defaultProps}>
            {children}
        </MaterialUiButton>
    );
});

Button.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool
};

export default Button;
