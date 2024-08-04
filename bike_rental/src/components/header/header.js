import React from 'react'
import { useNavigate } from 'react-router-dom';
const Header=()=>{
    
    const navigate=useNavigate()
    const handleLogin=()=>{
        navigate('/login')
    }

    const handleRegister=()=>{
        navigate('/registration')

    }
    return (
        <>
        <div className="container-fluid bg-dark text-white justify-content-center align-item-center">
           <div className='row'>
                <div className='col-md-6'>
                <h3 className='p-4'>Moto<span className='text-danger'>X</span>press</h3>
                </div>
                <div className='col-md-6'>
                    <button className='btn btn-primary m-4' onClick={handleLogin}>Login</button>
                    <button className='btn btn-primary m-4' onClick={handleRegister}>Signup</button>
                </div>
           </div>
        </div>
        </>
    )
}

export default Header;