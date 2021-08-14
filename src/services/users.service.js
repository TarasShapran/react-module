let url='https://jsonplaceholder.typicode.com/users';

const getUsers=()=>{
    return  fetch(url)
        .then(value => value.json());
}
const getPostOfUser=(id)=>{
    return fetch('https://jsonplaceholder.typicode.com/users/'+{id}+'/posts').then(value => value.json())
}





export {getUsers , getPostOfUser};