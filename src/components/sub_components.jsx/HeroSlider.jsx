import "../../css/sub_components.css";
import { useEffect, useRef, useState } from "react";
import {BlurredInfoBox} from "./BlurredInfoBox";
import { roundToNearestPositiveInteger } from "../../assets/js_utils/utils";
import { useAxios } from "../../assets/axios/useAxios";
import {useQuery} from "@tanstack/react-query"

export function HeroSlider(){
    const swiperElRef = useRef(null);
    const [slideSerialFloat, setSlideSerialFloat] = useState(1)
    const http = useAxios()
    const {data, error, isError, isLoading} = useQuery({
        queryKey: ['hero-slides'],
        queryFn: () => http.get("/db/hero-slides.json"),
        staleTime: 1000 * 60 * 5
        
    })
    const slideInfos = data?.data?.slides || []
    useEffect(() => {
      if (!swiperElRef?.current) return
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
        setSlideSerialFloat(progress)
      });
    }, []);
    const slideSerial = roundToNearestPositiveInteger((slideSerialFloat/1) * slideInfos?.length) 
    if (isError || isLoading) return ""
    return (
        <div className="z-10 absolute bottom-5 right-0 overflow-hidden sm:overflow-visible w-full sm:w-fit flex flex-col justify-center items-center mt-auto ml-auto mb-0 mr-auto sm:mr-0">
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