import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Registration from "../src/containers/RegistrationReduxForm";
import Main from "./components/main/Main";
import Login from "./containers/login";
import Events from "./components/events/events";
import Sale from "./components/pageSale/sale";
import News from "./components/pageNews/news"
import './App.css';
import MainInfo from "./components/main/MainInfo";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/event_info" component={MainInfo}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/events" component={Events}/>
                    <Route exact path="/sale" component={Sale}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/registration" component={Registration}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
