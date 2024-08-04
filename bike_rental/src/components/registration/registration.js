import React, { useState } from "react";

const Registration = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // New state for role

    const handleRegistration = (e) => {
        e.preventDefault();
        let data = {
            "name": name,
            "phone": phone,
            "email": email,
            "username": username,
            "password": password,
            "role": role // Add role to the data object
        };
        console.log("Registration Data:", data);
    }

    return (
        <>
            <div className="container">
                <h4>Registration</h4>
                <form className="form-group" onSubmit={handleRegistration}>
                    <hr />
                    <div className="row justify-content-center align-item-center">
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
                    <div className="row justify-content-center align-item-center">
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
                    <div className="row justify-content-center align-item-center">
                        <div className="col-md-4">
                            <label><b>Email:</b></label>
                            <input
                                className="form-control"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center align-item-center">
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
                    <div className="row justify-content-center align-item-center">
                        <div className="col-md-4">
                            <label><b>Password:</b></label>
                            <input
                                className="form-control"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center align-item-center">
                        <div className="col-md-4">
                            <label><b>Role:</b></label>
                            <select
                                className="form-control"
                                value={role}
                                onChange={(event) => setRole(event.target.value)}
                            >
                                <option selected value="">Select role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-center align-item-center mt-4">
                        <div className="col-md-4">
                            <button className="btn btn-primary form-control">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Registration;
