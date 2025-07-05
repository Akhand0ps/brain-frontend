import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function ProtectedRoute({children} : {children: JSX.Element}){
    
   const[auth,setAuth] = useState<null | Boolean>(null);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/me`,{
            withCredentials:true
        }).then(() => setAuth(true))
            .catch(()=>setAuth(false));
    })


    if(auth === null) return <div>Loading...</div>

    if(!auth) return <Navigate to="/signin" replace/>

    return children;
}