import { useEffect, useState } from "react";

import { ParaSec } from "./elements/Paras";
import { SubHeader } from "./elements/StyledHeaders";
import { WalledTexts } from "./elements/WalledTexts";

const BASE_URL = import.meta.env.VITE_API_HOST

export function Monogram({
    set_pictures,set_detail_id,
}){
    const [monogram, set_monogram] = useState(null)
  
    useEffect(()=>{
        set_pictures([15])
    }, [])
    return(
            <div className="">
                <SubHeader classes="text-lg sm:text-xl 2xl:text-2xl ml-3">
                        <WalledTexts>
                        Free Monogramming (Optional)
                        </WalledTexts>
                    </SubHeader>
                    <ParaSec classes="mt-2 mb-7">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum tincidunt quam feugiat purus aliquet tellus.
                    </ParaSec>
                    <div className="w-full h-fit">
                        
                    </div>

            </div>
    )
}