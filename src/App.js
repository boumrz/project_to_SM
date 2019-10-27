import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import Header from './components/header/Header'
import Registration from "../src/components/registration/Registration";
import Events from "./components/events/Events";

import './App.css';

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    {/*<Route exact path="/registration" component={Registration}/>*/}
                    <Route exact path="/events" component={Events}/>
                    <Redirect to="/events"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
