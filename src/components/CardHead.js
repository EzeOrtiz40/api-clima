import React from 'react';
import { useWeather } from '../service/context';



function CardHead() {
  // Uso useWeather para acceder a los datos meteorológicos del contexto
  const { weatherData, loading } = useWeather();

  if (loading) {
    return <p>Cargando datos meteorilogicos </p>
  }

  const icon = weatherData.weather[0].icon;
  const iconURL = `${process.env.PUBLIC_URL}/img/${icon}.png`;
  const wind = weatherData.wind.speed;
  const pais = weatherData.sys.country;


  return (
    <>
      <h3>{weatherData.name}, {pais}</h3>
    </>
  );
}

export default CardHead;