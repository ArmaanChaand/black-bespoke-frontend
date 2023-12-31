import { lazy, useEffect } from "react";
import { SVGWrapper } from "../elements/SVGWrapper";
import { SubHeader, SubHeaderBeta } from "../elements/StyledHeaders";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCustomerQuery } from "../../queries/CustomerQuery";
import { useGetCity } from "../../queries/CityQuery";
import { useCustAppntQuery } from "../../queries/AppointmentQuery";
import { useQueryClient } from "@tanstack/react-query";
import ImageElm from "../elements/Images";
const PopupFormWrapper =lazy(()=>import("./PopupFormWrapper"));

const appointment_type_texts = {
    DEFAULT:{
        heading:"We've got you covered.",
        consult_type: "Consultation",
        icon: "",
    },
    CALLBACK:{
        heading:"We've got you covered over expert will callback to you.",
        consult_type: "Expert Callback",
        icon: "/media/phone.svg",
    },
    CONSULTATION:{
        heading:"We've got you confirmed for your appointment.",
        consult_type: "Garment Tailoring Consultation",
        icon: "/media/calender.svg",
    },
    MEASUREMENT:{
        heading:"We've got your design, expert will callback to you.",
        consult_type: "Measurement Consultation ",
        icon: "/media/mannequin.svg",
    },
}

export default function AppointmentConfirmed({set_loading}){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const location = useLocation()
    const appointment_query =  useCustAppntQuery()
    const appointment = appointment_query?.data?.data || {}
    console.log("appnt_id: ", appointment?.id)
    // QUERY CUSTOMER
    const customer_query = useGetCustomerQuery()
    const customer_data = customer_query?.data?.data || {}
    console.log("cust_id: ", customer_data?.id)
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
      navigate(location.pathname != '/suit-build/' ? location.pathname : "/")
    }
    useEffect(()=>{
        queryClient.invalidateQueries('customer')
    }, [])
    return (
        <PopupFormWrapper
        header_text={appointment_type_texts[appointment?.appnt_type]?.heading || appointment_type_texts?.DEFAULT?.heading}
        back_classes="hidden"
        next_text="OKAY, GOT IT"
        next_fn={handleGotIt}  
        next_classes="w-full"                          
        next_svg_name="none"
    >
        <div
            
            className="w-full h-full flex flex-col justify-center items-center font-theme-cirka text-theme-white"
        >
            <ImageElm
                src={
                    appointment_type_texts[appointment?.appnt_type]?.icon || appointment_type_texts?.DEFAULT?.icon
                }
                classes="w-20 mb-2 object-contain h-fit"
            />
            <SubHeader classes="text-xl font-semibold sm:text-2xl uppercase font-theme-gilroy ">
                #{appointment?.identifier}
            </SubHeader>
            <p className="mt-1 text-theme-grey-beta text-base font-theme-gilroy">
            {appointment_type_texts[appointment?.appnt_type]?.consult_type || appointment_type_texts?.DEFAULT?.consult_type}
            </p>
            <p className="mt-4 mb-1">{customer_data?.full_name || ""}, {customer_data?.phone || ""}</p>
            <p className=""> {city_selected?.name} {city_selected?.state && ","} {city_selected?.state}</p>

        </div>
    </PopupFormWrapper>
    )
}