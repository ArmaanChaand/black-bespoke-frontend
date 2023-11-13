export function ContainerDiv({children, classes=""}){
    const tw_clases = `w-11/12 sm:w-10/12 mx-auto`
    return (
        <div className={tw_clases + " " + classes}>
            {children}
        </div>
    )
}