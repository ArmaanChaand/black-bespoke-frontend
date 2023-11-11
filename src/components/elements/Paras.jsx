// Primary = Cirka
// Secondary = Gilory
/**
 * ParaSec Component
 *
 * This component is used to display paragraphs with specific styling and font GILROY.
 * It utilizes the tailwind CSS classes for text styling.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.classes - Additional CSS classes to apply.
 * @param {React.ReactNode} props.children - The content to be displayed within the paragraph.
 *
 * @returns {React.ReactNode} - Rendered ParaSec component.
 */
export function ParaSec({classes="",children}){
    const tw_classes = `text-sm font-theme-gilroy font-thin text-theme-white/90 text-justify w-fit inline-block `

    return (
        <p 
            className={tw_classes + " " + classes}
        >
            {children}
        </p>    
    )
}
/**
 * ParaSec Component
 *
 * This component is used to display paragraphs with specific styling and font CIRKA.
 * It utilizes the tailwind CSS classes for text styling.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.classes - Additional CSS classes to apply.
 * @param {React.ReactNode} props.children - The content to be displayed within the paragraph.
 *
 * @returns {React.ReactNode} - Rendered ParaSec component.
 */
export function ParaPrm({classes="",children}){
    const tw_classes = `font-light text-theme-white text-base font-theme-cirka  w-fit inline-block`

    return (
        <p className={tw_classes + " " + classes}>
            {children}
        </p>    
    )
}