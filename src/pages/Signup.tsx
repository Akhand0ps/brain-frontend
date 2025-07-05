
import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Signup(){


    const firstnameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const PasswordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
       

    async function signup(){

        const firstName = firstnameRef.current?.value;
        const lastName = lastnameRef.current?.value;
        const email = emailRef.current?.value;
        const password = PasswordRef.current?.value;
        
        await axios.post(BACKEND_URL +"/api/v1/register",{

            firstName,
            ...(lastName ? {lastName}:{}),
            email,
            password

        },{
           withCredentials:true
        })
        navigate("/Dashboard");

        alert("signed in successfully")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center shadow-xl">

        <div className=" bg-white rounded-xl min-w-80 p-8">

            
            <div className="flex items-center justify-center w-10 ml-27 mb-8">
                <img src="./logo.svg" alt="" />
            </div>
            <Input ref={firstnameRef} placeholder="firstname"/>
            <Input ref={lastnameRef} placeholder="lastname"/>
            <Input ref={emailRef} placeholder="email"/>
            <Input ref={PasswordRef} placeholder="Password"/>

            <div className="mt-6">
                <Button onClick={signup} loading={false} variant="primary" text= "Signup" fullwidth={true} />

                <div className="mt-4">
                    <p className="text-sm">Already have an account? <span className="cursor-pointer"><Link to="/signin">Login here</Link></span></p>
                </div>
            </div>

        </div>


        
    </div>
}