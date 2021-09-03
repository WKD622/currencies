import React from 'react';
import DialogMaterialUi from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import {Button, DialogActions, DialogContentText, DialogTitle, MenuItem, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {Controller} from 'react-hook-form';

const BaseCurrencyDialog = ({isOpened, currencies, onSubmit}) => {
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
                                label="Currency"
                                error={Boolean(errors.currency)}
                                helperText={errors.currency?.message}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
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
};

BaseCurrencyDialog.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    currencies: PropTypes.array.isRequired,
};

export default BaseCurrencyDialog;
