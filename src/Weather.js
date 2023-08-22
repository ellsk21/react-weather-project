import React, { useState } from "react";
import "./Weather.css"
import axios from "axios";
import Info from "./Info";
import WeatherForecast from "./Forecast"

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });
    

    function handleResponse(response) {
        setWeatherData ({
            ready: true,
            temperature: response.data.temperature.current,
            city: response.data.city,
            wind: response.data.wind.speed,
            coordinates: response.data.coordinates,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
            date: new Date (response.data.time * 1000)
         });

         
        
    }
    function search() {
        const apiKey = "65394c1aaf70b9a62t37c04bob3209ea";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric` 
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    
    }
    function handleCityChange(event) {
        setCity(event.target.value);

    }

    if (weatherData.ready) {
return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Type a city.." className="form-control" autoFocus="on" onChange={handleCityChange} />
            </div>
            <div className="col-3">
        <input type="submit" value="Search" className="button w-100" />
        </div>
        </div>
        </form>
        <Info data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates}/>
        
        
        </div>
);
}
else {
    search();
return "loading..."
}

}