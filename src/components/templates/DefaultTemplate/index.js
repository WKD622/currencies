import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./styles";
import Drawer from "components/organisms/Drawer";

const DefaultTemplate = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Currencies App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    )
};

export default DefaultTemplate;
