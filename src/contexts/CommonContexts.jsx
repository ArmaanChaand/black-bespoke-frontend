import { createContext, useState } from "react";

export const CommonContext = createContext();

function CommonContextProvider({children}) {
    
    const [showSidebar, setShowSidebar] = useState(false)
    
    
    return (
        <CommonContext.Provider 
            value={{
                showSidebar, setShowSidebar
            }}
        >
            {children}
        </CommonContext.Provider>
    )
}
export default CommonContextProvider;