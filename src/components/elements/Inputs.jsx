import { useState } from "react"

export function TextInput({
    type="text",
    classes="", id="", label="", placeholder="", name="" ,is_error=false, bottom_msg="",
    input_left_elm="", input_right_elm=""
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
            style={input_focus ? is_error ? {borderColor: "rgb(220 38 38)"} : {borderColor: "#D9B982"} : {}}
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
            />
            {input_right_elm}
        </div>
        <p className="mt-1 text-xs" style={ is_error ?  {color: "rgb(220 38 38)"} : {}}>
            {bottom_msg}
        </p>
        </div>

    )
}