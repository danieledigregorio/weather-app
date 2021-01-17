import {CLEAR, SET_CITY, SET_COUNTRY} from "./Actions";


export const initialState = {
    countrySelectedName: "Nothing",
    countrySelectedCode: "",
    citySelected: "",
}

export function reducer(state, action) {
    switch (action.type) {
        case SET_COUNTRY:
            return {
                ...state,
                countrySelectedName: action.name,
                countrySelectedCode: action.code,
                citySelected: "",
            }
        case SET_CITY:
            return {
                ...state,
                citySelected: action.name,
            }
        case CLEAR:
            return {
                ...state,
                countrySelected: "",
                citySelected: "",
            }
        default :
            return state

    }
}