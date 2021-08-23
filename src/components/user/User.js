import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {useHistory} from "react-router";


export default function User({item}) {
    let history = useHistory();

    function navigate() {
        history.push(
            '/users/' + item.id
        )
    }

    return (
        <div>
            {item.name} - <button onClick={navigate}>details</button>

        </div>
    );
}