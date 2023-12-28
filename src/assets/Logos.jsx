import { twMerge } from "tailwind-merge"
import { SVGWrapper } from "../components/elements/SVGWrapper"


export function FullSVGLogo({classes="", textSvgClasses=""}){
    const tw_classes = `flex flex-row justify-center items-center`
    return (
        <div className={tw_classes + " " + classes}>
            <SVGWrapper classes="w-7 h-7 mr-3 fill-theme-gold  stroke-none" svgName="BRAND" />
            <svg xmlns="http://www.w3.org/2000/svg" className={"w-48 h-7  " + textSvgClasses} viewBox="0 0 192 16" fill="none">
                <path d="M11.307 7.70982C12.5331 7.10287 13.4033 5.92067 13.4033 4.22414C13.4033 1.69641 11.3948 0.18026 7.79453 0.18026H0.779297V15.8219H8.24304C12.1992 15.8219 14.2345 14.279 14.2345 11.5977C14.2345 9.52091 13.0694 8.2022 11.307 7.70982ZM3.01695 1.98648H7.59709C9.87375 1.98648 11.1705 2.83961 11.1705 4.49226C11.1705 6.14492 9.87375 6.99318 7.59709 6.99318H3.01695V1.98648ZM8.15528 14.0084H3.01695V8.80427H8.15528C10.6343 8.80427 11.9749 9.60867 11.9749 11.4198C11.9749 13.226 10.6343 14.0084 8.15528 14.0084Z" fill="#D9B982"/>
                <path d="M18.5736 13.8771V0.178116H16.3359V15.8198H27.0392V13.8771H18.5736Z" fill="#D9B982"/>
                <path d="M37.9647 0.18026H35.7539L28.668 15.8219H30.9714L32.6948 11.9097L33.4772 10.1254L36.8483 2.45937L39.3566 8.15345L39.4126 8.27777L40.2243 10.1254L41.0068 11.9097L42.7253 15.8219H45.0726L37.9647 0.18026Z" fill="#D9B982"/>
                <path d="M54.2782 14.0085C50.7487 14.0085 48.1332 11.4637 48.1332 8C48.1332 4.53626 50.7487 1.9866 54.2782 1.9866C56.0015 1.9866 57.4738 2.5716 58.6828 3.84156L60.1332 2.4351C58.7048 0.826323 56.6036 0 54.1905 0C49.4299 0 45.9004 3.37599 45.9004 8C45.9004 12.624 49.4299 16 54.1685 16C56.6036 16 58.7048 15.1517 60.1332 13.543L58.6828 12.1316C57.4738 13.4065 56.0015 14.0085 54.2782 14.0085Z" fill="#D9B982"/>
                <path d="M69.9221 7.21743L76.6034 0.18026H74.0538L65.5638 8.9164V0.18026H63.3262V15.8219H65.5638V11.7781L68.4206 8.87253L74.4121 15.8219H77.0276L69.9221 7.21743Z" fill="#D9B982"/>
                <path d="M95.933 7.70982C97.164 7.10287 98.0342 5.92067 98.0342 4.22414C98.0342 1.69641 96.0256 0.18026 92.4254 0.18026H85.4102V15.8219H92.8739C96.83 15.8219 98.8605 14.279 98.8605 11.5977C98.8605 9.52091 97.7002 8.2022 95.933 7.70982ZM87.6429 1.98648H92.2279C94.5046 1.98648 95.8014 2.83961 95.8014 4.49226C95.8014 6.14492 94.5046 6.99318 92.2279 6.99318H87.6429V1.98648ZM92.7861 14.0084H87.6429V8.80427H92.7861C95.2651 8.80427 96.6058 9.60867 96.6058 11.4198C96.6058 13.226 95.2651 14.0084 92.7861 14.0084Z" fill="#D9B982"/>
                <path d="M112.065 13.8768H103.119V15.8196H112.065V13.8768Z" fill="#D9B982"/>
                <path d="M112.165 0.18026H103.119V2.12299H112.165V0.18026Z" fill="#D9B982"/>
                <path d="M112.133 6.92734H103.119V8.82617H112.133V6.92734Z" fill="#D9B982"/>
                <path d="M191.788 13.8768H182.842V15.8196H191.788V13.8768Z" fill="#D9B982"/>
                <path d="M191.887 0.180222H182.842V2.12295H191.887V0.180222Z" fill="#D9B982"/>
                <path d="M191.856 6.92734H182.842V8.82617H191.856V6.92734Z" fill="#D9B982"/>
                <path d="M118.443 4.37782C118.443 3.01524 119.581 1.89885 122.24 1.89885C123.625 1.89885 125.168 2.2986 126.53 3.17368L127.269 1.38452C125.972 0.492381 124.073 0 122.24 0C118.126 0 116.249 2.05729 116.249 4.47045C116.249 10.2791 125.726 7.8635 125.726 11.688C125.726 13.0506 124.566 14.1012 121.858 14.1012C119.849 14.1012 117.858 13.3407 116.697 12.2901L115.871 14.0305C117.124 15.1956 119.466 16 121.858 16C125.994 16 127.915 13.9427 127.915 11.5515C127.915 5.81109 118.443 8.20232 118.443 4.37782Z" fill="#D9B982"/>
                <path d="M137.277 0.18026H131.176V15.8219H133.413V11.0834H137.277C141.343 11.0834 143.805 9.03096 143.805 5.63303C143.805 2.2351 141.345 0.18026 137.277 0.18026ZM137.211 9.13821H133.413V2.12298H137.211C140.073 2.12298 141.567 3.39782 141.567 5.63061C141.569 7.86339 140.073 9.13821 137.211 9.13821Z" fill="#D9B982"/>
                <path d="M154.373 0C149.569 0 146.039 3.41987 146.039 8C146.039 12.5801 149.569 16 154.373 16C159.134 16 162.663 12.6021 162.663 8C162.663 3.39793 159.134 0 154.373 0ZM154.373 14.0085C150.865 14.0085 148.272 11.4637 148.272 8C148.272 4.53626 150.865 1.9866 154.373 1.9866C157.837 1.9866 160.43 4.53626 160.43 8C160.43 11.4637 157.837 14.0085 154.373 14.0085Z" fill="#D9B982"/>
                <path d="M172.678 7.21743L179.359 0.18026H176.809L168.317 8.9164V0.18026H166.084V15.8219H168.317V11.7781L171.178 8.87253L177.165 15.8219H179.781L172.678 7.21743Z" fill="#D9B982"/>
                <path d="M39.4111 8.27461L39.3555 8.1512H39.3603L39.4111 8.27461Z" fill="#D9B982"/>
            </svg>
        </div>
    )
}
export function BrandTextLogo({className="", textSvgClasses=""}){
    const tw_classes = `flex flex-row justify-center items-center`
    return (
        <div className={twMerge(tw_classes, className)}>
            <svg xmlns="http://www.w3.org/2000/svg" className={"w-48 h-7  " + textSvgClasses} viewBox="0 0 192 16" fill="none">
                <path d="M11.307 7.70982C12.5331 7.10287 13.4033 5.92067 13.4033 4.22414C13.4033 1.69641 11.3948 0.18026 7.79453 0.18026H0.779297V15.8219H8.24304C12.1992 15.8219 14.2345 14.279 14.2345 11.5977C14.2345 9.52091 13.0694 8.2022 11.307 7.70982ZM3.01695 1.98648H7.59709C9.87375 1.98648 11.1705 2.83961 11.1705 4.49226C11.1705 6.14492 9.87375 6.99318 7.59709 6.99318H3.01695V1.98648ZM8.15528 14.0084H3.01695V8.80427H8.15528C10.6343 8.80427 11.9749 9.60867 11.9749 11.4198C11.9749 13.226 10.6343 14.0084 8.15528 14.0084Z" fill="#D9B982"/>
                <path d="M18.5736 13.8771V0.178116H16.3359V15.8198H27.0392V13.8771H18.5736Z" fill="#D9B982"/>
                <path d="M37.9647 0.18026H35.7539L28.668 15.8219H30.9714L32.6948 11.9097L33.4772 10.1254L36.8483 2.45937L39.3566 8.15345L39.4126 8.27777L40.2243 10.1254L41.0068 11.9097L42.7253 15.8219H45.0726L37.9647 0.18026Z" fill="#D9B982"/>
                <path d="M54.2782 14.0085C50.7487 14.0085 48.1332 11.4637 48.1332 8C48.1332 4.53626 50.7487 1.9866 54.2782 1.9866C56.0015 1.9866 57.4738 2.5716 58.6828 3.84156L60.1332 2.4351C58.7048 0.826323 56.6036 0 54.1905 0C49.4299 0 45.9004 3.37599 45.9004 8C45.9004 12.624 49.4299 16 54.1685 16C56.6036 16 58.7048 15.1517 60.1332 13.543L58.6828 12.1316C57.4738 13.4065 56.0015 14.0085 54.2782 14.0085Z" fill="#D9B982"/>
                <path d="M69.9221 7.21743L76.6034 0.18026H74.0538L65.5638 8.9164V0.18026H63.3262V15.8219H65.5638V11.7781L68.4206 8.87253L74.4121 15.8219H77.0276L69.9221 7.21743Z" fill="#D9B982"/>
                <path d="M95.933 7.70982C97.164 7.10287 98.0342 5.92067 98.0342 4.22414C98.0342 1.69641 96.0256 0.18026 92.4254 0.18026H85.4102V15.8219H92.8739C96.83 15.8219 98.8605 14.279 98.8605 11.5977C98.8605 9.52091 97.7002 8.2022 95.933 7.70982ZM87.6429 1.98648H92.2279C94.5046 1.98648 95.8014 2.83961 95.8014 4.49226C95.8014 6.14492 94.5046 6.99318 92.2279 6.99318H87.6429V1.98648ZM92.7861 14.0084H87.6429V8.80427H92.7861C95.2651 8.80427 96.6058 9.60867 96.6058 11.4198C96.6058 13.226 95.2651 14.0084 92.7861 14.0084Z" fill="#D9B982"/>
                <path d="M112.065 13.8768H103.119V15.8196H112.065V13.8768Z" fill="#D9B982"/>
                <path d="M112.165 0.18026H103.119V2.12299H112.165V0.18026Z" fill="#D9B982"/>
                <path d="M112.133 6.92734H103.119V8.82617H112.133V6.92734Z" fill="#D9B982"/>
                <path d="M191.788 13.8768H182.842V15.8196H191.788V13.8768Z" fill="#D9B982"/>
                <path d="M191.887 0.180222H182.842V2.12295H191.887V0.180222Z" fill="#D9B982"/>
                <path d="M191.856 6.92734H182.842V8.82617H191.856V6.92734Z" fill="#D9B982"/>
                <path d="M118.443 4.37782C118.443 3.01524 119.581 1.89885 122.24 1.89885C123.625 1.89885 125.168 2.2986 126.53 3.17368L127.269 1.38452C125.972 0.492381 124.073 0 122.24 0C118.126 0 116.249 2.05729 116.249 4.47045C116.249 10.2791 125.726 7.8635 125.726 11.688C125.726 13.0506 124.566 14.1012 121.858 14.1012C119.849 14.1012 117.858 13.3407 116.697 12.2901L115.871 14.0305C117.124 15.1956 119.466 16 121.858 16C125.994 16 127.915 13.9427 127.915 11.5515C127.915 5.81109 118.443 8.20232 118.443 4.37782Z" fill="#D9B982"/>
                <path d="M137.277 0.18026H131.176V15.8219H133.413V11.0834H137.277C141.343 11.0834 143.805 9.03096 143.805 5.63303C143.805 2.2351 141.345 0.18026 137.277 0.18026ZM137.211 9.13821H133.413V2.12298H137.211C140.073 2.12298 141.567 3.39782 141.567 5.63061C141.569 7.86339 140.073 9.13821 137.211 9.13821Z" fill="#D9B982"/>
                <path d="M154.373 0C149.569 0 146.039 3.41987 146.039 8C146.039 12.5801 149.569 16 154.373 16C159.134 16 162.663 12.6021 162.663 8C162.663 3.39793 159.134 0 154.373 0ZM154.373 14.0085C150.865 14.0085 148.272 11.4637 148.272 8C148.272 4.53626 150.865 1.9866 154.373 1.9866C157.837 1.9866 160.43 4.53626 160.43 8C160.43 11.4637 157.837 14.0085 154.373 14.0085Z" fill="#D9B982"/>
                <path d="M172.678 7.21743L179.359 0.18026H176.809L168.317 8.9164V0.18026H166.084V15.8219H168.317V11.7781L171.178 8.87253L177.165 15.8219H179.781L172.678 7.21743Z" fill="#D9B982"/>
                <path d="M39.4111 8.27461L39.3555 8.1512H39.3603L39.4111 8.27461Z" fill="#D9B982"/>
            </svg>
        </div>
    )
}

export function FullLogoSlogan({classes, textSvgClasses="w-72 h-24"}){
    const tw_classes = `flex flex-row justify-center items-center`
    return (
        <div className={tw_classes + " " + classes}>
        <svg xmlns="http://www.w3.org/2000/svg" className={textSvgClasses} viewBox="0 0 250 90" fill="none">
  <path d="M137.506 23.5429C136.69 22.9971 135.851 22.646 135.162 22.4545C135.908 22.2502 136.619 21.8959 137.254 21.4075C138.491 20.4564 139.425 18.985 139.696 17.0731C139.751 16.6996 139.776 16.3134 139.776 15.908C139.776 15.5761 139.757 15.2505 139.722 14.9345C139.288 11.1363 136.259 8.5477 130.972 8.5477H129.458V0H118.855C113.642 0 109.155 2.6524 109.155 8.64026C109.155 11.8034 110.759 13.7919 112.462 14.9313C113.291 15.4867 114.142 15.8442 114.841 16.0421C114.107 16.2464 113.403 16.5879 112.774 17.0699C111.528 18.0178 110.584 19.4893 110.31 21.4044C110.252 21.7842 110.227 22.1768 110.227 22.5885C110.227 22.9141 110.243 23.2301 110.278 23.5397C110.702 27.3507 113.734 29.9489 119.031 29.9489H120.545V38.4934H131.148C136.361 38.4934 140.848 35.841 140.848 29.8531C140.844 26.6709 139.218 24.6792 137.506 23.5429ZM111.547 8.51578C111.547 4.11106 114.837 2.14171 118.772 2.14171H127.19V8.55089H120.542V14.9345H120.01C113.986 14.9345 111.547 12.3236 111.547 8.51578ZM127.19 14.9345H122.806V10.6894H127.19V14.9345ZM120.542 27.8104H118.9C115.236 27.8104 113.208 25.9782 112.755 23.5429C112.692 23.195 112.66 22.8343 112.66 22.464C112.66 22.0938 112.682 21.7427 112.73 21.4075C113.116 18.6083 115.179 17.0731 119.799 17.0731H129.461V10.6894H131.103C134.757 10.6894 136.785 12.5119 137.241 14.9345C137.311 15.2888 137.343 15.6591 137.343 16.0357C137.343 16.3996 137.321 16.7443 137.276 17.0731C136.922 19.6967 135.105 21.216 131.1 21.4075C130.813 21.4203 130.513 21.4267 130.204 21.4267H122.809V21.4075H120.542V27.8104ZM131.227 36.358H122.809V29.9521H129.458V23.5652H127.19V27.8104H122.806V23.5652H127.19V23.5429H129.458V23.5652H129.99C136.017 23.5652 138.453 26.1761 138.453 29.984C138.453 34.3919 135.159 36.358 131.227 36.358Z" fill="#D9B982"/>
  <path d="M13.7719 58.7239C15.3758 57.9292 16.5142 56.3811 16.5142 54.1596C16.5142 50.8497 13.8867 48.8644 9.17703 48.8644H0V69.3463H9.76374C14.939 69.3463 17.6015 67.3259 17.6015 63.8149C17.6015 61.0955 16.0773 59.3687 13.7719 58.7239ZM2.92721 51.2295H8.91874C11.897 51.2295 13.5933 52.3467 13.5933 54.5107C13.5933 56.6748 11.897 57.7855 8.91874 57.7855H2.92721V51.2295ZM9.64895 66.9716H2.92721V60.1571H9.64895C12.8918 60.1571 14.6456 61.2104 14.6456 63.5819C14.6456 65.947 12.8918 66.9716 9.64895 66.9716Z" fill="#D9B982"/>
  <path d="M23.2778 66.7995V48.8615H20.3506V69.3434H34.3521V66.7995H23.2778Z" fill="#D9B982"/>
  <path d="M48.6441 48.8644H45.7519L36.4824 69.3463H39.4957L41.7501 64.2234L42.7737 61.887L47.1836 51.8487L50.4648 59.3048L50.5381 59.4676L51.6 61.887L52.6235 64.2234L54.8716 69.3463H57.9423L48.6441 48.8644Z" fill="#D9B982"/>
  <path d="M69.9849 66.9718C65.3677 66.9718 61.9462 63.6396 61.9462 59.104C61.9462 54.5684 65.3677 51.2298 69.9849 51.2298C72.2393 51.2298 74.1653 51.9958 75.7468 53.6587L77.6441 51.817C75.7755 49.7104 73.0269 48.6284 69.8701 48.6284C63.6426 48.6284 59.0254 53.0491 59.0254 59.104C59.0254 65.1589 63.6426 69.5795 69.8414 69.5795C73.0269 69.5795 75.7755 68.4688 77.6441 66.3622L75.7468 64.5141C74.1653 66.1834 72.2393 66.9718 69.9849 66.9718Z" fill="#D9B982"/>
  <path d="M90.4499 58.0792L99.19 48.8644H95.8547L84.7485 60.3039V48.8644H81.8213V69.3463H84.7485V64.0511L88.4856 60.2464L96.3234 69.3463H99.7449L90.4499 58.0792Z" fill="#D9B982"/>
  <path d="M124.476 58.7239C126.087 57.9292 127.225 56.3811 127.225 54.1596C127.225 50.8497 124.598 48.8644 119.888 48.8644H110.711V69.3463H120.475C125.65 69.3463 128.306 67.3259 128.306 63.8149C128.306 61.0955 126.788 59.3687 124.476 58.7239ZM113.632 51.2295H119.63C122.608 51.2295 124.304 52.3467 124.304 54.5107C124.304 56.6748 122.608 57.7855 119.63 57.7855H113.632V51.2295ZM120.36 66.9716H113.632V60.1571H120.36C123.603 60.1571 125.357 61.2104 125.357 63.5819C125.357 65.947 123.603 66.9716 120.36 66.9716Z" fill="#D9B982"/>
  <path d="M145.579 66.7992H133.877V69.3431H145.579V66.7992Z" fill="#D9B982"/>
  <path d="M145.71 48.8644H133.877V51.4083H145.71V48.8644Z" fill="#D9B982"/>
  <path d="M145.669 57.6993H133.877V60.1858H145.669V57.6993Z" fill="#D9B982"/>
  <path d="M249.868 66.7992H238.166V69.3431H249.868V66.7992Z" fill="#D9B982"/>
  <path d="M250 48.8644H238.167V51.4083H250V48.8644Z" fill="#D9B982"/>
  <path d="M249.958 57.6993H238.166V60.1858H249.958V57.6993Z" fill="#D9B982"/>
  <path d="M153.921 54.3609C153.921 52.5767 155.41 51.1149 158.889 51.1149C160.7 51.1149 162.718 51.6383 164.501 52.7842L165.467 50.4414C163.771 49.2732 161.287 48.6284 158.889 48.6284C153.506 48.6284 151.051 51.3223 151.051 54.4822C151.051 62.0883 163.448 58.9252 163.448 63.9332C163.448 65.7174 161.931 67.0931 158.388 67.0931C155.761 67.0931 153.155 66.0973 151.638 64.7216L150.557 67.0005C152.196 68.5262 155.26 69.5795 158.388 69.5795C163.799 69.5795 166.312 66.8856 166.312 63.7545C166.312 56.2377 153.921 59.3689 153.921 54.3609Z" fill="#D9B982"/>
  <path d="M178.559 48.8644H170.578V69.3463H173.505V63.1414H178.559C183.878 63.1414 187.099 60.4539 187.099 56.0045C187.099 51.5551 183.881 48.8644 178.559 48.8644ZM178.473 60.5943H173.505V51.4083H178.473C182.217 51.4083 184.171 53.0776 184.171 56.0013C184.175 58.925 182.217 60.5943 178.473 60.5943Z" fill="#D9B982"/>
  <path d="M200.926 48.6284C194.641 48.6284 190.023 53.1065 190.023 59.104C190.023 65.1014 194.641 69.5795 200.926 69.5795C207.153 69.5795 211.77 65.1301 211.77 59.104C211.77 53.0778 207.153 48.6284 200.926 48.6284ZM200.926 66.9718C196.337 66.9718 192.944 63.6396 192.944 59.104C192.944 54.5684 196.337 51.2298 200.926 51.2298C205.457 51.2298 208.849 54.5684 208.849 59.104C208.849 63.6396 205.457 66.9718 200.926 66.9718Z" fill="#D9B982"/>
  <path d="M224.87 58.0792L233.61 48.8644H230.274L219.165 60.3039V48.8644H216.244V69.3463H219.165V64.0511L222.908 60.2464L230.74 69.3463H234.161L224.87 58.0792Z" fill="#D9B982"/>
  <path d="M50.5365 59.4643L50.4639 59.3019H50.4702L50.5365 59.4643Z" fill="#D9B982"/>
  <path d="M24.755 82.8656H22V81.8666H28.6452V82.8656H25.8902V89.91H24.755V82.8656Z" fill="#D9B982"/>
  <path d="M37.5993 81.8676V89.911H36.4514V86.3265H31.8374V89.911H30.6895V81.8676H31.8374V85.3243H36.4514V81.8676H37.5993Z" fill="#D9B982"/>
  <path d="M46.6329 88.9081V89.9072H40.8008V81.8638H46.4703V82.8628H41.9487V85.3333H45.976V86.31H41.9487V88.9049H46.6329V88.9081Z" fill="#D9B982"/>
  <path d="M58.2832 87.8963H54.0135L53.1303 89.9072H51.9473L55.5856 81.8638H56.7207L60.3718 89.9072H59.1664L58.2832 87.8963ZM57.8814 86.9771L56.1468 83.0352L54.4121 86.9771H57.8814Z" fill="#D9B982"/>
  <path d="M67.7323 89.9072L65.9977 87.4367C65.8382 87.4495 65.666 87.459 65.4938 87.459H63.5073V89.9072H62.3594V81.8638H65.4938C67.5824 81.8638 68.8452 82.9203 68.8452 84.6662C68.8452 85.9078 68.201 86.8047 67.0786 87.2069L68.9855 89.9072H67.7323ZM67.6972 84.6694C67.6972 83.5203 66.9288 82.866 65.4588 82.866H63.5073V86.4855H65.4588C66.9288 86.4855 67.6972 85.8185 67.6972 84.6694Z" fill="#D9B982"/>
  <path d="M72.9777 82.8666H70.2227V81.8676H76.8679V82.8666H74.1129V89.911H72.9777V82.8666Z" fill="#D9B982"/>
  <path d="M82.1377 85.8856C82.1377 83.5301 83.9521 81.7714 86.4201 81.7714C88.8658 81.7714 90.677 83.5173 90.677 85.8856C90.677 88.254 88.8626 89.9999 86.4201 89.9999C83.9521 89.9999 82.1377 88.2412 82.1377 85.8856ZM89.5291 85.8856C89.5291 84.1046 88.1962 82.7959 86.4201 82.7959C84.6185 82.7959 83.2856 84.1046 83.2856 85.8856C83.2856 87.6667 84.6185 88.9753 86.4201 88.9753C88.1994 88.9785 89.5291 87.6667 89.5291 85.8856Z" fill="#D9B982"/>
  <path d="M94.3764 82.8666V85.669H98.4037V86.6585H94.3764V89.911H93.2285V81.8676H98.898V82.8666H94.3764Z" fill="#D9B982"/>
  <path d="M111.675 84.6694C111.675 86.4153 110.413 87.4718 108.324 87.4718H106.337V89.9072H105.189V81.8638H108.324C110.413 81.867 111.675 82.9235 111.675 84.6694ZM110.527 84.6694C110.527 83.5203 109.759 82.866 108.289 82.866H106.337V86.4728H108.289C109.756 86.4728 110.527 85.8185 110.527 84.6694Z" fill="#D9B982"/>
  <path d="M119.984 88.9081V89.9072H114.152V81.8638H119.822V82.8628H115.3V85.3333H119.328V86.31H115.3V88.9049H119.984V88.9081Z" fill="#D9B982"/>
  <path d="M128.008 89.9072L126.273 87.4367C126.114 87.4495 125.941 87.459 125.769 87.459H123.783V89.9072H122.635V81.8638H125.769C127.858 81.8638 129.121 82.9203 129.121 84.6662C129.121 85.9078 128.476 86.8047 127.354 87.2069L129.261 89.9072H128.008ZM127.976 84.6694C127.976 83.5203 127.207 82.866 125.737 82.866H123.786V86.4855H125.737C127.204 86.4855 127.976 85.8185 127.976 84.6694Z" fill="#D9B982"/>
  <path d="M131.04 88.9881L131.464 88.0912C132.06 88.6306 133.084 89.0232 134.117 89.0232C135.507 89.0232 136.104 88.4838 136.104 87.7816C136.104 85.8154 131.238 87.057 131.238 84.0695C131.238 82.8279 132.201 81.7714 134.315 81.7714C135.255 81.7714 136.231 82.0235 136.898 82.4831L136.518 83.4024C135.817 82.9555 135.026 82.7481 134.315 82.7481C132.95 82.7481 132.363 83.3226 132.363 84.0248C132.363 85.991 137.229 84.7589 137.229 87.7113C137.229 88.9402 136.241 89.9967 134.12 89.9967C132.886 89.9999 131.684 89.5881 131.04 88.9881Z" fill="#D9B982"/>
  <path d="M139.041 85.8856C139.041 83.5301 140.855 81.7714 143.323 81.7714C145.769 81.7714 147.58 83.5173 147.58 85.8856C147.58 88.254 145.766 89.9999 143.323 89.9999C140.855 89.9999 139.041 88.2412 139.041 85.8856ZM146.432 85.8856C146.432 84.1046 145.103 82.7959 143.323 82.7959C141.522 82.7959 140.189 84.1046 140.189 85.8856C140.189 87.6667 141.522 88.9753 143.323 88.9753C145.103 88.9785 146.432 87.6667 146.432 85.8856Z" fill="#D9B982"/>
  <path d="M157.041 81.8676V89.911H156.1L151.279 83.9135V89.911H150.131V81.8676H151.072L155.893 87.865V81.8676H157.041Z" fill="#D9B982"/>
  <path d="M165.363 87.8963H161.094L160.21 89.9072H159.027L162.666 81.8638H163.801L167.452 89.9072H166.247L165.363 87.8963ZM164.961 86.9771L163.227 83.0352L161.492 86.9771H164.961Z" fill="#D9B982"/>
  <path d="M169.438 81.8676H170.586V88.9119H174.936V89.911H169.438V81.8676Z" fill="#D9B982"/>
  <path d="M177.049 81.8676H178.197V89.911H177.049V81.8676Z" fill="#D9B982"/>
  <path d="M180.666 88.9881L181.09 88.0912C181.686 88.6306 182.71 89.0232 183.74 89.0232C185.13 89.0232 185.726 88.4838 185.726 87.7816C185.726 85.8154 180.861 87.057 180.861 84.0695C180.861 82.8279 181.824 81.7714 183.938 81.7714C184.878 81.7714 185.854 82.0235 186.52 82.4831L186.141 83.4024C185.439 82.9555 184.649 82.7481 183.938 82.7481C182.573 82.7481 181.986 83.3226 181.986 84.0248C181.986 85.991 186.852 84.7589 186.852 87.7113C186.852 88.9402 185.864 89.9967 183.743 89.9967C182.512 89.9999 181.307 89.5881 180.666 88.9881Z" fill="#D9B982"/>
  <path d="M194.437 87.8963H190.168L189.285 89.9072H188.102L191.74 81.8638H192.875L196.526 89.9072H195.321L194.437 87.8963ZM194.036 86.9771L192.301 83.0352L190.57 86.9771H194.036Z" fill="#D9B982"/>
  <path d="M199.708 82.8666H196.953V81.8676H203.598V82.8666H200.843V89.911H199.708V82.8666Z" fill="#D9B982"/>
  <path d="M205.643 81.8676H206.791V89.911H205.643V81.8676Z" fill="#D9B982"/>
  <path d="M209.339 85.8856C209.339 83.5301 211.153 81.7714 213.621 81.7714C216.067 81.7714 217.878 83.5173 217.878 85.8856C217.878 88.254 216.064 89.9999 213.621 89.9999C211.153 89.9999 209.339 88.2412 209.339 85.8856ZM216.73 85.8856C216.73 84.1046 215.401 82.7959 213.621 82.7959C211.82 82.7959 210.487 84.1046 210.487 85.8856C210.487 87.6667 211.82 88.9753 213.621 88.9753C215.401 88.9785 216.73 87.6667 216.73 85.8856Z" fill="#D9B982"/>
  <path d="M227.338 81.8676V89.911H226.397L221.576 83.9135V89.911H220.428V81.8676H221.368L226.19 87.865V81.8676H227.338Z" fill="#D9B982"/>
</svg>
        </div>
    )
}