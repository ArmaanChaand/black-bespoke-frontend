import { SuitPartGallery } from "./SuitPartGallery";
import { ContainerDiv } from "./elements/Container";
import { ParaSec } from "./elements/Paras";
import { SubHeader } from "./elements/StyledHeaders";
import { WalledTexts } from "./elements/WalledTexts";
import DetailsSection from "./sub_components.jsx/DetailsSection";
import { SuitBuildSteps } from "./sub_components.jsx/SuitBuildSteps";

export default function SuitBuildWrapper({
   children, detail_id, pictures, next_fn,back_fn
}){

    const suit_build_steps = (<SuitBuildSteps/>)

    return(
        <section className="w-screen min-h-screen pt-20 md:pt-24 overflow-x-hidden">
            <ContainerDiv classes="h-full flex flex-col md:flex-row justify-start sm:justify-center items-stretch gap-10  pb-32 md:pr-16 relative ">
               <div className="w-full h-fit sm:h-full">
                    <SubHeader classes="text-xl sm:text-2xl ml-3">
                        <WalledTexts/>
                            Build Your Suit
                    </SubHeader>
                    <div className="mt-5 w-fit mx-auto md:hidden">
                        {suit_build_steps}
                    </div>
                    <ParaSec classes="hidden sm:block mt-2">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum tincidunt quam feugiat purus aliquet tellus.
                    </ParaSec>
                    <div className="w-full h-auto aspect-video rounded-sm overflow-hidden mt-7">
                        <SuitPartGallery
                            pictures={pictures}
                        />
                    </div>
                </div>
               <div className="w-full md:w-72 lg:w-96 2xl:w-1/3 flex-none h-fit verflow-hidden ">
                {children}
               </div>
               <div 
                className="hidden md:block md:absolute right-0 top-[15vh]  my-auto"
                >
                    {suit_build_steps}
               </div>
            </ContainerDiv>
           <DetailsSection
            detail_id={detail_id}
            next_fn={next_fn}
            back_fn={back_fn}
           />
        </section>
    )
}