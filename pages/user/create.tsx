import React from "react";
import Box from "~/components/general/Box";
import {useForm} from "react-hook-form";
import Input from "~/components/general/Input";
import {Button, CircularProgress} from "@mui/material";
import {createLobby, getCategories} from "~/requests/user";
import {useMutation, useQuery} from "react-query";
import {NewLobby} from "~/types/NewLobby";
import Form from "~/components/general/Form";
import MultipleSelect from "~/components/general/MultipleSelect";
import {NewLobbyForm} from "~/types/NewLobbyForm";
import {useRouter} from "next/router";

type Props = {};

const CreateUser = (
    {}: Props): JSX.Element =>
{
    const onSubmit = (data: NewLobbyForm) =>
    {
        const dataToSend: NewLobby = {
            adminPlayer: {
                name: data.name,
            },
            categoriesIds: data.categoriesIds,
        };

        mutateCreateLobby(dataToSend);
    };

    const {
        handleSubmit,
        control,
        reset,
        formState: {errors},
    } = useForm<NewLobbyForm>();

    const router = useRouter();

    const {
        mutate: mutateCreateLobby,
        isLoading: isLoadingCreateLobby,
    } = useMutation(createLobby, {
        onSuccess: async (data) =>
        {
            console.log(data);

            localStorage.setItem("lobbyId", data.lobbyId);
            localStorage.setItem("playerId", data.playerId);
            localStorage.setItem("isAdmin", "true");

            reset();

            await router.push(`/lobby/${data.lobbyId}`);
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

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        name="name"
                        control={control}
                        label="Username"
                        errors={!!errors.name}
                        errorMessage={errors.name?.message}
                    />

                    {isLoadingCategories && <CircularProgress/>}

                    {!isLoadingCategories && categories?.length === 0 && <p>No categories found</p>}

                    {(!isLoadingCategories && categories && categories.length > 0) &&
                        <MultipleSelect
                            name={"categoriesIds"}
                            label={"Categories"}
                            control={control}
                            defaultValue={categories?.map((category) => category.id) || []}
                            renderValue={(selected) =>
                                <div className={"flex flex-row flex-wrap gap-x-1.5"}>
                                    {(selected as string[]).map((id, index) =>
                                        (<div key={id}>
                                            {categories?.find((category) =>
                                                category.id === id)?.name}

                                            {index < selected.length - 1 && ", "}
                                        </div>),
                                    )}
                                </div>
                            }
                            list={categories}
                        />
                    }

                    <Button
                        variant={"contained"}
                        disabled={isLoadingCreateLobby}
                        type="submit"
                    >
                        {!isLoadingCreateLobby && "Create lobby"}
                        {isLoadingCreateLobby &&
                            <CircularProgress/>}
                    </Button>
                </Form>
            </Box>
        </>
    );
};

export default CreateUser;