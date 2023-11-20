import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const CommonContext = createContext();

function CommonContextProvider({children}) {
    
    const [showSidebar, setShowSidebar] = useState(false)
    const LOCATION = useLocation()
    
    useEffect(()=>{
        setShowSidebar(false)
    }, [LOCATION.pathname])

    const [walkthroughStage, setWalkthroughStage] = useState(null)
    
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