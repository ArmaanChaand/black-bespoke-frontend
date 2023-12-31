export function SuitBuildStep({step="", src="", status="INCOMPLETE", handleOnClick}){
    const status_classes = {
        COMPLETED:"bg-theme-grey/40",
        ACTIVE:"bg-theme-grey",
        INCOMPLETE:"",
    }
    return(
        <li>
            <button 
                onClick={handleOnClick}
                title={step}
                className={"w-9 sm:w-11 2xl:w-16 aspect-square border-[1px] p-1.5 transition-all rounded-full hover:bg-theme-grey/10 " + status_classes[status]}
            >
                <img className="w-full h-full object-contain" src={src} alt={step}/>
            </button>
        </li>
    )
}