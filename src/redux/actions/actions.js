import {CREATE_CAR, DELETE_CAR, FETCH_CARS} from "./actionTypes";


const get_Cars = (value) => {
    return {type: FETCH_CARS, payload: value}
}
const pushCar = (value) => {
    return {type: CREATE_CAR, payload: value}
}
const delete_Car = (value) => {
    return {type: DELETE_CAR, payload: value}
}


export {get_Cars, pushCar, delete_Car}