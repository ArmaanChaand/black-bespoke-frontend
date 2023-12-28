import { PrimaryBtnTwo, PrimaryLinkBtn } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { ImageElm } from "./elements/Images";
import { ParaPrmBeta } from "./elements/Paras";
import { LinedHeaderBeta } from "./elements/StyledHeaders";

export function TheProcessHome(){
    return(
        <section className="w-screen h-fit my-16 2xl:my-20 mb-72 sm:mb-16 2xl:mb-20 relative">
            <ContainerDiv classes="grid sm:grid-cols-2 gap-5">
                <div className="h-full 2xl:h-96 rounded-lg overflow-hidden 
                w-auto flex-1 flex-shrink-none">
                    <ImageElm
                        src="/media/the_process.png"
                        alt="The Process"
                        classes="absolute top-[90%] left-0 sm:static"
                    />
                </div>
                <div className="rounded-xl flex flex-col justify-between items-center pt-5 sm:py-10 px-5 sm:px-7 md:px-14 gap-5 2xl:px-24 
                flex-1 flex-shrink-none glass_bg w-full">
                    <LinedHeaderBeta className="px-3 sm:px-0">
                        The Process
                    </LinedHeaderBeta>
                    <ParaPrmBeta className="2xl:text-lg">
                    Buying a bespoke suit or dress shirt is an opportunity to tell a story. YOUR STORY. We’re here to guide you through every step of the process and create something truly timeless.
                    </ParaPrmBeta>
                    <PrimaryLinkBtn
                        to="/process/"
                        className="border-[0px] bg-transparent font-semibold sm:border-[1px] sm:bg-theme-gold/20 sm:font-medium hover:bg-transparent sm:hover:bg-theme-gold hover:text-theme-gold sm:hover:text-theme-black focus:ring-0 sm:focus:ring-2 active:scale-95 sm:active:scale-100"
                    >
                        Learn More
                    </PrimaryLinkBtn>

                </div>
            </ContainerDiv>
        </section>
    )
}