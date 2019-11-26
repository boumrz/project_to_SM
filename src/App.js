import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Registration from '../src/containers/RegistrationReduxForm'
import Main from './components/pageMain/Main'
import Login from './containers/login'
import Events from './containers/Events'
import Sale from './components/pageSale/sale'
import News from './components/pageNews/news'
import pageInfo from './containers/EventInfo'
import './App.css'
import AddEventsPage from './containers/addEvent'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/events_add" component={AddEventsPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/sale" component={Sale} />
          <Route exact path="/news" component={News} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/events/events_add" />
          <Route exact path="/event_info" component={pageInfo} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
