import { PrimaryBtnTwo } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { ParaPrmBeta } from "./elements/Paras";
import { SVGWrapper } from "./elements/SVGWrapper";
import { SubHeaderBeta } from "./elements/StyledHeaders";
import { VideoElm } from "./elements/Videos";

export function TheStoryHome() {
    return (
        <section className="w-screen h-fit my-16 2xl:my-20">
            <ContainerDiv classes="relative min-h-screen rounded-xl overflow-hidden">

                <VideoElm
                    src="/media/discussion.mov" type="video/mov"
                    className="static h-screen "
                    // md:aspect-[1920/1080] md:h-auto
                />
                <div className="absolute w-full h-full inset-0 z-10 flex flex-col justify-start text-center sm:items-start p-5 sm:p-10 2xl:p-16">
                    <h1
                        className="max-w-2xl text-3xl font-medium md:text-4xl xl:text-5xl 
                text-theme-white font-theme-petrona leading-none text-center sm:text-start"
                    >
                        Elite Craftsmanship <br /> meets  Cutting-edge <br /> Technology
                    </h1>
                    <PrimaryBtnTwo
                        className="w-fit mt-5 mx-auto sm:ml-0 "
                    >
                        Our Story
                    </PrimaryBtnTwo>
                    <div className="w-full flex flex-col justify-center items-center mt-auto glass_bg_two p-5 rounded-lg">
                        <SubHeaderBeta className="mb-5 sm:mb-8">
                            What makes us different
                        </SubHeaderBeta>
                        <div className="w-full grid grid-cols-2 grid-rows-2 sm:grid-rows-1 sm:grid-cols-4 gap-5">
                            <div className="w-full flex flex-col justify-center items-center p-4 gap-3 z-0">
                                <SVGWrapper svgName="FIT" classes="text-3xl w-8" />
                                <ParaPrmBeta className="text-center text-xs font-medium">
                                    Fit Guarantee
                                </ParaPrmBeta>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center p-4 gap-3
                            ">
                                <SVGWrapper svgName="DELIVERY" classes="text-3xl w-8" />
                                <ParaPrmBeta className="text-center text-xs font-medium">
                                    On Time Delivery
                                </ParaPrmBeta>
                            </div>
                            
                            <div className="flex w-full p-4 flex-col justify-center items-center gap-3 
                            ">
                                <SVGWrapper svgName="FABRIC" classes="text-3xl w-8" />
                                <ParaPrmBeta className="text-center text-xs font-medium">
                                    Best-in-class Fabric
                                </ParaPrmBeta>
                            </div>
                            
                            <div className="flex w-full p-4 flex-col justify-center items-center gap-3">
                                <SVGWrapper svgName="TAILOR" classes="text-3xl w-8" />
                                <ParaPrmBeta className="text-center text-xs font-medium">
                                    Doorstep Concierge
                                </ParaPrmBeta>
                            </div>
                        </div>
                    </div>
                </div>

            </ContainerDiv>
        </section>
    )
}