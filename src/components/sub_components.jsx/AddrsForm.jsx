import { useRef, useState } from "react";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { TextInput } from "../elements/Inputs";
import { useNavigate } from "react-router-dom";
import { useGetCustomerQuery } from "../../queries/CustomerQuery";
import { getCustomerId, setCustomerId } from "../../assets/js_utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../../assets/axios/useApi";
import { SecondaryBtn } from "../elements/Buttons";
import { useGetCustAddrsQuery } from "../../queries/AddressQuery";
import { useGetCities, useGetCity } from "../../queries/CityQuery";
import axios from "axios";

export function AddressForm({set_loading}){
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const [errors, set_errors] = useState({})
    const http = useApi()
    const {data, isSuccess, isError, status} = useGetCustAddrsQuery()
    
    const address_data = isSuccess ? data?.data : {}
    const selected_city_query = useGetCity(address_data?.city)
    const selected_city = selected_city_query?.data?.data || {}
    const post_req = useMutation({
      mutationFn: (context) => {
        set_loading(true)
        set_errors(null)
        if(context[0]){
          const url = "/api/address/update/" + context[0] + "/"
          return http.put(url, context[1])
        } else{
          throw new Error("some error ocurred!")
        }
      },
      onError: (error) => {
        console.log(error?.response?.data)
        set_errors(error?.response?.data)
      },
      onSuccess: (data) => {
        if(data?.data?.id) setCustomerId(data?.data?.id)
        queryClient.invalidateQueries({ queryKey: ["customer"] })
        navigate('?consult=booked')
      },
      onSettled:() =>{
        set_loading(false)
      }
    })
    
    const the_form = useRef()
    function handleSubmission(){
      const formData = Object.fromEntries(new FormData(the_form.current))
      delete formData['city']
      console.log(formData)
      post_req.mutate([address_data?.id,formData])
    }
    return (
        <PopupFormWrapper
        header_text="Enter Your Address Detail"
        back_fn={()=>navigate("?consult=date_time")}
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
          handleOnClick={()=>navigate("?consult=date_time")}
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
            defaultValue={address_data?.address || ""}
            is_error={errors?.address}
            bottom_msg={errors?.address || ""}
          />
          <TextInput
            label="Landmark"
            placeholder="Enter landmark here."
            type="text"
            name="landmark"
            id="id_landmark"
            defaultValue={address_data?.landmark || ""}
            is_error={errors?.landmark}
            bottom_msg={errors?.landmark || ""}
          />
          <div className="w-full grid grid-cols-2 gap-5">
            <TextInput
              type="tel"
              label="Pin Code"
              placeholder="56XXXX"
              id="id_pin_code"
              name="pin_code"
              defaultValue={address_data?.pin_code || ""}
              is_error={errors?.pin_code}
              bottom_msg={errors?.pin_code || ""}
            />
            <TextInput
              type="text"
              label="City"
              placeholder="City"
              id="id_city"
              name="city"
              readOnly={true}
              defaultValue={selected_city.name || ""}
              is_error={errors?.city}
              bottom_msg={errors?.city || ""}
            />
          </div>

        </form>
    </PopupFormWrapper>
    )
}