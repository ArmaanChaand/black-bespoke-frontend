import { lazy } from "react";
import "../../css/components.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { LinedHeaderBeta } from "../../components/elements/StyledHeaders";
import { ParaPrmBeta } from "../../components/elements/Paras";
import { ContainerDiv } from "../../components/elements/Container";
import { FullSVGLogo } from "../../assets/Logos";
const ProcessVideoSection = lazy(()=>import("../../components/ProcessVideoSection"))


export default function OurProcess(){
   
    return (
        <>
        <Header>
        <FullSVGLogo/>
        </Header>
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
                <ProcessVideoSection
                    className="flex-column-reverse sm:flex-row-reverse"
                    serial="02"
                    title="Measurements"
                    content="Next, we’ll take your measurements. Approximately 35 measures and figuration notes are accounted for by the end of the entire process."
                    video_src="/media/measurements.mov"
                />
                <ProcessVideoSection
                    serial="03"
                    title="Pattern Creation"
                    content="Using all of the information gathered, a unique personal paper pattern is then constructed by your cutter. One cutter is dedicated to each individual customer and is responsible for overseeing the entire making process, from the initial consultation to the delivery of the finished garments. Your own highly skilled cutter will work closely with his or her specialist coat maker, trouser maker and waistcoat maker to create exactly what each customer might desire."
                    // video_src="/media/fabrics.mov"
                />
                <ProcessVideoSection
                    className="flex-column-reverse sm:flex-row-reverse"
                    serial="04"
                    title="Shearing"
                    content="Once all parts of the paper pattern are complete, they’re laid onto the cloth you chose, then drawn around using tailoring chalk. Cutting along these chalk lines using large tailoring shears, we create the individual panels of each garment. At this stage all the internal canvases, lining and other components such as fixings and fasteners are selected and ‘bundled’ together in the cutting room."
                    // video_src="/media/measurements.mov"
                />
                <ProcessVideoSection
                    serial="05"
                    title="Baste Fitting"
                    content="This ‘bundle’ is now ready for one of our specialist in-house tailors to sew together for what is known as a ‘baste fitting’. Here, you’ll try the garments on. This enables your cutter to analyse the fit, balance, size and shape, based on the original measures taken for the construction of paper pattern. All parts of this process are discussed to help you get a sense of how the clothes are going to look once the agreed alterations have been made."
                    // video_src="/media/fabrics.mov"
                />
                <ProcessVideoSection
                    className="flex-column-reverse sm:flex-row-reverse"
                    serial="06"
                    title="Hand Stitching"
                    content="Once you’ve had your baste fitting, the final stages of hand-stitching can take place, including handmade button holes. Your bespoke clothing is then given a final hand-press before the buttons are sewn on by hand."
                    // video_src="/media/measurements.mov"
                />
                <ProcessVideoSection
                    serial="07"
                    title="Order Ready"
                    content="Finally, your bespoke order is now complete and ready for delivery to an address of your choosing. And, we have an exact two-dimensional pattern unique to you, that can be used in the future to create new clothing or can be adjusted for future orders."
                    // video_src="/media/fabrics.mov"
                />
            </div>
        </div>
        <Footer/>
        </>
      
    )
}