import './App.css';

export default function App() {
  return (
    <div className="Weather App">
      
      <h1>Edmonton, Alberta</h1>
      <h2>Monday 18:00</h2>
      <h3>Full Sunny</h3>
      <p>
        <input type="search engine" placeholder="search weather" />
      </p>
     
      <br />
      <span className="wind">
        <ul>
          <li>Participation: 0%</li>
          <li>Humidity: 77%</li>
          <li>wind: 8 Kg/h</li>
        </ul>
      </span>
    
      <footer>
      This project was coded by Fadumo Ahmed and is {" "}
      <a href="https://github.com/fame372/react-weather-app" target = "_blank">  
          open -sourced on github
      </a>
    </footer>
    </div>
    
  );
}


