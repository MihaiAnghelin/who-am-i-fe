import {ApiResponse} from "@/types/ApiReponse";

export class api
{
    public static async get<T>(url: string): Promise<ApiResponse<T>>
    {
        const token = localStorage.getItem("token");
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const apiResponse: ApiResponse<T> = await res.json();

        if (res.ok)
            return apiResponse;

        throw new Error(apiResponse.error);
    }

    public static async post<T>(url: string, body: any): Promise<ApiResponse<T>>
    {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });

        const apiResponse: ApiResponse<T> = await res.json();

        if (res.ok)
            return apiResponse;

        throw new Error(apiResponse.error);
    }

    public static async put<T>(url: string, body: any): Promise<ApiResponse<T>>
    {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });

        const apiResponse: ApiResponse<T> = await res.json();

        if (res.ok)
            return apiResponse;

        throw new Error(apiResponse.error);
    }

    public static async delete<T>(url: string): Promise<ApiResponse<T>>
    {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const apiResponse: ApiResponse<T> = await res.json();

        if (res.ok)
            return apiResponse;

        throw new Error(apiResponse.error);
    }

    public static async postFormData<T>(url: string, formData: FormData): Promise<ApiResponse<T>>
    {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
            method: 'POST',
            body: formData,
        });

        const apiResponse: ApiResponse<T> = await res.json();

        if (res.ok)
            return apiResponse;

        throw new Error(apiResponse.error);
    }

    public static async putFormData<T>(url: string, formData: FormData): Promise<ApiResponse<T>>
    {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
            method: 'PUT',
            body: formData,
        });

        const apiResponse: ApiResponse<T> = await res.json();

        if (res.ok)
            return apiResponse;

        throw new Error(apiResponse.error);
    }

    public static async download<T>(url: string): Promise<Blob>
    {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${url}`, {
            method: 'GET',
        });

        if (res.ok)
            return await res.blob();

        throw new Error("Error downloading file");
    }
}