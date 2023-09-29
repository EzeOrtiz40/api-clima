import React from 'react'
import CardHead from './CardHead'
import { useWeather } from '../service/context';

function Main() {
    const { weatherData, loading } = useWeather();

    if (loading) {
        return <p>Cargando datos meteorilogicos </p>
    }

    const icon = weatherData.weather[0].icon;
    const iconURL = `${process.env.PUBLIC_URL}/img/${icon}.png`;
    const wind = weatherData.wind.speed;
    const pais = weatherData.sys.country;
    const city = weatherData.name;
    const temp = Math.round(weatherData.main.temp);

    return (
        <div className='container'>
            <h1 className='title text-center py-4'>Datos meteorologicos</h1>

            <div className='row'>

                <div className='col d-flex justify-content-center'>

                    <div className="card m-2 cb1 text-center" >

                        <div className="card-body">

                            <span className='card-number fw-bold'>{temp}°C</span>
                            <h5 className='card-title mb-4'>{city},{pais}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main