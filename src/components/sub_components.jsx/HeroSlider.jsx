import "../../css/sub_components.css";
import { useEffect, useRef, useState } from "react";
import {BlurredInfoBox} from "./BlurredInfoBox";
import { roundToNearestPositiveInteger } from "../../assets/utils";
import { useAxios } from "../../assets/axios/useAxios";
export function HeroSlider(){
    const [slideInfos, setSlideInfos] = useState([])
    const swiperElRef = useRef(null);
    const [slideSerialFloat, setSlideSerialFloat] = useState(1)
    const http = useAxios()
    useEffect(()=>{
        http.get("/db/hero-slides.json").then(response => {
            if(response?.data?.slides) setSlideInfos(response?.data?.slides)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            // console.log("DONE")
        })
    })
    useEffect(() => {
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
        setSlideSerialFloat(progress)
      });
    }, []);
    const slideSerial = roundToNearestPositiveInteger((slideSerialFloat/1) * slideInfos?.length) 
    return (
        <div className="lg:col-span-5 overflow-hidden sm:overflow-visible w-full sm:w-fit flex flex-col justify-center items-center mt-auto ml-auto mb-0 mr-auto sm:mr-0">
            <swiper-container 
                ref={swiperElRef} 
                class="heroSlider flex flex-row justify-between shadow-inner items-center overflow-hidden w-11/12 
                mx-auto sm:mx-[unset] sm400:w-10/12 sm:w-[500px] md:w-[400px] xl:w-[500px]" 

                space-between="40" slides-per-view="auto" pagination="true"
                pagination-clickable="true"
            >
                    {
                        slideInfos.map(slide => (
                            <swiper-slide class="w-full sm:w-fit mx-auto"  key={slide?.serial}>
                                <BlurredInfoBox
                                serial={slide?.serial}
                                heading={slide?.heading}
                                para={slide?.para}
                                classes=" w-full flex-none pb-8 sm:pb-5 sm:w-80 "
                                />
                            </swiper-slide>
                        ))
                    }
            </swiper-container>
            <div className="hidden text-2xl text-theme-white font-theme-cirka ml-auto mt-8 sm:flex flex-col justify-center items-center mr-32">
              <span className="mr-7">
              {slideSerial < 10 ? "0" + (slideSerial == 0 ? 1 : slideSerial ) : slideSerial }
              </span>
              <span className="w-full h-[1px] bg-theme-white rounded-sm -rotate-45"></span>
              <span className="ml-7">
              {slideInfos?.length < 10 ? "0" + slideInfos?.length : slideInfos?.length}
              </span>
            </div>
          </div>
    )
}