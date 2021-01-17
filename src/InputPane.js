import {FaSearch} from 'react-icons/fa'
import {useState, useContext} from "react";
import {StateContext} from "./App";
import {setCity} from "./Actions";


function InputPane() {

    const [text, setText] = useState("")
    const [state, dispatch] = useContext(StateContext)

    return (
        <div>
            <div className="flexDiv">
                <div>
                    <input
                        id="inputCityName"
                        placeholder="Type here a city name"
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div>
                    <FaSearch
                        size={28}
                        className="iconSearch"
                        onClick={e => dispatch(setCity(text))}
                    />
                </div>
            </div>

        </div>

    )
}

export default InputPane