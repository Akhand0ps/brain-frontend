import type { ReactElement } from "react";



export function SidebarItem({text,icon,onClick}:{
    text:string,
    icon: ReactElement;
    onClick?:()=>void
}){
    return(

        <div onClick={onClick} className="flex text-gray-700 cursor-pointer py-2 hover:bg-gray-200  max-w-48 pl-4 rounded transition-all duration-75 ">
            
            <div className="px-2">
                {icon}
            </div>

            <div>
                {text}
            </div>

        </div>

    )
}