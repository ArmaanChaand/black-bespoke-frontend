import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"

export function useGetSuitPartQuery(api_endpoint, queryKey){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ["suit-part", queryKey],
        queryFn: ()=> {
            if(!api_endpoint) Promise.reject("some error ocurred")
            return http.get(api_endpoint)
        },
        staleTime: 5*60*1000,
        enabled: api_endpoint != null,
        retry: 2
    })

    return QUERY
}