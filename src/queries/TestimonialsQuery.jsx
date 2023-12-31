import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"


export default function useGetTestimonials(){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['testimonial'],
        queryFn: ()=> {
            return http.get("/api/testimonial/read/all/")
    },
    staleTime: 10*60*1000,
    })

    return QUERY
}
