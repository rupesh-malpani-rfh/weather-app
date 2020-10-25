import React from 'react';

const Weather = ({
    city,
    currentTemp,
    minTemp,
    maxTemp,
    description,
    weatherIcon
}) => {
    console.log(minTemp, maxTemp)
    const showMimMaxTemp = (min, max) => {
        return (
            <div className="d-flex justify-content-center py-4">
                <h5 className="mr-4">Min Temp<br />
                    {min ? (<span>{min} &deg;</span>) : ''}</h5>
                <h5 className="ml-4">Max Temp<br />
                    {max ? (<span>{max} &deg;</span>) : ''}</h5>
            </div>
        )
    }
    return (
        <div className="Card p-4 text-center">
            <h3 className="card-title">{city}</h3>
            <div><i className={`wi ${weatherIcon} display-1`}></i></div>
            <h4 className="py-4">
                Current temprature:
                    {currentTemp ?
                    (<span>{currentTemp}&deg;</span>)
                    : ''
                }
            </h4>
            {showMimMaxTemp(minTemp, maxTemp)}
            <div><strong>Description: {description}</strong></div>
        </div>
    )
}

export default Weather