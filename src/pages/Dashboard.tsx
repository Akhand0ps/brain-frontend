
// import './App.css'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CrerateContentModal'
import { useEffect, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import { BACKEND_URL } from '../config'
// import { Link } from 'react-router-dom'
import axios from 'axios';

export function Dashboard() {

  const[modalOpen,setModalOpen] = useState(false);
  // const {contents,refresh} = useContent();
  // const[filter,setFilter] = useState<"all" | "twitter" | "youtube">("all");

  type ContentItem = {
    _id: string;
    type: "twitter" | "youtube";
    link: string;
    title: string;
    // add other properties if needed
  };

  const {contents,refresh}: { contents: ContentItem[]; refresh: () => void } = useContent();
  const[filter,setFilter] = useState<"all" | "twitter" | "youtube">("all");



  useEffect(()=>{
    refresh();
  },[modalOpen]);


  const filteredContent = filter ==="all" ? contents : contents.filter((item)=> item.type===filter);

  const handleDelete = async(contentId:string)=>{
    await axios.delete(`${BACKEND_URL}/api/v1/content`,{
      //@ts-ignore
      data:{contentId},
      withCredentials:true,
    });
    refresh();
  }
  

  return (
  <div className="bg-gray-100 min-h-screen flex flex-col lg:flex-row">
    {/* Sidebar */}
    <div className="hidden lg:block">
      <Sidebar onFilter={setFilter} />
    </div>
    {/* Main Content */}
    <div className="flex-1 p-2 sm:p-4 min-h-screen lg:ml-72">
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <Button onClick={() => setModalOpen(true)} variant="primary" text="Add content" startIcon={<PlusIcon />} />
        <Button
          onClick={async () => {
            const response = await axios.put<{hash:string}>(`${BACKEND_URL}/api/v1/brain/share`, { share: true }, { withCredentials: true });
            const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
            await navigator.clipboard.writeText(shareUrl);
          }}
          variant="secondary"
          text="Share brain"
          startIcon={<ShareIcon />}
        />
      </div>
      <br />
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {filteredContent.length === 0 ? (
          <div className="w-full flex justify-center py-10">
            <p className="text-gray-500 text-lg">No content added yet.</p>
          </div>
        ) : (
          filteredContent.map(({ _id, type, link, title }) => (
            <Card
              key={_id}
              _id={_id}
              type={type}
              link={link}
              title={title}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  </div>
);
}




