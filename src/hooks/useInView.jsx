import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function useIsInView(options){
    const [isInView, setIsInView] = useState(false);
    const targetRef = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsInView(entry.isIntersecting);
          });
        },
        options || { threshold: 0.5 } // You can customize the threshold as needed
      );
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, [options]);
  
    return [targetRef, isInView];
  };

// Usage example
/*
function MyComponent() {
    const [targetRef, isInView] = useIsInView();
  
    return (
      <div ref={targetRef}>
        {isInView ? 'In View!' : 'Out of View!'}      
      </div>
    );
  }
*/