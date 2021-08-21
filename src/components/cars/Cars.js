import {useEffect, useState} from "react";
import {deleteCarById, getAllCars} from "../../services/cars.api";
import Car from "../car/Car";

export default function Cars() {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars().then(value => setCars(value))
    },[])

    let deleteCar = (id) => {
        deleteCarById(id);
        setCars(cars.filter(value => value.id !== id));
    }

    return (
        <div>
            {
                cars.map(value => <Car key={value.id} item={value} deleteCar={deleteCar}/>)
            }

        </div>
    );
}