import "../../css/elements.css";
export function WalledTexts({children, classes=""}){
    return (<span className={`walled-text   ${classes}`}>{children}</span>)
}