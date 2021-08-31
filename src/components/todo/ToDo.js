export default function ToDo({item, onDelete, onEdit}) {
    return (
        <div>
            {
                JSON.stringify(item)
            }
            <button onClick={()=>{ return onDelete(item)}}>delete</button>
            <button onClick={()=>{ return onEdit(item)}}>update</button>

        </div>
    );
}