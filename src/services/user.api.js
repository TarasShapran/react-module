const {fetchUsers} = require("../redux/actions");


const getUsers=()=>async (dispatch)=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json())
    dispatch(fetchUsers(response))

}
export {getUsers}