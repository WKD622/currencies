import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ToolbarContent, useStyles} from "./styles";
import Drawer from "components/organisms/Drawer";
import BaseCurrencyDialog from "components/organisms/BaseCurrencyDialog";
import {CURRENCIES} from "consts/currencies";

const DefaultTemplate = ({children}) => {
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(true);

    const setBaseCurrency = (currency) => {
        console.log(currency)
        setDialogOpened(false)
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <BaseCurrencyDialog
                onSubmit={setBaseCurrency}
                isOpened={dialogOpened}
                currencies={CURRENCIES}
            />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <ToolbarContent>
                        <Typography variant="h6" noWrap>
                            Currencies App
                        </Typography>
                        <Typography variant="h6" noWrap>
                            Base currency: EUR
                        </Typography>
                    </ToolbarContent>
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
