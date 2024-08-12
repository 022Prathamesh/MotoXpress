import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Header=()=>{
    
    const navigate=useNavigate()
    const [chkbtn, setChkBtn] = useState(false);
    const handleLogin=()=>{
        navigate('/login')
    }

    const handleRegister=()=>{
        navigate('/registration')

    }
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            setChkBtn(true);
        }else{
            setChkBtn(false);

        }
    })
    return (
        <>
        <div className="container-fluid bg-dark text-white justify-content-center align-item-center">
           <div className='row'>
                <div className='col-md-6'>
                <h3 className='p-4'>Moto<span className='text-danger'>X</span>press</h3>
                </div>
                {chkbtn ===false && <div className='col-md-6'>
                    <button className='btn btn-primary m-4' onClick={handleLogin}>Login</button>
                    <button className='btn btn-primary m-4' onClick={handleRegister}>Signup</button>
                </div>}
           </div>
        </div>
        </>
    )
}

export default Header;