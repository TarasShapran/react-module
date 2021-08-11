import './Simpson.css'
export default function Simpson({name , surname,photo , age,info}) {
  return (
    <div className="Simpson">
      <h2>{name} {surname} - {age}</h2>
        <p>{info}</p>
      <img src={photo} alt=""/>

    </div>
  );
}