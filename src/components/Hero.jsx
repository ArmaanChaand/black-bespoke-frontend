import { PrimaryBtn } from "./sub_components.jsx/Buttons";
import { HeroSlider } from "./sub_components.jsx/HeroSlider";
import { WalledTexts } from "./sub_components.jsx/WalledTexts";


export default function Hero(){

    return (
        <section className="bg-transparent bg-right bg-no-repeat bg-cover bg-[url(/media/tailor-image-1.jpeg)] w-screen">
        <div 
          className="grid max-w-screen py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 
          lg:grid-cols-12 h-screen bg-theme-black/80"
        >
          <div className="ml-10 sm:ml-16 md:ml-24 mr-auto place-self-center lg:col-span-7">
            <h1 
              className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl 
              text-theme-white font-theme-gilroy leading-none"
            >
            <WalledTexts text={"The "}/> highest <br/>material quality
            </h1>
            <p className="max-w-2xl mb-6 font-light text-theme-white lg:mb-8 md:text-lg lg:text-xl font-theme-cirka">
            Custom clothing built just for you
            </p>
            <PrimaryBtn text={"BOOK AN APPOINTMENT"}/>
          </div>
          <HeroSlider/>
        </div>
      </section>
      
    )
}