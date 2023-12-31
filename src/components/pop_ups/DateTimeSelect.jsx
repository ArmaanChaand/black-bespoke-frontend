import "../../css/sub_components.css";
import { lazy, useEffect, useState } from "react";
import { SecondaryBtn } from "../elements/Buttons";
import { DatePickerCustom } from "../elements/DatePicker";
import { useNavigate } from "react-router-dom";
import { formatDate, formatDatetoYYMMYY, formatTime, getCustomerId } from "../../assets/js_utils/utils";
import { useCustAppntQuery } from "../../queries/AppointmentQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../../assets/axios/useApi";
const PopupFormWrapper =lazy(()=>import("./PopupFormWrapper"));


export default function DateTimeSelect({set_loading}){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const http = useApi()
    const [error, set_error] = useState(null)
    const [date, setDate] = useState(new Date)
    const [show, setShow] = useState(false)
    const [time_selected, set_time_selected] = useState(null)
    const [times, set_times] = useState([
        "07:00:00", 
        "08:00:00", 
        "09:00:00", 
        "10:00:00", 
        "11:00:00", 
        "12:00:00", 
        "13:00:00", 
        "14:00:00", 
        "15:00:00", 
        "16:00:00", 
        "17:00:00", 
        "18:00:00", 
    ])
    // LIST APPOINTMENTS
    const appointment_query =  useCustAppntQuery()
    const appointment = appointment_query?.data?.data
    
    
    useEffect(()=>{
        set_loading(appointment_query?.isLoading)
    }, [appointment_query?.isLoading])
    
    useEffect(()=>{
        if(appointment_query?.status == 'success'){
            // if(appointment?.date) setDate(new Date(appointment?.date))
            if(appointment?.time) set_time_selected(appointment?.time)
        }
    }, [appointment_query?.status])


    // CREATE/UPDATE AN APPOINTMENT
    const book_appointment = useMutation({
        mutationFn: (load_data) => {
            set_error(null)
            set_loading(true)
            if(!load_data['date']){
                throw new Error("Please select date of the appointment.")
            }
            if(!load_data['time']){
                throw new Error("Please select the appointment time.")
            }
            if(appointment){
                // console.log(appointment?.id)
                const url = "/api/consult/update/" + appointment?.id + "/"
                return http.put(url, load_data)
            }
        },
        onSuccess: (data) => {
            const res_data = data?.data
            if(data?.data){
                queryClient.invalidateQueries({queryKey: ["customer", "appointment"]})
                console.log("cust_id: ", getCustomerId())
                if(res_data?.appnt_type == "CALLBACK"){
                    navigate('?consult=booked')
                }else{
                    navigate('?consult=address')
                }
            }
        },
        onError: (error) => {
            console.log(error)
            if(error.message) {
                set_error(error.message)
            } else {
                set_error("some error ocurred!")
            }
        },
        onSettled: (data) => {
            set_loading(false)
        },
    })

    const handleSaveNext = () => {
        const load_data = {
            date: formatDatetoYYMMYY(date),
            time: time_selected,
            
        }
        if(appointment?.appnt_type != 'MEASUREMENT'){
            load_data['appnt_type'] = 'CONSULTATION'
        }
        book_appointment.mutate(load_data)
        console.log("appnt_id: ", appointment?.id)
    //   navigate("?consult=address")
    }
    return (
        <PopupFormWrapper
        header_text="Select Date & time"
        back_text="BACK"
        back_fn={()=>navigate("?consult=appt_select")}
        next_text="SAVE & NEXT"
        next_fn={handleSaveNext}  
        
    >
        {error &&
            <p className="text-theme-error-red text-sm sm:mt-3">
                {error}
            </p>
        }
        <div
            
            className="w-full h-[310px] sm:h-full flex flex-col sm450:flex-row justify-center items-center py-4 gap-0 xl:gap-16 "
        >
            <div className="datepicker-parent w-full sm450:w-fit flex-none h-fit sm450:h-fit flex justify-center items-center overflow-hidden">
                


            
                <DatePickerCustom
                    setDate={setDate}
                    date={date}
                    show={show}
                    setShow={setShow}
                />




            </div>
            <div className="w-full h-full overflow-hidden">
                <p className="hidden sm450:block  text-theme-grey-beta font-theme-gilroy text-justify w-full mb-3 text-sm">
                    
                    {date && formatDate(date)}
                </p>
                <div 
                    className="h-full w-full flex flex-row flex-wrap gap-3 overflow-y-auto overflow-x-hidden
                    scrollbar scrollbar-w-1 scrollbar-thumb-theme-grey sm:scroll-mr-2 pr-1 pb-10"
                >
                    {
                        times.map(time => (
                            <SecondaryBtn 
                                classes="bg-theme-grey w-[46%] h-fit sm450:w-full"
                                handleOnClick={()=>set_time_selected(time)}
                                style={{
                                    backgroundColor: time_selected == time ? "rgb(217 185 130 / 0.3)" : null
                                }}
                            >
                                {formatTime(time)}
                            </SecondaryBtn>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    </PopupFormWrapper>
    )
}