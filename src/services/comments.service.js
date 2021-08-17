let url ='https://jsonplaceholder.typicode.com/posts';


let getCommentsByPostsId=(id)=>{
    return fetch(url+"/"+id+"/comments").then(value => value.json())

}
export {getCommentsByPostsId}