export const SET_COUNTRY = "setCountry"
export const SET_CITY = "setCity"
export const CLEAR = "clear"

export function setCountry(name, code) {
    return {type: SET_COUNTRY, name, code}
}
export function setCity(name) {
    return {type: SET_CITY, name}
}
export function clear() {
    return {type: CLEAR}
}
