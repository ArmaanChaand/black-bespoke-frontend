import { useContext, useEffect, useState } from "react";
import { TabBtn } from "./elements/Buttons";
import { Spinner } from "./elements/Loaders";
import { ParaSec } from "./elements/Paras";
import { SubHeader } from "./elements/StyledHeaders";
import { WalledTexts } from "./elements/WalledTexts";
import { useGetSuitPartQuery } from "../queries/getSuitPartQuery";
import { CommonContext } from "../contexts/CommonContexts";

const BASE_URL = import.meta.env.VITE_API_HOST

export function SelectWaistcoatPattern({
    set_pictures,set_detail_id
}){
    const {updateSuitBuildStep} = useContext(CommonContext)
    const [selectedWaistcoat, set_selectedWaistcoat] = useState(null)
    const {data, isLoading, isSuccess, isError, refetch, status} =  useGetSuitPartQuery("/api/suit/waistcoat-pattern/all/", "waistcoat-pattern")
    const waistcoats = isSuccess ?  data?.data : []
    
    useEffect(()=>{
        if(!selectedWaistcoat && status =="success"){
            set_selectedWaistcoat(waistcoats[0] || {})
        } 
        
        set_pictures(selectedWaistcoat?.pictures || [])
        set_detail_id(selectedWaistcoat?.detail || null)
        updateSuitBuildStep("waistcoat_pattern", selectedWaistcoat?.id)
    }, [waistcoats, selectedWaistcoat, status])
    return(
            <div className="">
                <SubHeader classes="text-lg sm:text-xl 2xl:text-2xl ml-3">
                        <WalledTexts>
                        Select Waistcoat pattern.
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
                            <div className="w-full grid grid-cols-1 gap-5 mt-10">
                                {
                                    waistcoats.map(waistcoat => {
                                        
                                    return   <TabBtn
                                    handleOnClick={ () => set_selectedWaistcoat(waistcoat)}
                                    title={waistcoat?.name}
                                    descr={waistcoat?.description}
                                    svg_url={BASE_URL + waistcoat?.icon}
                                    img_class="w-10 h-auto flex-none"
                                    classes={"w-full " +  
                                    ( selectedWaistcoat?.id == waistcoat?.id ? "bg-theme-gold/5 border-theme-gold" : "")}
                                 />
                                    })
                                }
                                <TabBtn
                                    handleOnClick={ () => set_selectedWaistcoat("no-waistcoat")}
                                    title="No Waistcoat"
                                    descr="I already have a waistcoat and don't want Black Bespoke to include another waistcoat."
                                    img_class="hidden"
                                    text_class="text-center items-center w-10/12 mx-auto"
                                    classes={"w-full " +  
                                    ( selectedWaistcoat == "no-waistcoat" ? "bg-theme-gold/5 border-theme-gold" : "")}
                                 />

                            </div>
                        }
                        {
                            isError &&
                            <p className="text-red-600 font-mono text-center text-sm px-5">
                                Oops! We couldn't fetch <br/> the waistcoats right now. 
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