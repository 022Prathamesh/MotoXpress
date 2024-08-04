import React, { useState } from 'react'
import AddBike from '../addBike/addbike'
import BikeDetails from '../bikedetails/bikedetails'
import UserDetails from '../userdetails/userdetails'



const Admin=()=>{
    const [bike,setBike]=useState(false)
    const [user,setUser]=useState(false)
    const [addbike,setAddBike]=useState(false)
    const handleAddBike=()=>{
        setAddBike(true)
        setBike(false)
        setUser(false)
    }

    const handleBikeInfo=()=>{
        setBike(true)
        setUser(false)
        setAddBike(false)
    }
    const handleUserrInfo=()=>{
        setUser(true)
        setBike(false)
        setAddBike(false)
    }
    return(

        <>
            <div className="container text-dark">
                <div className="row">
                    <div className="col-md-4"><button className="btn btn-warning mt-5 mb-5" onClick={handleAddBike}>Add bike</button></div>
                    <div className="col-md-4"><button className="btn btn-warning mt-5 mb-5" onClick={handleBikeInfo}>Bikes' Info</button></div>
                    <div className="col-md-4"><button className="btn btn-warning mt-5 mb-5" onClick={handleUserrInfo}>Users' Info</button></div>
                   

                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        {addbike && <AddBike/>}
                        {bike && <BikeDetails/>}
                        {user && <UserDetails/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;