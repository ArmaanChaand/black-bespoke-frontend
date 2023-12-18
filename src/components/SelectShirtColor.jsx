import { useContext, useEffect, useState } from "react";
import { SelectBtn, SelectColorBtn } from "./elements/Buttons";
import { Spinner } from "./elements/Loaders";
import { ParaSec } from "./elements/Paras";
import { SubHeader } from "./elements/StyledHeaders";
import { WalledTexts } from "./elements/WalledTexts";
import { useGetSuitPartQuery } from "../queries/getSuitPartQuery";
import { CommonContext } from "../contexts/CommonContexts";

const BASE_URL = import.meta.env.VITE_API_HOST

export function SelectShirtColor({
    set_pictures,set_detail_id,
}){
    const [selectedShirtColor, set_selectedShirtColor] = useState(null)
    const {updateSuitBuildStep} = useContext(CommonContext)
    const {data, isLoading, isSuccess, isError, refetch, status} =  useGetSuitPartQuery("/api/suit/shirt-color/all/", "shirt-color")
    const shirt_colors = isSuccess ?  data?.data : []
    useEffect(()=>{
        if(!selectedShirtColor && status =="success"){
            set_selectedShirtColor(shirt_colors[0] || {})
        } 
        
        set_pictures(selectedShirtColor?.pictures || [])
        set_detail_id(selectedShirtColor?.detail || null)
        updateSuitBuildStep("shirt_color", selectedShirtColor?.id)
    }, [shirt_colors, selectedShirtColor, status])
    return(
            <div className="">
                <SubHeader classes="text-lg sm:text-xl 2xl:text-2xl ml-3">
                        <WalledTexts>
                        Pick your shirt colour.
                        </WalledTexts>
                    </SubHeader>
                    <ParaSec classes="mt-2 mb-7">
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
                            <div className="w-full grid grid-cols-2 gap-5">
                                {
                                    shirt_colors.map(shirt => {
                                        console.log(shirt)
                                    return  <SelectColorBtn
                                            handleSelectFabric={ () => set_selectedShirtColor(shirt)}
                                            key={shirt.id}
                                            color={shirt.color}
                                            text={shirt.name}
                                            isSelected={selectedShirtColor?.id == shirt?.id}
                                        />
                                    })
                                }
                            <SelectColorBtn
                                handleSelectFabric={ () => set_selectedShirtColor("no-shirt")}
                                className="text-center gap-1"
                                color={null}
                                text="No Shirt"
                                span_class="hidden"
                                para="I already have a shirt and don't want Black Bespoke to include another shirt."
                                isSelected={selectedShirtColor == "no-shirt"}
                            />
                            </div>
                        }
                        {
                            isError &&
                            <p className="text-red-600 font-mono text-center text-sm px-5">
                                Oops! We couldn't fetch <br/> the shirt colors right now. 
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