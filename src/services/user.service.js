import axios from "axios";


let config={
    baseURL:'https://jsonplaceholder.typicode.com/users'
}

const axiosInstance = axios.create(config);


const getUsers=()=>{
    return  axiosInstance.get('');
}
const getPostsOfUsers=(id)=>{
    return axiosInstance('/'+id+'/posts')
}


export {getUsers,getPostsOfUsers};