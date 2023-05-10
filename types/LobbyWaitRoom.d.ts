export interface LobbyWaitRoom
{
    id: string;
    hasGameStarted: boolean;
    creationDate: Date;
    players: Player[];
}

export interface Player
{
    id: string;
    name: string;
    isAdmin: boolean;
}