import React, { useState } from "react";
import "../styles/search.css";
const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    // const [showWeather, setShowWeather] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
        setSearchTerm("");
        // setShowWeather(true);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className = "search-bar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Enter a city name or zip code"
                />
                <button type="submit">
                    <img src="https://cdn-icons-png.flaticon.com/512/751/751381.png" />
                </button>
            </form>
        </div>
    );
};

export default Search;
