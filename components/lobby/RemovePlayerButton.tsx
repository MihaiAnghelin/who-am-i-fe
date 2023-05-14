import React from "react";
import {Player} from "~/types/LobbyWaitRoom";
import {useRouter} from "next/router";
import {removePlayer} from "~/requests/user";
import {useMutation} from "react-query";
import {Button, CircularProgress} from "@mui/material";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {RemovePlayerDTO} from "~/types/RemovePlayerDTO.t";

type Props = {
    refetchLobby: () => any;
    player: Player;
};

const RemovePlayerButton = (
    {
        refetchLobby,
        player,
    }: Props): JSX.Element =>
{
    const router = useRouter();
    const {lobbyId} = router.query;

    const {
        mutate: mutateRemovePlayer,
        isLoading: isLoadingRemovePlayer,
    } = useMutation(removePlayer, {
        onSuccess: async (data) =>
        {
            console.log(data);
            await refetchLobby();
        },
    });

    const remove = async () =>
    {
        const adminId = localStorage.getItem("playerId");

        if (adminId === null || lobbyId === undefined)
            return;

        const adminPlayer: Player = {
            id: adminId,
            name: "",
            isAdmin: true,
        };

        const data: RemovePlayerDTO = {
            adminPlayer: adminPlayer,
            playerIdToRemove: player.id,
        };

        mutateRemovePlayer(data);
    };

    return (
        <Button
            variant={"contained"}
            onClick={remove}
            disabled={isLoadingRemovePlayer}
        >
            {isLoadingRemovePlayer &&
                <CircularProgress/>}
            {!isLoadingRemovePlayer &&
                <PersonRemoveIcon/>}
        </Button>
    );
};

export default RemovePlayerButton;