import { useState } from "react";
import { SuitPartGallery } from "./SuitPartGallery";
import { PrimaryBtn, SecondaryBtn } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { ParaSec } from "./elements/Paras";
import { SVGWrapper } from "./elements/SVGWrapper";
import { SuitBuildStep } from "./elements/Steps";
import { SubHeader } from "./elements/StyledHeaders";
import { DetailOne } from "./elements/SuitPartDetails";
import { WalledTexts } from "./elements/WalledTexts";
import { twMerge } from "tailwind-merge";

export default function SuitBuildWrapper({
    next_text="NEXT", back_text="PREVIOUS", pictures, children
}){
    const [show_detail, set_show_detail] = useState(false)

    const steps = (<ul className="mx-auto w-fit grid grid-cols-5 md:grid-cols-1 gap-2">
    <SuitBuildStep
        step="Select Fabric"
        src="/media/fabric.svg"
        status="COMPLETED"
        />
    <SuitBuildStep
        step="Select Blazer Pattern"
        src="/media/blazer.svg"
        status="ACTIVE"
    />
    <SuitBuildStep
        step="Select Waistcoat"
        src="/media/waistcoat.svg"
    />
    <SuitBuildStep
        step="Select Pant Style"
        src="/media/pant.svg"
    />
    <SuitBuildStep
        step="Select Shirt Color"
        src="/media/shirt.svg"
    />

   </ul>)

    return(
        <section className="w-screen min-h-screen pt-20 md:pt-24 overflow-x-hidden">
            <ContainerDiv classes="h-full flex flex-col md:flex-row justify-start sm:justify-center items-stretch gap-10  pb-32 ">
               <div className="w-full h-fit sm:h-full">
                    <SubHeader classes="text-xl sm:text-2xl ml-3">
                        <WalledTexts/>
                            Build Your Suit
                    </SubHeader>
                    <div className="mt-5 w-fit mx-auto md:hidden">
                        {steps}
                    </div>
                    <ParaSec classes="hidden sm:block mt-2">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum tincidunt quam feugiat purus aliquet tellus.
                    </ParaSec>
                    <div className="w-full h-auto aspect-video rounded-sm overflow-hidden mt-7">
                        <SuitPartGallery
                            pictures={pictures}
                        />
                    </div>
                </div>
               <div className="w-full md:w-96 2xl:w-1/3 flex-none h-fit verflow-hidden ">
                {children}
               </div>
               <div className="hidden md:block my-auto">
                    {steps}
               </div>
            </ContainerDiv>
            <div 
                className="w-full fixed bottom-0 flex-none h-24 transition-all py-3 bg-theme-gradient-grey z-40"
                style={{height: show_detail ? "12rem" : null}}
            >
                <ContainerDiv 
                    classes="h-full flex justify-between items-center gap-3 sm:gap-5"
                    style={{ alignItems: show_detail? "start": null}}
                >
                        <button 
                            className="inline-block text-theme-white font-theme-gilroy text-sm w-40 text-start relative "
                            disabled={window.innerWidth > 768}
                            onClick={()=>set_show_detail(prev => !prev)}
                        >
                        Bright Blue In Plain-Weave Wool
                        <br/>
                        $ 1,156
                        <SVGWrapper
                            svgName="ANGLE_LEFT"
                            classes={
                                twMerge("stroke-theme-gold fill-transparent w-4 h-5 ml-2 absolute -right-1 top-0 md:hidden transition-all", (show_detail ? "rotate-90" : "-rotate-90"))
                            }
                        />
                        </button>
                        <div className="w-full md:w-fit left-0 px-2 md:px-0 top-24 absolute md:static flex flex-row justify-center items-center gap-4 md:gap-7">
                            <DetailOne
                                src="/media/composition.svg"
                                detail_name="Composition"                                
                                detail="100% wool"
                            />
                            <DetailOne
                                src="/media/season.svg"
                                detail_name="Season"                                
                                detail="four seasons"
                            />
                            <DetailOne
                                src="/media/fineness.svg"
                                detail_name="Fineness"                                
                                detail="130’s"
                            />
                            <DetailOne
                                src="/media/weight.svg"
                                detail_name="Weight"                                
                                detail="240/250 gr/m"
                            />
                        </div>
                    <div className="w-fit flex flex-row justify-between items-center gap-1">
                        <SecondaryBtn
                            // handleOnClick={back_fn}
                            classes={"py-[0.57rem] text-xs md:text-sm"}
                        >
                            <span>{back_text}</span>
                        </SecondaryBtn>
                        <PrimaryBtn
                            // handleOnClick={next_fn}
                            classes={"text-xs md:text-sm"}
                            // disabled={next_disabled}
                        >
                            <span>{next_text}</span>
                            <SVGWrapper 
                                classes="stroke-theme-gold fill-transparent w-4 h-5 ml-2 "
                                svgName="ANGLE_RIGHT"
                            />
                        </PrimaryBtn>
                    </div>
                </ContainerDiv>
            </div>
        </section>
    )
}