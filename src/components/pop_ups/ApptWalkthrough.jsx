import { useLocation, useNavigate } from "react-router-dom"
import { FullLogoSlogan } from "../../assets/Logos"
import {withHiddenVertScrollbar} from "../HOCs/SwitchOffScrolling"
import { PrimaryBtn } from "../elements/Buttons"
import { SVGWrapper } from "../elements/SVGWrapper"
import { CustomerForm } from "../sub_components.jsx/CustForm"
import { LocationSelect } from "../sub_components.jsx/LocationSelect"
import { AppointmentSelect } from "../sub_components.jsx/ApptSelect"

function ApptWalkthrough({walkthroughStage}){
    const locaton = useLocation()
    const navigate = useNavigate()

    function handleClose(){
        navigate(locaton.pathname)
    }
    
    return (
        <section 
            className="w-screen h-screen bg-theme-black/80 
            sm:bg-theme-black/60 fixed z-50 flex justify-center items-center overflow-y-auto sm:overflow-hidden">
            <div 
                className="w-full sm:w-11/12 md850:w-10/12 mt-auto sm:mt-[unset] h-[80%] sm:h-[90%] bg-theme-black 
                shadow-md rounded-sm flex flex-col sm:flex-row justify-center items-center "
            >
                <div className="bg-theme-black w-full sm:w-fit h-fit py-10 sm:h-full sm:px-5 
                md:px-10 md950:px-14 lg:px-20 flex-none flex justify-center items-center relative">
                    <FullLogoSlogan
                        textSvgClasses="sm:w-40 md:w-52 h-16 md950:w-72 md950:h-24"
                    />
                    <PrimaryBtn 
                        handleOnClick={handleClose}
                        classes="p-1.5 rounded-full  absolute -top-12 sm:top-8 sm:left-8 md:top-10 md:left-10" 
                        title="close window"
                    >
                        <SVGWrapper classes="w-5 h-5 stroke-theme-gold" svgName="CLOSE"/>                   
                    </PrimaryBtn>
                </div>
                <div className="bg-theme-gradient-grey w-full h-fit sm:h-full">
                    {walkthroughStage == "info" && 
                        <CustomerForm />
                    }
                    {walkthroughStage == "loc" && 
                        <LocationSelect />
                    }
                    {walkthroughStage == "appt_select" && 
                        <AppointmentSelect />
                    }
                    
                </div>
            </div>
        </section>
    )
}
export default withHiddenVertScrollbar(ApptWalkthrough)