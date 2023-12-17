import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"

export function useGetFabricsQuery(){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ["suit-part", "fabrics"],
        queryFn: ()=> {
            return http.get("/api/suit/fabric/all/")
        },
        staleTime: 5*60*1000,
        retry: 2
    })

    return QUERY
}