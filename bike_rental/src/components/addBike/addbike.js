import React, { useState } from "react";

const AddBike = () => {
    const [bikename, setBikename] = useState('');
    const [bikenumber, setBikenumber] = useState('');
    const [bikedescription, setBikedescription] = useState('');
    const [perdayrent, setPerDayRent] = useState('');
    const [bikephoto, setBikePhoto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            "bikename":bikename,
            "bikenumber":bikenumber,
            "bikedescription":bikedescription,
            "perdayrent":perdayrent,
            "bikephoto":bikephoto
        }
        console.log("Bike details:", data);
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

    return (
        <div className="container">
            <h4>Add Bike</h4>
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
                        <button className="btn btn-primary form-control mt-3">
                            Add Bike
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBike;
