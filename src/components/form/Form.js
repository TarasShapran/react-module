export default function Form({seve}) {

    return (
    <div>
    <form onSubmit={seve}>
        <input type="text" name={'name'}/>
        <input type="text" name={'username'}/>
        <input type="submit" value ={'save'}/>
        
    </form>

    </div>
  );
}