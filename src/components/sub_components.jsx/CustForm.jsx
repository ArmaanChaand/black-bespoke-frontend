import { useContext, useRef } from "react";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { CommonContext } from "../../contexts/CommonContexts";
import { TextInput } from "../elements/Inputs";
import { useNavigate } from "react-router-dom";
import { useGetCustomerQuery } from "../../queries/CustomerQuery";

export function CustomerForm({}){
    const {setWalkthroughStage, customer_id} = useContext(CommonContext)
    const {data} = useGetCustomerQuery(customer_id && customer_id )
    console.log(data)
    const customerInfo = data?.data || {}
    const navigate = useNavigate()
    const the_form = useRef()
    function handleSubmission(){
      const formData = Object.fromEntries(new FormData(the_form.current))
      console.log(formData)
      setWalkthroughStage("loading")
      setTimeout(()=>{
        setWalkthroughStage("info")
      }, 2000)
      return
      navigate('?consult_stage=loc')
    }
    return (
        <PopupFormWrapper
        header_text="Provide Your Information"
        back_classes="hidden"
        next_fn={handleSubmission}                            
        next_text="SELECT LOCATION"
        next_classes="ml-auto"
    >
        <form 
            onSubmit={(e)=>e.preventDefault()} 
            className="w-full h-full flex flex-col justify-start items-center mt-5 gap-6"
            ref={the_form}
        >
          <TextInput
            type="text"
            label="Full Name"
            placeholder="Your Name"
            id="id_full_name"
            name="full_name"
            defaultValue={customerInfo?.full_name || ""}
          />
          <TextInput
            label="Mobile Number"
            placeholder="9945XXXXXX"
            type="tel"
            id="id_phone"
            name="phone"
            defaultValue={customerInfo?.phone && customerInfo?.phone.replace("+91", "")}
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
            defaultValue={customerInfo?.email || ""}
          />

        </form>
    </PopupFormWrapper>
    )
}