import { useContext, useEffect, useState } from "react";
import { TabBtn } from "../elements/Buttons";
import { Spinner } from "../elements/Loaders";
import { ParaPrmBeta, ParaSec } from "../elements/Paras";
import { SubHeader, SubHeaderBeta } from "../elements/StyledHeaders";
import { WalledTexts } from "../elements/WalledTexts";
import { useGetSuitPartQuery } from "../../queries/getSuitPartQuery";
import { CommonContext } from "../../contexts/CommonContexts";

const BASE_URL = import.meta.env.VITE_API_HOST

export default function SelectWaistcoatLapel({
    set_pictures,set_detail_id, suit
}){
    const {updateSuitBuildStep} = useContext(CommonContext)
    const [selectedWaistcoatLapel, set_selectedWaistcoatLapel] = useState(suit?.waistcoat_lapel)
    const {data, isLoading, isSuccess, isError, refetch, status} =  useGetSuitPartQuery("/api/suit/waistcoat-lapel/all/", "waistcoat-lapel")
    const lapels = isSuccess ?  data?.data : []
    
    useEffect(()=>{
        if(!selectedWaistcoatLapel && status =="success"){
            set_selectedWaistcoatLapel(lapels[0]?.id || {})
        } 
        const update_build_stages = (step_id, parts_list ,selectedPart_id) => {
            const selected_part = parts_list.find(part => part?.id == selectedPart_id)
            if(selected_part){
                set_pictures(selected_part?.pictures || [])
                set_detail_id(selected_part?.detail || null)
                updateSuitBuildStep(step_id, selected_part?.id)
            }
        }
        update_build_stages("waistcoat_lapel", lapels, selectedWaistcoatLapel)
    }, [lapels, selectedWaistcoatLapel, status])
    return(
            <div className="">
                <SubHeaderBeta className="text-lg sm:text-2xl 2xl:text-3xl ml-3">
                        <WalledTexts>
                        Select Waistcoat pattern.
                        </WalledTexts>
                    </SubHeaderBeta>
                    <ParaPrmBeta className="mt-2 mb-7 text-sm 2xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum tincidunt quam feugiat purus aliquet tellus.
                    </ParaPrmBeta>
                    <div className="w-full h-fit">
                        {
                            isLoading &&
                            <div className="w-full flex justify-center items-center">
                                <Spinner/>  
                            </div>
                        }
                        {
                            isSuccess && !isLoading &&
                            <div className="w-full grid grid-cols-1 gap-5 mt-10">
                                {
                                    lapels.map(lapel => {
                                        
                                    return   <TabBtn
                                    handleOnClick={ () => set_selectedWaistcoatLapel(lapel?.id)}
                                    title={lapel?.name}
                                    descr={lapel?.description}
                                    svg_url={BASE_URL + lapel?.icon}
                                    img_class="w-10 h-auto flex-none"
                                    classes={"w-full " +  
                                    ( selectedWaistcoatLapel == lapel?.id ? "bg-theme-gold/5 border-theme-gold" : "")}
                                 />
                                    })
                                }

                            </div>
                        }
                        {
                            isError &&
                            <p className="text-red-600 font-mono text-center text-sm px-5">
                                Oops! We couldn't fetch <br/> the lapels right now. 
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