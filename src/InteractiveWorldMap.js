import {WorldMap} from "react-svg-worldmap";
import {StateContext} from "./App";
import {useContext} from "react";
import React from "react";
import {setCountry} from "./Actions";
import worldCountries from './worldCountries.json'
import {Route} from "react-router";
import InputPane from "./InputPane";

function InteractiveWorldMap() {

    const [state, dispatch] = useContext(StateContext)


    let data = []
    worldCountries.map(c => {
        data = [
            ...data,
            {country: c.alpha_2, value: c.population}
        ]
    })

    const clickAction = (event: React.MouseEvent<SVGElement, MouseEvent>, countryName: string, isoCode: string, value: string, prefix?: string, suffix?: string) => {
        dispatch(setCountry(countryName, isoCode));
    }

    return (
        <div>
            <WorldMap
                borderColor="white"
                size="xxl"
                backgroundColor="#282c34"
                data={data}
                onClickFunction={clickAction}
            />
        </div>
    )
}


export default InteractiveWorldMap