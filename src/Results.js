import {StateContext} from "./App";
import {useContext} from "react";
import useAxios from 'axios-hooks'


function Results() {

    const [state, dispatch] = useContext(StateContext)

    const [{data,loading,error}] = useAxios(`https://api.openweathermap.org/data/2.5/weather?q=${state.citySelected},${state.countrySelectedCode}&units=metric&appid=ddb79ff94e9d8f5b857ca633735840e6`)

    if(loading) {
        return (
            <div>Loading... please wait</div>
        )
    }else if(error) {
        return (
            <div>City not found. Please try again.</div>
        )
    }else {
        if(state.citySelected==="") {
            return (
                <div>Please type a city name.</div>
            )
        }else {
            return (
                <div>
                    <h2>Meteo attuale presso {data.name}</h2>
                    <p>Temperatura: {data.main.temp}°C</p>
                    <p>Minima: {data.main.temp_min}°C</p>
                    <p>Massima: {data.main.temp_max}°C</p>
                    <p>Vento: {data.wind.speed} m/s</p>
                    <p>Pressione: {data.main.pressure} hPa</p>
                    <p>Umidità: {data.main.humidity}%</p>
                </div>
            )
        }
    }


}

export default Results