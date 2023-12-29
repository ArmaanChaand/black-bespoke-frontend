import { Suspense, lazy } from "react";
import { ParaPrmBeta } from "./elements/Paras";
import { PrimaryBtnTwo } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { Link } from "react-router-dom";
import { FullSVGLogo } from "../assets/Logos";
const VideoElm  = lazy(()=>import("./elements/Videos"))

export default function HeroBeta({heading, description, cta_text, cta_fun, video_src}){
    return (
        <section className="bg-transparent w-screen h-[500px] sm:h-fit relative">
          <div className="relative after:sm:hidden after:absolute after:w-full after:h-1/2 after:bg-transparent 
          after:-bottom-1/4 after: after:bg-gradient-to-t after:from-theme-black/10 after:via-theme-black after:to-theme-black/10 ">
             <Suspense fallback={<div>Loading ...</div>}>
                <VideoElm
                  src={video_src}
                  className="static h-96 sm:h-screen z-0
                  "
                />
              </Suspense>
          </div>
          <div className="absolute z-20 w-full h-full inset-0">
            <ContainerDiv
              classes="flex justify-center items-center h-full  inset-0 "
            >
              <div className="mt-auto sm:mt-0 sm:mr-auto place-self-center lg:col-span-7 flex flex-col justify-end sm:justify-start  items-center sm:items-start">
              <Link href="https://blackbespoke.netlify.app/" className="fixed top-0 left-1/2 py-5 sm:py-0 -translate-x-1/2 sm:translate-x-0 sm:static flex items-center">
                <FullSVGLogo/>
              </Link>
                <h1 
                  className="max-w-2xl text-4xl font-medium md:text-5xl xl:text-6xl 
                  text-theme-white font-theme-petrona leading-none mb-8 sm:mb-16 mt-5 text-center sm:text-left"
                >
                  {heading}
                </h1>
                <ParaPrmBeta
                  className="max-w-2xl text-lg lg:text-xl mb-5 text-center sm:text-left"
                >
                  {description}
                </ParaPrmBeta>
                <PrimaryBtnTwo 
                  handleOnClick={cta_fun}
                >
                {cta_text}
                </PrimaryBtnTwo>
              </div>
            </ContainerDiv>
          </div>
      </section>
      
    )
}