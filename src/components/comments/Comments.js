import {useEffect, useState} from "react";
import {getCommentsByPostsId} from "../../services/comments.service";
import Comment from "../comment/Comment";
import './../posts/Posts.css'

export default function Comments({postId}) {
  let [comments,setComments] = useState([]);
  let [comment,setComment] = useState(null);
  useEffect(() => {
    getCommentsByPostsId(postId).then(value =>setComments(value) );
  })


  let infoOfComments=(comment)=>{
    setComment(comment)
  }
  return (
    <div className={"wrap"}>
      <div>
      {
        comments.map(value => <Comment key={value.id} comment={value} infoOfComments={infoOfComments}/>)

      }
      </div>
      {comment&&<div className={'comments'}>
        {JSON.stringify(comment)}
      </div>}

    </div>
  );
}