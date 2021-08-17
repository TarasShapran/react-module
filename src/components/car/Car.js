import './Car.css'

export default function Car({car}) {
  return (
    <div className={"car"} >
        Id: {car.id} <br/>
        Model: {car.model}<br/>
        Year: {car.year}<br/>
        Price: {car.price}<br/>

    </div>
  );
}