import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Box from "~/components/general/Box";
import H1 from "~/components/general/H1";
import Form from "~/components/general/Form";
import {useForm} from "react-hook-form";
import {JoinLobby, JoinLobbyForm} from "~/types/JoinLobby";
import {Button, CircularProgress} from "@mui/material";
import {joinLobby} from "~/requests/user";
import {useMutation} from "react-query";
import Input from "~/components/general/Input";

type Props = {};

const JoinLobby = (
    {}: Props): JSX.Element =>
{
    const router = useRouter();
    const {lobbyId} = router.query;

    useEffect(() =>
    {
        const pid = localStorage.getItem("playerId");

        if (pid)
            router.replace(`/lobby/${lobbyId}`);
    }, [lobbyId]);

    const {
        handleSubmit,
        control,
        reset,
        formState: {errors},
    } = useForm<JoinLobbyForm>();

    const onSubmit = (data: JoinLobbyForm) =>
    {
        const dataToSend: JoinLobby = {
            lobbyId: lobbyId as string,
            player: {
                name: data.name,
            },
        };

        mutateJoinLobby(dataToSend);
    };

    const {
        mutate: mutateJoinLobby,
        isLoading: isLoadingJoinLobby,
    } = useMutation(joinLobby, {
        onSuccess: async (data) =>
        {
            console.log(data);

            localStorage.setItem("lobbyId", JSON.stringify(data.lobbyId));
            localStorage.setItem("playerId", JSON.stringify(data.playerId));

            reset();

            await router.push(`/lobby/${data.lobbyId}`);
        }
    });

    return (
        <>
            <Box className={"p-16"}>
                <h1>Joining lobby {lobbyId}</h1>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Input
                        control={control}
                        name={"name"}
                        label={"Username"}
                        errors={!!errors.name}
                        errorMessage={errors.name?.message}
                    />

                    <Button
                        variant={"contained"}
                        disabled={isLoadingJoinLobby}
                        type="submit"
                    >
                        {!isLoadingJoinLobby && "Join lobby"}
                        {isLoadingJoinLobby &&
                            <CircularProgress/>}
                    </Button>
                </Form>

            </Box>

        </>
    );
};

export default JoinLobby;