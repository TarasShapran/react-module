import Geo from "../geo/Geo";

export default function Address({address}) {
    let {street,suite,city,zipcode,geo}=address;
    return (
        <div>
            <p>street: {street}</p>
            <p>suite: {suite}</p>
            <p>city: {city}</p>
            <p>zipcode: {zipcode}</p>
          <Geo geo={geo}/>
        </div>
    );
}