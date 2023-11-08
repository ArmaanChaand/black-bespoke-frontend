import "../css/sub_components.css";

export function PrimaryBtn({text, extraClass=""}){
    return (
        <button
              className={`primary-btn   ${extraClass}`}
            >
                {text}
        </button>
    )
}