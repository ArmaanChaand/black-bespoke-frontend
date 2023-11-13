import "../../css/components.css";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { ImageElm } from "../../components/elements/Images";


export default function OurProcess(){
    const backgroundImage = (<ImageElm
        src="/media/sewing-needle.jpeg"
        alt="Home Tailor"
        classes="absolute z-10 brightness-[0.4]"
      />)
    return (
        <>
        <Hero
            backgroundImage={backgroundImage}
        />
        
        <Footer/>
        </>
      
    )
}