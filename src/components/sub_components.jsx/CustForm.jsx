import { useRef, useState } from "react";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { TextInput } from "../elements/Inputs";
import { useNavigate } from "react-router-dom";
import { useGetCustomerQuery } from "../../queries/CustomerQuery";
import { getCustomerId, setCustomerId } from "../../assets/js_utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../../assets/axios/useApi";

export function CustomerForm({set_loading}){
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const [errors, set_errors] = useState({})
    const http = useApi()
    const {data} = useGetCustomerQuery()
    const customerInfo = data?.data || {}
    const post_req = useMutation({
      mutationFn: (data) => {
        set_loading(true)
        set_errors(null)
        const customer_id = getCustomerId()
        if(customer_id){
          const url = "/api/user/customer/update/" + customer_id + "/"
          console.log("UPDATE CUSTOMER")
          return http.post(url, data)
        } else{
          console.log("CREATE CUSTOMER")
          return http.post("/api/user/customer/create/", data)
        }
      },
      onError: (error) => {
        set_errors(error?.response?.data)
      },
      onSuccess: (data) => {
        if(data?.data?.id) setCustomerId(data?.data?.id)
        queryClient.invalidateQueries({ queryKey: ["customer"] })
        navigate('?consult_stage=loc')
      },
      onSettled:() =>{
        set_loading(false)
      }
    })
    
    const the_form = useRef()
    function handleSubmission(){
      const formData = Object.fromEntries(new FormData(the_form.current))
      post_req.mutate(formData)
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
            is_error={errors?.full_name}
            bottom_msg={errors?.full_name || ""}
          />
          <TextInput
            label="Mobile Number"
            placeholder="9945XXXXXX"
            type="tel"
            id="id_phone"
            name="phone"
            defaultValue={customerInfo?.phone && customerInfo?.phone.replace("+91", "")}
            is_error={errors?.phone}
            bottom_msg={errors?.phone || ""}
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
            is_error={errors?.email}
            bottom_msg={errors?.email || ""}
          />

        </form>
    </PopupFormWrapper>
    )
}