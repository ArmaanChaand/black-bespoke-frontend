import "../../css/components.css";
import Hero from "../../components/Hero";
import OurServicesHome from "../../components/OurServicesHome";
import OurProcessHome from "../../components/OurProcessHome";
import Footer from "../../components/Footer";
import { ImageElm } from "../../components/elements/Images";
import { HeroSlider } from "../../components/sub_components.jsx/HeroSlider";


export default function Home(){
    const backgroundImage = (<ImageElm
    src="/media/tailor-image-1.jpeg"
    alt="Home Tailor"
    classes="absolute z-10 brightness-[0.4] object-center"
  />)
    return (
        <>
        <Hero
            backgroundImage={backgroundImage}
            slider={<HeroSlider/>}
        />
        <OurServicesHome/>
        <OurProcessHome/>
        <Footer/>
        </>
      
    )
}