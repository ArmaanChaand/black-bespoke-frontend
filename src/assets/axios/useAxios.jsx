import axios from "axios";

export function useAxios(){
    const axiosInstance = axios.create({
        baseURL:""
    })
    return axiosInstance
}