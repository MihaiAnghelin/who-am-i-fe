export interface ApiResponse<T>
{
    data: T;
    error: string;
    statusCode: number;
}