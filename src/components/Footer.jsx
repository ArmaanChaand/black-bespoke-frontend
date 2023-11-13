import { LinkAnchor, PrimaryAnchorBtn, PrimaryBtn, SecondaryBtn } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { FullSVGLogo } from "../assets/Logos";
import { SubHeader } from "./elements/StyledHeaders";
import { WalledTexts } from "./elements/WalledTexts";
import { SVGWrapper } from "./elements/SVGWrapper";

export default function Footer(){
    return (
        <footer className="w-screen py-10 sm:pb-0 bg-theme-gradient-grey text-theme-white">
            <ContainerDiv>
                <div className="w-full flex flex-col gap-6 sm:flex-row justify-between items-center">
                    <SubHeader classes="w-full sm:w-fit pl-3 text-base sm:text-2xl">
                    <WalledTexts> <span className="sm:block">Feeling Overwhelmed?</span> Get Started with Expert Help for Your Needs</WalledTexts>
                    </SubHeader>
                    <PrimaryBtn classes="w-full sm:w-fit">
                    REQUEST EXPERT CALLBACK
                    </PrimaryBtn>
                </div>

                <hr className="border-theme-gold mt-10"/>
                <div className="bg-transparent">
                    <div className="w-full py-12">
                        <div className="md:flex md:justify-between">
                            <div className="mb-6 md:mb-0 flex flex-col gap-10 justify-start items-start">
                                <a href="https://blackbespoke.netlify.app/" className="flex items-center">
                                <FullSVGLogo/>
                                </a>
                                <div className="flex flex-col sm400:flex-row justify-center items-center gap-4">
                                    <PrimaryBtn classes="w-full sm400:w-fit">CREATE SUIT</PrimaryBtn>
                                    <SecondaryBtn classes="w-full sm400:w-fit">BOOK APPOINTMENT</SecondaryBtn>
                                </div>
                                <div className="flex flex-row gap-5 flex-wrap">
                                    <PrimaryAnchorBtn href="#" classes="p-2 rounded-full">
                                       <SVGWrapper classes="w-5 h-5" svgName="IG"/>
                                    </PrimaryAnchorBtn>
                                    <PrimaryAnchorBtn href="#" classes="p-2 rounded-full">
                                       <SVGWrapper classes="w-5 h-5" svgName="FB"/>
                                    </PrimaryAnchorBtn>
                                    <PrimaryAnchorBtn href="#" classes="p-2 rounded-full">
                                       <SVGWrapper classes="w-5 h-5" svgName="TWITTER"/>
                                    </PrimaryAnchorBtn>
                                    <PrimaryAnchorBtn href="#" classes="p-2 rounded-full">
                                       <SVGWrapper classes="w-5 h-5" svgName="GITHUB"/>
                                    </PrimaryAnchorBtn>
                                </div>
                            </div>
                            <div className="hidden sm:grid grid-cols-2 gap-8 sm:gap-6 text-sm">
                                <div>
                                    <ul className="flex flex-col gap-2">
                                        <li>
                                            <LinkAnchor>
                                                Home
                                            </LinkAnchor>
                                        </li>
                                        <li>
                                            <LinkAnchor>
                                                Our Story
                                            </LinkAnchor>
                                        </li>
                                        <li>
                                            <LinkAnchor>
                                                Track Order
                                            </LinkAnchor>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="flex flex-col gap-2">
                                        <li>
                                            <LinkAnchor>
                                                Policy
                                            </LinkAnchor>
                                        </li>
                                        <li>
                                            <LinkAnchor>
                                            Alteration Policy
                                            </LinkAnchor>
                                        </li>
                                        <li>
                                            <LinkAnchor>
                                            Exchange & Return
                                            </LinkAnchor>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-theme-gold"/>
                <div className="bg-transparent text-theme-white font-theme-gilroy py-5">
                    <div className="w-full md:flex md:items-center md:justify-between">
                        <span className="text-sm sm:text-centers">
                        &copy; 2023{" "}
                        <LinkAnchor href="https://blackbespoke.netlify.app/">
                            Maxwell Inc
                        </LinkAnchor>
                        . All Rights Reserved.
                        </span>
                        <ul className="flex flex-wrap justify-between sm:justify-center items-center text-sm font-medium gap-3 sm:gap-5 mt-3 sm:mt-0">
                        <li>
                            <LinkAnchor href="#">
                            Terms of Service
                            </LinkAnchor>
                        </li>
                        <li>
                            <LinkAnchor href="#">
                            Privacy Policy
                            </LinkAnchor>
                        </li>
                        <li>
                            <LinkAnchor href="#">
                                Cookies
                            </LinkAnchor>
                        </li>
                        </ul>
                    </div>
                </div>


            </ContainerDiv>
        </footer>
    )
}