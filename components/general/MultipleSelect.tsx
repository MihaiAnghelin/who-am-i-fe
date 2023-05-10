import React from "react";
import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select} from "@mui/material";
import {Controller} from "react-hook-form";

type Props = {
    name: string;
    label: string;
    control: any;
    defaultValue: any;
    renderValue?: (selected: any) => JSX.Element;
    list: any[];
};

const MultipleSelect = (
    {
        name,
        label,
        control,
        defaultValue,
        renderValue = (selected) => selected.join(", "),
        list,
    }: Props): JSX.Element =>
{
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({field}) =>
                <FormControl>
                    <InputLabel
                        id={"multiple-select-label-" + name}
                    >
                        {label}
                    </InputLabel>

                    <Select
                        {...field}
                        labelId={"multiple-select-label-" + name}
                        multiple
                        label={label}
                        variant={"standard"}
                        renderValue={renderValue}
                    >
                        {list?.map((item) =>
                            <MenuItem key={item.id} value={item.id}>
                                <Checkbox checked={field.value.indexOf(item.id) > -1}/>
                                <ListItemText primary={item.name}/>
                            </MenuItem>,
                        )}
                    </Select>
                </FormControl>
            }
        />
    );
};

export default MultipleSelect;