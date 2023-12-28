import { PrimaryBtnTwo } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { ParaPrmBeta } from "./elements/Paras";
import { LinedHeaderBeta, SubHeaderBeta } from "./elements/StyledHeaders";
import { TestimonialBox } from "./sub_components.jsx/TestimonialBox";


export function TheTestimonials(){
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
                <div className="w-full h-fit my-10 2xl:my-20 overflow-hidden">
                    <swiper-container 
                    
                    id="TESTIMONIALS_SLIDER"
                    class="testimonialsSlider flex flex-row justify-between items-center overflow-visible w-full h-fit pb-10" 
                    

                    space-between="40" slides-per-view="auto" pagination="true"
                    pagination-clickable="true"
                    >
                        {
                        ["/media/testimonial_1.jpeg", "/media/testimonial_2.jpeg","/media/testimonial_1.jpeg", "/media/testimonial_2.jpeg"].map(src => (
                            <swiper-slide class="block w-full sm:w-10/12 2xl:w-1/2 mx-auto h-fit">
                                <TestimonialBox
                                    img_src={src}
                                    testimonial="I’d give them a 10/5 if Google would let me, I could not recommend Black Bespoke any more than is possible. We worked together on all of the aspects of my suit and shirt for my wedding day and it is stunning. Every small detail is carefully thought out on their end and they walk you through it to determine exactly what you want so that you not only look good but feel comfortable and confident wearing the work of art that they craft."
                                    name="Aryan Kapoor"
                                />
                            </swiper-slide>

                            ))
                            }
                    </swiper-container>
                </div>

                <div className="w-full flex flex-col gap-6 justify-between items-center">
                    <SubHeaderBeta className="w-full sm:w-fit text-4xl sm:text-4xl text-center">
                    Still not convinced we're a good fit for one another?
                    <span className="lg:block"> Let us prove it. </span>
                    </SubHeaderBeta>
                    <PrimaryBtnTwo
                    
                    >
                    Let's Talk
                    </PrimaryBtnTwo>
                </div>
            </ContainerDiv>
        </section>
    )
}