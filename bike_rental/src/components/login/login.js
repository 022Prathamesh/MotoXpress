import React, { useState } from "react";
import { login } from "../../services";

const Login=()=>{

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        let data={
            "emailId":username,
            "passwordHash":password
        }
        console.log("Bike rental log:",data);

        const res=await login(data)
        console.log("login",res.data);
        const token = res.data.token;



        if (token) {
            if(res.data.role==="customer"){
                localStorage.setItem("email_id", username);
                window.location.href = `/dashboard?token=${encodeURIComponent(token)}`;
            }
            else if(res.data.role==="admin"){
                window.location.href = `/admin-dashboard?token=${encodeURIComponent(token)}`;
            }
        } else {
            console.error("Token not found in response");
        }
    }

    return(
        <>
            <div className="container">
                <h4>Login</h4>
                <form className="form-group" onSubmit={handleSubmit}>
                    <hr/>   
                    <div className="row justify-content-center align-item-center">
                        <div className="col-md-4">
                            <label><b>Username:</b></label>
                            <input
                                className="form-control"
                                type="email"    
                                value={username}   
                                onChange={(event)=>setUsername(event.target.value)}                        
                            />
                        </div>                       
                    </div>
                    <div className="row justify-content-center align-item-center">
                        <div className="col-md-4">
                            <label><b>Password:</b></label>
                            <input
                                className="form-control"
                                type="password"  
                                value={password}   
                                onChange={(event)=>setPassword(event.target.value)}                              
                            />
                        </div>                       
                    </div>
                    <div className="row justify-content-center align-item-center">
                        <div className="col-md-4">
                           <button className="btn btn-primary form-control mt-3">
                                Login
                           </button>
                        </div>                       
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;