import { useState } from "react";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { useNavigate } from "react-router-dom";
import { StyledRadioLoc } from "../elements/Inputs";

export function LocationSelect({}){
    const navigate = useNavigate()
    const [citySelected, setCitySelected] = useState(null)
    function handleSubmission(){
      const formData = {city: citySelected}
      console.log(formData)
      navigate('?consult_stage=appt_select')
    }
    return (
        <PopupFormWrapper
        header_text="Choose Your Preferred Location"
        back_fn={()=>navigate("?consult_stage=info")}
        next_text="SAVE & NEXT"
        next_fn={handleSubmission}                            
        next_disabled={citySelected == null}
    >
        <div
            
            className="w-full h-full grid grid-rows-2 grid-cols-2 mt-5 mb-5 gap-3 overflow-hidden"
        >
          <StyledRadioLoc
            name="location-1"
            setCitySelected={setCitySelected}
            citySelected={citySelected}
          />
          <StyledRadioLoc
            name="location-2"
            setCitySelected={setCitySelected}
            citySelected={citySelected}
          />
          <StyledRadioLoc
            name="location-3"
            setCitySelected={setCitySelected}
            citySelected={citySelected}
          />
          <StyledRadioLoc
            name="location-4"
            setCitySelected={setCitySelected}
            citySelected={citySelected}
          />
        </div>
    </PopupFormWrapper>
    )
}