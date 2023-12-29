import { lazy } from "react";
import { ContainerDiv } from "../../components/elements/Container";
import { ParaPrmBeta } from "../../components/elements/Paras";
import { LinedHeaderBeta } from "../../components/elements/StyledHeaders";
import { TextAreaInput, TextInput } from "../../components/elements/Inputs";
const Footer = lazy(() => import("../../components/Footer"))
const Header = lazy(() => import("../../components/Header"))
const HeroBeta = lazy(() => import("../../components/HeroBeta"))

export default function Contact() {

    return (
        <>
            <Header
                btn_text="Frequently Asked Questions"
            />
            <HeroBeta
                heading="Have a question or just need to get in touch?"
                description="We strive to respond to every message within 24 hours."
                cta_text="Contact Us"
                video_src="/media/hero_video.mp4"
            />
            <section className="w-full my-10 mf:my-16 2xl:my-20">
                <ContainerDiv classes="rounded-xl flex flex-col justify-center items-center glass_bg py-10 sm:py-20 px-5 sm:px-10 lg:px-20 2xl:px-32 gap-8 sm:gap-10">
                    <LinedHeaderBeta className="w-fit">
                        Contact Us
                    </LinedHeaderBeta>
                    <ParaPrmBeta className="2xl:text-lg">
                        At Black Bespoke, our client relationships are the bedrock of what we do. We have spent decades mastering our craft, so that we can help you take control of your sartorial aura. Please know that no question you ask will be deemed foolish. In fact, questions you ask will help us create a more clear picture of your personal style. It is those questions that allow us to build a mutual trust, and a true bespoke clothier will always welcome them. We give you recommendations with the aim of creating a long and lasting relationship.
                    </ParaPrmBeta>
                    <form 
                        onSubmit={(e)=>e.preventDefault()} 
                        className="w-full h-full flex flex-col justify-start items-center mt-5 gap-6"
                        // ref={the_form}
                    >
                        <div className="w-full grid grid-cols-2 gap-5">
                        <TextInput
                        type="text"
                        label="First Name"
                        placeholder="Josh"
                        id="id_first_name"
                        name="first_name"
                        // defaultValue={address_data?.pin_code || ""}
                        // is_error={errors?.pin_code}
                        // bottom_msg={errors?.pin_code || ""}
                        />
                        <TextInput
                        type="text"
                        label="Last Name"
                        placeholder="Boss"
                        id="id_last_name"
                        name="last_name"
                        readOnly={true}
                        // defaultValue={selected_city.name || ""}
                        // is_error={errors?.city}
                        // bottom_msg={errors?.city || ""}
                        />
                    </div>
                    <TextInput
                        type="email"
                        label="Email"
                        placeholder="abc@gmail.com"
                        id="id_address"
                        name="address"
                        // defaultValue={address_data?.address || ""}
                        // is_error={errors?.address}
                        // bottom_msg={errors?.address || ""}
                    />
                    <TextAreaInput
                        label="What can we do for you?"
                        placeholder="Let us know what you are looking for:"
                        name="landmark"
                        id="id_landmark"
                        input_class="resize-none h-56"
                        
                        // defaultValue={address_data?.landmark || ""}
                        // is_error={errors?.landmark}
                        // bottom_msg={errors?.landmark || ""}
                    />
                    </form>
                </ContainerDiv>
            </section>
            <Footer />
        </>

    )
}