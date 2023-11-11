import { ParaPrm } from "./elements/Paras";
import { PrimaryBtn } from "./elements/Buttons";
import { HeroSlider } from "./sub_components.jsx/HeroSlider";
import { WalledTexts } from "./elements/WalledTexts";


export default function Hero(){

    return (
        <section className="bg-transparent bg-right bg-no-repeat bg-cover bg-[url(/media/tailor-image-1.jpeg)] w-screen">
        <div 
          className="grid max-w-screen py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 
          lg:grid-cols-12 h-screen bg-theme-black/80"
        >
          <div className="ml-10 sm:ml-16 md:ml-24 mr-auto place-self-center lg:col-span-7 flex flex-col justify-start items-start">
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
            <PrimaryBtn>BOOK AN APPOINTMENT</PrimaryBtn>
          </div>
          <HeroSlider/>
        </div>
      </section>
      
    )
}