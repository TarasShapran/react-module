import axios from "axios";

let config={
    baseURL:'https://jsonplaceholder.typicode.com/comments'
}

const axiosInstance= axios.create(config);
const getAxiosComments=()=>{
    return  axiosInstance.get('');
}
export {getAxiosComments}