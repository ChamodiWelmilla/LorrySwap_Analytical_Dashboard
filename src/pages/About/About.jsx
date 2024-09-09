import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import us_img2 from '../../utils/images/us_img2.jpeg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

function About() {
  return (
    <div className="about-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">About Us</h1>
          <p className="text-center w-75 mb-5">
            "We are Team DevDynasty, transforming market dynamics and
            agricultural supply chains with innovative software solutions
            focused on efficiency and sustainability."
          </p>
        </div>
      </header>

      <div className="container my-5 mt-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
            <h2 className="mb-4 mb-lg-5">Stay with Us</h2>
            <p>
              Stay with us and be part of revolutionizing market dynamics and
              transforming agricultural supply chains. Our innovative software
              solution is designed to tackle inefficiencies head-on by
              optimizing truck utilization, synchronizing supply and demand, and
              minimizing unproductive return trips.
              <br></br>
              <br></br>
              Through intuitive interfaces that enable real-time truck tracking
              and seamless connections between users and trucks, we enhance
              market responsiveness and reduce waste. Join us in creating a more
              sustainable and efficient market ecosystem where every stakeholder
              benefits from streamlined operations and improved coordination.
            </p>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={us_img2} className="img-fluid w-55" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <ChooseSection />
      </div>
    </div>
  );
}

export default About;