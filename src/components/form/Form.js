export default function Form({seve}) {
  return (
    <div>
    <form onSubmit={seve}>
        <input type="text" name={'title'}/>
        <input type="text" name={'description'}/>
        <input type="submit"/>
    </form>

    </div>
  );
}