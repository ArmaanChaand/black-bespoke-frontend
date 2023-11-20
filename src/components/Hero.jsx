import { ParaPrm } from "./elements/Paras";
import { PrimaryBtn } from "./elements/Buttons";
import { WalledTexts } from "./elements/WalledTexts";
import { ContainerDiv } from "./elements/Container";
import { useNavigate } from "react-router-dom";



export default function Hero({backgroundImage="", slider=""}){
  const navigate = useNavigate()
    return (
        <section className="bg-transparent w-screen h-screen relative">
          {backgroundImage}

        <ContainerDiv
          classes="flex justify-center items-center h-full"
        >
          <div className="z-20 mb-40 sm:mb-0 ml-3 mr-auto place-self-center lg:col-span-7 flex flex-col justify-start items-start">
            <h1 
              className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl 
              text-theme-white font-theme-gilroy leading-none"
            >
            <WalledTexts></WalledTexts>The highest <br/>material quality
            </h1>
            <ParaPrm
              classes="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl "
            >
              Custom clothing built just for you
            </ParaPrm>
            <PrimaryBtn handleOnClick={()=>navigate("?consult_stage=info")}>BOOK AN APPOINTMENT</PrimaryBtn>
          </div>
        </ContainerDiv>
         {slider}
      </section>
      
    )
}