import React from "react";
import "./Report.css";
import { Card } from "react-bootstrap";
import AreaChartComponent from "../../components/ChooseSection/AreaChart";

const Reports = () => {
  
  return (
    <div className="reports-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Report & Predict</h1>
          <p className="text-center w-75 mb-5">
            "Explore insights and predictions with our interactive reporting
            tools."
          </p>
        </div>
      </header>

      <div className="container my-5">
        <AreaChartComponent />
      </div>

      <div className="bg-dark text-light py-5"></div>
    </div>
  );
};

export default Reports;
