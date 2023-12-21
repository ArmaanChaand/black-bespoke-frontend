import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCustomerId } from "../../assets/js_utils/utils";
import { SecondaryBtn, TabBtn } from "../elements/Buttons";
import { SVGWrapper } from "../elements/SVGWrapper";
import { SubHeader } from "../elements/StyledHeaders";
import { WalledTexts } from "../elements/WalledTexts";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { useNavigate } from "react-router-dom";
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
    const appointment = appointment_query?.data?.data || {}
    useEffect(()=>{
        set_loading(appointment_query?.isLoading)
    }, [appointment_query?.isLoading])

    // CREATE/UPDATE AN APPOINTMENT
    const book_appointment = useMutation({
        mutationFn: (load_data) => {
            set_loading(true)
            if(appointment){
                console.log("UPDATE APPOINTMENT")
                const url = "/api/consult/update/" + appointment?.id + "/"
                return http.put(url, load_data)
            } else {
                console.log("CREATE APPOINTMENT")
                return http.post("/api/consult/create/", load_data)
            }
        },
        onSuccess: (data) => {
            const res_data = data?.data
            if(data?.data){
                queryClient.invalidateQueries({queryKey: ["customer", "appointment"]})
                if(res_data?.appnt_type == "CALLBACK"){
                    navigate('?consult=booked')
                }
                if(res_data?.appnt_type == "CONSULTATION"){
                    navigate('?consult=date_time')
                }
                if(res_data?.appnt_type == "MEASUREMENT"){
                    navigate('/suit-build/?select=fabric')
                    
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
        const customer_id = getCustomerId()
        const load_data = {
            appnt_type: "CONSULTATION",
            customer: customer_id
        }
        if(customer_id){
            book_appointment.mutate(load_data)
        }
    }

    const handleSuitConsultation = async () => {
        let suit_id = appointment?.suit
        if(!suit_id){
            const create_suit = await http.post("api/suit/create/")
            if(create_suit.status == 201 && create_suit?.data?.id){
                suit_id = create_suit?.data?.id

            }
        }
        const customer_id = getCustomerId()
        const load_data = {
            appnt_type: "MEASUREMENT",
            customer: customer_id,
            suit: suit_id
        }
        if(customer_id && suit_id){
            book_appointment.mutate(load_data)
        }
    }

    return (
        <PopupFormWrapper
        header_text="Select Your Desired Service for Appointment Booking"
        back_fn={()=>navigate("?consult=loc")}
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
            handleOnClick={handleSuitConsultation}
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