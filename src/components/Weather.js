import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/weather.css";

const Icons = {
    Clear: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    Rain: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    Snow: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    Clouds: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    Haze: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    Smoke: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    Mist: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    Drizzle: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
};

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);
    // const [showWeather, setShowWeather] = useState(false);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
                );
                setWeatherData(response.data);
                setError(false);
            } catch (error) {
                setWeatherData(null);
                setError(true);
            }
        };
        fetchWeatherData();
    }, [city]);

    if (error) {
        return <div>Not Found City!</div>;
    }
    if (!weatherData) {
        return <div></div>;
    }
    const currentWeatherType = weatherData.weather[0].main;
    const currentWeatherIcon = Icons[currentWeatherType];

    return (
        <div>
            
            <div className="weather-container">
                <h2>
                    {weatherData.name}, {weatherData.sys.country}
                </h2>
                <div>
                    <img
                        className="icon"
                        src={currentWeatherIcon}
                        alt={currentWeatherType}
                    />
                </div>
                <div className="weather-status">
                    <span>{weatherData.weather[0].main}</span>
                </div>
                <div className="weather-temp">
                    <img
                        className="temp-icon"
                        src="https://cdn-icons-png.flaticon.com/512/1843/1843544.png"
                        alt="temp-icon"
                    />
                    <span className="temp-number">
                        {weatherData.main.temp}°C
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Weather;
