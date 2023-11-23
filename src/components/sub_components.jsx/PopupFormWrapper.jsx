import { SubHeader } from "../elements/StyledHeaders"
import { WalledTexts } from "../elements/WalledTexts"
import { SecondaryBtn } from "../elements/Buttons"
import { SVGWrapper } from "../elements/SVGWrapper" 
import { PrimaryBtn } from "../elements/Buttons"

export function PopupFormWrapper({
    header_text="Black Bespoke", children, 
    back_fn, back_classes="w-full sm400:w-fit", back_text="BACK", 
    next_fn, next_text="NEXT", next_classes="w-full sm400:w-fit", next_disabled=false,
    next_svg_name="ANGLE_RIGHT"
}){
    return (
        <div className="w-full px-5 sm:px-10 flex flex-col justify-between items-start  h-full py-10 gap-6">
            <SubHeader classes="ml-3 text-xl sm:text-2xl">
                <WalledTexts>
                {header_text}
                </WalledTexts>
            </SubHeader>
            <div className="w-full h-full flex flex-col justify-center items-center">
                {children}
            </div>
            <div className="w-full mt-0 flex flex-col sm400:flex-row justify-between items-center">
                <SecondaryBtn
                    handleOnClick={back_fn}
                    classes={back_classes}
                >
                    <SVGWrapper 
                        classes="stroke-theme-gold fill-transparent w-4 h-5 mr-2"
                        svgName="ANGLE_LEFT"
                    />
                    <span>{back_text}</span>
                </SecondaryBtn>
                <PrimaryBtn
                    handleOnClick={next_fn}
                    classes={next_classes}
                    disabled={next_disabled}
                >
                    <span>{next_text}</span>
                    <SVGWrapper 
                        classes="stroke-theme-gold fill-transparent w-4 h-5 ml-2"
                        svgName={next_svg_name}
                    />
                </PrimaryBtn>
            </div>
        </div>
    )
}