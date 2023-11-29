import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"
import { getCustomerId } from "../assets/js_utils/utils"

export function useGetCustomerQuery(){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['customer', 'info'],
        queryFn: ()=> {
            const customer_id = getCustomerId()
            console.log(customer_id)
            return http.get("/api/user/customer/read/" + customer_id + "/")
        },
        staleTime: 5*60*1000,
        enabled: getCustomerId() != null
    })

    return QUERY
}