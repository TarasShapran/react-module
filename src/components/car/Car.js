export default function Car({car, onDelete}) {
    return (
        <div>
            {car.model} - {car.price} - {car.year}
            <button onClick={() => {
                onDelete(car)
            }}>delete
            </button>
        </div>
    );
}