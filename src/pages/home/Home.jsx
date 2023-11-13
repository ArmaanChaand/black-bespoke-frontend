import "../../css/components.css";
import Hero from "../../components/Hero";
import OurServicesHome from "../../components/OurServicesHome";
import OurProcessHome from "../../components/OurProcessHome";
import Footer from "../../components/Footer";


export default function Home(){
    return (
        <>
        <Hero/>
        <OurServicesHome/>
        <OurProcessHome/>
        <Footer/>
        </>
      
    )
}