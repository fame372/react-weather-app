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
      <h3>
        <img
          src="https://bloximages.newyork1.vip.townnews.com/northwestgeorgianews.com/content/tncms/assets/v3/editorial/9/cf/9cf0d394-2352-11e3-9d30-001a4bcf6878/565f5a4629c30.image.jpg"
          width="40px"
        />
        <span>20</span>°C|<a href="#"> °F</a>
      </h3>
      <br />
      <span className="wind">
        <ul>
          <li>Participation: 0%</li>
          <li>Humidity: 77%</li>
          <li>wind: 8 Kg/h</li>
        </ul>
      </span>
    </div>
  );
}


