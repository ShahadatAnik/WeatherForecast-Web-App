import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";

import DisplayInfo from "./components/DisplayInfo";

const API = {
  key: "834bb64c903346b8196dbbd32d6ce233",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("Dhaka");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(`${API.base}weather?q=${query}&APPID=${API.key}`)
      .then((resp) => resp.json())
      .then((result) => setWeather(result))
      .then(console.log(weather))
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <div className="app">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      {!weather.name ? <div>Sorry!!</div> : <DisplayInfo city={weather} />}
    </div>
  );
}

export default App;
