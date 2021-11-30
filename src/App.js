import React from 'react';
import Home from "./views/Home";
import "./App.scss";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const SignIn = React.lazy(() => import("./views/authentications/SignIn"));
const SignUp = React.lazy(() => import("./views/authentications/SignUp"));

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
                    <Route exact path="/sign-in" render={props => <SignIn{...props}/>}/>
                    <Route exact path="/sign-up" render={props => <SignUp{...props}/>}/>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
