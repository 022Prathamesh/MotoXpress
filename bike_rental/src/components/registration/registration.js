import React, { useEffect, useState } from "react";
import { getCities, getCity, register_user, states } from "../../services";

const Registration = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [EmailId, setEmailId] = useState('');
    const [username, setUsername] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [role, setRole] = useState('');
    const [selectedState, setSelectedState] = useState(''); // State for selected state
    const [statesList, setStatesList] = useState([]); // State for list of states
    const [cities, setCities] = useState([]); // State for list of cities
    const [city, setCity] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const city_data=[]

    const handleStateChange = async (e) => {
        const state = e.target.value;
        console.log("STATE",state);
        
        setSelectedState(state);
        

        setCity(''); // Reset city when state changes

        // Fetch the cities based on the selected state
        // Example assuming `states()` returns cities based on state
        // const res = await getCity(state);
        // city_data.push(res.data)
        // setCities(city_data);
    };

    const handleCityChange = (e) => {

        setCity(e.target.value);
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        let data = {
            name,
            phone,
            EmailId,
            username,
            passwordHash,
            role,
            state: selectedState,
            city,
            profilePicture
        };
        const res = await register_user(data);
        console.log("Register API response", res);
    };

    const getStates = async () => {
        const res = await states(); // Assuming this gets the list of states
        console.log("States", res.data);
        setStatesList(res.data);
    };

    const fetchCity=async()=>{
        const res=await getCities();
        setCities(res.data)
    }

    useEffect(() => {
        // getStates();
        fetchCity()
    },[]);

    return (
        <div className="container">
            <h4>Registration</h4>
            <form className="form-group" onSubmit={handleRegistration}>
                <hr />
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <label><b>Name:</b></label>
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <label><b>Phone Number:</b></label>
                        <input
                            className="form-control"
                            type="number"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <label><b>Email:</b></label>
                        <input
                            className="form-control"
                            type="email"
                            value={EmailId}
                            onChange={(event) => setEmailId(event.target.value)}
                        />
                    </div>
                </div>
                
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <label><b>Username:</b></label>
                        <input
                            className="form-control"
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <label><b>Password:</b></label>
                        <input
                            className="form-control"
                            type="password"
                            value={passwordHash}
                            onChange={(event) => setPasswordHash(event.target.value)}
                        />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <label><b>Role:</b></label>
                        <select
                            className="form-control"
                            value={role}
                            onChange={(event) => setRole(event.target.value)}
                        >
                            <option value="">Select role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
                
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <label><b>City:</b></label>
                        <select
                            className="form-control"
                            value={city}
                            onChange={handleCityChange}
                            disabled={!selectedState}
                        >
                            <option value="">Select city</option>
                            {cities.map((city) => (
                                <option key={city.cityId} value={city.cityId}>
                                    {city.cityName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <label><b>Profile Picture:</b></label>
                        <input
                            className="form-control"
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                        />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-md-4">
                        <button className="btn btn-primary form-control">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registration;
