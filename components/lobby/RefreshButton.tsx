import React from "react";
import {Button, CircularProgress} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import {useMutation} from "react-query";
import {rerollCharacter} from "~/requests/user";
import {Player} from "~/types/LobbyWaitRoom";
import {RerollCharacterDTO} from "~/types/RerollCharacterDTO";
import {useRouter} from "next/router";

type Props = {
    refetchLobby: () => any;
    player: Player;

};

const RefreshButton = (
    {
        refetchLobby,
        player,
    }: Props): JSX.Element =>
{
    const router = useRouter();
    const {lobbyId} = router.query;

    const {
        mutate: mutateRerollCharacter,
        isLoading: isLoadingRerollCharacter,
    } = useMutation(rerollCharacter, {
        onSuccess: async (data) =>
        {
            console.log(data);
            await refetchLobby();
        },
    });

    const reroll = async () =>
    {
        const adminId = localStorage.getItem("playerId");

        if (adminId === null || lobbyId === undefined)
            return;

        const data: RerollCharacterDTO = {
            adminPlayerId: adminId as string,
            lobbyId: lobbyId as string,
            playerToChangeId: player.id,
        };

        await mutateRerollCharacter(data);
    };

    return (
        <Button
            variant={"contained"}
            onClick={reroll}
            disabled={isLoadingRerollCharacter}
        >
            {isLoadingRerollCharacter &&
                <CircularProgress/>}
            {!isLoadingRerollCharacter &&
                <RefreshIcon/>}
        </Button>
    );
};

export default RefreshButton;