import { createContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";


export const CommonContext = createContext();

function CommonContextProvider({children}) {
    
    const [showSidebar, setShowSidebar] = useState(false)
    const LOCATION = useLocation()
    
    useEffect(()=>{
        setShowSidebar(false)
    }, [LOCATION.pathname])
    const allowedStages = ['info', 'loc', 'appt_select',,'date_time', 'address', 'consultation', 'measurement','over']
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

    const [address, set_address] = useState(null)
    const [appointment, set_appointment] = useState(null)

    const steps = ["fabric", "blazer", "waistcoat_pattern", "waistcoat_lapel", "pant_style", "shirt_color", "monogram"]
    const [suitBuildSteps, set_suitBuildSteps] = useState([
        {
            id: "fabric",
            value:null,
        },
        {
            id: "blazer",
            value:null,
        },
        {
            id: "waistcoat_pattern",
            value:null,
        },
        {
            id: "waistcoat_lapel",
            value:null,
        },
        {
            id: "pant_style",
            value:null,
        },
        {
            id: "shirt_color",
            value:null,
        },
        {
            id: "monogram",
            value:null,
        },
    ])

    const updateSuitBuildStep = (id, updatedValue) => {
        const updatedSteps = suitBuildSteps.map(step => {
          if (step.id === id) {
            return { ...step, value: updatedValue };
          }
          return step;
        });
      
        set_suitBuildSteps(updatedSteps);
    };

    function findFirstNullSuitBuildStep() {
        for (const step of suitBuildSteps) {
            if (step.value === null) {
                return step.id;
            }
        }
        return null;
    };

    
    return (
        <CommonContext.Provider 
            value={{
                showSidebar, setShowSidebar, 
                walkthroughStage, setWalkthroughStage,
                address, set_address,
                appointment, set_appointment,
                steps,
                suitBuildSteps, set_suitBuildSteps,
                updateSuitBuildStep, findFirstNullSuitBuildStep
            }}
        >
            {children}
        </CommonContext.Provider>
    )
}
export default CommonContextProvider;