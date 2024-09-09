import React from "react";
import "./Feature.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ParcelManagement from "../../utils/images/ParcelManagement.jpg";
import InventoryManagement from "../../utils/images/InventoryManagement.jpg";
import ChatApp from "../../utils/images/ChatApp.jpg";
import OptimalRoute from "../../utils/images/OptimalRoute.jpg";
import RealTimeTracking from "../../utils/images/RealTimeTracking.jpg";
import Authentication from "../../utils/images/Authentication.jpg";
import LivePackageStatus from "../../utils/images/LivePackageStatus.png";
import report from "../../utils/images/report.jpg";

const blogs = [
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
  {
    id: 4,
    img: [LivePackageStatus],
    title: "Live Package Status Updates",
    description:
      "Track package deliveries in real-time. Get instant updates on package locations and statuses, improving transparency and customer satisfaction.",
  },
  {
    id: 5,
    img: [OptimalRoute],
    title: "Optimal Route Planning",
    description:
      "Utilize advanced algorithms to calculate the shortest and most efficient delivery routes. This feature integrates Google Maps API for real-time navigation",
  },
  {
    id: 6,
    img: [Authentication],
    title: "Secure Authentication and Authorization",
    description:
      "Enjoy robust security with password-based authentication and JWT tokens. Role-Based Access Control (RBAC) ensures permissions are assigned based on user roles.",
  },
  {
    id: 7,
    img: [ChatApp],
    title: "Integrated Chat Application",
    description:
      "Enhance communication with an integrated chat app. Users can send and receive messages in real-time, improving coordination and support.",
  },
  {
    id: 8,
    img: [report],
    title: "Advanced Reporting",
    description:
      "Generate detailed reports on various metrics, including fleet performance, delivery times, and inventory levels. This function helps in making data-driven decisions.",
  },
];

function Blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Features</h1>
          <p className="text-center w-75 mb-5">
            "Discover the powerful features that drive efficiency and
            innovation."
          </p>
        </div>
      </header>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect bg-dark text-light border-0">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5 d-flex flex-column align-items-center">
                      <Card.Title className="fs-2 mb-4">
                        {blog.title}
                      </Card.Title>
                      <Card.Text className="text-center">
                        {blog.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
