import { useContext, useEffect, useState } from "react";
import { SelectFabric } from "../../components/SelectFabric";
import SuitBuildWrapper from "../../components/SuitBuildWrapper";
import { useSearchParams } from "react-router-dom";
import { SelectBlazerPattern } from "../../components/SelectBlazerPattern";
import { CommonContext } from "../../contexts/CommonContexts";
import { SelectWaistcoatPattern } from "../../components/SelectWaistcoatPattern";
import { SelectWaistcoatLapel } from "../../components/SelectWaistcoatLapel";
import { SelectPantStyle } from "../../components/SelectPantStyle";
import { SelectShirtColor } from "../../components/SelectShirtColor";
import { Monogram } from "../../components/Monogramming";



export default function SuitBuild({}){
    const {steps,suitBuildSteps, findFirstNullSuitBuildStep} = useContext(CommonContext)
    const [pictures, set_pictures] = useState([])
    const [detail_id, set_detail_id] = useState(null)
    const [suit_build_params, set_suit_build_params] = useSearchParams()
    const select_stage = suit_build_params.get("select")
   
    useEffect(()=>{
        if(!(suitBuildSteps[0]).value){
            set_suit_build_params({"select": "fabric"})
        }
    }, [suitBuildSteps])

    function handleNext(){
        const current_index = steps.indexOf(select_stage)
        if(current_index !== -1){
            if(current_index != (steps.length -1) ){
                set_suit_build_params({"select": (steps[current_index+1])})
            }
        } else{
            set_suit_build_params({"select": "fabric"})
        }
    }
    function handlePrev(){
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
            
        >
            {
                select_stage == "fabric" &&
                <SelectFabric
                    set_pictures={set_pictures}
                    set_detail_id={set_detail_id}
                />
            }
            {
                select_stage == "blazer" &&
                <SelectBlazerPattern
                    set_pictures={set_pictures}
                    set_detail_id={set_detail_id}
                />
            }
            {
                select_stage == "waistcoat_pattern" &&
                <SelectWaistcoatPattern
                    set_pictures={set_pictures}
                    set_detail_id={set_detail_id}
                />
            }
            {
                select_stage == "waistcoat_lapel" &&
                <SelectWaistcoatLapel
                    set_pictures={set_pictures}
                    set_detail_id={set_detail_id}
                />
            }
            {
                select_stage == "pant_style" &&
                <SelectPantStyle
                    set_pictures={set_pictures}
                    set_detail_id={set_detail_id}
                />
            }
            {
                select_stage == "shirt_color" &&
                <SelectShirtColor
                    set_pictures={set_pictures}
                    set_detail_id={set_detail_id}
                />
            }
            {
                select_stage == "monogram" &&
                <Monogram
                    set_pictures={set_pictures}
                    set_detail_id={set_detail_id}
                />
            }
        </SuitBuildWrapper>
    )
}