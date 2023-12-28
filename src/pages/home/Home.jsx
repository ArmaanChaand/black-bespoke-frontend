import { lazy } from "react";
import { TheProcessHome } from "../../components/TheProcessHome";
import { TheStoryHome } from "../../components/TheStoryHome";
import { TheTestimonials } from "../../components/TheTestimonials";
const Footer = lazy(()=>import("../../components/Footer"))
const Header = lazy(()=>import("../../components/Header"))
const HeroBeta = lazy(()=>import("../../components/HeroBeta"))

export default function Home(){
    
    return (
        <>
        <Header/>
        <HeroBeta
            heading="The Art of Personalization"
            description="Bespoke suits built just for you"
            cta_text="Reserve Your Slot"
            video_src="/media/hero_video.mp4"
        />
        <TheProcessHome/>
        <TheStoryHome/>
        <TheTestimonials/>
        <Footer/>
        </>
      
    )
}