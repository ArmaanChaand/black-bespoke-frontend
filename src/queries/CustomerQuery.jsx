import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"

export function useGetCustomerQuery(customer_id="undefined"){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['customer', 'info'],
        queryFn: ()=> http.get("/api/user/customer/read/" + customer_id + "/"),
        staleTime: 60*1000,
        enabled: customer_id != "undefined"
    })

    return QUERY
}