import { ParaPrmBeta, ParaSec } from "../elements/Paras";

export default function DetailOne({src, detail_name, detail, loading_class}){
    return(
        <div className={"h-fit text-center font-normal flex flex-col gap-1  justify-center items-center relative" + loading_class}>
            <img src={src} alt={detail_name} className="w-7 h-auto"/>
        <ParaPrmBeta className="text-center font-normal uppercase text-xs 2xl:text-lg">
            <span >
                {detail_name}
            </span>
            <br/>
            <span className="font-semibold">
            {detail}
            </span>
        </ParaPrmBeta>
        </div>
    )
}