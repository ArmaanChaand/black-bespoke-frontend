import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"


export function useGetCities(){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['cities'],
        queryFn: ()=> {
            return http.get("/api/city/read/all/")
    },
    staleTime: 5*60*1000,
    })

    return QUERY
}

export function useGetCity(city_id="undefined"){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ["customer","city"],
        queryFn: ()=> {
            if(city_id != "undefined"){
                return http.get("/api/city/read/" + city_id)
            }
    },
    staleTime: 5*60*1000,
    enabled: city_id != "undefined"
    })

    return QUERY
}