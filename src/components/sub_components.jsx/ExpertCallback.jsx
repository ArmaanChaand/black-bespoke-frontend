import { SVGWrapper } from "../elements/SVGWrapper";
import { SubHeader } from "../elements/StyledHeaders";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { useLocation, useNavigate } from "react-router-dom";

export function ExpertCallback({}){
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleGotIt = () => {
      
      navigate(location.pathname)
    }
    return (
        <PopupFormWrapper
        header_text="We've got you covered over expert will callback to you."
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
            <SubHeader >#232434</SubHeader>
            <p className="mt-1 text-theme-grey-beta text-base font-theme-gilroy">Expert Callback</p>
            <p className="mt-4 mb-1">Full Name, +9678XXXXXX</p>
            <p className="">Banglore, Karnataka</p>

        </div>
    </PopupFormWrapper>
    )
}