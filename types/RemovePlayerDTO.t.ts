import {Player} from "~/types/LobbyWaitRoom";

export interface RemovePlayerDTO
{
    playerIdToRemove: string;
    adminPlayer: Player;
}