import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Col } from "react-bootstrap";

const apiKey = "f61d084f19b9d0341c46ac9625c16561";

class WeatherApp extends Component {
  state = {
    city: "",
    weatherData: null,
    error: null,
  };
  componentDidMount() {
    const defaultCity = "Roma";
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ weatherData: data, error: null });
      })
      .catch((error) => {
        this.setState({ error: error.message, weatherData: null });
      });
  }
  handleInputChange = (e) => {
    this.setState({ city: e.target.value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ weatherData: data, error: null });
      })
      .catch((error) => {
        this.setState({ error: error.message, weatherData: null });
      });
  };
  getWeatherIcon = (iconId) => {
    const baseUrl = "https://openweathermap.org/img/w/";
    return `${baseUrl}${iconId}.png`;
  };
  render() {
    const { city, weatherData, error } = this.state;
    return (
      <div className="container text-center mt-5">
        <h3 className="lead fw-bold">
          **Prima di prenotare la tua giornata in spa, verifica le condizioni meteorologiche.
        </h3>
        <div className="row justify-content-start">
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex flex-column text-center">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label className="mt-5 fw-bold text-center" htmlFor="cityInput">
                  Città:
                </label>
                <input
                  type="text"
                  className="form-control mt-3 input-ricerca"
                  id="cityInput"
                  value={city}
                  onChange={this.handleInputChange}/>
                <button type="submit" className="btn btn-light mt-2 button-ricerca">
                  Cerca
                </button>
              </div>
            </form>
            {error && <p>{error}</p>}
            {weatherData && (
              <div className="text-center">
                <h2 className="mt-2 text-white fw-bold">{weatherData.city.name}</h2>
                <Carousel interval={3000} pauseOnHover={true} indicators={false} className="mx-auto w-70 d-block">
                  {weatherData.list
                    .filter((forecast) => {
                      const forecastDate = new Date(forecast.dt_txt);
                      const currentDate = new Date();
                      return (
                        forecastDate.getDate() === currentDate.getDate() ||
                        forecastDate.getDate() === currentDate.getDate() + 1
                      );
                    })
                    .map((forecast, index) => (
                      <Carousel.Item key={index} className="my-3 text-light">
                        <div className="card-deck">
                          <div className="card mt-1 shadow bg-light">
                            <div className="card-body weather-section">
                              <h5 className="card-title mt-7 weather-section">
                                {new Date(forecast.dt_txt).toLocaleString("it-IT", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </h5>
                              <h5 className="card-title mt-2 weather-section">
                                {new Date(forecast.dt_txt).toLocaleTimeString("it-IT", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </h5>
                              <img
                                src={this.getWeatherIcon(forecast.weather[0].icon)}
                                alt={forecast.weather[0].description}
                              />
                              <p className="card-text weather-section">
                                Temperatura: {forecast.main.temp}°C
                              </p>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    ))}
                </Carousel>
              </div>
            )}
          </Col>
        </div>
      </div>
    );
  }
}

export default WeatherApp;
