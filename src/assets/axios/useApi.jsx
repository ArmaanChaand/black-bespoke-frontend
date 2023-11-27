import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_HOST

export function useApi(){
    const axiosInstance = axios.create({
        baseURL: BASE_URL
    })
    return axiosInstance
}