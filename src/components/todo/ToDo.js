export default function ToDo({item,deleteToDo,editToDo}) {
    return (
        <div>
            {
                JSON.stringify(item)
            }
            <button onClick={()=>deleteToDo(item)}>delete</button>
            <button onClick={()=>editToDo(item)}>update</button>

        </div>
    );
}