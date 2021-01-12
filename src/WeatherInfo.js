import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props){

    return (
         <div className="WeatherInfo">
    
    <h1>{props.data.city} </h1>
        <ul>
    <li> 
        <FormattedDate date = {props.data.date}/>
            </li>
    </ul>
        <div className="row mt-3">
            <div className="col-6">
                
                <div className="clearfix">
        <img src = {props.data.iconUrl}
        alt="light clould"
        id="icon"
        className ="float-left"/> 
    <strong className="temperature">{Math.round(props.data.temperature)}</strong> 
    <span className ="units">
         °C </span>
</div>

            </div>
           <div className ="col-6">
      <ul>
        <li>Participation: 0%</li>
   <li>Humidity: {props.data.humidity}%</li>
        <li>wind: {Math.round(props.data.wind)} Kg/h</li>
      </ul>
    </div>
    </div>
    </div>
    );
    }