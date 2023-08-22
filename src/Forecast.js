import React from "react";
import Icon from "./Icon";
import "./Forecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
    

    function handleResponse(response) {
        console.log(response.data);
    }
 

    let apiKey = "65394c1aaf70b9a62t37c04bob3209ea";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    Axios.get(apiUrl).then(handleResponse);

    return (<div className="weatherForecast">
        <div className="row">
            <div className="col">
            <div className="forecastDay">Wednesday</div>  <Icon/>  <span className="tempMin">11</span> <span className="tempMax"><strong>15</strong></span>
            </div>
        </div>
    </div>
    )
}