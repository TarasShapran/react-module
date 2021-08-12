import {useEffect, useState} from "react";
import User from "../user/User";
import {getAxiosUsers} from "../../services/user.axios.service";


export default function Users() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        //getUsers().then(value => setUsers([...value]));
        getAxiosUsers().then(({data}) => setUsers([...data]));
    }, []);

    return (
        <div>
            {
                users.map((user) => <User key={user.id} user={user}/>)


            }


        </div>
    );
}