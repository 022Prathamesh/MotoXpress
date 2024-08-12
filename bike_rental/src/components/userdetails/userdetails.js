import React, { useEffect, useState } from "react";
import { getUserDetails } from "../../services";

const UserDetails = () => {
    const [record, setRecord] = useState([]);

    const getUsers = async () => {
        const res = await getUserDetails();
        console.log("User details:::", res);
        setRecord(res.data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <div className="container text-dark">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>DL</th>
                                    <th>City</th> 
                                    <th>State</th>                                
                                </tr>
                            </thead>
                            <tbody>
                                {record.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.user.userName}</td>
                                        <td>{user.user.emailId}</td>
                                        <td>{user.user.role}</td>
                                        <td>{user.user.dlnumber}</td>
                                        <td>{user.user.cityId}</td>
                                        <td>{user.user.stateId}</td>                                  
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserDetails;
