import React from 'react';
import DialogMaterialUi from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import {Button, DialogActions, DialogContentText, DialogTitle, MenuItem, TextField} from "@material-ui/core";
import {Controller, useForm} from "react-hook-form";
import {observer} from "mobx-react";

const BaseCurrencyDialog = observer(({isOpened, currencies, onSubmit}) => {
    const defaultValues = {currency: ''}
    const {handleSubmit, control, formState: {errors}} = useForm({defaultValues, mode: 'onChange'});

    const handleSubmitting = ({currency}) => {
        if (Object.keys(errors).length !== 0) return
        onSubmit(currency)
    }

    return (
        <DialogMaterialUi
            open={isOpened}
            onClose={() => false}
            maxWidth='sm'
            aria-labelledby="simple-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Base currency</DialogTitle>
            <form onSubmit={handleSubmit(handleSubmitting)}>
                <DialogContent>
                    <DialogContentText>
                        Choose your base currency and click OK.
                    </DialogContentText>
                    <Controller
                        name='currency'
                        control={control}
                        rules={{required: {value: true, message: "Field is required"}}}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="standard-select-currency"
                                select
                                fullWidth
                                variant="outlined"
                                label="Currency"
                                error={Boolean(errors.currency)}
                                helperText={errors.currency?.message}
                            >
                                {currencies.map(({currencyName, currencySymbol, id}) => (
                                    <MenuItem key={id} value={id}>
                                        {id} ({currencyName})
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        type='submit'
                        color="primary"
                    >
                        Ok
                    </Button>
                </DialogActions>
            </form>
        </DialogMaterialUi>
    )
});

BaseCurrencyDialog.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    currencies: PropTypes.array.isRequired,
};

export default BaseCurrencyDialog;
