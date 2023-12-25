import { twMerge } from "tailwind-merge";
import "../../css/elements.css";
export function LinedHeader({classes="", leftLineClasses="", rightLineClasses="", children}){
    const tw_classes_main = twMerge("lined-headers ", classes)
    const tw_classes_left_line = twMerge("gold-line",  leftLineClasses)
    const tw_classes_right_line = twMerge("gold-line ", rightLineClasses)
    return (
        <div className={tw_classes_main}>
            <span className={tw_classes_left_line}></span>
            <h2 className="flex-none">{children}</h2>
            <span className={tw_classes_right_line}></span>
        </div>
    )
}
export function LinedHeaderBeta({className="", leftLineClasses="", rightLineClasses="", children}){
    const tw_classes_main = `text-theme-white font-theme-petrona font-bold text-2xl sm:text-4xl relative flex flex-row justify-center items-center gap-3 sm400:gap-4 w-full`
    let gold_line = `inline-block h-0.5 w-full bg-theme-gold `
    const tw_classes_left_line = gold_line + ``
    const tw_classes_right_line = gold_line + ``
    return (
        <div className={twMerge(tw_classes_main, className)}>
            <span className={twMerge(tw_classes_left_line,  leftLineClasses)}></span>
            <h2 className="flex-none">{children}</h2>
            <span className={twMerge(tw_classes_right_line, rightLineClasses)}></span>
        </div>
    )
}

/**
 * SubHeader Component
 *
 * SubHeader (h3) with font CIRKA ...
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.classes - Additional CSS classes to apply. [text-xl sm:text-2xl]
 * @param {React.ReactNode} props.children - The content to be displayed within the paragraph.
 *
 * @returns {React.ReactNode} - Rendered ParaSec component.
 */

export function SubHeader({classes="text-xl sm:text-2xl", children}){
    const tw_classes = `text-theme-white font-medium font-theme-cirka` 
    return (
        <h3 className={tw_classes + " " + classes}>
            {children}
        </h3>
    )
}

/**
 * SubHeader Component
 *
 * SubHeader (h3) with font PETRONA ...
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.classes - Additional CSS classes to apply.
 * @param {React.ReactNode} props.children - The content to be displayed within the paragraph.
 *
 * @returns {React.ReactNode} - Rendered ParaSec component.
 */

export function SubHeaderBeta({className="", children}){
    const tw_classes = `text-xl sm:text-2xl text-theme-white font-medium font-theme-cirka` 
    return (
        <h3 className={twMerge(tw_classes, className)}>
            {children}
        </h3>
    )
}
