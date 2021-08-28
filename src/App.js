import './App.css';
import {useReducer} from "react";
import reducer from "./reduser/reducer";



function App() {

    let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});


    return (
        <div className="App">
            <h1>{a}-{b}-{c}</h1>
            <button onClick={() => dispatch({obj: 'a', action: '+'})}>add to 'a' - 1</button>
            <button onClick={() => dispatch({obj: 'a', action: '-'})}>sub to 'a' - 1</button>
            <h1>{a}-{b}-{c}</h1>
            <button onClick={() => dispatch({obj: 'b', action: '+'})}>add to 'b' - 1</button>
            <button onClick={() => dispatch({obj: 'b', action: '-'})}>sub to 'b' - 1</button>
            <h1>{a}-{b}-{c}</h1>
            <button onClick={() => dispatch({obj: 'c', action: '+'})}>add to 'c' - 1</button>
            <button onClick={() => dispatch({obj: 'c', action: '-'})}>sub to 'c' - 1</button>
        </div>
    );
}

export default App;
