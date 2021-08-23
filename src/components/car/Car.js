export default function Car({item /*,deleteCar*/}) {
  return (
    <div>
        {item.id} - {item.model} - {item.price}
{/*<button onClick={() => {
  deleteCar(item.id);
}} >delete</button>*/}
    </div>
  );
}