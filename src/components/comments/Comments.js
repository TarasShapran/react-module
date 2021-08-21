import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api.service";
import {getComments} from "../../services/comments.api.service";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comments,setComments] = useState([]);
    useEffect(() =>{
        getComments().then(value => setComments(value))
    } )
  return (
    <div>
        {
            comments.map(value => <Comment key={value.id} item={value}/>)
        }

    </div>
  );
}