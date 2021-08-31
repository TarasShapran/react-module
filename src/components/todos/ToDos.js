import {useDispatch, useSelector} from "react-redux";
import ToDo from "../todo/ToDo";
import Form from "../form/Form";
import {addToDo, deleteToDo, editToDo, getAllToDos} from "../../redux/actions/action";
import {useEffect, useState} from "react";

export default function ToDos() {
    let {todos} = useSelector(state => state);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch( getAllToDos());
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        let todo = {title: e.target.title.value, description: e.target.description.value, id: Math.random()}
        dispatch(addToDo(todo))
    }
    const onDelete = (value) => {
        dispatch(deleteToDo(value));
    }

    const onEdit = (todo) => {
        dispatch(editToDo(todo))
    }

    return (
        <div>
            <Form seve={onSubmit}/>
            {
                todos.map((value) => <ToDo key={value.id} item={value} onDelete={onDelete} onEdit={onEdit}/>)
            }

        </div>
    );
}