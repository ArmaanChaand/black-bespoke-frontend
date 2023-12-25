import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"

export function useGetSuitBuildQuery(suit_id){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['customer', 'appointment', 'suit'],
        queryFn: ()=> {
            if(!suit_id) return Promise.reject("Some error ocurred!")
            return http.get("/api/suit/one/" + suit_id + "/")
    },
    enabled: suit_id != null,
    retry: 1,
    })

    return QUERY
}