import {api} from "~/helpers/api";
import {NewLobby} from "~/types/NewLobby";
import {CreatedLobby} from "~/types/CreatedLobby";
import {Category} from "~/types/Category";

export async function createLobby(lobby: NewLobby): Promise<CreatedLobby>
{
    const url = "/admin/characters";

    const response = await api.post<CreatedLobby>(url, lobby);

    return response.data;
}

export async function getCategories(): Promise<Category[]>
{
    const url = "/lobby/categories";

    const response = await api.get<Category[]>(url);

    return response.data;
}