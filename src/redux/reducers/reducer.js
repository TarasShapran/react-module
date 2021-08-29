import {CREATE_CARS, FETCH_CARS, DELETE_CAR} from "../actions";


export const reducer = (state = {cars: []}, action) => {
    switch (action.type) {
        case FETCH_CARS:
            return {...state, cars: [...action.payload]};
        case CREATE_CARS:
            return {...state, cars: [...state.cars, action.payload]};
        case DELETE_CAR:
            return {...state, cars: [...state.cars.filter(value => value.id !== action.payload.id)]};
        default:
            return state;
    }
}

