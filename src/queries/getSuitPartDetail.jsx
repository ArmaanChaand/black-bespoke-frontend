import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"

export function useGetSuitPartDetailQuery(detail_id){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['suit-part', "detail"],
        queryFn: ()=> {
            if(!detail_id) return Promise.reject("Some error ocurred!")
            return http.get("/api/suit/suit-part/" + detail_id + "/")
        },
        staleTime: 5*60*1000,
        enabled: detail_id != null,
        retry: 2
    })

    return QUERY
}