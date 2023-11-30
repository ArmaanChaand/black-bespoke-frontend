import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCustomerId } from "../../assets/js_utils/utils";
import { SecondaryBtn, TabBtn } from "../elements/Buttons";
import { SVGWrapper } from "../elements/SVGWrapper";
import { SubHeader } from "../elements/StyledHeaders";
import { WalledTexts } from "../elements/WalledTexts";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { useMatch, useNavigate } from "react-router-dom";
import { useCustAppntQuery } from "../../queries/AppointmentQuery";
import { useContext, useEffect } from "react";
import { CommonContext } from "../../contexts/CommonContexts";
import { useApi } from "../../assets/axios/useApi";

export function AppointmentSelect({set_loading}){
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const http = useApi()
    // LIST APPOINTMENTS
    const appointment_query =  useCustAppntQuery()
    const {appointment, set_appointment} = useContext(CommonContext)
    useEffect(()=>{
        const appointment_res_data = appointment_query?.data?.data
        if(appointment_res_data?.length){
            set_appointment(appointment_res_data[appointment_res_data.length - 1])
        }
    }, [appointment_query?.data])
    useEffect(()=>{
        set_loading(appointment_query?.isLoading)
    }, [appointment_query?.isLoading])

    // CREATE AN APPOINTMENT
    const book_appointment = useMutation({
        mutationFn: (load_data) => {
            set_loading(true)
            if(appointment){
                console.log(appointment?.id)
                const url = "/api/consult/update/" + appointment?.id + "/"
                return http.put(url, load_data)
            } else {
                return http.post("/api/consult/create/", load_data)
            }
        },
        onSuccess: (data) => {
            const res_data = data?.data
            if(data?.data){
                queryClient.invalidateQueries({queryKey: ["customer", "appointment"]})
                if(res_data?.appnt_type == "CALLBACK"){
                    navigate('?consult_stage=callback')
                }
            }
        },
        onError: (error) => {
            console.log(error)
            console.log(error?.response?.data)
        },
        onSettled: (data) => {
            set_loading(false)
        },
    })
    const handleCallback = () => {
        const customer_id = getCustomerId()
        const load_data = {
            appnt_type: "CALLBACK",
            customer: customer_id
        }
        if(customer_id){
            book_appointment.mutate(load_data)
        }
    }
    const handleConsultation = () => {
        navigate('?consult_stage=date_time')
    }
    return (
        <PopupFormWrapper
        header_text="Select Your Desired Service for Appointment Booking"
        back_fn={()=>navigate("?consult_stage=loc")}
        next_classes="hidden"                          
    >
        <div
            
            className="w-full h-full flex flex-col justify-center items-center"
        >
         <TabBtn
            title="Create suite & Book Consultation"
            descr="Lorem ipsum dolor sit amet consectetur tortor ."
            svg_url="/media/mannequin.svg"
            classes="w-full my-8"
         />
         <TabBtn
            title="Garment Tailoring Consultation"
            descr="Lorem ipsum dolor sit amet consectetur tortor ."
            svg_url="/media/calender.svg"
            classes="w-full"
            handleOnClick={handleConsultation}
         />

        <div className="w-full flex flex-col gap-6 sm:flex-row justify-between items-center mt-10 sm:mt-auto">
                <SubHeader classes="w-full sm:w-fit pl-3 ">
                <WalledTexts> 
                        <span className="sm:block">Get Started with</span>  Expert Help for Your Needs
                </WalledTexts>
                </SubHeader>
                <SecondaryBtn classes="w-full sm:w-fit" handleOnClick={handleCallback}>
                    <div className="flex flex-row justify-center items-center">
                        <SVGWrapper svgName="PHONE" classes="fill-transparent stroke-theme-gold stroke-2 w-4" /> 
                        <span className="font-semibold text-sm ml-3">EXPERT CALLBACK</span>
                    </div>
                </SecondaryBtn>
        </div>

        </div>
    </PopupFormWrapper>
    )
}