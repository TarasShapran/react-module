let url = 'https://jsonplaceholder.typicode.com/posts'


const getPosts = () => {
    return fetch(url).then(value => value.json())
}
const getPostById = (id) => {
    return fetch(url+"/"+id).then(value => value.json())
}
export {getPosts,getPostById}