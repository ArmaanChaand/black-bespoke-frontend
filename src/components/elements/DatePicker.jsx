import DatePicker from "tailwind-datepicker-react";
import { SVGWrapper } from "./SVGWrapper";
import { formatDate } from "../../assets/js_utils/utils";
import { useEffect, useState } from "react";


export function DatePickerCustom({date, setDate, show, setShow}){
    const options = {
        title: "",
        autoHide: true,
        todayBtn: false,
        clearBtn: false,
        clearBtnText: "Clear",
        // maxDate: new Date("2030-01-01"),
        // minDate: new Date("1950-01-01"),
        theme: {
            background: "bg-transparent dark:bg-transparent shadow-none p-0",
            todayBtn: "",
            clearBtn: "",
            icons: "focus:ring-0 bg-transparent hover:bg-theme-gold/5 dark:bg-transparent hover:dark:bg-theme-gold/5 rounded-none",
            text: "hover:bg-theme-gold/5 dark:hover:bg-theme-gold/5 rounded-full dark:rounded-full ",
            disabledText: "invisible",
            input: "",
            inputIcon: "",
            selected: "rounded-full dark:rounded-full  hover:bg-theme-gold/5 dark:hover:bg-theme-gold/5 bg-theme-gold dark:bg-theme-gold text-theme-black dark:text-theme-black",
        },
        icons: {
            prev: () => <span><SVGWrapper svgName="ANGLE_LEFT" classes="fill-transparent stroke-theme-white"  /></span>,
            next: () => <span className=""><SVGWrapper svgName="ANGLE_RIGHT" classes="fill-transparent stroke-theme-white"  /></span>,
        },
        datepickerClassNames: "sm450:static top-0 bg-theme-grey backdrop-blur sm:backdrop-blur-none sm450:bg-transparent p-3 sm450:p-0 pt-0  shadow-none dark:shadow-none",
        defaultDate: date,
        language: "en",
        disabledDates: [],
        weekDays: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const handleChange = (date) => {
        setDate(date)
        if(windowWidth < 450){
            // setShow(false)
            // console.log(date)
        }
    }


    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []); 

    useEffect(() => {
        
        
        if (windowWidth >= 450) {
            setShow(true)
        }

    }, [windowWidth]); 

    return(
        <DatePicker classNames="w-full" options={options} onChange={handleChange} show={show} setShow={()=>console.log()}>
            <label className="w-full flex sm450:hidden  justify-center items-center p-2 mb-3 bg-theme-gold/5 cursor-pointer">
                <div className="">
                    <img src="/media/calender.svg" className="w-5 mr-3"/>
                </div>
                <input 
                    type="text" 
                    className="outline-none bg-transparent cursor-pointer text-theme-white " 
                    placeholder="Select Date" value={formatDate(date)} 
                    onClick={() => setShow(prev => !prev)} 
                    // onBlur={() => setShow(false)}
                    readOnly />
            </label>
        </DatePicker>
    )
}