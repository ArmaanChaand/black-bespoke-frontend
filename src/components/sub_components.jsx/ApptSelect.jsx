import { PopupFormWrapper } from "./PopupFormWrapper";
import { useNavigate } from "react-router-dom";

export function AppointmentSelect({}){
    const navigate = useNavigate()
    
    function handleSubmission(){
      const formData = {city: citySelected}
      console.log(formData)
      navigate('?consult_stage=appt_select')
    }
    return (
        <PopupFormWrapper
        header_text="Select Your Desired Service for Appointment Booking"
        back_fn={()=>navigate("?consult_stage=loc")}
        next_text="SAVE & NEXT"
        next_fn={handleSubmission}  
        next_classes="hidden"                          
    >
        <div
            
            className="w-full h-full bg-theme-gold/30"
        >
         
        </div>
    </PopupFormWrapper>
    )
}