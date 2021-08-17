import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";
import Post from "../post/Post";
import './Posts.css'
import Comments from "../comments/Comments";


export default function Posts() {
    let [posts,setPosts] = useState([]);
    let [post,setPost] = useState(null);
    let [toggleComments,setToggleComments] = useState('hide');

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
        {post && <div className={'post '} >
            {JSON.stringify(post)}
            <button onClick={() =>{
                if(toggleComments==='hide'){
                    setToggleComments('show');
                }else if(toggleComments==='show'){
                    setToggleComments('hide');
                }

            }}>Details</button>

        </div>
        }
        {post&&<div className={toggleComments  } >
            <Comments postId={post.id}/>
        </div>}
    </div>
  );
}