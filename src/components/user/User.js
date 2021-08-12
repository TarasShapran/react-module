import {useEffect, useState} from "react";
import {getPostsOfUsers} from "../../services/user.service";
import Posts from "../posts/Posts";

export default function User({user}) {
    let[posts, setPosts]=useState([]);
    useEffect(() => {
        getPostsOfUsers(user.id).then(({data}) => setPosts([...data]))
    },[user.id]);

    return (
        <div>
            <h2>
                Name: {user.name} - username: {user.username}
                <Posts item={posts}/>
            </h2>
        </div>
    );
}