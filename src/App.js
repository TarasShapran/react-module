import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";


import Cars from "./components/cars/Cars";
import CreateCar from "./components/create-car/CreateCar";
import UpdateCar from "./components/updateCar/UpdateCar";


function App() {
    return (
        <Router>
            <div className="App">
                <Link to={'/'}>home </Link>
                <Link to={'/cars'}>cars </Link>
                <Link to={'/create-car'}>create-car</Link>
                <Link to={'/update-car'}>update-car</Link>
                <Switch>
                <Route path={'/cars'} component={Cars}/>
                <Route path={'/create-car'} component={CreateCar}/>
                <Route path={'/update-car'} component={UpdateCar}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
