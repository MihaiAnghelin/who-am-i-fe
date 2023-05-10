import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Box from "~/components/general/Box";

type Props = {};

const Lobby = (
    {}: Props): JSX.Element =>
{
    const router = useRouter();
    const {lobbyId} = router.query;

    useEffect(() =>
    {
        const pid = localStorage.getItem("playerId");

        console.log(lobbyId);
        if (pid === null)
            if (lobbyId !== undefined)
                router.replace(`/user/join/${lobbyId}`);
            else
                router.replace("/");
    }, [lobbyId]);
    
    // const {} = useQuery("lobby", () => {}, {});


    return (
        <>
            <Box className={"p-16"}>
                <h1>Lobby {lobbyId}</h1>
            </Box>
        </>
    );
};

export default Lobby;