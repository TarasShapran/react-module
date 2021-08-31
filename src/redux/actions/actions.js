import {GET_USERS, PUSH_USER} from "./actionTypes";


const fetchUsers = (value) => {
    return {type:GET_USERS,payload:value};
}
const pushUsers = (value) => {
    return {type:PUSH_USER,payload:value};
}
export {fetchUsers,pushUsers}