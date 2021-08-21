let url = 'https://jsonplaceholder.typicode.com/comments'


const getComments = () => {
    return fetch(url).then(value => value.json())
}
const getCommentById = (id) => {
    return fetch(url+"/"+id).then(value => value.json())
}
    export {getComments,getCommentById}