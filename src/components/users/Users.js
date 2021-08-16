import {useEffect, useState} from "react";
import {getPostOfUser, getUsers} from "../../services/users.service";
import User from "../user/User";
import './Users.css'
import Posts from "../posts/Posts";


export default function Users() {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [])

    const postOfUser = (id) => {
        getPostOfUser(id).then(value => setPosts([...value]))
    }

    return (
        <div className={"wrap"}>
            <div className="usersBox">
                {
                    users.map(value =>
                        <User user={value}
                              key={value.id}
                              chosenUsers={postOfUser}
                              />)
                }
            </div>
            <div className="userInfo">
                <Posts posts={posts}/>
            </div>


        </div>
    );
}