import { twMerge } from "tailwind-merge";
import useIsInView from "../../hooks/useInView";
import { useEffect, useState } from "react";

export default function VideoElm({src, type, className}){
    const [targetRef, isInView] = useIsInView();
    const [is_loaded, set_is_loaded] = useState(false);
    const get_video_type = () => {
        if(type) return type
        const split_array = src?.split(".")
        if(split_array?.length){
            const extenstion = split_array[split_array?.length - 1]
            return extenstion ? `video/${extenstion}` : "video/mp4"
        }
    }
    useEffect(()=>{
       if(isInView && !is_loaded){
        set_is_loaded(true)
       }
    }, [isInView])
    return (
        <>
            <div
                ref={targetRef} 
                className="w-0 h-0 overflow-hidden">
                Video Playing
            </div>
            {
                is_loaded ?
                <video 
            
                    className={twMerge(`w-full h-full inset-0 z-0 object-cover brightness-75 sm:brightness-50 scale-x-[-1] relative pointer-events-none`
                    
                    , className)} 
                loop autoPlay={true} muted={true} controls={false}
                src={src}>
                <source src={src} type={get_video_type()}/>
                Unsupported browser
                </video>
                :
                <div 
                className={twMerge("w-full h-full bg-theme-black/10 backdrop-blur", className)}  
            />
            }
            {

            }
        </>
    )
}