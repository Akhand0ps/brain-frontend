
import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Signin(){

    const emailRef = useRef<HTMLInputElement>(null);
    const PasswordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    async function login(){

        const email = emailRef.current?.value;
        const password = PasswordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/login",{
            email,
            password
        },{
           withCredentials:true
        })
        navigate("/Dashboard");
        alert("logged in launde");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center shadow-xl">

        <div className=" bg-white rounded-xl min-w-80 p-8">

            <div className="flex items-center justify-center w-10 ml-27 mb-8">
                <img src="./logo.svg" alt="" />
            </div>
            <Input ref={emailRef}   placeholder="email"/>
            <Input ref={PasswordRef} placeholder="Password"/>
            {/* <Input placeholder="email"/>
            <Input placeholder="Password"/> */}

            <div className="mt-6">
                <Button onClick={login} loading={false} variant="primary" text= "Signin" fullwidth={true} />

                <div className="mt-4">
                    <p className="text-sm">Don't have an account? <span className="cursor-pointer"><Link to="/Signup">Register here</Link></span></p>
                </div>
            </div>

        </div>


        
    </div>
}