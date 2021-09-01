import { useState} from "react";

export default function Form({saveToDo ,setForm}) {
    let [formInput, setFormInput] = useState({title: '', description: '',id:0});

    let onFormChange = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value})
        setForm(formInput);
    };
    console.log('form'+formInput)
    return (
        <div>
            <form onSubmit={(e)=>saveToDo(e,formInput)}>
                <input type="text" name={"title"} value={formInput.title} onChange={onFormChange}/>
                <input type="text" name={"description"} value={formInput.description} onChange={onFormChange}/>
                <input type="text" name={"id"} value={formInput.id} onChange={onFormChange}/>
                <input type="submit"/>
            </form>

        </div>
    );
}