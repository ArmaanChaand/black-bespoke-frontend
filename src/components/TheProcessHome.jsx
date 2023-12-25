import { PrimaryBtnTwo } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { ImageElm } from "./elements/Images";
import { ParaPrm } from "./elements/Paras";
import { LinedHeaderBeta } from "./elements/StyledHeaders";

export function TheProcessHome(){
    return(
        <section className="w-screen h-fit my-16">
            <ContainerDiv classes="grid grid-cols-2 gap-5">
                <div className="h-72 rounded-lg overflow-hidden">
                    <ImageElm
                        src="/media/the_process.png"
                        alt="The Process"
                    />
                </div>
                <div className="rounded-lg flex flex-col justify-between items-center px-5 py-8 glass_bg">
                    <LinedHeaderBeta>
                        The Process
                    </LinedHeaderBeta>
                    <ParaPrm classes="font-theme-mulish text-center">
                    Buying a bespoke suit or dress shirt is an opportunity to tell a story. YOUR STORY. We’re here to guide you through every step of the process and create something truly timeless.
                    </ParaPrm>
                    <PrimaryBtnTwo>
                        Learn More
                    </PrimaryBtnTwo>

                </div>
            </ContainerDiv>
        </section>
    )
}