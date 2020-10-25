// import React from 'react';
// import Weather from './components/Weather'
// import './App.css';

// // import "./css/weather-icon.css"
// import "weather-icons/css/weather-icons.css"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import WeatherForm from './components/WeatherForm';

// const API_KEY = "0d4e5c4b3dea00be7d1aff2a8dceea00"

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       city: '',
//       country: '',
//       icon: '',
//       main: '',
//       currentTemp: '',
//       minTemp: undefined,
//       maxTemp: undefined,
//       description: '',
//       error: false
//     }

//     this.weatherIcon = {
//       Thunderstorm: "wi-thunderstorm",
//       Drizzle: "wi-sleet",
//       Rain: "wi-storm-showers",
//       Snow: "wi-snow",
//       Atmosphere: "wi-fog",
//       Clear: "wi-day-sunny",
//       Clouds: "wi-day-fog"
//     }
//   }

//   convertKelvinToCelcius = (temp) => {
//     let value = Math.floor(temp - 273.15)
//     return value;
//   }

//   getWeatherIcon = (id) => {
//     switch (true) {
//       case id >= 200 && id <= 232:
//         this.setState({ icon: this.weatherIcon.Thunderstorm })
//         break
//       case id >= 300 && id <= 321:
//         this.setState({ icon: this.weatherIcon.Drizzle })
//         break
//       case id >= 500 && id <= 531:
//         this.setState({ icon: this.weatherIcon.Rain })
//         break
//       case id >= 600 && id <= 622:
//         this.setState({ icon: this.weatherIcon.Snow })
//         break
//       case id >= 701 && id <= 781:
//         this.setState({ icon: this.weatherIcon.Atmosphere })
//         break
//       case id === 800:
//         this.setState({ icon: this.weatherIcon.Clear })
//         break
//       case id >= 801 && id <= 804:
//         this.setState({ icon: this.weatherIcon.Clouds })
//         break
//       default:
//         this.setState({ icon: this.weatherIcon.Clouds });
//     }
//   }

//   getWeatherDetails = async (city, country) => {
//     if (city && country) {
//       const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
//       const response = await api_call.json()
//       console.log(response)

//       this.setState({
//         city: `${response.name}, ${response.sys.country}`,
//         minTemp: this.convertKelvinToCelcius(response.main.temp_min),
//         maxTemp: this.convertKelvinToCelcius(response.main.temp_max),
//         currentTemp: this.convertKelvinToCelcius(response.main.temp),
//         description: response.weather[0].description
//       })

//       this.getWeatherIcon(response.weather[0].id)

//     } else {
//       this.setState({ error: true })
//     }
//   }

//   render() {
//     return (
//       <div className="main-wrapper">
//         <div className="container my-4">
//           <h1 className="text-center">Weather App</h1>
//           <WeatherForm getWeatherDetails={this.getWeatherDetails} error={this.state.error} />
//           <Weather
//             city={this.state.city}
//             country={this.state.country}
//             currentTemp={this.state.currentTemp}
//             minTemp={this.state.minTemp}
//             maxTemp={this.state.maxTemp}
//             description={this.state.description}
//             weatherIcon={this.state.icon}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react"

import Weather from './components/Weather'
import './App.css';

import "weather-icons/css/weather-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherForm from './components/WeatherForm';

const API_KEY = "0d4e5c4b3dea00be7d1aff2a8dceea00"

const App = () => {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [icon, setIcon] = useState('')
  const [currentTemp, setCurrentTemp] = useState('')
  const [minTemp, setMinTemp] = useState('')
  const [maxTemp, setMaxTemp] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(false)

  const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  }

  const convertKelvinToCelcius = (temp) => {
    let value = Math.floor(temp - 273.15)
    return value;
  }

  const getWeatherIcon = (id) => {
    switch (true) {
      case id >= 200 && id <= 232:
        setIcon(weatherIcon.Thunderstorm)
        break
      case id >= 300 && id <= 321:
        setIcon(weatherIcon.Drizzle)
        break
      case id >= 500 && id <= 531:
        setIcon(weatherIcon.Rain)
        break
      case id >= 600 && id <= 622:
        setIcon(weatherIcon.Snow)
        break
      case id >= 701 && id <= 781:
        setIcon(weatherIcon.Atmosphere)
        break
      case id === 800:
        setIcon(weatherIcon.Clear)
        break
      case id >= 801 && id <= 804:
        setIcon(weatherIcon.Clouds)
        break
      default:
        setIcon(weatherIcon.Clouds);
    }
  }

  const getWeatherDetails = async (city, country) => {
    if (city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
      const response = await api_call.json()
      console.log(response)

      setCity(`${response.name}, ${response.sys.country}`)
      setMinTemp(convertKelvinToCelcius(response.main.temp_min))
      setMaxTemp(convertKelvinToCelcius(response.main.temp_max))
      setCurrentTemp(convertKelvinToCelcius(response.main.temp))
      setDescription(response.weather[0].description)

      getWeatherIcon(response.weather[0].id)

    } else {
      setError(true)
    }
  }

  return (
    <div className="main-wrapper">
      <div className="container my-4">
        <h1 className="text-center">Weather App</h1>
        <WeatherForm getWeatherDetails={getWeatherDetails} error={error} />
        <Weather
          city={city}
          country={country}
          currentTemp={currentTemp}
          minTemp={minTemp}
          maxTemp={maxTemp}
          description={description}
          weatherIcon={icon}
        />
      </div>
    </div>
  )
}

export default App