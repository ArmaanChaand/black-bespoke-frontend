import { createContext, useState } from "react";

export const CommonContext = createContext();

function CommonContextProvider({children}) {
    const [testData, setTestData] = useState("TEST CONTEXT")
    
    return (
        <CommonContext.Provider 
            value={{
                testData, setTestData
            }}
        >
            {children}
        </CommonContext.Provider>
    )
}
export default CommonContextProvider;