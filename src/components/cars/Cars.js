import Car from "../car/Car";
import {createCar, deleteCar, getCars} from "../../services/car.api";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {get_Cars, pushCars} from "../../redux/actions";
import Form from "../form/Form";
import {delete_Cars} from "../../redux/actions/actions";

export default function Cars() {
    let {cars} = useSelector(state => state);
    let dispatch = useDispatch();
    useEffect(() => {
        getCars().then(value => dispatch(get_Cars(value)))
    }, [])


    const onSubmit = (e) => {
        e.preventDefault();
        let car = {
            model: e.target.model.value,
            price: e.target.price.value,
            year: e.target.year.value
        };
        createCar(car)
            .then(value => dispatch(pushCars(value)))
    }

    let onDeleteCar = (car) => {

        deleteCar(car.id);

        dispatch(delete_Cars(car))

    }
    return (
        <div>
            <Form onSubmit={onSubmit}/>
            {
                cars.map(value => <Car car={value} key={value.id} onDelete={onDeleteCar}/>)
            }

        </div>
    );
}