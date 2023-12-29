import { useContext } from "react";
import { CommonContext } from "../../contexts/CommonContexts";
import { useSearchParams } from "react-router-dom";
import { SuitBuildStep } from "../elements/Steps";

export default function SuitBuildSteps(){
    const {suitBuildSteps} = useContext(CommonContext)
    const [suit_build_params, set_suit_build_stage] = useSearchParams()
    const select_stage = suit_build_params.get("select")
    


    return(
        <ul className="mx-auto w-fit grid grid-cols-5 md:grid-cols-1 gap-2">
            <SuitBuildStep
                handleOnClick={()=>set_suit_build_stage({"select": "fabric"})}
                step="Select Fabric"
                // step={suitBuildSteps[0]?.value}
                src="/media/fabric.svg"
                status={
                    select_stage == "fabric" ? "ACTIVE" :
                    suitBuildSteps[0].value ? "COMPLETED" : "INCOMPLETE"
                }
                />
            <SuitBuildStep
                handleOnClick={()=>set_suit_build_stage({"select": "blazer"})}
                step="Select Blazer Pattern"
                // step={suitBuildSteps[1]?.value}
                src="/media/blazer.svg"
                status={
                    select_stage == "blazer" ? "ACTIVE" :
                    suitBuildSteps[1].value ? "COMPLETED" : "INCOMPLETE"
                }
                />
            <SuitBuildStep
                handleOnClick={()=>set_suit_build_stage({"select": "waistcoat_pattern"})}
                step="Select Waistcoat"
                // step={suitBuildSteps[2]?.value}
                src="/media/waistcoat.svg"
                status={
                    select_stage == "waistcoat_pattern" || select_stage == "waistcoat_lapel" ? "ACTIVE" :
                    suitBuildSteps[2].value ? "COMPLETED" : "INCOMPLETE"
                }
                />
            <SuitBuildStep
                handleOnClick={()=>set_suit_build_stage({"select": "pant_style"})}
                step="Select Pant Style"
                // step={suitBuildSteps[4]?.value}
                src="/media/pant.svg"
                status={
                    select_stage == "pant_style" ? "ACTIVE" :
                    suitBuildSteps[4].value ? "COMPLETED" : "INCOMPLETE"
                }
                />
            <SuitBuildStep
                handleOnClick={()=>set_suit_build_stage({"select": "shirt_color"})}
                step="Select Shirt Color"
                // step={suitBuildSteps[5]?.value}
                src="/media/shirt.svg"
                status={
                    select_stage == "shirt_color" ? "ACTIVE" :
                    suitBuildSteps[5].value ? "COMPLETED" : "INCOMPLETE"
                }
            />

        </ul>
    )
}