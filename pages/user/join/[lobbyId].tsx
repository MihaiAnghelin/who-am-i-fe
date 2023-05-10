import React from "react";
import {useRouter} from "next/router";

type Props = {};

const JoinLobby = (
    {}: Props): JSX.Element =>
{
    const router = useRouter();
    const lobbyId = router.query;

    return (
        <>

        </>
    );
};

export default JoinLobby;