import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Search.css";
import axios from "axios";


export default function Search(props){
    const [weatherData,setWeatherData] = useState({ ready: false });
    const [city,setCity] = useState(props.city)

    function handleResponse(response){

setWeatherData ({
    ready : true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind:response.data.wind.speed,
    date :new Date(response.data.dt * 1000),
    descripton: response.data.weather[0].descripton,
    city:response.data.name,
    iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
});

    }

    function search() {

        let apiKey="9b8aa97c4b78075b51039339e3bab971";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }


function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleCityChange(event){
    setCity(event.target.value);
}


   if (weatherData.ready){
    return ( <div className="Search" >
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    
                    <input type ="search" 
                    placeholder = "city name"
                     className="form-control"
                     autoFocus ="on"
                     onChange={handleCityChange}
                     
                     />
            </div>

            <div className="col-3">
                <input type="submit" 
                value="search" 
                className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <WeatherInfo data={weatherData} />
    </div>
    );
   }
   else {
       search();
      return "loading...";
    
   }
  
}