import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Box from "~/components/general/Box";
import {getCharacters, getLobby, rerollCharacter} from "~/requests/user";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {Button, CircularProgress, Fab, SwipeableDrawer, TextField} from "@mui/material";
import {CharacterLobby} from "~/types/CharacterLobby";
import {Player} from "~/types/LobbyWaitRoom";
import RefreshButton from "~/components/lobby/RefreshButton";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import RemovePlayerButton from "~/components/lobby/RemovePlayerButton";
import {TransitionGroup} from "react-transition-group";
import Collapse from "@mui/material/Collapse";
import PeopleIcon from '@mui/icons-material/People';
import NoteIcon from '@mui/icons-material/Note';
import logo from "~/assets/images/logo96.png";
import Image from "next/image";

type Props = {};

const Lobby = (
    {}: Props): JSX.Element =>
{
    const router = useRouter();
    const {lobbyId} = router.query;

    const [playerId, setPlayerId] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const [copied, setCopied] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() =>
    {
        const pid = localStorage.getItem("playerId");
        if (pid !== null)
        {
            console.log(pid);
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

    useEffect(() =>
    {
        const timeout = setTimeout(() =>
        {
            if (copied)
                setCopied(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [copied]);

    const copyLink = () =>
    {
        setCopied(true);
        // const appUrl = process.env.NEXT_PUBLIC_APP_URL;
        const appUrl = "https://who-am-i.mihaianghelin.ro";
        const shareUrl = `${appUrl}/user/join/${lobbyId}`;
        navigator.clipboard.writeText(shareUrl);
    };

    const exitLobby = () =>
    {
        localStorage.removeItem("playerId");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("lobbyId");
        router.push("/");
    };

    return (
        <>
            <Box className={"p-16 "}>
                <h1>Who Am I?</h1>

                <Image
                    src={logo}
                    alt="Who Am I?"
                    width={96}
                    height={96}
                    className={"mb-2"}

                />

                <Button
                    variant={"contained"}
                    onClick={copyLink}
                    className={"mb-2"}
                >
                    <div className="flex gap-2.5 items-center justify-center">
                        {copied && <CheckIcon/>}
                        {!copied && <ContentCopyIcon/>}
                        <span className={"leading-none"}>Copy Lobby Link</span>
                    </div>
                </Button>

                {copied && <p className={"text-center"}>Copied!</p>}

                {isAdmin &&
                    <Button
                        variant={"contained"}
                        onClick={getChars}
                        disabled={isLoadingGetCharacters}
                        className={"mb-2"}

                    >
                        {isLoadingGetCharacters &&
                            <CircularProgress/>}
                        {!isLoadingGetCharacters &&
                            <div className={"flex gap-2.5 items-center justify-center"}>
                                <PeopleIcon/>
                                <span className={"leading-none"}>Get Characters</span>
                            </div>}
                    </Button>
                }

                <Button
                    variant={"contained"}
                    onClick={exitLobby}
                >
                    Exit Lobby
                </Button>
            </Box>

            <div className="fixed left-2 bottom-2">
                <Fab onClick={() => setOpenDrawer(true)}>
                    <NoteIcon/>
                </Fab>
            </div>

            <SwipeableDrawer
                anchor={"bottom"}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
            >
                <div
                    style={{
                        padding: "1rem",
                    }}
                >
                    <TextField
                        // label={"Notes"}
                        placeholder={"Notes"}
                        multiline
                        rows={20}
                        variant={"standard"}
                        margin={"none"}
                    />
                </div>
            </SwipeableDrawer>

            {isLoadingLobby &&
                <CircularProgress/>
            }

            {!isLoadingLobby &&
                <>
                    <div>
                        <TransitionGroup className={"flex flex-col gap-2.5 mt-2 py-3"}>
                            {lobby?.players.map((player) =>
                                <Collapse key={player.id}>
                                    <Box
                                        className={isAdmin ? "grid grid-cols-2 justify-items-start items-center gap-2 p-2" : ""}
                                    >
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
                                            <div className={"justify-self-end flex gap-2"}>
                                                <RefreshButton
                                                    refetchLobby={refetchLobby}
                                                    player={player}
                                                />

                                                {!player.isAdmin &&
                                                    <RemovePlayerButton
                                                        refetchLobby={refetchLobby}
                                                        player={player}
                                                    />
                                                }

                                            </div>
                                        }
                                    </Box>
                                </Collapse>,
                            )}
                        </TransitionGroup>
                    </div>
                </>
            }
        </>
    );
};

export default Lobby;