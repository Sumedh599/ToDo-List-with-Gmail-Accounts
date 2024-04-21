import React, { useEffect, useState } from "react";
import { auth,provider } from "./firebase";
import {signInWithPopup } from "firebase/auth";
import Home from "./Home";

function SignIn() {
    const [value,setValue] = useState('')
    const handleClick =()=> {
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    return (
        <div>
            <h1 className="heading">Welcome to ToDo List</h1>
            <h2 className="heading">Manage Tasks</h2>
            {value?<Home/>:
            <button onClick={handleClick} className="btnin">SignIn With Google</button>
            }
        </div>
    );
}
export default SignIn;