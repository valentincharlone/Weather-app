import { Container} from "@mui/material";
import { useState } from "react";

import './index.css'

import Footer from "./components/Footer";
import WeatherDetail from "./components/WeatherDetail";

import Form from "./components/Form";
import Title from "./components/Title";

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY
  }&lang=es&q=`;

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: ''
  })
  const[weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({ error: false, message: "" });
   
    try {
      if (!city.trim()) throw {message: "El campo ciudad es obligatorio"};
      
      const res = await fetch(API_WEATHER + city);
      const data = await res.json();

      if (data.error) {
        throw { message: data.error.message };
      }
      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });


    } catch (error) {
      setError({ error: true, message: error.message });
    } finally{
      setLoading(false)
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10, color: "white" }} className="container">
      
      <Title />

      <Form 
        handleSubmit={handleSubmit} 
        city={city} 
        setCity={setCity} 
        error={error} 
        loading={loading}
      />

      <WeatherDetail weather={weather} />
      
      <Footer />

    </Container>
  );
}

export default App;

// https://api.weatherapi.com/v1/current.json?key=322fd19902bd49cf9bd124047230702&q=London&aqi=no

// http://api.weatherapi.com/v1/current.json?key=322fd19902bd49cf9bd124047230702&q=London&aqi=no
