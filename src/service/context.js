import React, { useContext, useState, useEffect, createContext } from 'react'


const weatherContext = createContext(null);
const openWeatherMapKey = "8408b16d6947bbaf9cd85740ce3fba64";


export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [coordenadas, setCoordenadas] = useState(null);
    const [loading, setLoading] = useState(true);

    const getLocationCity = async () => {
        try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        console.log(coordenadas);
                        setCoordenadas({ latitude, longitude });
                    },
                    //obtencion de los datos del clima 
                    getWeatherLocation(openWeatherMapKey, coordenadas)
                );
            } else {
                console.error("Geolocaclizacion no soportada por el navegador");
            }
        } catch (error) {
            console.error("No se pueden obtener los datos de geolocalizacion");
        }

    }

    useEffect(() => {
        getLocationCity();
    }, []);

    const getWeatherLocation = async (openWeatherMapKey, coordenadas) => {
        try {
            if (coordenadas) {
                console.log("coordenadas obtenidas", coordenadas);
                const { latitude, longitude } = coordenadas;
                const accuWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapKey}&units=metric`;

                const weatherResponse = await fetch(accuWeatherURL);
                const weatherData = await weatherResponse.json();
                console.log(weatherData);
                setWeatherData(weatherData);
                setLoading(false);
            }

        } catch (error) {
            console.error("Error al obtener los datos meteorológicos", error);
            setLoading(false);
        }

    };



    return (
        <weatherContext.Provider value={{ weatherData, loading }}>
            {children}
        </weatherContext.Provider>
    );
};

export const useWeather = () => {
    const context = useContext(weatherContext);
    if (context === undefined) {
        throw new Error('useWeather debe ser usado dentro de un WeatheProvider');
    }
    return context;
};

