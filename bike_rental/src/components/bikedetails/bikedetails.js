import React from "react";

const BikeDetails = () => {
    const record = [
        {
            "bikename": "Honda CBR",
            "bikenumber": "MH12AB1234",
            "bikedescription": "A sporty bike with great performance.",
            "perdayrent": "1000",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        },
        {
            "bikename": "Yamaha R15",
            "bikenumber": "MH12CD5678",
            "bikedescription": "A stylish and efficient bike.",
            "perdayrent": "1200",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        },
        {
            "bikename": "Royal Enfield",
            "bikenumber": "MH12EF9101",
            "bikedescription": "A classic bike with a powerful engine.",
            "perdayrent": "1500",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        },
        {
            "bikename": "KTM Duke",
            "bikenumber": "MH12GH2345",
            "bikedescription": "A bike with a rugged look and feel.",
            "perdayrent": "1300",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        },
        {
            "bikename": "Bajaj Pulsar",
            "bikenumber": "MH12IJ6789",
            "bikedescription": "A reliable and efficient bike.",
            "perdayrent": "900",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        },
        {
            "bikename": "Suzuki Gixxer",
            "bikenumber": "MH12KL3456",
            "bikedescription": "A bike with great handling and performance.",
            "perdayrent": "1100",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        },
        {
            "bikename": "TVS Apache",
            "bikenumber": "MH12MN7890",
            "bikedescription": "A sporty bike with advanced features.",
            "perdayrent": "1000",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        },
        {
            "bikename": "Hero Splendor",
            "bikenumber": "MH12OP1234",
            "bikedescription": "A reliable bike with good mileage.",
            "perdayrent": "800",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        },
        {
            "bikename": "Kawasaki Ninja",
            "bikenumber": "MH12QR5678",
            "bikedescription": "A high-performance bike with a sleek design.",
            "perdayrent": "1600",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        },
        {
            "bikename": "Harley Davidson",
            "bikenumber": "MH12ST9101",
            "bikedescription": "A premium bike with exceptional performance.",
            "perdayrent": "2000",
            "bikephoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        }
    ];

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
                                {
                                    record.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.bikename}</td>
                                                <td>{data.bikenumber}</td>
                                                <td>{data.bikedescription}</td>
                                                <td>{data.perdayrent}</td>
                                                <td><img src={data.bikephoto} alt={data.bikename} style={{ width: '100px', height: 'auto' }} /></td>
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
    );
};

export default BikeDetails;
