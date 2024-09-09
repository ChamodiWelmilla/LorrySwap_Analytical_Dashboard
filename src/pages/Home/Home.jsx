import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import Farmer from "../../utils/images/Farmer.jpg";
import Report from "../../pages/Report/Report";
import { Card } from "react-bootstrap";
import ParcelManagement from "../../utils/images/ParcelManagement.jpg";
import InventoryManagement from "../../utils/images/InventoryManagement.jpg";
import RealTimeTracking from "../../utils/images/RealTimeTracking.jpg";

const features = [
  {
    id: 1,
    img: [ParcelManagement],
    title: "Parcel Management and Driver Assignment",
    description:
      "Easily send parcels and assign available drivers for deliveries. This function allows users to input parcel details, find drivers, and enables drivers to accept extra rides when available, maximizing productivity and ensuring efficient delivery operations.",
  },
  {
    id: 2,
    img: [InventoryManagement],
    title: "Comprehensive Inventory Management",
    description:
      "Create, read, update, and delete orders with ease. This feature ensures accurate data entry, validation, and efficient inventory organization.",
  },
  {
    id: 3,
    img: [RealTimeTracking],
    title: "Real-Time Driver Tracking",
    description:
      "Monitor drivers in real-time with geolocation technology. This function provides continuous updates and enhances delivery monitoring.",
  },
];

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold align-items-center">
            LorrySwap Prediction
          </h1>
          <p>
            We offer comprehensive reports and predictive analytics to help you
            make informed decisions and optimize your agricultural operations.
            Explore insights on supply and demand trends, monthly and yearly
            summaries, and future market predictions to stay ahead in the
            industry.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">Report & Predict</h2>
              <p>We predict demand while reporting both supply and demand.</p>
              <Link to="/report">
                <button
                  type="button"
                  className="btn btn-predict btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-3 mt-3 mt-lg-0">
              <img src={Farmer} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5"></div>

      <div className="feature-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">Our Features</h2>
          <div className="row g-4">
            {features.map((feature) => (
              <div key={feature.id} className="col-md-6 col-lg-4">
                <Link to="/feature" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={feature.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/feature">
            <button type="button" className="btn btn-danger btn-lg mt-5">
              Read More
            </button>
          </Link>
        </div>
        <div className="container d-flex flex-column align-items-center"></div>
      </div>
    </div>
  );
}

export default Home;
