import { ImageElm } from "../elements/Images";
import { ParaSec } from "../elements/Paras";
import { SubHeader } from "../elements/StyledHeaders";
import { WalledTexts } from "../elements/WalledTexts";

export function ShowcaseBlock({heading, para, imgSrc, imgAlt}){
    return (
        <div className="w-full sm400:w-80 h-fit">
            <div className=" w-full aspect-[3/4]">
                <ImageElm
                    src={imgSrc}
                    alt={imgAlt ? imgAlt : heading}
                />
            </div>
            <SubHeader classes="ml-3 mr-auto mt-5 text-base sm:text-lg ">
                <WalledTexts>
                {heading}
                </WalledTexts>
            </SubHeader>
            <ParaSec classes="mt-3 text-xs">
                {para}
            </ParaSec>
        </div>
    )
}