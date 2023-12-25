import "../../css/sub_components.css";
import { Link, NavLink } from "react-router-dom";
import { SVGWrapper } from "./SVGWrapper";
import { twMerge } from "tailwind-merge";
import { ImageElm } from "./Images";

export function PrimaryBtn({classes="",disabled=false, handleOnClick, title, children}){
    const tw_classes = `primary-btn   `
    return (
        <button
            className={twMerge(tw_classes,classes)}
            disabled={disabled}
            onClick={handleOnClick}
            title={title}
            
        >
            <span className="sr-only">{title}</span>
            {children}
        </button>
    )
}
export function PrimaryBtnTwo({className="",disabled=false, handleOnClick, title, children}){
    const tw_classes = `second-primary-btn   `
    return (
        <button
            className={twMerge(tw_classes,className)}
            disabled={disabled}
            onClick={handleOnClick}
            title={title}
            
        >
            <span className="sr-only">{title}</span>
            {children}
        </button>
    )
}
export function SecondaryBtn({classes="",disabled=false, title, handleOnClick, children, style={}}){
    const tw_classes = `primary-btn secondary-btn   `
    return (
        <button
        className={twMerge(tw_classes, classes)}
        disabled={disabled}
        onClick={handleOnClick}
        title={title}
        style={style}
        >
            <span className="sr-only">{title}</span>
            {children}
        </button>
    )
}
export function PrimaryAnchorBtn({href="", target="_self",title, classes="",disabled=false, children, style={}}){
    const tw_classes = `primary-btn   `
    return (
        <a  
            href={href}
            target={target}
            className={tw_classes + " " + classes}
            disabled={disabled}
            title={title}
            style={style}
        >
                <span className="sr-only">{title}</span>
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
    gap-3 py-3 px-3 bg-theme-grey rouded-sm fill-transparent stroke-theme-white`
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


export function TabBtn({classes="", img_class, text_class, disabled=false, handleOnClick, title, descr, svg_url="/media/mannequin.svg"}){
    const tw_classes = `flex flex-row justify-start items-center  p-3 border gap-3 
    hover:border-theme-gold hover:bg-theme-gold/5`
    return (
        <button
            className={twMerge(tw_classes, classes)}
            disabled={disabled}
            onClick={handleOnClick}
            title={title}
            
        >
            <span className="sr-only">{title}</span>
            <img src={svg_url} alt={title} className={twMerge("inline-block", img_class)}/>
            <div className={twMerge("flex flex-col justify-center items-start text-start text-theme-white", text_class)}>
                <strong className="font-medium ">{title}</strong>
                <small className="text-theme-grey-beta ">{descr}</small>
            </div>
        </button>
    )
}

export function SelectBtn({
    src, alt, className="", text, handleSelectFabric, isSelected
}){
    const selected_class = isSelected ? "border-theme-gold bg-theme-gold/10" : "bg-theme-grey"
    const tw_classes = `w-full border flex flex-col justify-center items-center py-3 2xl:py-10
     px-2 text-theme-white gap-3 2xl:gap-5 text-base rounded-sm hover:border-theme-gold hover:bg-theme-gold/10 ` + selected_class 
    return(
        <button 
            onClick={handleSelectFabric}
            className={twMerge(tw_classes, className)}
        >
            <ImageElm src={src}
                alt={alt}
                classes="w-12 h-12"
            />
            <span>{text}</span>
        </button>
    )
}

export function SelectColorBtn({
    color, className="", text, handleSelectFabric, isSelected, span_class, para
}){
    const selected_class = isSelected ? "border-theme-gold bg-theme-gold/10" : "bg-theme-grey"
    const tw_classes = `w-full border flex flex-col justify-center items-center py-3 2xl:py-10
     px-2 text-theme-white gap-3 2xl:gap-5 text-base rounded-sm hover:bg-theme-gold/10 ` + selected_class 
    return(
        <button 
            onClick={handleSelectFabric}
            className={twMerge(tw_classes, className)}
        >
            <span 
                className={twMerge("w-10 aspect-square rounded-full", span_class)}
                style={{backgroundColor: color}}
            >

            </span>
            <span>{text}</span>
            {para && <p className="text-xs text-theme-grey-beta">{para}</p>}
        </button>
    )
}