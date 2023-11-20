import { SubHeader } from "../elements/StyledHeaders"
import { WalledTexts } from "../elements/WalledTexts"
import { SecondaryBtn } from "../elements/Buttons"
import { SVGWrapper } from "../elements/SVGWrapper" 
import { PrimaryBtn } from "../elements/Buttons"

export function PopupFormWrapper({
    header_text="Black Bespoke", children, back_fn, back_classes="", back_text="BACK", next_fn, next_text="NEXT", next_classes=""
}){
    return (
        <div className="w-full px-10 flex flex-col justify-between items-start  h-full py-10 gap-6">
            <SubHeader>
                <WalledTexts>
                {header_text}
                </WalledTexts>
            </SubHeader>
            <div className="w-full h-full">
                {children}
            </div>
            <div className="w-full mt-0 flex flex-row justify-between items-center">
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
                >
                    <span>{next_text}</span>
                    <SVGWrapper 
                        classes="stroke-theme-gold fill-transparent w-4 h-5 ml-2"
                        svgName="ANGLE_RIGHT"
                    />
                </PrimaryBtn>
            </div>
        </div>
    )
}