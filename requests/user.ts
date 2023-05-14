import {api} from "~/helpers/api";
import {NewLobby} from "~/types/NewLobby";
import {CreatedLobby} from "~/types/CreatedLobby";
import {Category} from "~/types/Category";
import {JoinLobby} from "~/types/JoinLobby";
import {LobbyWaitRoom} from "~/types/LobbyWaitRoom";
import {CharacterLobby} from "~/types/CharacterLobby";
import {RerollCharacterDTO} from "~/types/RerollCharacterDTO";
import {RemovePlayerDTO} from "~/types/RemovePlayerDTO.t";

export async function createLobby(lobby: NewLobby): Promise<CreatedLobby>
{
    const url = "/lobby/create";

    const response = await api.post<CreatedLobby>(url, lobby);

    return response.data;
}

export async function getCategories(): Promise<Category[]>
{
    const url = "/lobby/categories";

    const response = await api.get<Category[]>(url);

    return response.data;
}

export async function joinLobby(lobby: JoinLobby): Promise<CreatedLobby>
{
    const url = "/lobby/join";

    const response = await api.post<CreatedLobby>(url, lobby);

    return response.data;
}

export async function getLobby(lobbyId?: string | string[]): Promise<LobbyWaitRoom>
{
    const url = `/lobby/${lobbyId}`;

    const response = await api.get<LobbyWaitRoom>(url);

    return response.data;
}

export async function getCharacters(lobby: CharacterLobby): Promise<void>
{
    const url = `/lobby/getCharacters`;

    const response = await api.post<void>(url, lobby);

    return response.data;
}

export async function rerollCharacter(rerollCharacter: RerollCharacterDTO): Promise<void>
{
    const url = `/lobby/rerollCharacter`;

    const response = await api.post<void>(url, rerollCharacter);

    return response.data;
}

export async function removePlayer(removePlayerDTO: RemovePlayerDTO): Promise<void>
{
    const url = `/lobby/removePlayer`;

    const response = await api.post<void>(url, removePlayerDTO);

    return response.data;
}