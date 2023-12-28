import { lazy } from "react";
import "../../css/components.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { LinedHeaderBeta } from "../../components/elements/StyledHeaders";
import { ParaPrmBeta } from "../../components/elements/Paras";
import { ContainerDiv } from "../../components/elements/Container";
const ProcessVideoSection = lazy(()=>import("../../components/ProcessVideoSection"))


export default function OurProcess(){
   
    return (
        <>
        <Header/>
        <div className="min-h-screen flex flex-col justify-start text-center items-center gap-16">
            <ContainerDiv className="w-fit">
                <LinedHeaderBeta className="text-3xl sm:text-5xl 2xl:text-6xl  w-10/12 pt-44 mx-auto mb-5 ">
                The Process
                </LinedHeaderBeta>
                <ParaPrmBeta className="2xl:text-lg">
                We’re going to help you find the right fabric, details, and fit for your body type
                </ParaPrmBeta>
            </ContainerDiv>
            <div className="w-full flex flex-col justify-center items-center">
                <ProcessVideoSection
                    serial="01"
                    title="Fabric Selection"
                    content="Firstly, we’ll discuss where and how the clothing will be worn to help us select the best fabric bunches for whatever you wish to have made."
                    video_src="/media/fabrics.mov"
                />
                <section className="w-full flex flex-row-reverse">
                    <div className="flex-1 flex-shrink-0">

                    </div>
                    <div className="bg-theme-gold aspect-[3/2] w-full flex-1 flex-shrink-0"></div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
      
    )
}