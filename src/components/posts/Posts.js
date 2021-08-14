import {useEffect, useState} from "react";
import {getPostOfUser} from "../../services/users.service";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
            getPostOfUser("1").then(value => setPosts([...value]))
        }, []
    )

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }

        </div>
    );
}