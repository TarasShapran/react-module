import {useDispatch, useSelector} from "react-redux";
import ToDo from "../todo/ToDo";
import {useEffect, useState} from "react";
import {addToDo, getAllToDos, removeToDo, updateToDo} from "../../redux/actions/action";
import Form from "../form/Form";

export default function ToDos() {
    let [form,setForm] = useState();
    let {todos} = useSelector(state => state);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllToDos())
    }, [])

    const saveToDo = (e, todo) => {
        e.preventDefault();
        dispatch(addToDo(todo))
    }
    let deleteToDo = (todo) => {
        dispatch(removeToDo(todo))
    };
    let editToDo = (todo) => {

        dispatch(updateToDo({todo:todo,form:form}))
    };
    return (
        <div>
            <Form saveToDo={saveToDo} setForm={setForm}/>
            {
                todos.map(value => <ToDo key={value.id} item={value} deleteToDo={deleteToDo} editToDo={editToDo}/>)
            }

        </div>
    );
}