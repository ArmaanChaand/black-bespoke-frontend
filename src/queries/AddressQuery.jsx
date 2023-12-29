import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"
import { getCustomerId } from "../assets/js_utils/utils"

export function useGetCustAddrsQuery(){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['customer', 'address'],
        queryFn: ()=> {
            const customer_id = getCustomerId()
            if(!customer_id) return Promise.reject("Some error ocurred!")
            return http.get("/api/address/read/" + customer_id + '/')
    },
    enabled: getCustomerId() != null,
    staleTime: 5*60*1000,
    })

    return QUERY
}