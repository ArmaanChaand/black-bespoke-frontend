import { useContext, useEffect, useState } from "react";
import { PopupFormWrapper } from "./PopupFormWrapper";
import { useNavigate } from "react-router-dom";
import { StyledRadioLoc } from "../elements/Inputs";
import { CommonContext } from "../../contexts/CommonContexts";
import { useGetCustAddrsQuery } from "../../queries/AddressQuery";
import { useGetCities } from "../../queries/CityQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../../assets/axios/useApi";
import { getCustomerId } from "../../assets/js_utils/utils";

const CDN_HOST = import.meta.env.VITE_CDN_HOST

export function LocationSelect({set_loading}){
    const navigate = useNavigate()
    const http = useApi()
    const queryClient = useQueryClient()
    const {address, set_address} = useContext(CommonContext)
    const [citySelected, setCitySelected] = useState(null)

    // LIST ALL CITIES
    const cities = useGetCities()
    useEffect(()=>{
      set_loading(cities?.isLoading)
    }, [cities?.isLoading])
    const locations = cities?.data?.data || []

    // GET USER ADDRESSES
    const {data, isLoading, isSuccess, isError, status} = useGetCustAddrsQuery()
    const address_data = data?.data
    useEffect(()=>{
      console.log(address_data)
      if(status == 'success'){
         set_address(address_data)
         setCitySelected(address_data?.city)
      }
    }, [status])
    useEffect(()=>{
      set_loading(isLoading)
    }, [isLoading])


    // UPDATE LOCATION
    const updateLocation = useMutation({
      mutationKey:['customer', 'address'],
      mutationFn: (context) => {
        console.log(context)
        set_loading(true)
        if(context[0]){
          const url = "/api/address/update/" + context[0] + "/"
          console.log("UPDATE LOCATION")  
          return http.put(url, context[1])
        } else {
          console.log("CREATE LOCATION")
          return http.post("/api/address/create/", context[1])
        }
      },
      onError: (error) => {
        console.error(error)
      },
      onSuccess: (data) => {
        if(data?.data?.customer){
          queryClient.invalidateQueries({queryKey: ["customer"]})
          navigate('?consult=appt_select')
        }
      },
      onSettled: (data) => {
        set_loading(false)
      }
    })

    function handleSubmission(){
      const formData = {
        city: citySelected,
        customer: getCustomerId() || null
      }
      console.log(formData)
      updateLocation.mutate([address?.id, formData])
    }
    return (
        <PopupFormWrapper
        header_text="Choose Your Preferred Location"
        back_fn={()=>navigate("?consult=info")}
        next_text="SAVE & NEXT"
        next_fn={handleSubmission}                            
        next_disabled={citySelected == null}
    >
        <div
            
            className="w-full aspect-square sm:aspect-auto sm:h-full grid grid-rows-2 grid-cols-2 mt-5 mb-5 gap-3 overflow-hidden"
        >
          {
            locations?.map(location => (
              <StyledRadioLoc
                name={location?.name}
                src={CDN_HOST + location?.icon}
                id={location?.id}
                setCitySelected={setCitySelected}
                citySelected={citySelected}
              />
            ))
          }
        </div>
    </PopupFormWrapper>
    )
}