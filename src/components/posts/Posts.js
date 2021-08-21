import {useEffect, useState} from "react";
import {getComments} from "../../services/comments.api.service";
import {getPosts} from "../../services/posts.api.service";
import Post from "../post/Post";

export default function Posts() {
  let [posts,setPosts] = useState([]);
  useEffect(() =>{
    getPosts().then(value => setPosts(value))
  } )
  return (
    <div>
      {
        posts.map(value => <Post key={value.id} item={value}/>)
      }

    </div>
  );
}