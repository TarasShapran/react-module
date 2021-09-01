import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_ALL_TODO} from "../actions/actionTypes";


export const reducer=(state={todos:[]},action)=>{
switch (action.type){
    case GET_ALL_TODO:
        return {...state,todos:[...state.todos]}
    case ADD_TODO:
        return {...state,todos:[...state.todos,action.payload]}
    case DELETE_TODO:
        return {...state,todos:[...state.todos.filter(value => value.id!==action.payload.id)]}
    case EDIT_TODO:
        let find = state.todos.find(value => value.id === action.payload.todo.id);
        find.title = action.payload.form.title;
        find.description = action.payload.form.description;
        return {...state}
    default:
        return state;
}
}
