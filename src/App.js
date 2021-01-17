import './App.css';
import {createContext, useReducer} from "react";
import {initialState, reducer} from "./Reducer";
import Home from './Home'

export const StateContext = createContext()

function App() {

    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>

            <Home />

        </StateContext.Provider>
    );
}

export default App;

