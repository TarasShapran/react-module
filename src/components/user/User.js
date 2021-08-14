export default function User({user , chosenUsers}) {

    return (
        <div>
            {user.id} - {user.name}
            <button onClick={() =>{
                chosenUsers(user.id)
            } }>user details</button>
        </div>
    );
}