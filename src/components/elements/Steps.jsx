export function SuitBuildStep({step="", src="", status="INCOMPLETE"}){
    const status_classes = {
        COMPLETED:"bg-theme-grey/40",
        ACTIVE:"bg-theme-grey",
        INCOMPLETE:"",
    }
    return(
        <li 
            className={"w-8 sm:w-9 aspect-square border-[1px] p-1.5 rounded-full " + status_classes[status]}
        >
            <img className="w-full h-full object-contain" src={src} alt={step}/>
        </li>
    )
}