import "../../css/sub_components.css";

export function PrimaryBtn({extraClasses="", children}){
    const tw_classes = `primary-btn   `
    return (
        <button
            className={tw_classes + " " + extraClasses}
        >
            {children}
        </button>
    )
}