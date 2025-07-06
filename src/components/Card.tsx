import { Delete } from "../icons/Delete";
// import { ShareIcon } from "../icons/ShareIcon";


interface CardProps{
    title:string,
    link: string,
    type: "twitter" | "youtube",
    _id:string,
    onDelete?:(_id:string)=>void;
}

 
export function Card({title,link,type,onDelete,_id}:CardProps){

    return (
      <div className="w-full sm:w-80 md:w-96 mx-auto">
        <div className="bg-white rounded-md border-gray-200 border min-h-48 shadow-sm">
          <div className="flex justify-between pl-2">
            <div className="flex items-center text-md pt-4">
              <div className="text-gray-500 pr-2 cursor-pointer">
                {/* <ShareIcon/> */}
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <div className="flex items-center pt-4 pr-2">
              <div className="text-gray-500">
                {/* <a href={link} target="_blank"><ShareIcon/></a> */}
              </div>
              <div 
                className="text-gray-500 cursor-pointer"
                onClick={() => onDelete && onDelete(_id)}
              >
                <Delete />
              </div>
            </div>
          </div>
          <div className="pt-4 m-4">
            {type === "youtube" && 
              <iframe className="w-full aspect-video" 
                src={link.replace("watch","embed").replace("?v=","/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
              </iframe> 
            }
            {type === "twitter" && 
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com","twitter.com")}></a> 
              </blockquote>
            }
          </div>
        </div>
      </div>
    );
}