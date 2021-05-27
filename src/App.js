import React from 'react';
import Home from "./views/Home";
import "./App.scss";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"/>
    </div>
)

function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={loading}>
                <Switch>
                    <Route path="/" render={props => <Home {...props}/>}/>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
