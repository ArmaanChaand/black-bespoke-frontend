import { useRef, useState } from "react";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { TextInput } from "../elements/Inputs";
import { useNavigate } from "react-router-dom";
import { useGetCustomerQuery } from "../../queries/CustomerQuery";
import { getCustomerId, setCustomerId } from "../../assets/js_utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../../assets/axios/useApi";
import { SecondaryBtn } from "../elements/Buttons";

export function AddressForm({set_loading}){
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
        console.log(customer_id)
        if(customer_id){
          const url = "/api/user/customer/update/" + customer_id + "/"
          return http.post(url, data)
        } else{
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
      console.log(formData)
      // post_req.mutate(formData)
    }
    return (
        <PopupFormWrapper
        header_text="Enter Your Address Detail"
        back_fn={()=>navigate("?consult_stage=date_time")}
        back_text="BACK"
        next_fn={handleSubmission}                            
        next_text="BOOK CONSULTATION"
        next_classes="w-full sm:w-fit ml-auto"
    >
      <div className="w-full text-sm flex flex-row justify-between items-center gap-10 text-theme-grey-beta">
        <p>
        Thursday, Jan 1, 2023 7:30 AM <br/>
        Bangalore, Karnataka 
        </p>
        <SecondaryBtn 
          classes="text-sm" 
          handleOnClick={()=>navigate("?consult_stage=date_time")}
        >
          EDIT
        </SecondaryBtn>
      </div>
        <form 
            onSubmit={(e)=>e.preventDefault()} 
            className="w-full h-full flex flex-col justify-start items-center mt-5 gap-6"
            ref={the_form}
        >
          <TextInput
            type="text"
            label="Address"
            placeholder="Enter your address."
            id="id_address"
            name="address"
            // defaultValue={customerInfo?.full_name || ""}
            // is_error={errors?.full_name}
            // bottom_msg={errors?.full_name || ""}
          />
          <TextInput
            label="Landmark"
            placeholder="Enter landmark here."
            type="text"
            name="landmark"
            id="id_landmark"
            // defaultValue={customerInfo?.phone && customerInfo?.phone.replace("+91", "")}
            // is_error={errors?.phone}
            // bottom_msg={errors?.phone || ""}
          />
          <div className="w-full grid grid-cols-2 gap-5">
            <TextInput
              type="tel"
              label="Pin Code"
              placeholder="56XXXX"
              id="id_pin_code"
              name="pin_code"
              // defaultValue={customerInfo?.email || ""}
              // is_error={errors?.email}
              // bottom_msg={errors?.email || ""}
            />
            <TextInput
              type="text"
              label="City"
              placeholder="City"
              id="id_city"
              name="city"
              readOnly={true}
              defaultValue={customerInfo?.email || ""}
              // is_error={errors?.email}
              // bottom_msg={errors?.email || ""}
            />
          </div>

        </form>
    </PopupFormWrapper>
    )
}