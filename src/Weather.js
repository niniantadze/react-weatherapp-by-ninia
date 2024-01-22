import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for the city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>{" "}
      <h1>New York</h1>
      <ul>
        <li>Monday 11:00</li>
        <li>Mostly sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-md-6 d-flex align-items-center">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly sunny"
            className="mr-2"
          />
          <div>
            <span className="temperature">-2</span>
            <span className="unit"> °C</span>
          </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 54%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
