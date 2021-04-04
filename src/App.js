import "./App.css";
import "./styles.css";
import Header from "./Header.js";
import Details from "./Details.js";
import ForecastInformation from "./ForecastInformation.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="card card-body top-card">
            <h1 className="title">RainCheck</h1>
            <Header />
          </div>
        </header>

        <main>
          <div className="card card-body bottom-card">
            <section className="currentInformation ms-2">
              <h2 className="card-title current-location" id="current-location">
                Amsterdam, Netherlands
              </h2>
              <h3 className="current-date">Sunday 7 Feb 2021, 13:00 CET</h3>
              <div className="row">
                <div className="col">
                  <img
                    src="../images/sunset.png"
                    alt="sunset-icon"
                    width="50px"
                    className="sunset-icon"
                  />
                  <ul>
                    <li id="sunrise">08:00</li>
                    <li id="sunset">17:00</li>
                  </ul>
                  <p className="currentTemp" id="currentTempInfo">
                    -4°C
                  </p>
                </div>
                <div className="col currentWeather">
                  <p
                    className="current-weather-description"
                    id="weather-description"
                  >
                    Cloudy
                  </p>
                  <img
                    src="../images/11d.svg"
                    width="300px"
                    alt="main-Weather"
                    className="main-weather-image"
                    id="main-weather-icon"
                  />
                  <small className="text-muted lastUpdated">
                    <i className="fas fa-redo update-arrow"></i>Last updated 3
                    mins ago
                  </small>
                </div>
                <div className="col me-2">
                  <hr />
                  <h5 className="details-h5">Details</h5>
                  <Details />
                  <hr />
                </div>
              </div>
            </section>

            <section className="buttonSelector">
              <div className="btn-group" role="group">
                <input
                  type="radio"
                  className="btn-check btn-lg forecastBtns"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  defaultChecked
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="btnradio1"
                >
                  Daily Forecast
                </label>

                <input
                  type="radio"
                  className="btn-check btn-lg forecastBtns"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="btnradio2"
                >
                  Hourly Forecast
                </label>
              </div>
            </section>
            <ForecastInformation />
            <section className="forecastInformation"></section>
          </div>
        </main>
        <footer>
          <a
            href="https://github.com/AnaisPirson/SheCode_Weather-App-Project_Redone"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code{" "}
          </a>
          by Anais Pirson
        </footer>
      </div>
    </div>
  );
}

export default App;
