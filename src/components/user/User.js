
export default function User({user}) {
    return (
        <div>
            <h2>
                   Name: {user.name} - username: {user.username}
            </h2>
        </div>
    );
}