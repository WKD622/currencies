import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ToolbarContent, useStyles} from "components/templates/DefaultTemplate/styles";
import {observer} from 'mobx-react';
import Drawer from "components/organisms/Drawer";
import BaseCurrencyDialog from "components/organisms/BaseCurrencyDialog";
import {useStores} from "stores";
import Loader from "components/atoms/Loader";

const DefaultTemplate = observer(({children}) => {
    const classes = useStyles();
    const {currenciesStore} = useStores();

    if (currenciesStore.fetching) return <Loader/>

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <BaseCurrencyDialog
                onSubmit={currenciesStore.setBaseCurrency}
                isOpened={!currenciesStore.hasBaseCurrency}
                currencies={currenciesStore.currencies}
            />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <ToolbarContent>
                        <Typography variant="h6" noWrap>
                            Currencies App
                        </Typography>
                        <Typography variant="h6" noWrap>
                            Base currency: {currenciesStore.baseCurrency}
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
});

export default DefaultTemplate;
