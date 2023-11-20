import { FullLogoSlogan } from "../../assets/Logos"
import {withHiddenVertScrollbar} from "../HOCs/SwitchOffScrolling"
import { PrimaryBtn } from "../elements/Buttons"
import { SVGWrapper } from "../elements/SVGWrapper"
import { CustomerForm } from "../sub_components.jsx/CustForm"

function ApptWalkthrough({walkthroughStage, setWalkthroughStage}){

    
    return (
        <section className="w-screen h-screen bg-theme-black/50 fixed z-50 flex justify-center items-center">
            <div className="w-full sm:w-11/12 md850:w-10/12 h-[90%] bg-theme-black shadow-md rounded-sm flex justify-center items-center">
                <div className="bg-theme-black w-fit sm:px-5 md:px-10 md950:px-14 lg:px-20 flex-none h-full flex justify-center items-center relative">
                    <FullLogoSlogan
                        textSvgClasses="sm:w-40 md:w-52 h-16 md950:w-72 md950:h-24"
                    />
                    <PrimaryBtn 
                        handleOnClick={()=>setWalkthroughStage(null)}
                        classes="p-1.5 rounded-full  absolute top-8 left-8 md:top-10 md:left-10" 
                        title="close window"
                    >
                        <SVGWrapper classes="w-5 h-5 stroke-theme-gold" svgName="CLOSE"/>                   
                    </PrimaryBtn>
                </div>
                <div className="bg-theme-gradient-grey w-full h-full">
                    {walkthroughStage == "CUSTOMER_INFO" && 
                        <CustomerForm />
                    }
                    
                </div>
            </div>
            
        </section>
    )
}
export default withHiddenVertScrollbar(ApptWalkthrough)