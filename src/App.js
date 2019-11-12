import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// import Header from './components/header/Header'
import Registration from "../src/components/registration/Registration";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Events from "./components/events/events"
import './App.css';
import MainInfo from "./components/main/MainInfo";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    {/*<Route exact path="/registration" component={Registration}/>*/}
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/event_info" component={MainInfo}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/events" component={Events}/>
                    <Route exact path="/registration" component={Registration}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
