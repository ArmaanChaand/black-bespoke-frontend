import { useContext } from "react";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { CommonContext } from "../../contexts/CommonContexts";
import { TextInput } from "../elements/Inputs";

export function CustomerForm({}){
    const {setWalkthroughStage} = useContext(CommonContext)
    return (
        <PopupFormWrapper
        header_text="Provide Your Information"
        // back_classes="hidden"
        
        next_fn={()=>setWalkthroughStage(null)}                            
        next_text="SELECT LOCATION"
        next_classes="ml-auto"
    >
        <form 
            onSubmit={(e)=>e.preventDefault()} 
            className="w-full h-full flex flex-col justify-start items-center mt-5 gap-6"
        >
          <TextInput
            type="text"
            label="Full Name"
            placeholder="Your Name"
            id="id_full_name"
            name="full_name"
          />
          <TextInput
            label="Mobile Number"
            placeholder="9945XXXXXX"
            type="tel"
            id="id_phone"
            name="phone"
            input_left_elm={
                <span className="pl-3 py-2 text-theme-gold text-base bg-theme-grey">+91</span>                
            }
          />
          <TextInput
            type="email"
            label="Email ID"
            placeholder="example@email.com"
            id="id_email"
            name="email"
          />

        </form>
    </PopupFormWrapper>
    )
}