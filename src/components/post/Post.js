import {useHistory} from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


export default function Post({item}) {
    let history = useHistory();

/*    function navigate() {
        history.push(
            '/posts/' + item.id,
            item)
    }*/

    return (
        <div>
            {item.id} - {item.title}
            <Link to={{pathname:'/posts/' + item.id,state:item} }>details</Link>
            {/*<button onClick={navigate}>details</button>*/}

        </div>
    );
}