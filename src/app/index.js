import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';

import App from "./containers/App";
import store from "./store";

/*
const myLogger = (store) => (next) => (action) => { // zawsze będziemy musieli zastosować taki pattern
    console.log("Logged action", action);
    next(action); // to musimy dodać zawsze, zeby nasze 'action' (cokolwiek to jest:p) zostało przekazane do 'reducera' (zeby nasz stan, store został zaktualizowany)
}
*/

/*
store.subscribe(() => {
    // console.log("Store updated! ", store.getState());
});
*/

// store.dispatch({
//     type: "ADD",
//     payload: 2
// });

// store.dispatch({
//     type: "ADD",
//     payload: 22
// });

// store.dispatch({
//     type: "SUBTRACT",
//     payload: 10
// });

// store.dispatch({
//     type: "SET_NAME",
//     payload: "Miki"
// });

// store.dispatch({
//     type: "SET_AGE",
//     payload: 31
// });

render(
    // w ten sposób łączymy nasz 'store' z naszą aplikacją
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
);
