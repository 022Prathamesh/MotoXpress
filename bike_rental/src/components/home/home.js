import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [record, setRecord] = useState([]);
    const [bikeHistory, setBikeHistory] = useState(true);
    const [rent, setRent] = useState(false);
    const [selectedBike, setSelectedBike] = useState(null);

    const bikes = [
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

    useEffect(() => {
        const rentalRecord = [
            {
                "bikeName": "Yamaha FZ",
                "pickupCityName": "New York",
                "dropCityName": "Los Angeles",
                "rentalStartDate": "2024-08-01",
                "rentalEndDate": "2024-08-10",
                "bookingDate": "2024-07-25",
                "status": "Confirmed"
            },
            {
                "bikeName": "Honda CBR",
                "pickupCityName": "Chicago",
                "dropCityName": "Houston",
                "rentalStartDate": "2024-08-05",
                "rentalEndDate": "2024-08-15",
                "bookingDate": "2024-07-27",
                "status": "Pending"
            },
            {
                "bikeName": "Suzuki Gixxer",
                "pickupCityName": "San Francisco",
                "dropCityName": "Seattle",
                "rentalStartDate": "2024-08-10",
                "rentalEndDate": "2024-08-20",
                "bookingDate": "2024-07-29",
                "status": "Confirmed"
            },
            {
                "bikeName": "Kawasaki Ninja",
                "pickupCityName": "Miami",
                "dropCityName": "Orlando",
                "rentalStartDate": "2024-08-15",
                "rentalEndDate": "2024-08-25",
                "bookingDate": "2024-07-30",
                "status": "Cancelled"
            },
            {
                "bikeName": "Ducati Monster",
                "pickupCityName": "Dallas",
                "dropCityName": "Austin",
                "rentalStartDate": "2024-08-20",
                "rentalEndDate": "2024-08-30",
                "bookingDate": "2024-08-01",
                "status": "Confirmed"
            },
            {
                "bikeName": "Harley Davidson",
                "pickupCityName": "Las Vegas",
                "dropCityName": "Phoenix",
                "rentalStartDate": "2024-08-25",
                "rentalEndDate": "2024-09-04",
                "bookingDate": "2024-08-02",
                "status": "Pending"
            },
            {
                "bikeName": "BMW S1000RR",
                "pickupCityName": "Boston",
                "dropCityName": "Philadelphia",
                "rentalStartDate": "2024-08-30",
                "rentalEndDate": "2024-09-09",
                "bookingDate": "2024-08-03",
                "status": "Confirmed"
            },
            {
                "bikeName": "Triumph Street Triple",
                "pickupCityName": "San Diego",
                "dropCityName": "San Jose",
                "rentalStartDate": "2024-09-01",
                "rentalEndDate": "2024-09-11",
                "bookingDate": "2024-08-04",
                "status": "Confirmed"
            },
            {
                "bikeName": "KTM Duke",
                "pickupCityName": "Denver",
                "dropCityName": "Salt Lake City",
                "rentalStartDate": "2024-09-05",
                "rentalEndDate": "2024-09-15",
                "bookingDate": "2024-08-05",
                "status": "Pending"
            },
            {
                "bikeName": "Royal Enfield",
                "pickupCityName": "Atlanta",
                "dropCityName": "Charlotte",
                "rentalStartDate": "2024-09-10",
                "rentalEndDate": "2024-09-20",
                "bookingDate": "2024-08-06",
                "status": "Confirmed"
            }
        ]
        setRecord(rentalRecord);
    }, []);

    const handleRentBike = () => {
        setRent(true);
        setBikeHistory(false);
    };

    const openModal = (bike) => {
        setSelectedBike(bike);
    };

    const closeModal = () => {
        setSelectedBike(null);
    };

    const confirmBooking = () => {
        alert("Booking successful!");
        closeModal();
    };

    return (
        <>
            <div className="container text-dark">
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-warning mt-5 mb-5" onClick={handleRentBike}>Rent a bike</button>
                    </div>
                    {bikeHistory && (
                        <div className="col-md-12">
                            <h3>Bike Rent History</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Bike Name</th>
                                        <th>Pickup City Name</th>
                                        <th>Drop City Name</th>
                                        <th>Rental Start Date</th>
                                        <th>Rental End Date</th>
                                        <th>Booking Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {record.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.bikeName}</td>
                                            <td>{data.pickupCityName}</td>
                                            <td>{data.dropCityName}</td>
                                            <td>{data.rentalStartDate}</td>
                                            <td>{data.rentalEndDate}</td>
                                            <td>{data.bookingDate}</td>
                                            <td>{data.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {rent && (
                        <>
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Bike Name</th>
                                            <th>Bike Number</th>
                                            <th>Bike Description</th>
                                            <th>Per Day Rent</th>
                                            <th>Bike Image</th>
                                            <th>Rent Bike</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bikes.map((data, index) => (
                                            <tr key={index}>
                                                <td>{data.bikename}</td>
                                                <td>{data.bikenumber}</td>
                                                <td>{data.bikedescription}</td>
                                                <td>{data.perdayrent}</td>
                                                <td><img src={data.bikephoto} alt={data.bikename} style={{ width: '100px', height: 'auto' }} /></td>
                                                <td><button className="btn btn-primary" onClick={() => openModal(data)}>Book Now</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {selectedBike && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Bike Details</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Bike Name:</strong> {selectedBike.bikename}</p>
                                <p><strong>Bike Number:</strong> {selectedBike.bikenumber}</p>
                                <p><strong>Description:</strong> {selectedBike.bikedescription}</p>
                                <p><strong>Per Day Rent:</strong> {selectedBike.perdayrent}</p>
                                <img src={selectedBike.bikephoto} alt={selectedBike.bikename} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={confirmBooking}>Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
