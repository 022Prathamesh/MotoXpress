import React from "react";
import BikeCarousel from "./bikeSlides";
import svgBike from '../../assets/svg-bike1.svg'
import svgInsurance from '../../assets/svg-insurance.svg'
import svgAssistance from '../../assets/svg-assistance.svg'
import svgMaintainance from '../../assets/svg-maintainance.svg'

const Dashboard=()=>{
   return ( <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2>Featured Bikes</h2>
        <BikeCarousel />
      </div>
      <div className="col-md-12 mt-5 justify-content-center align-item-center">
        <div className="row">
          <div className="col-md-3">
            <div className="row bg-light">
              <div className="col-md-2 ">
                <img
                  src={svgBike}
                  alt="bike svg"
                />
              </div>
              <div className="col-md-10 fs-5 "><b>Sanitized Vehicles</b></div>

            </div>
          </div>
          <div className="col-md-3">
          <div className="row bg-light">
              <div className="col-md-2">
              <img
                  src={svgInsurance}
                  alt="bike svg"
                />
              </div>
              <div className="col-md-10 fs-5 bg-light"><b>Vehicle Insurance</b></div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="row bg-light">
              <div className="col-md-2">
              <img
                  src={svgAssistance}
                  alt="bike svg"
                />
              </div>
              <div className="col-md-10 fs-5 bg-light"><b>24/7 Roadside Assistance</b></div>

            </div>
          </div>
          <div className="col-md-3">
          <div className="row bg-light">
              <div className="col-md-2">
              <img
                  src={svgMaintainance}
                  alt="bike svg"
                />
              </div>
              <div className="col-md-10 fs-5 bg-light"><b>Bike maintance</b></div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>)
}
export default Dashboard;