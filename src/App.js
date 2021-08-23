import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";


function App() {
    return (
        <Router>
            <div className="App">
                <Link to ={'/users'}>users page</Link>
                <Link to ={'/posts'}>posts page</Link>
            </div>
            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>

        </Router>
    );
}

export default App;
