import { useEffect } from "react"
import { LinkIconTextArrowBtn, SecondaryBtn } from "./elements/Buttons"
import { ImageElm } from "./elements/Images"
import { SVGWrapper } from "./elements/SVGWrapper"


export default function Sidebar({setShowSidebar}){
   
    useEffect(()=>{
        document.body.style.overflowY = "hidden"
        return () => document.body.style.overflowY = "auto"
    }, [])
    return (
        <aside className="fixed w-screen h-screen bg-theme-black inset-0 z-50 overflow-y-auto">
            <div className="w-11/12 sm:w-1/2 mx-auto flex flex-col justify-center items-center gap-5 py-6 h-fit">
                <SecondaryBtn 
                    handleOnClick={()=>setShowSidebar(false)}  
                    classes="focus:ring-2 hover:bg-theme-white/10 focus:ring-theme-white/10 p-1 text-theme-white ml-auto"
                >
                        <SVGWrapper classes="w-6 h-6 fill-theme-white stroke-theme-white" svgName="CLOSE"/>
                </SecondaryBtn>
                <nav className="w-full h-fit flex flex-col justify-center items-center gap-5">
                    <LinkIconTextArrowBtn
                        
                        href="/"
                        left_svg_name="HOME"
                    >
                     Home
                    </LinkIconTextArrowBtn>
                    <LinkIconTextArrowBtn 
                        href="/process"
                        left_svg_name="PROCESS"
                    >
                     Our Process
                    </LinkIconTextArrowBtn>
                    <LinkIconTextArrowBtn 
                        left_svg_name="SUIT"
                        left_svg_classes="hidden"
                    >
                    <img src="/media/suit.png" alt="suit" className="w-4 h-4 inline-block"/>
                     Build Suit
                    </LinkIconTextArrowBtn>
                    <LinkIconTextArrowBtn 
                        left_svg_name="PACKAGE"
                    >
                     Track Order
                    </LinkIconTextArrowBtn>
                    <LinkIconTextArrowBtn 
                        left_svg_name="PHONE"
                    >
                     Contact Us
                    </LinkIconTextArrowBtn>
                    <LinkIconTextArrowBtn 
                        left_svg_name="NOTE"
                    >
                     Measurement
                    </LinkIconTextArrowBtn>
                    <LinkIconTextArrowBtn 
                        left_svg_name="DOCS"
                    >
                     Alteration Policy
                    </LinkIconTextArrowBtn>
                    <LinkIconTextArrowBtn 
                        left_svg_name="RECYCLE"
                    >
                     Exchange & Returns
                    </LinkIconTextArrowBtn>
                    <LinkIconTextArrowBtn 
                        left_svg_name="DOLLAR"
                    >
                     Refund Policy
                    </LinkIconTextArrowBtn>
                    <LinkIconTextArrowBtn 
                        left_svg_name="TRUCK"
                    >
                     Shipping Policy
                    </LinkIconTextArrowBtn>
                </nav>
            </div>
        </aside>
    )
}