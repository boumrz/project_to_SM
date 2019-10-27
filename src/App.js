import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import Header from './components/header/Header'
import Registration from "../src/components/registration/Registration";

import './App.css';

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/registration" component={Registration}/>
                    <Redirect to="/registration"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
