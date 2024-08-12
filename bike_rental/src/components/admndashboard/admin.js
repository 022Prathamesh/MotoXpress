import React, { useEffect, useState } from 'react'
import AddBike from '../addBike/addbike'
import BikeDetails from '../bikedetails/bikedetails'
import UserDetails from '../userdetails/userdetails'
import { fetchbike } from '../../services'



const Admin=()=>{
    const [bike,setBike]=useState(false)
    const [user,setUser]=useState(false)
    const [addbike,setAddBike]=useState(false)
    const [bikeavailable,setBikeAvailable]=useState(false)
    const [availableBike,setAvailableBike]=useState([])
    const [cities,setCities]=useState([])
    const [city,setCity]=useState('')
    const handleAddBike=()=>{
        setAddBike(true)
        setBike(false)
        setUser(false)
        setBikeAvailable(false)

    }

    const handleBikeInfo=()=>{
        setBike(true)
        setUser(false)
        setAddBike(false)
        setBikeAvailable(false)

    }
    const handleUserrInfo=()=>{
        setUser(true)
        setBike(false)
        setAddBike(false)
        setBikeAvailable(false)
    }
    const handleAvailability=()=>{
        setBikeAvailable(true)
        setBike(false)
        setUser(false)
        setAddBike(false)
    }

    const fetchBike = async () => {
        const res = await fetchbike();
        console.log("bike detail", res.data);
        setAvailableBike(res.data);
    };

    const handleSubmit=async()=>{
        // const data={
        //     "BikeId":availableBike,
        //     ""
        // }
    }

    useEffect(()=>{
        fetchBike()
        const city=["Ahmedabad","Mumbai","Chennai","Delhi","Vadodara","Pune","Bangalore","Chandigarh","Surat","Nashik"]
        setCities(city)
    },[])

    return(

        <>
            <div className="container text-dark">
                <div className="row">
                    <div className="col-md-3"><button className="btn btn-warning mt-5 mb-5" onClick={handleAddBike}>Add bike</button></div>
                    <div className="col-md-3"><button className="btn btn-warning mt-5 mb-5" onClick={handleBikeInfo}>Bikes' Info</button></div>
                    <div className="col-md-3"><button className="btn btn-warning mt-5 mb-5" onClick={handleUserrInfo}>Users' Info</button></div>
                    <div className="col-md-3"><button className="btn btn-warning mt-5 mb-5" onClick={handleAvailability}>Availability</button></div>                   

                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        {addbike && <AddBike/>}
                        {bike && <BikeDetails/>}
                        {user && <UserDetails/>}                        
                    </div>
                    {
                        bikeavailable===true && 
                        <div className='col-md-12'>
                            <h3>Availabile in cities</h3>
                            <form className='form-group' onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label>Bike</label>
                                            <select
                                                className="form-control"
                                                value={availableBike}
                                                onChange={(event) => setAvailableBike(event.target.value)}
                                            >
                                                <option value="">Select bike</option>
                                                {availableBike.map((bike)=>                                            
                                                    <option value={bike.bikeId}>{bike.bikeName}</option>
                                                )
                                                }
                                            
                                            </select>
                                    </div>
                                    <div className='col-md-6'>
                                            <label>Cities</label>
                                            <select
                                                className="form-control"
                                                value={availableBike}
                                                onChange={(event) => setAvailableBike(event.target.value)}
                                            >
                                                <option value="">Select City</option>
                                                {cities.map((city,index)=>                                            
                                                    <option value={city}>{city}</option>
                                                )
                                                }
                                            
                                            </select>
                                    </div>
                                    <div className='col-md-4 mt-4 text-center'>
                                        <button className="btn btn-primary form-control">Submit</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Admin;