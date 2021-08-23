import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.service";
import {Route} from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";

export default function Users(props) {
    let {match:{url}}=props;

    const [users, setUsers] = useState([])

    useEffect( () => {
        async function fetchData(){
            let usersList = await getUsers();
            setUsers([...usersList]);
        }
      fetchData();

    }, [])


    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
            <Route path={`${url}/:id`} render={(props) =>{
                console.log(props)
                return <UserDetails {...props}/>
            } }/>
        </div>
    );
}