import { PrimaryBtnTwo } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { ParaPrmBeta } from "./elements/Paras";
import { SVGWrapper } from "./elements/SVGWrapper";
import { SubHeader, SubHeaderBeta } from "./elements/StyledHeaders";

export function TheStoryHome(){
    return(
        <section className="w-screen h-fit my-16">
            <ContainerDiv classes="relative h-screen flex flex-col justify-start items-start p-10 rounded-xl overflow-hidden">
                <video className="absolute w-full h-full inset-0 z-0 object-cover  brightness-50 scale-x-[-1]" loop autoPlay={true} muted={true} src="/media/discussion.mov">
                <source src="/media/discussion.mov" type="video/mp4"/>
                </video>
                <h1 
                className="max-w-2xl text-3xl font-medium md:text-4xl xl:text-5xl 
                text-theme-white font-theme-petrona leading-none z-10"
                >
                Elite Craftsmanship <br/> meets  Cutting-edge <br/> Technology  
                </h1>
                <PrimaryBtnTwo
                    className="z-10 mt-5"
                >
                Our Story
                </PrimaryBtnTwo>
                <div className="w-full flex flex-col justify-center items-center z-10 mt-auto glass_bg_two p-5 rounded-lg">
                    <SubHeaderBeta className="">
                    What makes us different 
                    </SubHeaderBeta>
                    <div className="flex justify-center items-center w-full">
                        <div className="w-full flex flex-col justify-center items-center gap-3">
                            <SVGWrapper svgName="FIT" classes="text-3xl w-8"/>
                            <ParaPrmBeta classes="text-center text-xs font-medium">
                            Free alteration
                            </ParaPrmBeta>
                        </div>
                        <div className="h-16 w-0.5 bg-theme-gold rounded-sm mx-3"></div>
                        <div className="w-full flex flex-col justify-center items-center gap-3">
                            <SVGWrapper svgName="DELIVERY" classes="text-3xl w-8" />
                            <ParaPrmBeta classes="text-center text-xs font-medium">
                            12days delivery
                            </ParaPrmBeta>
                        </div>
                        <div className="h-16 w-0.5 bg-theme-gold rounded-sm mx-3"></div>
                        <div className="flex w-full flex-col justify-center items-center gap-3">                        
                            <SVGWrapper svgName="SHIPPING" classes="text-3xl w-8" />
                            <ParaPrmBeta classes="text-center text-xs font-medium">
                            Free shipping
                            </ParaPrmBeta>
                        </div>
            </div>
                </div>
            </ContainerDiv>
        </section>
    )
}