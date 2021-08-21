import {useEffect, useState} from "react";
import {editCar, getAllCars} from "../../services/cars.api";

export default function UpdateCar() {
    let [cars, setCars] = useState([]);
    let [formInput, setFormInput] = useState({model: 'audi', price: '30000', year: '2020'});

    useEffect(() => {
        getAllCars().then(value => setCars(value))
    },[])


    let onChangeInputForm = (e) => setFormInput({...formInput, [e.target.name]: e.target.value})

/*let setChosenCar=(car)=>{
        setFormInput({...formInput,model:car.model, year: car.year,price: car.price})
}*/

    let updateCar=(id)=>{
        editCar(id,formInput)};


    return (
        <div>
            <div>
                {
                    cars.map(value => {
                        return <div key = {value.id}>

                            {value.id} - {value.model}
                            <button onSubmit={setFormInput(value)}>edit</button>


                        </div>
                    })
                }
            </div>
            <div>
                <form onSubmit={updateCar}>
                    <input type="text" name={'model'} value={formInput.model} onChange={onChangeInputForm}/>
                    <input type="text" name={'price'} value={formInput.price} onChange={onChangeInputForm}/>
                    <input type="text" name={'year'} value={formInput.year} onChange={onChangeInputForm}/>
                    <input type="submit" value={'save'}/>
                </form>
            </div>
        </div>
    );
}