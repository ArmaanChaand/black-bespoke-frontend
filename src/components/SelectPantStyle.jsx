import { useContext, useEffect, useState } from "react";
import { SelectBtn, TabBtn } from "./elements/Buttons";
import { Spinner } from "./elements/Loaders";
import { ParaSec } from "./elements/Paras";
import { SubHeader } from "./elements/StyledHeaders";
import { WalledTexts } from "./elements/WalledTexts";
import { useGetSuitPartQuery } from "../queries/getSuitPartQuery";
import { CommonContext } from "../contexts/CommonContexts";

const BASE_URL = import.meta.env.VITE_API_HOST

export function SelectPantStyle({
    set_pictures,set_detail_id, suit
}){
    const {updateSuitBuildStep} = useContext(CommonContext)
    const [pantStyle, set_pantStyle] = useState(suit?.pant_style)
    const {data, isLoading, isSuccess, isError, refetch, status} =  useGetSuitPartQuery("/api/suit/pant-style/all/", "pant-style")
    const pant_styles = isSuccess ?  data?.data : []
    
    useEffect(()=>{
        if(!pantStyle && status =="success"){
            set_pantStyle(pant_styles[0]?.id || {})
        } 
        
        const update_build_stages = (step_id, parts_list ,selectedPart_id) => {
            const selected_part = parts_list.find(part => part?.id == selectedPart_id)
            if(selected_part){
                set_pictures(selected_part?.pictures || [])
                set_detail_id(selected_part?.detail || null)
                updateSuitBuildStep(step_id, selected_part?.id)
            }
        }
        
        update_build_stages("pant_style", pant_styles ,pantStyle)
    }, [pant_styles, pantStyle, status])
    return(
            <div className="">
                <SubHeader classes="text-lg sm:text-xl 2xl:text-2xl ml-3">
                        <WalledTexts>
                        Choose your pants styling
                        </WalledTexts>
                    </SubHeader>
                    <ParaSec classes="mt-2 mb-0">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum tincidunt quam feugiat purus aliquet tellus.
                    </ParaSec>
                    <div className="w-full h-fit">
                        {
                            isLoading &&
                            <div className="w-full flex justify-center items-center">
                                <Spinner/>  
                            </div>
                        }
                        {
                            isSuccess && !isLoading &&
                            <div className="w-full grid grid-cols-1 gap-5 mt-8">
                                {
                                    pant_styles.map(style => {
                                        
                                    return   <TabBtn
                                    handleOnClick={ () => set_pantStyle(style?.id)}
                                    title={style?.name}
                                    descr={style?.description}
                                    svg_url={BASE_URL + style?.icon}
                                    img_class="w-10 h-auto flex-none"
                                    classes={"w-full " +  
                                    ( pantStyle == style?.id ? "bg-theme-gold/5 border-theme-gold" : "")}
                                 />
                                    })
                                }
                                <TabBtn
                                    handleOnClick={ () => set_pantStyle("no-pant")}
                                    title="No Pant"
                                    descr="I already have a style and don't want Black Bespoke to include another style."
                                    img_class="hidden"
                                    text_class="text-center items-center w-10/12 mx-auto"
                                    classes={"w-full " +  
                                    ( pantStyle == "no-pant" ? "bg-theme-gold/5 border-theme-gold" : "")}
                                 />
                            </div>
                        }
                        {
                            isError &&
                            <p className="text-red-600 font-mono text-center text-sm px-5">
                                Oops! We couldn't fetch <br/> the pant styles right now. 
                                <br/>
                                Please{" "}
                                <button 
                                    onClick={()=>refetch()}
                                    className="underline"
                                    >try again</button>.
                            </p>
                        }
                    </div>

            </div>
    )
}