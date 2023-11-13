import { Link, NavLink } from "react-router-dom";
import "../../css/sub_components.css";
import { SVGWrapper } from "./SVGWrapper";

export function PrimaryBtn({classes="",disabled=false, handleOnClick, children}){
    const tw_classes = `primary-btn   `
    return (
        <button
            className={tw_classes + " " + classes}
            disabled={disabled}
            onClick={handleOnClick}
        >
            {children}
        </button>
    )
}
export function SecondaryBtn({classes="",disabled=false, handleOnClick, children}){
    const tw_classes = `primary-btn secondary-btn   `
    return (
        <button
        className={tw_classes + " " + classes}
        disabled={disabled}
        onClick={handleOnClick}
        >
            {children}
        </button>
    )
}
export function PrimaryAnchorBtn({href="", target="_self", classes="",disabled=false, children}){
    const tw_classes = `primary-btn   `
    return (
        <a  
            href={href}
            target={target}
            className={tw_classes + " " + classes}
            disabled={disabled}
        >
            {children}
        </a>
    )
}
export function LinkAnchor({href="", target="_self", classes="", children}){
    const tw_classes = `hover:underline text-sm   `
    return (
        <a 
            href={href}
            target={target}
            className={tw_classes + " " + classes}
        >
            {children}
        </a>
    )
}
export function LinkBtn({href="", classes="", children}){
    const tw_classes = `hover:underline text-sm   `
    return (
        <Link 
            to={href}
            className={tw_classes + " " + classes}
        >
            {children}
        </Link>
    )
}
export function NavLinkBtn({href="", classes="", children}){
    const tw_classes = "navlink-btn " + classes
    return (
        <NavLink 
            to={href}
            className={({isActive}) => isActive ? tw_classes + " ACTIVE " : tw_classes}
        >
            {children}
        </NavLink>
    )
}

export function LinkIconTextArrowBtn({
    href="#", classes="", children, 
    left_svg_name="", left_svg_classes="w-4 h-4",
    right_svg_name="ANGLE_RIGHT", right_svg_classes="w-4 h-4 ml-auto",
}){
    const tw_classes = `w-full flex flex-row justify-between items-center text-base text-theme-white font-theme-gilroy
    gap-3 py-3 px-3 bg-theme-grey rouded-sm`
    return (
        <Link 
            to={href}
            className={tw_classes + " " + classes}
        >
            <SVGWrapper classes={left_svg_classes} svgName={left_svg_name} />
            {children}
            <SVGWrapper classes={right_svg_classes} svgName={right_svg_name}/>
        </Link>
    )
}