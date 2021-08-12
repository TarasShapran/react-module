import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.service";


export default function Users() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        //getUsers().then(value => setUsers([...value]));
        getUsers().then(({data}) => setUsers([...data]));
    }, []);

    return (
        <div>
            {
                users.map((user) => <User key={user.id} user={user}/>)


            }


        </div>
    );
}