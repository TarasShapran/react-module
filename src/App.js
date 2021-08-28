import './App.css';
import {useReducer} from "react";

const reduser = (state, action) => {
    switch (action) {
        case 'INCREASE_BY_TEN':
            return state + 10;
        case 'REDUCE_BY_TEN':
            return state - 2;
        default:
            return state;
    }
}

function App() {
    let [state, dispatch] = useReducer(reduser, 0);


    return (
        <div className="App">
            <h1>{state}</h1>
            <button onClick={() => dispatch('INCREASE_BY_TEN')}>add ten</button>

            <button onClick={() => dispatch('REDUCE_BY_TEN')}>sub two</button>
        </div>
    );
}

export default App;
