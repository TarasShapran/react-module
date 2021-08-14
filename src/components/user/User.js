export default function User({user , chosenUsers}) {

    return (
        <div>
            {user.id} - {user.name}
            <button >user details</button>
        </div>
    );
}