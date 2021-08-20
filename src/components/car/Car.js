import './Car.css'


export default function Car({car,deleteCar ,update}) {
    return (
        <div className={'wrap'}>
            <div className={"car"}>
                Id: {car.id} <br/>
                Model: {car.model}<br/>
                Year: {car.year}<br/>
                Price: {car.price}<br/>

            </div>
            <div >
                <div>
                    <button onClick={() => {
                        deleteCar(car.id);
                    }}>delete
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        update(car)
                    }}>update
                    </button>
                </div>
            </div>
        </div>
    );
}