import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Box from "~/components/general/Box";
import {getCharacters, getLobby, rerollCharacter} from "~/requests/user";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {Button, CircularProgress} from "@mui/material";
import {CharacterLobby} from "~/types/CharacterLobby";
import {Player} from "~/types/LobbyWaitRoom";
import RefreshIcon from '@mui/icons-material/Refresh';
import RefreshButton from "~/components/lobby/RefreshButton";

type Props = {};

const Lobby = (
    {}: Props): JSX.Element =>
{
    const router = useRouter();
    const {lobbyId} = router.query;

    const [playerId, setPlayerId] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() =>
    {
        const pid = localStorage.getItem("playerId");
        if (pid !== null)
        {
            setPlayerId(pid);
        }

        const admin = localStorage.getItem("isAdmin");
        if (admin !== null)
        {
            setIsAdmin(admin === "true");
        }

        if (pid === null && lobbyId !== undefined)
            router.replace(`/user/join/${lobbyId}`);
    }, [lobbyId]);


    const {
        data: lobby,
        isLoading: isLoadingLobby,
        refetch: refetchLobby,
    } = useQuery(["lobby", lobbyId], () => getLobby(lobbyId), {
        onSuccess: (data) =>
        {
            console.log(data);
        },
        enabled: lobbyId !== undefined && lobbyId !== null && lobbyId !== ""
            && playerId !== undefined && playerId !== null && playerId !== "",
        refetchInterval: 3500,
    });

    const {
        mutate: mutateGetCharacters,
        isLoading: isLoadingGetCharacters,
    } = useMutation(getCharacters, {
        onSuccess: async (data) =>
        {
            console.log(data);
            await refetchLobby();
        },
    });

    const getChars = () =>
    {
        const adminPlayer: Player = {
            id: playerId as string,
            name: "admin",
            isAdmin: true,
        };

        const data: CharacterLobby = {
            adminPlayer: adminPlayer,
            lobbyId: lobbyId as string,
        };

        console.log(data);

        mutateGetCharacters(data);
    };


    return (
        <>
            <Box className={"p-16"}>
                <h1>Lobby</h1>
                <h3>{lobbyId}</h3>
            </Box>

            {isLoadingLobby &&
                <CircularProgress/>
            }

            {!isLoadingLobby &&
                <>
                    {isAdmin &&
                        <Box className={"p-16 my-2.5"}>
                            <h2>Actions</h2>
                            <Button
                                variant={"contained"}
                                onClick={getChars}
                                disabled={isLoadingGetCharacters}
                            >
                                {isLoadingGetCharacters &&
                                    <CircularProgress/>}
                                {!isLoadingGetCharacters &&
                                    "Get Characters"}
                            </Button>
                        </Box>
                    }

                    <div className={"flex flex-col gap-2.5 mt-2"}>
                        {lobby?.players.map((player) =>
                            <Box key={player.id}
                                 className={isAdmin ? "grid grid-cols-2 justify-items-start items-center gap-2 p-2" : ""}>
                                <div className={"p-5"}>
                                    <h3>
                                        {player.name}

                                        {player.isAdmin && <span className={"font-normal"}> (admin)</span>}
                                    </h3>

                                    {player.character &&
                                        <>
                                            {playerId === player.id &&
                                                <p className="pt-0 mt-1">
                                                    ???
                                                </p>
                                            }

                                            {playerId !== player.id &&
                                                <p className="pt-0 mt-1">
                                                    {player.character.name} ({player.character.categoryName})
                                                </p>
                                            }
                                        </>
                                    }

                                </div>

                                {isAdmin &&
                                    <div className={"justify-self-end"}>
                                        <RefreshButton
                                            refetchLobby={refetchLobby}
                                            player={player}
                                        />
                                    </div>
                                }
                            </Box>,
                        )}
                    </div>
                </>
            }
        </>
    );
};

export default Lobby;