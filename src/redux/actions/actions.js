import {CREATE_CARS, DELETE_CAR, FETCH_CARS} from "./actionTypes";


const get_Cars = (value) => {
    return {type: FETCH_CARS, payload: value}
}
const pushCars = (value) => {
    return {type: CREATE_CARS, payload: value}
}
const delete_Cars = (value) => {
    return {type: DELETE_CAR, payload: value}
}


export {get_Cars, pushCars, delete_Cars}