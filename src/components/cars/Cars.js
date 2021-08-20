import {useEffect, useState} from "react";
import {deleteCarById, editCar, getAllCars, saveCar} from "../../services/car.api.service";
import Car from "../car/Car";
import "./Cars.css"

export default function Cars() {
    let [cars, setCars] = useState([]);
    let [model, setModel] = useState('kia');
    let [price, setPrice] = useState('6000');
    let [year, setYear] = useState('2010');

    let onModelChange = (e) => {
        setModel(e.target.value);
    };
    let onPriceChange = (e) => {
        setPrice(e.target.value);
    };
    let onYearChange = (e) => {
        setYear(e.target.value);
    };

    let save = (e) => {
        e.preventDefault();
        saveCar({model: model, price: price, year: year})
    };
    let edit = (e) => {
        e.preventDefault();
        editCar({model: model, price: price, year: year})
    };
    let update=(car)=>{
        setModel(car.model);
        setPrice(car.price);
        setYear(car.year);
        //editCar(id);
    }



    useEffect(() => {
        getAllCars().then(value => setCars(value))
    })

    let deleteCar = (id) => {
        return deleteCarById(id);
        let filterCarArray = cars.filter(value => value.id !== id);
        setCars([...filterCarArray]);

    }
    return (
        <div>
            <div>
                <form >
                    <input type="text" name={'model'} value={model} onChange={onModelChange}/>
                    <input type="text" name={'price'} value={price} onChange={onPriceChange}/>
                    <input type="text" name={'year'} value={year} onChange={onYearChange}/>
                    <input type="submit" value={'save'} onSubmit={save}/>
                    <input type="submit" value={'update'} onSubmit={edit} />
                </form>
            </div>
            <div className={"cars"}>

                {cars.map(value => <Car key={value.id} car={value} deleteCar={deleteCar} update={update}/>)}


            </div>
        </div>
    );
}