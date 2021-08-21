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
import Comments from "./components/comments/Comments";


function App() {


    return (
        <Router>
            <div className="App">
                <Link to={'/'}>home</Link>
                <Link to={'/users-page'}>users-page</Link>
                <Link to={'/posts-page'}>posts-page</Link>
                <Link to={'/comments-page'}>comments-page</Link>

                <Route path={'/users-page'} component={Users}/>
                <Route path={'/posts-page'} component={Posts}/>
                <Route path={'/comments-page'} component={Comments}/>
            </div>
        </Router>
    );
}

export default App;
