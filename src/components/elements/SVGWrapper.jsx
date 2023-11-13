import "../../css/elements.css";
import { SVG_icons } from "../../assets/js_utils/svg_icons"

/**
 * SVGWrapper Component
 *
 * This will return SVGs(wrapped inside div) which already defined.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.classes - Additional CSS classes to apply. Already applied "w-7 h-7 inline-block".
 * @param {string} props.svgName - Name of the SVG icon. 
 * Options are: "BRAND, IG, FB, TWITTER, GITHUB, MENU"
 * @param {React.ReactNode} props.children - Expects no children.
 *
 * @returns {React.ReactNode} - Rendered SVGWrapper component.
 */
export function SVGWrapper({classes="", svgName="BRAND"}){
    const tw_classes = `svg-wrapper`
    console.error = function() {};
    return (
        <div className={tw_classes + " " + classes}>
            {SVG_icons[svgName]}
        </div>
    )
}