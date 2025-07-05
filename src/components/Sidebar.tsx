import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";


export function Sidebar({onFilter}: {onFilter:(type: "twitter" | "youtube" | "all")=>void} ){

    return <div className="w-72 h-screen left-0 top-0 fixed pl-6 pt-1  bg-white">
        
        <div className="flex text-2xl pt-4  items-center cursor-pointer">

            <div className="pl-2 pr-3 text-purple-800">
                <BrainIcon/>
            </div>
            <div className="">
                Brain
            </div>
            
        </div>

        <div className="pt-8">
            <SidebarItem text="All" icon={<BrainIcon />} onClick={() => onFilter("all")} />
            <SidebarItem text="Tweets" icon={<TwitterIcon />} onClick={() => onFilter("twitter")} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} onClick={() => onFilter("youtube")} />
        </div>

       <div className="flex mt-[110px] items-center">


  <div className="flex items-center gap-2 mt-80">
    <img
      src="https://github.com/AKhand0ps.png"
      alt="Akhand GitHub Avatar"
      className="w-8 h-8 rounded-full"
    />
    <a
      href="https://github.com/Akhand0ps"
      className="text-gray-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      made by @Akhand0ps
    </a>
  </div>
</div>

    </div>
}   