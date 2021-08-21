import {saveCar} from "../../services/cars.api";
import {useState} from "react";

export default function CreateCar() {

    let [formInput, setFormInput] = useState({model: 'audi', price: '30000', year: '2020'});
    let onChangeInputForm = (e) => setFormInput({...formInput, [e.target.name]: e.target.value})

    let onSaveCar = () => {

        saveCar({...formInput})
    };



    return (
    <div>
        <form onSubmit={onSaveCar}>
            <input type="text" name={'model'} value={formInput.model} onChange={onChangeInputForm}/>
            <input type="text" name={'price'} value={formInput.price} onChange={onChangeInputForm}/>
            <input type="text" name={'year'} value={formInput.year} onChange={onChangeInputForm}/>
            <input type="submit" value={'save'}/>
        </form>
    </div>


  );
}