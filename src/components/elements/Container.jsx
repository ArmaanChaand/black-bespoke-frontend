import { twMerge } from "tailwind-merge"

export function ContainerDiv({children, classes="", style}){
    const tw_clases = `w-11/12 sm:w-10/12 mx-auto`
    return (
        <div className={twMerge(tw_clases, classes)} style={style}>
            {children}
        </div>
    )
}