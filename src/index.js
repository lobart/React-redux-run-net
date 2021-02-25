import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


export let rendererer = (store) => {
    return(
        ReactDOM.render(
            <React.StrictMode>
                <App  store = {store}/>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}
store.subscribe(rendererer);
rendererer(store);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
