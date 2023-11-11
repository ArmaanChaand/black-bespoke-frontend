import "../css/components.css";
import { LinedHeader } from "./elements/StyledHeaders";
import { PrimaryBtn } from "./elements/Buttons";
import { ParaPrm } from "./elements/Paras";
import { ShowcaseBlock } from "./sub_components.jsx/ShowcaseBlocks";
export default function OurProcessHome(){

    return (
        <>
        <section className="w-screen bg-theme-black px-8 sm:px-16 py-10 sm:pt-16 text-theme-white flex flex-col justify-center items-center gap-5">
            <LinedHeader 
                classes="mr-auto"
                rightLineClasses="hidden"
            >
                Our Process
            </LinedHeader>
            <ParaPrm
            classes="text-center text-xs sm:text-sm mr-auto ml-0"
            >
            Lorem ipsum dolor sit amet consectetur. Id et dictum curabitur .
            </ParaPrm>
            <div className="w-fit mx-auto flex flex-row justify-start gap-10 items-center flex-wrap">
              <ShowcaseBlock
                heading={<>Schedule An <br/> Appointment</>}
                para={<>Ready to get started? Make an appointment here or call us at 970-231-4588 to find a spot on our calendar.</>}
                imgSrc="https://www.figma.com/file/aWu16l1ZsFvh0yRAmGR1PA/image/d5835bf2da782561aec0f4e75ea410988d2df591"
              />
              <ShowcaseBlock
                heading={<>We Take Measurements & <br/> Help In Fabric Selection</>}
                para={<>At your appointment we will learn about your needs, take your measurements, and guide you to a great looking fabric and fit.</>}
                imgSrc="https://www.figma.com/file/aWu16l1ZsFvh0yRAmGR1PA/image/0b0c1ac85e19223d2257d65935bdb250f07bacd7"
              />
              <ShowcaseBlock
                heading={<>Personally Delivered & <br/> Fitting Check</>}
                para={<>In about 6 - 8 weeks, we'll personally deliver your order to ensure a perfect fit. Your clothes aren’t right until you say they are.</>}
                imgSrc="https://www.figma.com/file/aWu16l1ZsFvh0yRAmGR1PA/image/57057e73ea9dfe8e6162d1c423ab8e627552c5bc"
              />
            </div>
            <PrimaryBtn extraClasses="mt-5">
                KNOW MORE
            </PrimaryBtn>
        </section>  
        <section className="mt-10 w-screen px-5 sm400:px-8 sm500:px-14 sm:px-0 py-10 sm:py-16 min-h-96 ">
            
        </section>
        </>
    )
}