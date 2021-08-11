export default function Geo({geo}) {
 let {lat , lng}=geo;
  return (
    <div>
      <p>lat: {lat}</p>
      <p>lng: {lng}</p>

    </div>
  );
}