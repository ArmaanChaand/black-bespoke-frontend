import { useEffect, useState } from "react"
import { useAxios } from "../../assets/axios/useAxios"
import { StyledImageBox } from "./StyledImageBox"

export function ServicesSlider(){
    const [services, setServices] = useState([{}])
    const http = useAxios()
    useEffect(()=>{
        const URL = "/db/services-home.json"
        http.get(URL).then(response => {
            setServices(response.data?.services)
        }).catch(error => {
            console.error(error)
        }).finally(()=>{})
    }, [])
    return (
        <swiper-container 
            class="my-8 overflow-hidden w-full  mx-auto" 
            space-between="50" slides-per-view="auto" pagination="false"
        >
            {services.map(service => (
                <swiper-slide key={service?.serial} class="w-fit">
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