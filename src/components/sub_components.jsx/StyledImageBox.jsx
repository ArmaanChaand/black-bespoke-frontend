import { ImageElm } from "../elements/Images";
import { ParaSec } from "../elements/Paras";
import { LinedHeader } from "../elements/StyledHeaders";
import { WalledTexts } from "../elements/WalledTexts";

export function StyledImageBox({serialNum, heading, para, imgSrc, imgAlt}){
    return (
        <div className="relative group w-64 sm400:w-72 h-fit flex flex-col justify-between items-center overflow-hidden">
            <div className="h-12 sm:h-16 overflow-hidden sm:group-hover:translate-y-28 sm:group-hover:-rotate-90 z-20 transition-all sm:group-hover:translate-x-5">

            <LinedHeader
                classes="font-theme-cirka font-medium"
                rightLineClasses="hidden"
                leftLineClasses="w-16"
            >
                {serialNum}
            </LinedHeader>
            </div>
            <div className="w-full aspect-[3/4] overflow-hidden relative before:absolute before:w-full before:h-full before:inset-0 before:z-10 before:bg-theme-black/0 sm:group-hover:before:bg-theme-black/50 transition-all">
                <ImageElm
                    src={imgSrc}
                    alt={imgAlt ? imgAlt : heading}
                />
            </div>
            <h3 className="font-theme-cirka text-xl mr-auto ml-3 sm:ml-auto sm:text-4xl flex justify-center items-center h-12 sm:h-16 
            transition-all sm:group-hover:-translate-y-28 sm:group-hover:ml-5 z-20">
                <WalledTexts
                 classes="sm:before:bg-transparent sm:mt-auto"
                >
                    {heading}
                </WalledTexts>
            </h3>
            <ParaSec
             classes="text-xs sm:text-sm sm:absolute sm:top-1/2 sm:-translate-y-1/3 sm:z-20 sm:px-5 transition-all sm:opacity-0 sm:group-hover:opacity-100"
            >
            {para}
            </ParaSec>
        </div>
    )
}