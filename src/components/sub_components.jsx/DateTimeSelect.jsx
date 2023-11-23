import { useState } from "react";
import { SecondaryBtn } from "../elements/Buttons";
import { DatePickerCustom } from "../elements/DatePicker";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { useNavigate } from "react-router-dom";
import "../../css/sub_components.css";
import { formatDate } from "../../assets/js_utils/utils";


export function DateTimeSelect({}){
    const navigate = useNavigate()
    const [date, setDate] = useState(new Date)
    const [show, setShow] = useState(true)
    
    const handleSaveNext = () => {
      
      navigate("/")
    }
    return (
        <PopupFormWrapper
        header_text="Select Date & time"
        back_text="BACK"
        next_text="SAVE & NEXT"
        next_fn={handleSaveNext}  
        
    >
        <div
            
            className="w-full h-[310px] sm:h-full flex flex-col sm450:flex-row justify-center items-center py-5 gap-0 xl:gap-16 "
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
                    scrollbar scrollbar-w-1 scrollbar-thumb-theme-grey scroll-mr-2 pr-1 pb-10"
                >
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">3:00 PM</SecondaryBtn>
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">3:00 PM</SecondaryBtn>
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">3:00 PM</SecondaryBtn>
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">3:00 PM</SecondaryBtn>
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">3:00 PM</SecondaryBtn>
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">3:00 PM</SecondaryBtn>
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">3:00 PM</SecondaryBtn>
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">3:00 PM</SecondaryBtn>
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">3:00 PM</SecondaryBtn>
                    <SecondaryBtn classes="bg-theme-grey w-[44%] h-fit sm450:w-full">9:00 PM</SecondaryBtn>
                    
                   
                </div>
            </div>
        </div>
    </PopupFormWrapper>
    )
}