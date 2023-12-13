import { PrimaryBtn, SecondaryBtn } from "../../components/elements/Buttons";
import { ContainerDiv } from "../../components/elements/Container";
import { ParaSec } from "../../components/elements/Paras";
import { SVGWrapper } from "../../components/elements/SVGWrapper";
import { SuitBuildStep } from "../../components/elements/Steps";
import { SubHeader } from "../../components/elements/StyledHeaders";
import { DetailOne } from "../../components/elements/SuitPartDetails";
import { WalledTexts } from "../../components/elements/WalledTexts";

export default function SuitBuild({next_text="NEXT", back_text="PREVIOUS"}){
    return(
        <section className="w-screen h-screen">
            <ContainerDiv classes="h-full flex justify-center items-stretch pt-24 pb-10 gap-10">
               <div className="w-full h-full ">
                <SubHeader classes="text-xl sm:text-2xl ml-3">
                    <WalledTexts>
                        Build Your Suit
                    </WalledTexts>
                </SubHeader>
                <ParaSec classes="mt-2 mb-7">
                Lorem ipsum dolor sit amet consectetur. Vestibulum tincidunt quam feugiat purus aliquet tellus.
                </ParaSec>
                <div className="w-full h-auto aspect-video bg-theme-gradient-grey rounded-sm">

                </div>
               </div>
               <div className="w-96 h-fit flex-none overflow-hidden ">
               <SubHeader classes="text-lg sm:text-xl 2xl:text-2xl ml-3">
                    <WalledTexts>
                    Select a fabric to customize your suit
                    </WalledTexts>
                </SubHeader>
                <ParaSec classes="mt-2 mb-7">
                Lorem ipsum dolor sit amet consectetur. Vestibulum tincidunt quam feugiat purus aliquet tellus.
                </ParaSec>
                <div className="bg-theme-grey w-full h-96">

                </div>
               </div>
               <ul className="grid grid-rows-5 my-auto gap-2">
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

               </ul>
            </ContainerDiv>
            <div className="w-full sticky bottom-0 flex-none h-fit py-3 bg-theme-gradient-grey z-40">
                <ContainerDiv classes="h-full flex justify-between items-center gap-5">
                        <ParaSec classes=" w-40 text-start ">
                        Bright Blue In Plain-Weave Wool
                        <br/>
                        $ 1,156
                        </ParaSec>
                        <div className="flex flex-row justify-center items-center gap-7">
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
                    <div className="w-fit flex flex-row justify-between items-center">
                        <SecondaryBtn
                            // handleOnClick={back_fn}
                            // classes={back_classes}
                        >
                            <span>{back_text}</span>
                        </SecondaryBtn>
                        <PrimaryBtn
                            // handleOnClick={next_fn}
                            // classes={next_classes}
                            // disabled={next_disabled}
                        >
                            <span>{next_text}</span>
                            <SVGWrapper 
                                classes="stroke-theme-gold fill-transparent w-4 h-5 ml-2"
                                svgName="ANGLE_RIGHT"
                            />
                        </PrimaryBtn>
                    </div>
                </ContainerDiv>
            </div>
        </section>
    )
}