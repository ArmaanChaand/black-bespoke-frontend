import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"
import { getCustomerId } from "../assets/js_utils/utils"

export function useCustAppntQuery(){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['customer', 'appointment'],
        queryFn: ()=> {
            const customer_id = getCustomerId()
            if(!customer_id) return Promise.reject("Some error ocurred!")
            return http.get("/api/consult/read/" + customer_id + "/")
    },
    staleTime: 5*60*1000,
    enabled: getCustomerId() != null,
    retry: 1,
    })

    return QUERY
}