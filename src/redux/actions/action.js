import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_ALL_TODO} from "./actionTypes";


const getAllToDos = () => {
    return {type: GET_ALL_TODO}
}
const addToDo = (payload) => {
    return {type: ADD_TODO, payload}
}
const removeToDo = (payload) => {
    return {type: DELETE_TODO, payload}
}
const updateToDo = (payload) => {
    return {type: EDIT_TODO, payload}
}

export {getAllToDos,addToDo,removeToDo,updateToDo}