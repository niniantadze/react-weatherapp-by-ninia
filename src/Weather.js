import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      icon: response.data.condition.icon_url,
      alt: response.data.condition.icon,
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Monday 11:00</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-md-6 d-flex align-items-center">
            <img
              src={weatherData.icon}
              alt={weatherData.alt}
              className="mr-2"
            />
            <div>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit"> °C</span>
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Pressure:{weatherData.pressure}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fcec8ad3dft937afe4da000c469b9obf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
