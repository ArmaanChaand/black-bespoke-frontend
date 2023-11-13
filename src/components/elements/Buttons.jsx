import { Link, NavLink } from "react-router-dom";
import "../../css/sub_components.css";

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
