import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Card } from "../components/Card";

export function Share(){

    const {shareId} = useParams<{shareId: string}>();
    const [data,setData] = useState<any>(null);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState<string | null>(null);


        useEffect(()=>{
            if(!shareId)return;
            setLoading(true);

            axios.get(`${BACKEND_URL}/api/v1/brain/${shareId}`,{
                withCredentials:true
            }).then((res)=>{
                setData(res.data);
                setLoading(false);
            }).catch((err)=>{
                console.log(err);
                setError("Could not fetch shared brain");
                setLoading(false);
            })
        },[shareId]);
    if(loading)return <div>Loading...</div>
    if(error)return <div>{error}</div>
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Shared Brain of {data.firstName}'s</h1>
                {(!data?.content || data.content.length === 0) ? (
                    <div className="text-center text-gray-500">No shared content found.</div>
                ) : (
                    <div className="flex flex-wrap gap-6 justify-center">
                        {data.content.map((item: any) => (
                            <Card
                                _id={item._id}
                                key={item._id}
                                type={item.type}
                                link={item.link}
                                title={item.title}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

