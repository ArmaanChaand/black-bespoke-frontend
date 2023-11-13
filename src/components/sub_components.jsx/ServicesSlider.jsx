import { useEffect, useState } from "react"
import { useAxios } from "../../assets/axios/useAxios"
import { StyledImageBox } from "./StyledImageBox"
import {useQuery} from "@tanstack/react-query"
export function ServicesSlider(){
    const http = useAxios()
    const {data, isError, isLoading} = useQuery({
        queryKey: ['services-home'],
        queryFn: () => http.get("/db/services-home.json"),
        staleTime: 1000 * 60 * 5
    })
    const services = data?.data?.services || []
    
    
    if (isError || isLoading) return ""
    return (
        <swiper-container 
            class="my-8 overflow-hidden w-full mx-auto" 
            space-between="0" slides-per-view="auto" pagination="false"
        >
            {services.map(service => (
                <swiper-slide key={service?.serial} class="w-fit mr-5">
                    <StyledImageBox
                        serialNum={service?.serial}
                        heading={service?.heading}
                        para={service?.para}
                        imgSrc={service?.imgSrc}
                    />
                </swiper-slide>
            ))}
        </swiper-container>
    )
}