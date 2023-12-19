import { useEffect, useState } from "react";

import { ParaSec } from "./elements/Paras";
import { SubHeader } from "./elements/StyledHeaders";
import { WalledTexts } from "./elements/WalledTexts";
import { TextInput } from "./elements/Inputs";

export function Monogram({
    set_pictures,set_detail_id,
}){
    const [monogram, set_monogram] = useState('')
    const [deferred_monogram, set_deferred_monogram] = useState('')
    
    useEffect(()=>{
        // # Note: Intentionally passing array with a false at index=0
        set_pictures([false])
    }, [])
   

    useEffect(()=>{
        const value_when_user_stop = setTimeout(()=>{
            set_deferred_monogram(monogram)
        }, 1000)
        return ()=> clearTimeout(value_when_user_stop)
    }, [monogram])
    useEffect(()=>{
        
    }, [deferred_monogram])
    
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
                        <TextInput
                            label="Monogram"
                            type="text"
                            id="id_monogram_text"
                            name="monogram_text"
                            placeholder="Your monogram here"
                            value={monogram}
                            onChange={(e)=>set_monogram(e.target.value)}
                        />
                    </div>

            </div>
    )
}