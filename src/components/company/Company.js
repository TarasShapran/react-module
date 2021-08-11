export default function Company({company}) {
  let {name ,catchPhrase,bs }=company;
    return (
    <div>
    <p>name: {name}</p>
    <p>catchPhrase: {catchPhrase}</p>
    <p>bs: {bs}</p>

    </div>
  );
}