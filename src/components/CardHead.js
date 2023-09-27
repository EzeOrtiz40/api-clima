import React from 'react';
import { useWeather } from '../service/context';



function CardHead() {
  // Uso useWeather para acceder a los datos meteorológicos del contexto
  const { weatherData, loading } = useWeather();

  if (loading) {
    return <p>Cargando datos meteorologicos..</p>
  }

  return (
    <div className="card-head">
      {weatherData && (
        <>
          <h2>Ciudad: {weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Estado: {weatherData.weather[0].main}</p>
        </>
      )}
    </div>
  );
}

export default CardHead;

