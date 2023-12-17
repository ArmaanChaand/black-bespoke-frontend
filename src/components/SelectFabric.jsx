import { useEffect, useState } from "react";
import { useGetFabricsQuery } from "../queries/getFabricsQuery";
import SuitBuildWrapper from "./SuitBuildWrapper";
import { SelectBtn } from "./elements/Buttons";
import { Spinner } from "./elements/Loaders";
import { ParaSec } from "./elements/Paras";
import { SubHeader } from "./elements/StyledHeaders";
import { WalledTexts } from "./elements/WalledTexts";

const BASE_URL = import.meta.env.VITE_API_HOST

export function SelectFabric({}){
    const [selectedFabric, set_selectedFabric] = useState({})
    const {data, isLoading, isSuccess, isError} =  useGetFabricsQuery()
    const fabrics = isSuccess ?  data?.data : []
    useEffect(()=>{
        set_selectedFabric(fabrics[0] || {})
    }, [fabrics])
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
                                        const handleSelectFabric = () => {
                                            set_selectedFabric(fabric)
                                        }
                                    return  <SelectBtn
                                            handleSelectFabric={handleSelectFabric}
                                            key={fabric.id}
                                            src={BASE_URL + fabric.icon}
                                            text={fabric.name}
                                            isSelected={selectedFabric?.id == fabric?.id}
                                        />
                                    })
                                }

                            </div>
                        }
                    </div>

            </div>
    )
}