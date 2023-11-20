import { useEffect } from "react";


export function withHiddenVertScrollbar(WrappedComponent){
    return (props) => {
        useEffect(()=>{
            document.body.style.overflowY = 'hidden';
  
        
        return () => {
            document.body.style.overflowY = 'auto';
        };
        }, []);
        return <WrappedComponent {...props} />
    };
};