import { useContext, useEffect, useState } from "react";
import { SelectFabric } from "../../components/SelectFabric";
import SuitBuildWrapper from "../../components/SuitBuildWrapper";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SelectBlazerPattern } from "../../components/SelectBlazerPattern";
import { CommonContext } from "../../contexts/CommonContexts";
import { SelectWaistcoatPattern } from "../../components/SelectWaistcoatPattern";
import { SelectWaistcoatLapel } from "../../components/SelectWaistcoatLapel";
import { SelectPantStyle } from "../../components/SelectPantStyle";
import { SelectShirtColor } from "../../components/SelectShirtColor";
import { Monogram } from "../../components/Monogramming";
import { Spinner } from "../../components/elements/Loaders";
import { useGetSuitBuildQuery } from "../../queries/getSuitBuildQuery";
import { useMutation } from "@tanstack/react-query";
import { useApi } from "../../assets/axios/useApi";
import { useCustAppntQuery } from "../../queries/AppointmentQuery";



export default function SuitBuild({}){
    const navigate = useNavigate()
    const http = useApi()
    const {steps,suitBuildSteps, findFirstNullSuitBuildStep, transformSuitBuildStepToObject} = useContext(CommonContext)
    const [pictures, set_pictures] = useState([])
    const [detail_id, set_detail_id] = useState(null)
    const [suit_build_params, set_suit_build_params] = useSearchParams()
    const select_stage = suit_build_params.get("select")
    const [is_loading, set_is_loading] = useState(false)
    const [monogram_text, set_monogram_text] = useState('')
    const appointment_query =  useCustAppntQuery()
    const appointment = appointment_query?.data?.data || {}
    useEffect(()=>{
        if(!steps.includes(select_stage)){
            set_is_loading(false)   
            navigate('?consult=info')
        } 
    }, [suitBuildSteps])
    const {data, isLoading, isError, isSuccess} = useGetSuitBuildQuery(appointment?.suit)
    const suit_data = isSuccess ? data?.data : {}
    const updateSuitBuild_mutation = useMutation({
        mutationKey: ["suit"],
        mutationFn: (context) => {
            set_is_loading(true)
            return http.put("/api/suit/update/" + context[0] + "/", context[1])
        },
        onSettled: ()=>set_is_loading(false),
        onSuccess: (data)=> {
            goToNext()
        }
    })
    const goToNext = () => {
        console.log(appointment?.appnt_type)
        const current_index = steps.indexOf(select_stage)
        if(current_index !== -1){
            if(current_index != (steps.length -1) ){
                set_suit_build_params({"select": (steps[current_index+1])})
            } else {
                navigate("?consult=date_time")
            }
        } else{
            set_suit_build_params({"select": "fabric"})
        }
    }

    const handleNext = () => {
        if(!appointment || !appointment["suit"] || !appointment['appnt_type'] == 'MEASUREMENT'){
            navigate('?consult=info')
        }
        const update_suit_data = transformSuitBuildStepToObject()
        if(select_stage == "shirt_color"){
            const left_stage = findFirstNullSuitBuildStep()
            if(!left_stage){
                updateSuitBuild_mutation.mutate([suit_data?.id, update_suit_data])
            } else{
                set_suit_build_params({"select": left_stage})
            }
        } else if(select_stage == 'monogram'){
            update_suit_data['monogram_text'] = monogram_text
            updateSuitBuild_mutation.mutate([suit_data?.id, update_suit_data])
        } else {
            goToNext()
        }

    }



    const handlePrev = () => {
        const current_index = steps.indexOf(select_stage)
        if(current_index !== -1){
            if(current_index != 0){
                set_suit_build_params({"select": (steps[current_index-1])})
            }
        } else{
            set_suit_build_params({"select": "fabric"})
        }
    }
    
   
    return(
        <SuitBuildWrapper
            pictures={pictures}
            detail_id={detail_id}
            next_fn={handleNext}
            back_fn={handlePrev}
            select_stage={select_stage}
            
        >
            {
                is_loading && 
                <div className="fixed z-[1000] w-screen h-screen inset-0 bg-black/20 backdrop-blur-[1px]
                flex justify-center items-center">
                    <Spinner/>
                </div>
            }
            
            {
                select_stage == "fabric" &&
                <SelectFabric
                    set_pictures={set_pictures}
                    set_detail_id={set_detail_id}
                    suit={suit_data}
                    />
                }
            {
                select_stage == "blazer" &&
                <SelectBlazerPattern
                    set_pictures={set_pictures}
                    set_detail_id={set_detail_id}
                    suit={suit_data}
                    />
                }
            {
                select_stage == "waistcoat_pattern" &&
                <SelectWaistcoatPattern
                set_pictures={set_pictures}
                set_detail_id={set_detail_id}
                suit={suit_data}
                />
            }
            {
                select_stage == "waistcoat_lapel" &&
                <SelectWaistcoatLapel
                set_pictures={set_pictures}
                set_detail_id={set_detail_id}
                suit={suit_data}
                />
            }
            {
                select_stage == "pant_style" &&
                <SelectPantStyle
                set_pictures={set_pictures}
                set_detail_id={set_detail_id}
                suit={suit_data}
                />
            }
            {
                select_stage == "shirt_color" &&
                <SelectShirtColor
                set_pictures={set_pictures}
                set_detail_id={set_detail_id}
                suit={suit_data}
                />
            }
            {
                select_stage == "monogram" &&
                <Monogram
                set_pictures={set_pictures}
                set_detail_id={set_detail_id}
                suit={suit_data}
                set_monogram_text={set_monogram_text}
                />
            }
        </SuitBuildWrapper>
    )
}