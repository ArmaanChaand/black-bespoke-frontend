import { useEffect } from "react";
import { SVGWrapper } from "../elements/SVGWrapper";
import { SubHeader } from "../elements/StyledHeaders";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCustomerQuery } from "../../queries/CustomerQuery";
import { useGetCity } from "../../queries/CityQuery";
import { useCustAppntQuery } from "../../queries/AppointmentQuery";
import { useQueryClient } from "@tanstack/react-query";

const appointment_type_texts = {
    "DEFAULT" : ["We've got you covered.", "---"],
    "CALLBACK" : ["We've got you covered over expert will callback to you.", "Expert Callback"],
    "CONSULTATION" : ["We've got you confirmed for your appointment.", "Garment Tailoring Consultation"],
    "MEASUREMENT" : ["We've got your design, expert will callback to you. ", "Measurement Consultation "],
}

export function AppointmentConfirmed({set_loading}){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const location = useLocation()
    const appointment_query =  useCustAppntQuery()
    const appointment = appointment_query?.data?.data || {}
    
    // QUERY CUSTOMER
    const customer_query = useGetCustomerQuery()
    const customer_data = customer_query?.data?.data || {}
    useEffect(()=>{
        set_loading(customer_query.isLoading)
    }, [customer_query?.isLoading])
    // QUERY CITY SELECTED
    const city_query = useGetCity(appointment?.customer_city)
    const city_selected = city_query?.data?.data || {}
    useEffect(()=>{
        set_loading(city_query.isLoading)
    }, [city_query?.isLoading])

    const handleGotIt = () => {
        console.log(location.pathname != '/suit-build/' ? location.pathname : "/")
      navigate(location.pathname != '/suit-build/' ? location.pathname : "/")
    }
    useEffect(()=>{
        queryClient.invalidateQueries('customer')
    }, [])
    return (
        <PopupFormWrapper
        header_text={appointment_type_texts[appointment?.appnt_type][0] || appointment_type_texts["DEFAULT"][0]}
        back_classes="hidden"
        next_text="OKAY, GOT IT"
        next_fn={handleGotIt}  
        next_classes="w-full"                          
        next_svg_name="none"
    >
        <div
            
            className="w-full h-full flex flex-col justify-center items-center font-theme-cirka text-theme-white"
        >
            <SVGWrapper svgName="PHONE" classes="w-20 fill-transparent stroke-theme-white stroke-1 mb-2"/>
            <SubHeader classes="text-xl sm:text-2xl, uppercase">
                #{appointment?.identifier}
            </SubHeader>
            <p className="mt-1 text-theme-grey-beta text-base font-theme-gilroy">
            {appointment_type_texts[appointment?.appnt_type || "DEFAULT"][1]}
            </p>
            <p className="mt-4 mb-1">{customer_data?.full_name || "---"}, {customer_data?.phone || "---"}</p>
            <p className=""> {city_selected?.name} {city_selected?.state && ","} {city_selected?.state}</p>

        </div>
    </PopupFormWrapper>
    )
}