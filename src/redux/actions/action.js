import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_ALL_TODO} from "./actionType";

const addToDo=(value)=>{
    return {type:ADD_TODO,payload:value}
}
const deleteToDo=(value)=>{
    return {type:DELETE_TODO,payload:value}
}
const getAllToDos=()=>{
    return{type:GET_ALL_TODO}
}
const editToDo=(payload)=>{
    return{type:EDIT_TODO, payload}
}
export {addToDo,deleteToDo, getAllToDos,editToDo}
