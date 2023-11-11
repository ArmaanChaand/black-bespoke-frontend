import "../../css/sub_components.css";
import { ParaSec } from "../elements/Paras";

export function BlurredInfoBox({serial,heading,para, classes=""}){
    return (
        <div
              className={`blurred-info-box p-5 bg-theme-black/20 backdrop-blur-lg  rounded-sm text-theme-white     ${classes}`}
            >
                <h4 className="text-lg font-theme-cirka">
                    <span className="text-xl mr-2 text-theme-gold">{serial}</span>
                    {heading}  
                </h4>
                <ParaSec
                    classes="mt-3"
                >
                    {para}
                </ParaSec>
        </div>
    )
}