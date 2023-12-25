import { ParaPrm } from "./elements/Paras";
import { PrimaryBtnTwo } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { Link, useNavigate } from "react-router-dom";
import { FullSVGLogo } from "../assets/Logos";



export default function HeroWithVideo({backgroundImage="", slider=""}){
  const navigate = useNavigate()
    return (
        <section className="bg-transparent w-screen h-screen relative">
           <video className="absolute w-full h-full inset-0 z-0 object-cover  brightness-50 scale-x-[-1]" loop autoPlay={true} muted={true} src="/media/hero_video.mp4">
            <source src="/media/hero_video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
           {/* <img src="/media/sewing-needle.jpeg" className="absolute w-full h-full inset-0" /> */}
        <ContainerDiv
          classes="flex justify-center items-center h-full"
        >
          <div className="z-20 mb-40 sm:mb-0 mr-auto place-self-center lg:col-span-7 flex flex-col justify-start items-start">
          <Link href="https://blackbespoke.netlify.app/" className="flex items-center">
            <FullSVGLogo/>
          </Link>
            <h1 
              className="max-w-2xl text-4xl font-medium md:text-5xl xl:text-6xl 
              text-theme-white font-theme-petrona leading-none mb-16 mt-5"
            >
            The Art of <br/>Personalization
            </h1>
            <ParaPrm
              classes="max-w-2xl md:text-lg lg:text-xl font-theme-mulish mb-5"
            >
              Bespoke suits built just for you
            </ParaPrm>
            <PrimaryBtnTwo 
              // handleOnClick={()=>navigate("?consult=info")}
            >
            Reserve Your Slot
            </PrimaryBtnTwo>
          </div>
        </ContainerDiv>
      </section>
      
    )
}