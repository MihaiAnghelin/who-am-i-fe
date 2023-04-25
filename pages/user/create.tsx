import React from "react";
import Box from "~/components/general/Box";
import {Controller, useForm} from "react-hook-form";
import {NewUser} from "~/types/NewUser";
import Input from "~/components/general/Input";
import {
    Button,
    Checkbox,
    CircularProgress,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    InputLabel, ListItemText, MenuItem, Select,
} from "@mui/material";
import {createLobby, getCategories} from "~/requests/user";
import {useMutation, useQuery} from "react-query";
import {NewLobby} from "~/types/NewLobby";

type Props = {};

const CreateUser = (
    {}: Props): JSX.Element =>
{
    const onSubmit = (data: NewLobby) =>
    {
        console.log(data);
    };

    const {
        handleSubmit,
        reset,
        control,
        formState: {errors},
    } = useForm<NewLobby>();

    const {
        mutate: mutateCreateLobby,
        isLoading: isLoadingCreateLobby,
    } = useMutation(createLobby, {
        onSuccess: () =>
        {
        },
    });

    const {
        data: categories,
        isLoading: isLoadingCategories,
    } = useQuery("categories", getCategories, {
        onSuccess: (data) =>
        {
            console.log(data);
        },

    });

    return (
        <>
            <Box className={"p-16"}>
                <h1>Choose your username</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 gap-6 justify-items-center [&>*]:w-full"
                >
                    <Input
                        name="name"
                        control={control}
                        defaultValue={""}
                        label="Username"
                        errors={!!errors.adminPlayer?.name}
                        errorMessage={errors.adminPlayer?.name?.message}
                    />

                    {isLoadingCategories && <CircularProgress/>}

                    {!isLoadingCategories && categories?.length === 0 && <p>No categories found</p>}

                    {(!isLoadingCategories && categories && categories.length > 0) &&
                        <Controller
                            name={"categoriesIds"}
                            control={control}
                            defaultValue={categories?.map((category) => category.id) || []}
                            render={({field}) =>
                                <FormControl>
                                    <InputLabel
                                        id="categories-label"
                                    >
                                        Categories
                                    </InputLabel>

                                    <Select
                                        {...field}
                                        labelId="categories-label"
                                        multiple
                                        label="Categories"
                                    >
                                        {categories?.map((category) =>
                                            <MenuItem key={category.id} value={category.id}>
                                                {/*<Checkbox checked={field.value.indexOf(category.id) > -1}/>*/}
                                                <ListItemText primary={category.name}/>
                                            </MenuItem>,
                                        )}
                                    </Select>
                                </FormControl>
                            }
                        />
                    }


                    <Button
                        variant={"contained"}
                        disabled={isLoadingCreateLobby}
                        type="submit"
                        className={"max-w-2xl"}
                    >
                        {!isLoadingCreateLobby && "Create lobby"}
                        {isLoadingCreateLobby &&
                            <CircularProgress/>}
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default CreateUser;