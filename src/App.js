import React, { useState } from "react";
import Weather from "./components/Weather";
import Search from "./components/Search";
import "./App.css";

const App = () => {
    const [city, setCity] = useState("");
    // const [city, setCity] = useState("Hanoi");
    const [showWeather, setShowWeather] = useState(false);

    const handleSearch = (searchTerm) => {
        setCity(searchTerm);
        setShowWeather(true);
    };

    return (
        <div className="App">
            <div className="board">
                {/* <h1>Weather App</h1> */}
                <Search onSearch={handleSearch} />

                {showWeather && <Weather city={city} />}

                {/* <Weather city={city} /> */}
            </div>
        </div>
    );
};

export default App;
