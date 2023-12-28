import "../../css/components.css";
import Hero from "../../components/Hero";
import OurServicesHome from "../../components/OurServicesHome";
import OurProcessHome from "../../components/OurProcessHome";
import Footer from "../../components/Footer";
import { ImageElm } from "../../components/elements/Images";
import { HeroSlider } from "../../components/sub_components.jsx/HeroSlider";
import HeroWithVideo from "../../components/HeroWVideo";
import { TheProcessHome } from "../../components/TheProcessHome";
import { TheStoryHome } from "../../components/TheStoryHome";
import { TheTestimonials } from "../../components/TheTestimonials";
import { ContainerDiv } from "../../components/elements/Container";
import { PrimaryBtnTwo } from "../../components/elements/Buttons";
import Header from "../../components/Header";


export default function Home(){
    
    return (
        <>
        <Header/>
        <HeroWithVideo/>
        <TheProcessHome/>
        <TheStoryHome/>
        <TheTestimonials/>
        <Footer/>
        </>
      
    )
}