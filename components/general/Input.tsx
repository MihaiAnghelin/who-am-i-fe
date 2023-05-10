import React from "react";
import {Controller} from "react-hook-form";
import {TextField} from "@mui/material";

type Props = {
    className?: string;
    name: string;
    control: any;
    defaultValue?: string;
    label: string;
    errors: any;
    errorMessage: string | undefined;
    type?: string;
};

const Input = (
    {
        className,
        name,
        control,
        defaultValue = "",
        label,
        errors,
        errorMessage,
        type = "text",
    }: Props): JSX.Element =>
{
    return (
        <div className={className}>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({field}) =>
                    <TextField
                        {...field}
                        label={label}
                        variant="standard"
                        error={errors}
                        helperText={errorMessage}
                        type={type}
                    />
                }
            />
        </div>
    );
};

export default Input;