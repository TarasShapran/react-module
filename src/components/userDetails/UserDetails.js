import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUserById} from "../../services/user.service";

export default function UserDetails(/*{history,match:{params:{id}}}*/) {
    let {id} = useParams('id');
     let [user,setUser]=    useState({})
    useEffect(() => {getUserById(id).then(value =>
        setUser(value))},[id])



  return (
    <div>
        {JSON.stringify(user)}

    </div>
  );
}