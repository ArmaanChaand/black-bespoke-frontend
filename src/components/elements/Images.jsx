import { twMerge } from "tailwind-merge"
import useIsInView from "../../hooks/useInView"
import { useEffect, useState } from "react";

export default function ImageElm({src="", alt="", classes}){
    const [is_loaded, set_is_loaded] = useState(false)
    const [targetRef, isInView] = useIsInView();
    const tw_classes = `inline-block w-full h-full object-cover`
    useEffect(()=>{
        if(!is_loaded && isInView){
            set_is_loaded(true)
        }
    }, [isInView])
    return (
        <>
            <div ref={targetRef} className="w-0 h-0"></div>
            {is_loaded ? 
            <img 
                className={twMerge(tw_classes, classes)}
                src={src}
                alt={alt}  
                loading="lazy"          
            />
            :
            <div 
                className={twMerge(tw_classes, "bg-theme-black/10 backdrop-blur")}  
            />
            }
        </>
    )
}