import React from 'react';
import { Card } from 'react-bootstrap';

function ChooseSection() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <div className="row g-4">
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3  mt-3">
                  Comprehensive Data Analytics
                </Card.Title>
                <Card.Text className="text-center">
                  Our platform provides detailed insights into supply and demand
                  trends, ensuring you stay informed with monthly and yearly
                  summaries and future market predictions.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3"></div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  User-Friendly Interface
                </Card.Title>
                <Card.Text className="text-center">
                  Designed with ease of use in mind, our system allows for
                  effortless management of orders and inventory, optimizing your
                  operations with intuitive navigation and functionality.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3"></div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Expert Support and Continuous Improvement
                </Card.Title>
                <Card.Text className="text-center">
                  Our dedicated team offers ongoing support and regularly
                  updates the platform, integrating the latest technologies to
                  meet your evolving needs and enhance performance.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSection;