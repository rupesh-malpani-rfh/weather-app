import React, { useState } from "react";

const WeatherForm = ({ getWeatherDetails, error }) => {

    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        getWeatherDetails(city, country)
        setCity('')
        setCountry('')
    }

    const errorMessage = () => {
        return (
            <div className="alert alert-danger mx-5" role="alert">
                Please Enter City and Country...!
            </div>
        )
    }

    return (
        <div>
            {error && errorMessage()}
            <form onSubmit={handleSubmit}>
                <div className="row my-4">
                    <div className="col-md-4">
                        <input
                            type="text"
                            placeholder="City"
                            className="form-control"
                            value={city}
                            // autoComplete="off"
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            placeholder="Country"
                            className="form-control"
                            value={country}
                            // autoComplete="off"
                            onChange={e => setCountry(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4 mt-md-0 mt-2 text-md-left ">
                        <button className="btn btn-warning">Get Weather Details</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default WeatherForm;