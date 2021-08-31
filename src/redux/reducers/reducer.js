import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_ALL_TODO} from "../actions/actionType";

export const reducer = (state = {todos: []}, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        case GET_ALL_TODO:
            return {...state, todos: [...state.todos]}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(value => value.id !== action.payload.id)}
        case EDIT_TODO :
            let find = state.todos.find(value => value.id === action.payload.id);
            find.title = action.payload.title;
            find.description = action.payload.description;
            return {...state}
        default:
            return state;
    }
}