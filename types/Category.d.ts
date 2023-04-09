import {Character} from "@/types/Character";

export interface Category
{
    id: string;
    name: string;
    characters?: Character[];
}