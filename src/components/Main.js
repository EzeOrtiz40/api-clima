import React from 'react'
import CardHead from './CardHead'


function Main() {

    // const getLocationCity = async () => {
    //     try {
    //         if (navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(obtainCords);
    //         } else {
    //             console.error("Geolocaclizacion no soportada por el navegador");
    //         }
    //     } catch (error) {
    //         console.error("No se pueden obtener los datos de geolocalizacion");
    //     }

    // }

    // const obtainCords = async () => {
    //     alert("Se obtuvo las cords")
    // }
    return (
        <div className='container'>
            <CardHead />

        </div>
    )
}

export default Main