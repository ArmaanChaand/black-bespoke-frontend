import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"
import { getCustomerId } from "../assets/js_utils/utils"

export function useGetCustomerQuery(){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['customer', 'info'],
        queryFn: ()=> {
            const customer_id = getCustomerId()
            if(!customer_id) return Promise.reject("Some error ocurred!")
            return http.get("/api/user/customer/read/" + customer_id + "/")
        },
        enabled: getCustomerId() != null,
    })

    return QUERY
}