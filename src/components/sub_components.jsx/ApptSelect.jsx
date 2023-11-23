import { SecondaryBtn, TabBtn } from "../elements/Buttons";
import { SVGWrapper } from "../elements/SVGWrapper";
import { SubHeader } from "../elements/StyledHeaders";
import { WalledTexts } from "../elements/WalledTexts";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { useNavigate } from "react-router-dom";

export function AppointmentSelect({}){
    const navigate = useNavigate()
    
    const handleCallback = () => {
        navigate('?consult_stage=callback')
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