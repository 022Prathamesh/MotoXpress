import React, { useState } from "react";

const Login=()=>{

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        let data={
            "username":username,
            "password":password
        }
        console.log("Bike rental log:",data);
        
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
                                type="text"    
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