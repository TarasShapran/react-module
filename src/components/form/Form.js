import Cars from "../cars/Cars";
import {saveCar} from "../../services/car.api.service";
import {useState} from "react";

export default function Form() {
    let[model , setModel]  = useState('kia');
    let[price , setPrice]  = useState('6000');
    let[year , setYear]  = useState('2010');




    let onModelChange=(e)=>{
        setModel(e.target.value);
    };
    let onPriceChange=(e)=>{
        setPrice(e.target.value);
    };
    let onYearChange=(e)=>{
        setYear(e.target.value);
    };

    let save=(e)=>{
        e.preventDefault();
        //console.log({model:model,price:price,year:year})
        saveCar({model:model,price:price,year:year})
    };
    return (
        <div>
            <form onSubmit={save} >
                <input type="text" name={'model'} value={model} onChange={onModelChange}/>
                <input type="text" name={'price' } value={price} onChange={onPriceChange}/>
                <input type="text" name={'year'} value={year} onChange={onYearChange}/>
                <input type="submit"/>
                <input type="submit"/>
            </form>
            <Cars/>
        </div>
    );
}