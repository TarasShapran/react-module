import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";
import Post from "../post/Post";
import './Posts.css'


export default function Posts() {
    let [posts,setPosts] = useState([]);
    let [post,setPost] = useState(null);
    useEffect(() =>{
        getPosts().then(value => {
            setPosts([...value])
        })

        },[]  )
    const infoOfPost=(post)=>{
        setPost(post);
    }






  return (
    <div className={'wrap'}>
       <div className={'postsBox'}>
           {posts.map(value =><Post key={value.id} post={value} infoOfPost={infoOfPost} /> ) }
       </div >
        {post && <div className={'post'}>
            {JSON.stringify(post)}
        </div>
        }
    </div>
  );
}