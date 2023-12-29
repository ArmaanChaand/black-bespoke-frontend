import { useContext, useEffect, useState } from "react";
import { SelectBtn } from "../elements/Buttons";
import { Spinner } from "../elements/Loaders";
import { ParaSec } from "../elements/Paras";
import { SubHeader } from "../elements/StyledHeaders";
import { WalledTexts } from "../elements/WalledTexts";
import { useGetSuitPartQuery } from "../../queries/getSuitPartQuery";
import { CommonContext } from "../../contexts/CommonContexts";

const BASE_URL = import.meta.env.VITE_API_HOST

export default function SelectFabric({
    set_pictures,set_detail_id,suit
}){
    const [selectedFabric, set_selectedFabric] = useState(suit?.fabric)
    const {updateSuitBuildStep, appointment} = useContext(CommonContext)
    const {data, isLoading, isSuccess, isError, refetch, status} =  useGetSuitPartQuery("/api/suit/fabric/all/", "fabric")
    const fabrics = isSuccess ?  data?.data : []
    useEffect(()=>{
        if(!selectedFabric && status =="success"){
            set_selectedFabric(fabrics[0]?.id || {})
        } 
        const update_build_stages = (step_id, parts_list ,selectedPart_id) => {
            const selected_part = parts_list.find(part => part?.id == selectedPart_id)
            if(selected_part){
                set_pictures(selected_part?.pictures || [])
                set_detail_id(selected_part?.detail || null)
                updateSuitBuildStep(step_id, selected_part?.id)
            }
        }
        
        update_build_stages("fabric", fabrics ,selectedFabric)
    }, [fabrics, selectedFabric, status])


    return(
            <div className="">
                <SubHeader classes="text-lg sm:text-xl 2xl:text-2xl ml-3">
                        <WalledTexts>
                        Select a fabric to customize your suit
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
                                    fabrics.map(fabric => {
                                    return  <SelectBtn
                                            handleSelectFabric={ () => set_selectedFabric(fabric?.id)}
                                            key={fabric.id}
                                            src={BASE_URL + fabric.icon}
                                            text={fabric.name}
                                            isSelected={selectedFabric == fabric?.id}
                                        />
                                    })
                                }

                            </div>
                        }
                        {
                            isError &&
                            <p className="text-red-600 font-mono text-center text-sm px-5">
                                Oops! We couldn't fetch <br/> the fabrics right now. 
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