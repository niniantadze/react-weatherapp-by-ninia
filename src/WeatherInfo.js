import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-md-6 d-flex align-items-center">
          <img src={props.data.icon} alt={props.data.alt} className="mr-2" />
          <div>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit"> °C</span>
          </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>Pressure:{props.data.pressure}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
