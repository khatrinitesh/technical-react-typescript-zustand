import axios, { AxiosResponse } from "axios";
import { UsersResponse } from "../interface";

const api = axios.create({
    baseURL:'https://reqres.in/api',
    headers:{
        'Content-Type':'application/json',
    },
});

export const fetchUsers = async(page:number):Promise<UsersResponse> => {
    try {
        const response:AxiosResponse<UsersResponse> = await api.get(`/users?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data',error);
        throw error;
    }
}