import { useContext, useEffect, useState } from "react";
import { TabBtn } from "./elements/Buttons";
import { Spinner } from "./elements/Loaders";
import { ParaSec } from "./elements/Paras";
import { SubHeader } from "./elements/StyledHeaders";
import { WalledTexts } from "./elements/WalledTexts";
import { useGetSuitPartQuery } from "../queries/getSuitPartQuery";
import { CommonContext } from "../contexts/CommonContexts";

const BASE_URL = import.meta.env.VITE_API_HOST

export function SelectWaistcoatLapel({
    set_pictures,set_detail_id
}){
    const {updateSuitBuildStep} = useContext(CommonContext)
    const [selectedWaistcoatLapel, set_selectedWaistcoatLapel] = useState(null)
    const {data, isLoading, isSuccess, isError, refetch, status} =  useGetSuitPartQuery("/api/suit/waistcoat-lapel/all/", "waistcoat-lapel")
    const lapels = isSuccess ?  data?.data : []
    
    useEffect(()=>{
        if(!selectedWaistcoatLapel && status =="success"){
            set_selectedWaistcoatLapel(lapels[0] || {})
        } 
        
        set_pictures(selectedWaistcoatLapel?.pictures || [])
        set_detail_id(selectedWaistcoatLapel?.detail || null)
        updateSuitBuildStep("waistcoat_lapel", selectedWaistcoatLapel?.id)
    }, [lapels, selectedWaistcoatLapel, status])
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
                                    lapels.map(lapel => {
                                        
                                    return   <TabBtn
                                    handleOnClick={ () => set_selectedWaistcoatLapel(lapel)}
                                    title={lapel?.name}
                                    descr={lapel?.description}
                                    svg_url={BASE_URL + lapel?.icon}
                                    img_class="w-10 h-auto flex-none"
                                    classes={"w-full " +  
                                    ( selectedWaistcoatLapel?.id == lapel?.id ? "bg-theme-gold/5 border-theme-gold" : "")}
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