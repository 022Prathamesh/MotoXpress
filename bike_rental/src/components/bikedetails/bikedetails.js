import React, { useEffect, useState } from "react";
import { deleteBike, fetchbike, getBikeById, updateBikeDetails } from "../../services";

const BikeDetails = () => {
    const [record, setRecord] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [bikeId, setBikeId] = useState(null);
    const [bikename, setBikename] = useState('');
    const [bikenumber, setBikenumber] = useState('');
    const [bikedescription, setBikedescription] = useState('');
    const [perdayrent, setPerDayRent] = useState('');
    const [bikephoto, setBikePhoto] = useState(null);
   

    const fetchBike = async () => {
        const res = await fetchbike();
        console.log("bike detail", res.data);
        setRecord(res.data);
    };

    const handleUpdate = async (id) => {
        console.log("update id", id);
        setShowEdit(true);
        setBikeId(id);
        const res = await getBikeById(id);
        console.log("Bike By Id", res.data);

        // Populate form with existing data
        setBikename(res.data.bikeName);
        setBikenumber(res.data.bikeNumber);
        setBikedescription(res.data.bikeDescription);
        setPerDayRent(res.data.perDayRental);
        setBikePhoto(res.data.bikePhoto); 

    };

    const handleDelete = async(id) => {
        console.log("delete id", id);
        const res=await deleteBike(id)
        console.log("Delete bike",res);
        fetchBike()
        
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data={
            "bikeName":bikename,
            "bikeNumber":bikenumber,
            "bikeDescription":bikedescription,
            "perDayRental":perdayrent,
            "bikePhoto":bikephoto
        }
        console.log("Updated Bike Details:",bikeId,data);
        //updateBikeDetails
        const res=await  updateBikeDetails(bikeId,data)
        console.log("Update response",res);
        setShowEdit(false)
        fetchBike()

        
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBikePhoto(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file');
        }
       
    };

    useEffect(() => {
        fetchBike();
    }, []);

    return (
        <>
            <div className="container text-dark">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Bike Name</th>
                                    <th>Bike Number</th>
                                    <th>Bike Description</th>
                                    <th>Per Day Rent</th>
                                    <th>Bike Image</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.bikeName}</td>
                                            <td>{data.bikeNumber}</td>
                                            <td>{data.bikeDescription}</td>
                                            <td>{data.perDayRental}</td>
                                            <td>
                                                <img
                                                    src={data.bikePhoto}
                                                    alt={data.bikeName}
                                                    style={{ width: '100px', height: 'auto' }}
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary"
                                                    id={data.bikeId}
                                                    onClick={(e) => handleUpdate(data.bikeId)}
                                                >
                                                    Update
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    id={data.bikeId}
                                                    onClick={(e) => handleDelete(data.bikeId)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {showEdit && (
                        <div className="col-md-12">
                            <form className="form-group" onSubmit={handleSubmit}>
                                <hr />
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-4">
                                        <label><b>Bike Name:</b></label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={bikename}
                                            onChange={(event) => setBikename(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-4">
                                        <label><b>Bike Number:</b></label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={bikenumber}
                                            onChange={(event) => setBikenumber(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-4">
                                        <label><b>Bike Description:</b></label>
                                        <textarea
                                            className="form-control"
                                            value={bikedescription}
                                            onChange={(event) => setBikedescription(event.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-4">
                                        <label><b>Per Day Rent:</b></label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={perdayrent}
                                            onChange={(event) => setPerDayRent(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-4">
                                        <label><b>Bike Photo:</b></label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileUpload}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-4">
                                        <button className="btn btn-primary form-control mt-3" type="submit">
                                            Update Bike
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default BikeDetails;
