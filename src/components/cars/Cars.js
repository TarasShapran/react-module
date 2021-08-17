import {useEffect, useState} from "react";
import {getAllCars} from "../../services/car.api.service";
import Car from "../car/Car";
import "./Cars.css"
export default function Cars() {
    let [cars,setCars]  = useState([]);
    useEffect(() => {
        getAllCars().then(value => setCars(value))
    })
  return (
    <div className={"cars"}>

        {cars.map(value => <Car key={value.id} car={value}/>)}



    </div>
  );
}