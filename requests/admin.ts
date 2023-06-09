import {ApiResponse} from "@/types/ApiReponse";
import {api} from "@/helpers/api";
import {Category} from "@/types/Category";
import {Login} from "@/types/Login";
import {LoginResponse} from "@/types/LoginResponse";
import {Character} from "@/types/Character";

export async function login(data: Login): Promise<ApiResponse<LoginResponse>>
{
    const url = "/auth/login";

    const response = await api.post<LoginResponse>(url, data);

    return response;
}

export async function getCategories(): Promise<Category[]>
{
    const url = "/admin/categories";

    const response = await api.get<Category[]>(url);

    return response.data;
}

export async function createCategory(category: Category): Promise<Category>
{
    const url = "/admin/categories";

    const response = await api.post<Category>(url, category);

    return response.data;
}

export async function deleteCategory(categoryId: string): Promise<Category>
{
    const url = `/admin/categories/${categoryId}`;

    const response = await api.delete<Category>(url);

    return response.data;
}

export async function createCharacter(character: Character): Promise<Character>
{
    const url = "/admin/characters";

    const response = await api.post<Character>(url, character);

    return response.data;
}

export async function deleteCharacter(characterId: string): Promise<Character>
{
    const url = `/admin/characters/${characterId}`;

    const response = await api.delete<Character>(url);

    return response.data;
}

export async function getCharacters(): Promise<Category[]>
{
    const url = "/admin/characters";

    const response = await api.get<Category[]>(url);

    return response.data;
}