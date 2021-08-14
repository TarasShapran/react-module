import {useEffect, useState} from "react";
import {getPostOfUser, getUsers} from "../../services/users.service";
import User from "../user/User";
import './Users.css'


export default function Users() {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(null);


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
            {posts&& <div className="userInfo">
                {posts.map(value => {
                    return <div key={value.id}>
                        {value.id} - {value.title}
                    </div>
                })}
            </div>}

        </div>
    );
}