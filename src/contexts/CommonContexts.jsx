import { createContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const CommonContext = createContext();

function CommonContextProvider({children}) {
    
    const [showSidebar, setShowSidebar] = useState(false)
    const LOCATION = useLocation()
    
    useEffect(()=>{
        setShowSidebar(false)
    }, [LOCATION.pathname])
    const allowedStages = ['info', 'loc', 'appt_select', 'callback','appt_time', 'address', 'consultation', 'measurement']
    const [walkthroughStage, setWalkthroughStage] = useState(null)
    const [consult_stage] = useSearchParams()
    useEffect(()=>{
        const url_param = consult_stage.get('consult_stage')
        if (url_param && allowedStages.includes(url_param)){
            setWalkthroughStage(url_param)
        } else{
            setWalkthroughStage(null)
        }
    }, [consult_stage])
    
    return (
        <CommonContext.Provider 
            value={{
                showSidebar, setShowSidebar, 
                walkthroughStage, setWalkthroughStage,
            }}
        >
            {children}
        </CommonContext.Provider>
    )
}
export default CommonContextProvider;