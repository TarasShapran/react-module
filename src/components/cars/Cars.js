import {useEffect, useState} from "react";
import {deleteCarById, getAllCars} from "../../services/car.api.service";
import Car from "../car/Car";
import "./Cars.css"
export default function Cars() {
    let [cars,setCars]  = useState([]);
    useEffect(() => {
        getAllCars().then(value => setCars(value))
    })

    let deleteCar=(id)=>{
        return  deleteCarById(id);
        let filterCarArray= cars.filter(value => value.id!==id);
        setCars([...filterCarArray]);

    }
    return (
        <div className={"cars"}>

            {cars.map(value => <Car key={value.id} car={value} deleteCar={deleteCar}/>)}



        </div>
    );
}