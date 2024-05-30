import React from 'react'
import { useState, useEffect } from 'react'
import './Weather.css'


function Weather({weatherData, handleDelete}) {
    const loaded = () => {

  return (
    <div>
    {/* <div><h1>Weather</h1></div> */}

    <div className='weatherDisplay'> 
    <h1>{weatherData.location.name}, {weatherData.location.region}</h1>
    {/* <img src={weatherData.icon} alt="Weather Icon" /> */}
    <h1>{weatherData.current.temp_f}</h1>
    <p>{weatherData.current.condition.text}</p>
    <button onClick={handleDelete}>Delete</button>
    </div>
    </div>
  )
}

const loading = () => {
    return <h1>No Weather to show</h1>
}

return weatherData ? loaded() : loading() }

export default Weather