import { twMerge } from "tailwind-merge";
import { ParaPrmBeta } from "./elements/Paras";
import { LinedHeaderH4 } from "./elements/StyledHeaders";
import { VideoElm } from "./elements/Videos";

export default function ProcessVideoSection({className, serial, title, content, video_src, video_type}){

    return(
        <section className={twMerge("w-full flex flex-col-reverse sm:flex-row mb-10 sm:mb-0", className)}>
            <div className="flex-1 flex-shrink-0 flex justify-center items-center">
                    <div className="z-10 -mt-10 sm:mt-0 w-11/12 md:w-11/12 md900:w-10/12 lg:w-2/3 h-fit glass_bg rounded-xl p-5 sm:p-10 2xl:-16">
                        <LinedHeaderH4
                            rightLineClasses="hidden"
                            className="font-medium"
                        >
                        <span className="font-bold text-theme-gold mr-3" >{serial}</span>
                        {title}
                        </LinedHeaderH4>
                        <ParaPrmBeta className="text-start mt-5 lg:mt-8 2xl:mt-10">
                        {content}
                        </ParaPrmBeta>
                    </div>
            </div>
            <div className="aspect-[3/2] w-full flex-1 flex-shrink-0 bg-theme-black/50">
                <VideoElm
                    src={video_src}
                    type={video_type}
                    className="brightness-75"
                />
            </div>
        </section>
    )
}