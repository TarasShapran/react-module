import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers, addUser} from "./services/user.api";
import {fetchUsers, pushUsers} from "./redux/actions";

export default function App() {

    let {users} = useSelector(({reducer}) => reducer );


    let dispatch = useDispatch();
    useEffect(() => {
        getUsers().then(value =>
            dispatch(fetchUsers(value)));
    }, [])

    let onSubmit = (e) => {
        e.preventDefault();
        let user = {
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value
        };
        addUser(user).then(
            value => dispatch(pushUsers(value))
        )


    }

    return (
        <div>


            <form onSubmit={onSubmit}>
                <input type="text" name={'name'}/>
                <input type="text" name={'username'}/>
                <input type="text" name={'email'}/>
                <button>add user</button>
            </form>

            {
                users.map((value) => <div key={value.id}>
                    {value.id} - {value.name} - {value.username} - {value.email}</div>)
            }
        </div>
    );
}

