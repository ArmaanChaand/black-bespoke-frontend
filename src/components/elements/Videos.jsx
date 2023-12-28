import { twMerge } from "tailwind-merge";

export function VideoElm({src, type, className}){
    const get_video_type = () => {
        const split_array = src?.split(".")
        if(split_array?.length){
            const extenstion = split_array[split_array?.length - 1]
            return extenstion ? `video/${extenstion}` : "video/mp4"
        }
    }
    get_video_type()
    return (
        <video 
            className={twMerge(`w-full h-full inset-0 z-0 object-cover brightness-75 sm:brightness-50 scale-x-[-1] relative pointer-events-none`
            
            , className)} 
        loop autoPlay={true} muted={true} controls={false}
        src={src}>
        <source src={src} type={get_video_type()}/>
        Unsupported browser
        </video>
    )
}