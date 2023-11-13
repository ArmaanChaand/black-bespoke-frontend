import "../css/components.css";
import { LinedHeader, SubHeader } from "./elements/StyledHeaders";
import { PrimaryBtn } from "./elements/Buttons";
import { ParaPrm, ParaSec } from "./elements/Paras";
import { ServicesSlider } from "./sub_components.jsx/ServicesSlider";
import { WalledTexts } from "./elements/WalledTexts";
import { ImageElm } from "./elements/Images";
import { ContainerDiv } from "./elements/Container";

export default function OurServicesHome(){
    return (
        <>
        <section className="w-screen bg-theme-black py-10 sm:pt-16 text-theme-white">
            <ContainerDiv classes="flex flex-col justify-center items-center gap-5">
                <LinedHeader>
                    Our Services
                </LinedHeader>
                <ParaPrm
                classes="text-center text-xs sm:text-sm"
                >
                Lorem ipsum dolor sit amet consectetur. Id et dictum curabitur .
                </ParaPrm>
                <ServicesSlider/>
                <PrimaryBtn extraClasses="mt-5">
                    CREATE CUSTOMISE SUIT
                </PrimaryBtn>
            </ContainerDiv>
        </section>  
        <section className="mt-10 w-screen sm:px-0 py-10 sm:py-16 min-h-96 relative ">
            <ImageElm
                src={"https://www.figma.com/file/aWu16l1ZsFvh0yRAmGR1PA/image/e98230bc9fcfbaeffb9951aa8f10bed4e26b1885"}
                alt={"Our Services"}
                classes="absolute w-full h-full z-0 brightness-50 inset-0"
            />
            <ContainerDiv>
                <div className="w-full sm:w-2/3 md:w-1/2 min-h-56 bg-theme-black/30 backdrop-blur-sm z-10 p-5 overflow-hidden rounded-sm">
                    <SubHeader classes="ml-3 text-xl sm:text-2xl">
                        <WalledTexts>
                        We make high Quality, <br/> Custom Suits
                        </WalledTexts>
                    </SubHeader>
                    <ParaSec classes="mt-5">
                    Lorem ipsum dolor sit amet consectetur. Massa mi sapien lobortis cras vulputate platea feugiat. Neque pellentesque consequat cursus amet sit molestie imperdiet netus. Non ac sollicitudin morbi tellus nisl amet consequat. Arcu lobortis massa feugiat laoreet vestibulum integer scelerisque amet ut. Pellentesque urna accumsan pellentesque pharetra sed curabitur quis molestie. Nisl amet volutpat amet nisl aliquam tortor laoreet gravida. Sagittis elementum orci senectus egestas blandit turpis sapien mattis. Tristique dui neque sed eu donec dis convallis habitant.
                    </ParaSec>
                </div>
            </ContainerDiv>
        </section>
        </>
    )
}