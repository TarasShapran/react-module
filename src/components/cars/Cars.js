import {useEffect, useState} from "react";
import {deleteCarById, editCar, getAllCars, saveCar} from "../../services/car.api.service";
import Car from "../car/Car";
import "./Cars.css"

export default function Cars() {
    let [cars, setCars] = useState([]);
    let [formInput, setFormInput] = useState({model: 'audi', price: '30000', year: '2020'});

    useEffect(() => {
        getAllCars().then(value => setCars(value))
    }, [])

    let onChangeInputForm = (e) => setFormInput({...formInput, [e.target.name]: e.target.value})


    let onSaveCar = () => {

        saveCar({...formInput})
    };


    let onDeleteCar = (id) => {
        deleteCarById(id);
        setCars(cars.filter(value => value.id !== id));
    }

    let onEditCar=(id)=>{
        editCar(id,formInput)};


    return (
        <div>
            <div>
                <form onSubmit={onSaveCar}>
                    <input type="text" name={'model'} value={formInput.model} onChange={onChangeInputForm}/>
                    <input type="text" name={'price'} value={formInput.price} onChange={onChangeInputForm}/>
                    <input type="text" name={'year'} value={formInput.year} onChange={onChangeInputForm}/>
                    <input type="submit" value={'save'}/>
                </form>
            </div>
            <div className={"cars"}>

                {cars.map(value => <Car key={value.id} car={value} deleteCar={onDeleteCar} update={onEditCar}/>)}


            </div>
        </div>
    );
}