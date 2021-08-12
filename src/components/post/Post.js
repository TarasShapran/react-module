import {useEffect, useState} from "react";
import {getCommentOfPosts} from "../../services/post.service";
import Comments from "../comments/Comments";

export default function Post({item}) {
    let [comments,setComments]=useState([]);
    useEffect(() =>{ getCommentOfPosts(item.id).then(({data}) => {setComments([...data])})})
    return (
        <div>
            - {item.id} --{item.title}
            <Comments item ={comments}/>
        </div>
    );
}