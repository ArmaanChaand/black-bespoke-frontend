import { useState } from "react"
import { ImageElm } from "./Images"

export function TextInput({
    type="text",
    classes="", id="", label="", placeholder="", name="" ,is_error=false, bottom_msg="",
    input_left_elm="", input_right_elm="", defaultValue=""
}){
    const tw_classes = `w-full text-sm font-theme-gilroy text-theme-white font-medium h-fit`
    const [input_focus, set_input_focus] = useState(false)
    const onInputFocus = (e) => {
        set_input_focus(true)
    }
    const onInputBlur = (e) => {
        set_input_focus(false)
    }
    return(
        <div className={tw_classes + " " + classes}>
        <label
            htmlFor={id}
            className="block mb-1 text-sm text-theme-white/60"
        >
            {label}
        </label>
        <div 
            className="flex flex-row justify-center items-center w-full h-fit rounded overflow-hidden 
            border-[1px] border-transparent"
            style={input_focus ? is_error ? {borderColor: "#ff3333"} : {borderColor: "#D9B982"} : {}}
        >
            {input_left_elm}
            <input
                type={type}
                id={id}
                className="text-base block w-full px-3 py-2 bg-theme-grey outline-none  placeholder:text-theme-white/40 caret-theme-gold"
                placeholder={placeholder}
                name={name}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                defaultValue={defaultValue}
            />
            {input_right_elm}
        </div>
        <p className="mt-1 text-xs" style={ is_error ?  {color: "#ff3333"} : {}}>
            {bottom_msg}
        </p>
        </div>

    )
}

export function StyledRadioLoc({
    src="/tests/test-location.svg", name="Location", citySelected, setCitySelected
}){
    
   

    return (
        <div 
            onClick={()=>setCitySelected(name)}
            className="flex flex-col justify-center items-center overflow-hidden text-theme-white font-theme-gilroy
            border-2 border-theme-white bg-theme-grey cursor-pointer py-5 sm:py-0
            "
            style={citySelected == name ? {borderColor: "#D9B982", backgroundColor: "rgb(217 185 130 / 0.1)"} : {}}
        >
            <ImageElm classes="w-12 sm:w-20 h-auto" src={src} alt={name}/>
            <span>{name}</span>
        </div>
    )
}