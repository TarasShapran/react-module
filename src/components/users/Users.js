import {useEffect} from "react";
import {getUsers} from "../../services/user.api";
import {useDispatch, useSelector} from "react-redux";
import User from "../user/User";
import Form from "../form/Form";
import {pushUsers} from "../../redux/actions";

export default function Users() {
  let {users} = useSelector(state => state);
  let dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUsers());
  },[])
  let  onSubmit=(e)=> {
    e.preventDefault();
    let user={name:e.target.name.value,username:e.target.username.value}
    dispatch(pushUsers(user))
  }

  return (
    <div>
      <Form seve={onSubmit}/>
      {
        users.map(value => <User key={value.id} item={value}/>)
      }

    </div>
  );
}