import type { ReactElement } from "react";


interface ButtonProps{
    variant: "primary" | "secondary";
    text: string;
    startIcon?:ReactElement;
    onClick?:()=>void;
    fullwidth?:boolean;
    loading?:boolean;
}

const variantClasses ={
    "primary":"bg-purple-600 text-white font-normal hover:bg-purple-700 cursor-pointer",
    "secondary":"bg-purple-200 text-purple-400 font-normal hover:bg-purple-300 cursor-pointer",
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex justify-center items-center"

export function Button({variant,text,startIcon,onClick,fullwidth,loading}:ButtonProps){


    return <button onClick={onClick} className={variantClasses[variant] +" "+ defaultStyles + `${fullwidth ? " w-full flex justify-center items-center":""} ${loading ? " opacity-25 ":""}`} disabled={loading}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}