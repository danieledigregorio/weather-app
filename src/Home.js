import InteractiveWorldMap from "./InteractiveWorldMap";
import InputPane from "./InputPane";
import {StateContext} from "./App";
import {useContext} from 'react'
import Results from "./Results";


function Home() {

    const [state, dispatch] = useContext(StateContext)



    return (
        <div className="App">
            <div>
                <h1 id="pageTitle">Weather App</h1>
                <h3 id="pageSubtitle">Please select a <u>Country</u> on the map and then type a <u>City</u> name.</h3>
            </div>
            <div id="map">
                <InteractiveWorldMap />
            </div>
            <div id="inputPane">
                <h3 id="selected">SELECTED:</h3>
                <h1 id="selectedCountry">{state.countrySelectedName}</h1>
            </div>
            <div id="inputPane">
                <InputPane />
            </div>
            <div id="inputPane" style={{marginBottom:'5vh'}}>
                <Results />
            </div>
        </div>
    )
}


export default Home