import React, { useState } from "react";

import "./Header.css";

import axios from "axios";

export default function Header() {
  let [cityUser, getCityUser] = useState(null);
  let [city, sendCity] = useState(null);
  // let apiKey = "d4c486d391c1e53132be6cfbb096c3a8";
  // let units = "metric";
  // let iconUrl = "http://openweathermap.org/img/wn/";
  // let [temperature, setTemperature] = useState(null);
  // let [description, setDescription] = useState(null);
  // let [humidity, setHumidity] = useState(null);
  // let [wind, setWind] = useState(null);
  // let [icon, setIcon] = useState(null);
  // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityUser}&appid=${apiKey}&units=${units}`;

  function handleSubmit(event) {
    event.preventDefault();
    sendCity(cityUser);
    console.log(cityUser);
    this.props.onGetCity("london");
    // axios.get(apiUrl).then(showTemperature);
  }
  function getCity(event) {
    getCityUser(event.target.value);
  }

  // function showTemperature(response) {
  //   setTemperature(response.data.main.temp);
  //   setDescription(response.data.weather[0].description);
  //   setHumidity(response.data.main.humidity);
  //   setWind(response.data.wind.speed);
  //   setIcon(response.data.weather[0].icon);
  //   console.log(response.data);
  // }

  let formInfo = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
          <div className="input-group searchBarGroup ms-2">
            <button
              className="btn btn-outline-secondary"
              id="currentLoc"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </button>

            <input
              type="search"
              className="form-control searchbarbox"
              list="datalistOptions"
              id="searchBar"
              placeholder="Enter a city"
              autoComplete="off"
              onChange={getCity}
            />

            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="searchbtn"
              value="search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-5">
          <div className="input-group temparture-switch">
            <span className="celsius-label">C </span>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                F
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  return formInfo;
}
