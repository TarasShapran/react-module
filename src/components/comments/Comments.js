import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import {getAxiosComments} from "../../services/comment.axios.service";

export default function Comments() {
   let [comments,setComments]= useState([])
    useEffect(() =>{
        getAxiosComments().then(({data}) => setComments([...data]));
    },[])




  return (
    <div>
        {
            comments.map(comment => <Comment key={comment.id} comment={comment} />)
        }

    </div>
  );
}