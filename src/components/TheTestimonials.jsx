import useGetTestimonials from "../queries/TestimonialsQuery";
import { PrimaryLinkBtn } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { ParaPrmBeta } from "./elements/Paras";
import { LinedHeaderBeta, SubHeaderBeta } from "./elements/StyledHeaders";
import { TestimonialBox } from "./sub_components.jsx/TestimonialBox";


export function TheTestimonials(){
    const {data, isSuccess, isLoading} = useGetTestimonials()
    const testimonials = isSuccess ? data?.data : []
    return(
        <section className="w-screen h-fit my-16 2xl:my-20">
            <ContainerDiv classes="flex flex-col justify-center items-center gap-10">
                <div className="w-fit flex flex-col justify-center items-center gap-6">
                <LinedHeaderBeta className="w-10/12">
                Testimonials
                </LinedHeaderBeta>
                <ParaPrmBeta className="2xl:text-lg">
                We’re obsessed with <span className="text-theme-gold">Quality</span>, and it shows. Here’s what our customers have to say.
                </ParaPrmBeta>
                </div>
                <div className="w-full h-fit my-10 2xl:my-10 overflow-hidden">
                    {
                        isSuccess &&
                        <swiper-container 
                        
                        id="TESTIMONIALS_SLIDER"
                        class="testimonialsSlider flex flex-row justify-between items-center overflow-visible w-full h-fit pb-10" 
                        

                        space-between="40" slides-per-view="auto" pagination="true"
                        pagination-clickable="true"
                        loop="true"
                        autoplay-delay="2500" autoplay-disable-on-interaction="true"
                        >
                            {
                            testimonials.map(testimonial => (
                                <swiper-slide class="block w-full sm:w-10/12 2xl:w-5/6 mx-auto h-fit">
                                    <TestimonialBox
                                        img_src={testimonial?.picture}
                                        testimonial={testimonial?.testimonial}
                                        name={testimonial?.client_name}
                                    />
                                </swiper-slide>
                                ))
                                }
                        </swiper-container>
                    }
                </div>

                <div className="w-full flex flex-col gap-6 justify-between items-center">
                    <SubHeaderBeta className="w-full sm:w-fit text-4xl sm:text-4xl  lg:text-5xl  2xl:text-6xl text-center">
                    Still not convinced we're a good fit for one another?
                    <span className="lg:block"> Let us prove it. </span>
                    </SubHeaderBeta>
                    <PrimaryLinkBtn
                        to="/contact-us"
                        className="sm:w-32 2xl:w-44"
                    >
                    Let's Talk
                    </PrimaryLinkBtn>
                </div>
            </ContainerDiv>
        </section>
    )
}