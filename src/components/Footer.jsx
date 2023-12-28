import { LinkAnchor, LinkBtn, PrimaryAnchorBtn, PrimaryBtn, PrimaryBtnTwo, SecondaryBtn } from "./elements/Buttons";
import { ContainerDiv } from "./elements/Container";
import { BrandTextLogo } from "../assets/Logos";
import { SVGWrapper } from "./elements/SVGWrapper";
import { Link } from "react-router-dom";
import { ParaPrmBeta } from "./elements/Paras";

export default function Footer(){
    return (
        <footer className="mb-0 w-screen mt-32 py-0 pb-5 bg-theme-gradient-grey text-theme-white relative">
            <div className="absolute left-1/2 -translate-x-1/2  aspect-square rounded-full bg-black/20 flex justify-center items-center -top-8 sm:-top-12 w-16 sm:w-24">
            <SVGWrapper classes="w-7/12 h-auto aspect-square fill-theme-gold  stroke-none" svgName="BRAND" />
            </div>

            <ContainerDiv>
                <div className="bg-transparent">
                    <div className="w-full py-16">
                        <div className="md:flex md:justify-between">
                            <div className="mb-6 md:mb-0 flex flex-col gap-8 justify-start items-start">
                                <Link to="/" className="mx-auto my-5 sm:my-0 sm:mx-0 flex items-center">
                                <BrandTextLogo/>
                                </Link>
                                <div className="hidden sm:flex flex-col gap-8 ">
                                    <PrimaryBtnTwo>
                                    Reserve your slot
                                    </PrimaryBtnTwo>
                                    <ParaPrmBeta className="flex justify-center items-center gap-2">
                                        Made with <SVGWrapper svgName="HEART" classes="w-3 stroke-none fill-theme-gold"/> in India.
                                    </ParaPrmBeta>
                                </div>
                            </div>
                            <ul className="grid  sm:grid-cols-2 gap-5 h-fit text-sm">
                                <li>
                                    <LinkBtn>
                                    Refund Policy
                                    </LinkBtn>
                                </li>
                                <li>
                                    <LinkBtn>
                                    Alteration Policy
                                    </LinkBtn>
                                </li>
                                <li>
                                    <LinkBtn>
                                    Shipping Policy
                                    </LinkBtn>
                                </li>
                                <li>
                                    <LinkBtn>
                                    Exchange & Return
                                    </LinkBtn>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-theme-gold"/>
                <div className="bg-transparent text-theme-white font-theme-mulish py-5">
                    <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
                        <span className="text-base sm:text-centers">
                        &copy; 2023{" "}
                        <LinkBtn href="/">
                        Black Bespoke
                        </LinkBtn>
                        . All Rights Reserved.
                        </span>
                        <div className="w-full sm:w-fit flex flex-row-reverse sm:flex-row justify-between items-start sm:items-center gap-5">
                            <LinkAnchor href="https://www.instagram.com" target="_blank" className="flex justify-center items-center ">
                                <SVGWrapper svgName="IG" classes="w-5 stroke-none fill-theme-gold"/> 
                            </LinkAnchor>

                            <ul className="w-fit gap-5 flex flex-col sm:flex-row flex-wrap justify-between sm:justify-center items-start sm:items-center text-sm font-medium ">
                            <li>
                                <LinkBtn className="mr-auto" href="#">
                                Terms of Service
                                </LinkBtn>
                            </li>
                            <li>
                                <LinkBtn href="#">
                                Privacy Policy
                                </LinkBtn>
                            </li>
                            <li>
                                <LinkBtn href="#">
                                    Cookies
                                </LinkBtn>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </ContainerDiv>
        </footer>
    )
}