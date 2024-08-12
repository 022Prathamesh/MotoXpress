import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { addRentalRecord, fetchbike, fetchRentalRecord, getBikeById, getCities, getCityById, getUsers } from "../../services";

const Home = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState([]);
    const [bikeHistory, setBikeHistory] = useState(true);
    const [rent, setRent] = useState(false);
    const [selectedBike, setSelectedBike] = useState(null);
    const [selectedCity, setSelectedCity] = useState("");
    const [filteredBikes, setFilteredBikes] = useState([]);
    const [bikes, setBikes] = useState([]);
    const [pickupDate, setPickupDate] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [dropoffDate, setDropoffDate] = useState("");
    const [dropoffTime, setDropoffTime] = useState("");
    const [bookingDetails, setBookingDetails] = useState(null);
    const [ride, setRide] = useState(false);
    const [cityid, setCityId] = useState('');
    const [rentalRecord, setRentalRecord] = useState([]);
    const [pickUpCity,setPickupCity]=useState('')
    const [dropCity,setDropCity]=useState('')
    const [rentedBike,setRentedBike]=useState('')

    const cities = ["Ahmedabad", "Mumbai", "Chennai", "Delhi", "Vadodara", "Pune", "Bangalore", "Chandigarh", "Surat", "Nashik"];

    const getBikes = async () => {
        const res = await fetchbike();
        console.log("Bike details:", res.data);
        setBikes(res.data);
    };

    const handleRide = () => {
        setRide(true);
        setRent(false);
        setBikeHistory(false);
        setBookingDetails(false)
        getRentalRecord();
    };

    const handleBook = async (bikeId) => {
        const total_users = await getUsers();
        const curremt_email = localStorage.getItem("email_id");
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        const user_id = total_users.data.filter(user => user.emailId === curremt_email);
        console.log("User details:", user_id);
        
        // find city id
        const city_id = await getCities();
        console.log("Database ni city",city_id,selectedCity);
        
        console.log("total cities", city_id.data);
        // city_id.data.filter((city) => {
        //     if (city.cityName === selectedCity) {
        //         console.log("city id", city.cityId);
        //         setCityId(city.cityId);
        //         console.log("state city", cityid);
        //     }
        // });
        const db_city=city_id.data.filter((city)=>city.cityName===selectedCity)
        console.log("db filter city",db_city);
        
        setCityId(db_city[0].cityId)
        const rental_record = {
            "bikeId": bikeId,
            "userId": user_id[0].userId,
            "bookingDate": formattedDate,
            "pickupCityId": db_city[0].cityId,
            "dropOffCityId": db_city[0].cityId,
            "rentalStartDate": pickupDate,
            "rentalEndDate": dropoffDate,
            "extraHelmet": 0
        };

        console.log("Rental records", rental_record);
        const res = await addRentalRecord(rental_record);
    };

    const getRentalRecord = async () => {
        const current_user=await getUsers()
        console.log("Badha users",current_user.data);
        
        const useremail=localStorage.getItem("email_id")
        console.log("localstorage email",useremail);
        
        const userid=current_user.data.filter((user)=>user.emailId===useremail)
        console.log("loop ni baar",userid[0].userId);
        
        const res = await fetchRentalRecord(userid[0].userId);
        console.log("Rental records:", res.data);
        for (let i=0;i<res.data.length;i++){
            
                console.log("res.data[i].dropOffCityId",res.data[i].dropOffCityId);
                
                const cityName=await getCityById(res.data[i].dropOffCityId)
                const bikeName=await getBikeById(res.data[i].bikeId)
                console.log("City Name:",cityName);
                console.log("Bike Name",bikeName);
                
                
                res.data[i].bikeName=bikeName.data.bikeName
                res.data[i].pickupCityName=cityName.data.cityName
                res.data[i].dropoffCityName=cityName.data.cityName
            
        }
        setRecord(res.data)
    };

    useEffect(() => {
        getBikes();
        
    }, []);

    useEffect(() => {
        if (selectedCity) {
            const filtered = bikes.filter(bike => bike.city === selectedCity);
            setFilteredBikes(filtered);
        } else {
            setFilteredBikes([]);
        }
    }, [selectedCity, bikes]);

    const handleRentBike = () => {
        setRent(true);
        setBikeHistory(false);
        setRide(false);
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        localStorage.setItem("current_city", e.target.value);
    };

    const openModal = (bike) => {
        setSelectedBike(bike);
    };

    const closeModal = () => {
        setSelectedBike(null);
    };

    const confirmBooking = () => {
        const bookingDetail = {
            bike: selectedBike,
            pickupDate,
            pickupTime,
            dropoffDate,
            dropoffTime
        };
        console.log("bookingDetail",bookingDetail);
        
        setBookingDetails(bookingDetail);
        closeModal();
    };

    const handleLogout = async () => {
        const url = new URL(window.location.href);
        url.searchParams.delete('token');
        navigate('/');
    };

    return (
        <>
            <div className="container text-dark">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <button className="btn btn-warning mt-5 mb-5" onClick={handleRentBike}>Rent a bike</button>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-primary mt-5 mb-5" disabled>Current City: {localStorage.getItem("current_city")}</button>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-success mt-5 mb-5" onClick={handleRide}>My Ride</button>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-danger mt-5 mb-5" onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                    {bikeHistory && (
                        <div className="col-md-12">
                            <h3>Bike Rent History</h3>
                            {/* Your existing Bike Rent History table code */}
                        </div>
                    )}
                    {rent && (
                        <>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="selectCity">Select City:</label>
                                    <select className="form-control" id="selectCity" onChange={handleCityChange} value={selectedCity}>
                                        <option value="">Select City</option>
                                        {cities.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>
                                {selectedCity && (
                                    <div className="row mt-4">
                                        {filteredBikes.map((data, index) => (
                                            <div key={index} className="col-md-6">
                                                <div className="card mb-4">
                                                    <img src={data.bikePhoto} className="card-img-top" alt={data.bikeName} style={{ height: '200px', objectFit: 'cover' }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{data.bikeName}</h5>
                                                        <p className="card-text">{data.bikeDescription}</p>
                                                        <p className="card-text"><strong>Per Day Rent:</strong> ₹{data.perDayRental}</p>
                                                        <button className="btn btn-primary" onClick={() => openModal(data)}>Book Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
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
                                <h5 className="modal-title">Search your next ride</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="pickupDate" className="form-label">Pickup Date</label>
                                        <input type="date" className="form-control" id="pickupDate" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pickupTime" className="form-label">Pickup Time</label>
                                        <input type="time" className="form-control" id="pickupTime" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dropoffDate" className="form-label">Dropoff Date</label>
                                        <input type="date" className="form-control" id="dropoffDate" value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dropoffTime" className="form-label">Dropoff Time</label>
                                        <input type="time" className="form-control" id="dropoffTime" value={dropoffTime} onChange={(e) => setDropoffTime(e.target.value)} />
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={confirmBooking}>Confirm Booking</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {ride && (
                <div className="container">
                    <h3>Your Rides</h3>
                    {record.length > 0 ? (
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Bike Name</th>
                                    <th>Pickup City</th>
                                    <th>Dropoff City</th>
                                    <th>Pickup Date</th>
                                    <th>Dropoff Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.map((rec, index) => (
                                    <tr key={index}>
                                        <td>{rec.bikeName}</td>
                                        <td>{rec.pickupCityName}</td>
                                        <td>{rec.dropoffCityName}</td>
                                        <td>{rec.rentalStartDate}</td>
                                        <td>{rec.rentalEndDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No rides found.</p>
                    )}
                </div>
            )}
            {bookingDetails && 
                <div className="container mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{bookingDetails.bike.bikeName}</h5>
                            <p className="card-text"><strong>Pickup:</strong> {bookingDetails.pickupDate} {bookingDetails.pickupTime}</p>
                            <p className="card-text"><strong>Dropoff:</strong> {bookingDetails.dropoffDate} {bookingDetails.dropoffTime}</p>
                            <p className="card-text"><strong>Location:</strong> {selectedCity}</p>
                            <p className="card-text"><strong>Per Day Rent:</strong> ₹{bookingDetails.bike.perDayRental}</p>
                            <img src={bookingDetails.bike.bikePhoto} alt={bookingDetails.bike.bikeName} style={{ width: '100%', height: 'auto' }} />
                            <button className="btn btn-primary mt-3" id={bookingDetails.bike.bikeId} onClick={(e)=>{handleBook(e.target.id)}}>Book</button>
                        </div>
                    </div>
                    </div>
                    }
        </>
    );
};

export default Home;
