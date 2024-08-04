import React from "react";

const UserDetails=()=>{
   const record=[
    {
        "name": "John Doe",
        "phone": "1234567890",
        "email": "johndoe@example.com",
        "username": "johndoe",
        "password": "password123",
        "role": "admin"
    },
    {
        "name": "Jane Smith",
        "phone": "2345678901",
        "email": "janesmith@example.com",
        "username": "janesmith",
        "password": "password123",
        "role": "user",
        "rentedbike": "Yamaha R15",
        "dateofrent": "2024-08-02"
    },
    {
        "name": "Alice Johnson",
        "phone": "3456789012",
        "email": "alicejohnson@example.com",
        "username": "alicejohnson",
        "password": "password123",
        "role": "user",
        "rentedbike": "Royal Enfield",
        "dateofrent": "2024-08-03"
    },
    {
        "name": "Bob Brown",
        "phone": "4567890123",
        "email": "bobbrown@example.com",
        "username": "bobbrown",
        "password": "password123",
        "role": "admin"
    },
    {
        "name": "Charlie Davis",
        "phone": "5678901234",
        "email": "charliedavis@example.com",
        "username": "charliedavis",
        "password": "password123",
        "role": "user",
        "rentedbike": "KTM Duke",
        "dateofrent": "2024-08-04"
    },
    {
        "name": "David Evans",
        "phone": "6789012345",
        "email": "davidevans@example.com",
        "username": "davidevans",
        "password": "password123",
        "role": "user",
        "rentedbike": "Bajaj Pulsar",
        "dateofrent": "2024-08-05"
    },
    {
        "name": "Eve Foster",
        "phone": "7890123456",
        "email": "evefoster@example.com",
        "username": "evefoster",
        "password": "password123",
        "role": "admin"
    },
    {
        "name": "Frank Green",
        "phone": "8901234567",
        "email": "frankgreen@example.com",
        "username": "frankgreen",
        "password": "password123",
        "role": "user",
        "rentedbike": "Suzuki Gixxer",
        "dateofrent": "2024-08-06"
    },
    {
        "name": "Grace Hall",
        "phone": "9012345678",
        "email": "gracehall@example.com",
        "username": "gracehall",
        "password": "password123",
        "role": "user",
        "rentedbike": "TVS Apache",
        "dateofrent": "2024-08-07"
    },
    {
        "name": "Hannah King",
        "phone": "0123456789",
        "email": "hannahking@example.com",
        "username": "hannahking",
        "password": "password123",
        "role": "admin"
    }
]



    return(
        <>
              <div className="container text-dark">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Role</th>
                                    <th>Rented Bike</th>
                                    <th>Rented On</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    record.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.name}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.email}</td>
                                                <td>{data.username}</td>
                                                <td>{data.role}</td>
                                                <td>{data.rentedbike}</td>
                                                <td>{data.dateofrent}</td>
                                                <td><button className="btn btn-primary">Update</button></td>
                                                <td><button className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserDetails;