import React, {useState} from "react";
import "./Search.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Search(props){
    const [weatherData,setWeatherData] = useState({ ready: false});

    function handleResponse(response){
console.log (response.data);
setWeatherData ({
    ready : true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind:response.data.wind.speed,
    date :new Date(response.data.dt * 1000),
    descripton: response.data.weather[0].descripton,
    city:response.data.name,
    iconUrl:"https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
});

    }
   if (weatherData.ready){
    return ( <div className="Search" >
        <form>
            <div className="row">
                <div className="col-9">
                    <input type ="search" placeholder = "city name" className="form-control"/>
            </div>
            <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary w-100"/>
</div>
            </div>
        </form>
        <h1>  Edmonton, Alberta </h1>
        <ul>
    <li> 
        <FormattedDate date={weatherData.date} />
            
            </li>
            <li> clear sky</li>
    </ul>
        <div className="row mt-3">
            <div className="col-6">
                
                <div className="clearfix">
        <img src = {weatherData.iconUrl}
        alt="light clould"
        id="icon"
        className ="float-left"/> 
    <strong className="temperature">{Math.round(weatherData.temperature)}</strong> 
    <span className ="units">
        <a href ="/" id="celsius-link"> °C </a> | <a href="/" id="fahrenheit-link" >°F</a> </span>
</div>

            </div>
           <div className ="col-6">
      <ul>
        <li>Participation: 0%</li>
   <li>Humidity: {weatherData.humidity}%</li>
        <li>wind: {weatherData.wind} Kg/h</li>
      </ul>
    </div>
    </div>
    </div>
    
    
    );
   }
   else {
       
        let apiKey="9b8aa97c4b78075b51039339e3bab971";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
        return "loading...";
    
   }
  
}