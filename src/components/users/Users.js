import {useEffect, useState} from "react";
import { getUsers} from "../../services/users.service";
import User from "../user/User";
import './Users.css'
import Posts from "../posts/Posts";

export default function Users() {

    let [users, setUsers] = useState([]);
   // let [post, setPost] = useState([]);


    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [])

/*    const chosenUsers = (id) => {
        console.log(id)
            getPostOfUser(id).then(value => setPost([...value]));
    }*/


    return (
        <div className={"wrap"}>
            <div className="usersBox">
                {
                    users.map(value =>
                        <User user={value}
                              key={value.id}
                              />)
                }
            </div>

            <Posts/>
        </div>
    );
}