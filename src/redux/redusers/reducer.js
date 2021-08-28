import {GET_USERS, PUSH_USER} from "../actions";

export const reducer = (state = {users: []}, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: [...action.payload]}
        case PUSH_USER:
            return {...state, users: [...state.users, action.payload]}
        default:
            return state;
    }
}