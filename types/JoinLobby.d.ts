export interface JoinLobby
{
    lobbyId: string;
    player: {
        name: string;
    };
}

export interface JoinLobbyForm
{
    lobbyId: string;
    name: string;
}