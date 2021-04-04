import React from "react";

import "./ForecastInformation.css";

export default function ForecastInformation() {
  return (
    <div className="ForecastInformation">
      <div className="card-group">
        <div className="card">
          <div className="card-body card-content">
            <h5 className="card-title" id="time-period1-header">
              Mon
            </h5>
            {/* <span className="tooltiptext">This is text</span> */}
            <img
              src="images/10d.svg"
              alt=""
              className="forecast-icon"
              id="time-period1-icon"
            />
            <p className="card-text">
              <small className="text-muted" id="time-period1-info">
                10°C/13°C
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body card-content">
            <h5 className="card-title" id="time-period2-header">
              Tues
            </h5>
            <img
              src="images/50d.svg"
              alt=""
              className="forecast-icon"
              id="time-period2-icon"
            />
            <p className="card-text">
              <small className="text-muted" id="time-period2-info">
                10°C/13°C
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body card-content">
            <h5 className="card-title" id="time-period3-header">
              Wed
            </h5>
            <img
              src="images/02d.svg"
              alt=""
              className="forecast-icon"
              id="time-period3-icon"
            />
            <p className="card-text">
              <small className="text-muted" id="time-period3-info">
                10°C/13°C
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body card-content">
            <h5 className="card-title" id="time-period4-header">
              Thurs
            </h5>
            <img
              src="images/01d.svg"
              alt=""
              className="forecast-icon"
              id="time-period4-icon"
            />
            <p className="card-text">
              <small className="text-muted" id="time-period4-info">
                10°C/13°C
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body card-content">
            <h5 className="card-title" id="time-period5-header">
              Fri
            </h5>
            <img
              src="images/781_tornado.svg"
              alt=""
              className="forecast-icon"
              id="time-period5-icon"
            />
            <p className="card-text">
              <small className="text-muted" id="time-period5-info">
                10°C/13°C
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
