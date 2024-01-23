import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "eae061c95483dd066657bfc7525418ed";
  let longtitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thu</div>{" "}
          <WeatherIcon code="01d" size={32} />
          <div className="weatherForecast-temperatures">
            {" "}
            <span className="weatherForecast-temperature-max">19° </span>{" "}
            <span className="weatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
