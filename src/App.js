import './App.css';
import "./Search.css"
import Search from "./Search"

export default function App() {
  return (
    <div className="Weather App">
      <div className="continer">
      
      <Search  city ="edmonton"/>
      
      </div>
      <footer>
      This project was coded by Fadumo Ahmed and is {" "}
      <a href="https://github.com/fame372/react-weather-app" target = "_blank" rel="noreferrer">  
          open -sourced on github
      </a>
    </footer>
    </div>
    
  );
}


