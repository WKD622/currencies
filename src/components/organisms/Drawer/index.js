import React from 'react';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import DrawerItem from "components/molecules/DrawerItem";
import {useStyles} from "./styles";
import DrawerMaterialUi from '@material-ui/core/Drawer';
import {DRAWER_ITEMS} from "components/organisms/Drawer/consts";
import {observer} from "mobx-react";

const Drawer = observer(() => {
    const classes = useStyles()
    return (
        <DrawerMaterialUi
            className={classes.drawer}
            variant="permanent"
            classes={{paper: classes.drawerPaper}}
            anchor="left"
        >
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {DRAWER_ITEMS.map(({url, title, icon}, key) =>
                    <DrawerItem title={title} url={url} icon={icon} key={key}/>)}
            </List>
        </DrawerMaterialUi>
    )
});

export default Drawer;
