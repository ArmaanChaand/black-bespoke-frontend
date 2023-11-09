import "../../css/sub_components.css";

export function BlurredInfoBox({serial,heading,para, extraClass=""}){
    return (
        <div
              className={`blurred-info-box p-5 bg-theme-black/20 backdrop-blur-lg  rounded-sm text-theme-white     ${extraClass}`}
            >
                <div className="text-lg font-theme-cirka">
                    <span className="text-xl mr-2 text-theme-gold">{serial}</span>
                    {heading}  
                </div>
                <div className="text-sm font-theme-gilroy font-thin text-theme-white/90 text-justify mt-3">
                    {para}
                </div>
        </div>
    )
}