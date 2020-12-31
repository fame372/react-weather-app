import React from "react";
import "./Search.css";

export default function Search(){
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
    <li> Monday 18:00</li>
    <li> fully sunny </li>
    </ul>
        <div className="row mt-3">
            <div className="col-6">
                
                <div className="clearfix">
        <img src ="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
        alt="light Rain"
        id="icon"
        className ="float-left"/> 
        
<div className="float-left">
    <strong id="temperature">12</strong> 
    <span className ="units">
        <a href ="/" id="celsius-link"> °C </a> | <a href="/" id="fahrenheit-link" >°F</a> </span>
</div>
</div>
            </div>
           <div className ="col-6">
      <ul>
        <li>Participation: 0%</li>
        <li>Humidity: 77%</li>
        <li>wind: 8 Kg/h</li>
      </ul>
    </div>
    </div>
    </div>
    
    
    );
  
}