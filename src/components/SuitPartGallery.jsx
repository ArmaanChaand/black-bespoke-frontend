import { useEffect } from "react"
import { useGetPictureQuery } from "../queries/getPictureQuery"
import { ImageElm } from "./elements/Images"

const BASE_URL = import.meta.env.VITE_API_HOST

export function SuitPartGallery({pictures}){
    const {data, isLoading, isError, isSuccess, refetch, status} = useGetPictureQuery(pictures[0])
    useEffect(()=>{
        refetch()
    }, [pictures, status])
    
    const picture_data =  isSuccess ? data?.data : {}

    return(
        <div className={"w-full h-full flex justify-center items-center bg-theme-grey"}>
            {
                isLoading && 
                <div className="w-full h-full bg-theme-grey flex justify-center items-center animate-pulse">
                <svg
                className="w-1/5 h-auto text-theme-grey-beta/40"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
                >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
                </div>
            }
            {
                isSuccess &&
                <ImageElm
                    src={BASE_URL + picture_data?.picture}
                    classes="object-contain"
                />
            }
        </div>
    )
}