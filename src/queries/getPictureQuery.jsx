import {useQuery} from "@tanstack/react-query"
import { useApi } from "../assets/axios/useApi"

export function useGetPictureQuery(picture_id){
    const http = useApi()
    const QUERY = useQuery({
        queryKey: ['picture'],
        queryFn: ()=> {
            
            if(!picture_id) return Promise.reject("Some error ocurred!")
            return http.get("/api/pictures/read/" + picture_id + "/")
        },
        enabled: picture_id ? true : true,
        retry: 2,
        staleTime: 5*60*1000,
    })

    return QUERY
}