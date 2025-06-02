
import React, {useState, useEffect} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";


const App = () => {

  const weather = { temperature: 25, conditions: "Sunny" };

  const [data, setData] = useState({});

  useEffect(()=>{
    setData(weather);
  },[])

  return (
    <div id="main">
      <WeatherDisplay data={data}/>
    </div>
  )
}

export default App
