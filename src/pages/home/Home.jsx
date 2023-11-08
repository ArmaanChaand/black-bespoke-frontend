import "../../css/components.css";
import { PrimaryBtn } from "../../components/Buttons";
import { WalledTexts } from "../../components/WalledTexts";


export default function Home(){
    return (
        <section className="bg-transparent bg-right bg-no-repeat bg-cover bg-[url(/tailor-image-1.jpeg)] w-screen">
        <div 
          className="grid max-w-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 
          lg:grid-cols-12 h-screen bg-theme-black/70"
        >
          <div className="ml-4 sm400:ml-5 sm:ml-24 mr-auto place-self-center lg:col-span-7">
            <h1 
              className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl 
              text-theme-white font-theme-gilroy leading-none tracking-wider"
            >
            <WalledTexts text={"The "}/> highest <br/>material quality
            </h1>
            <p className="max-w-2xl mb-6 font-light text-theme-white lg:mb-8 md:text-lg lg:text-xl font-theme-cirka">
            Custom clothing built just for you
            </p>
            <PrimaryBtn text={"BOOK AN APPOINTMENT"}/>
          </div>
          <div className="lg:col-span-5 lg:flex bg-theme-gold mt-auto ml-auto mb-0 mr-auto sm:mr-24">
            <img src="/tests/test1.png"/>
          </div>
        </div>
      </section>
      
    )
}