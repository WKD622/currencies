import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const DrawerItem = ({icon, title, url}) => (
    <ListItem
        button
        component={NavLink}
        key={title}
        to={url}
        exact={true}
    >
        <ListItemIcon
        >
            {icon}
        </ListItemIcon>
        <ListItemText
            primary={title}
        />
    </ListItem>
);

DrawerItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default DrawerItem;
