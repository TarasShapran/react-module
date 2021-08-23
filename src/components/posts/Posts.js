import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "../post/Post";
import {Route} from "react-router-dom";
import PostDetails from "../postDetails/PostDetails";
import './Posts.css'

export default function Posts(props) {
    let {match: {url}} = props;
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value))
    }, [])

    return (
        <div className={'wrap'}>
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
            <div>
                <Route path={`${url}/:id`} render={(props) => {
                    console.log(props)
                    return <PostDetails {...props}/>
                }}/>
            </div>
        </div>

    );
}