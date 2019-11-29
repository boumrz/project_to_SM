import React from 'react'
import { reduxForm } from 'redux-form'
import loginForm from '../components/myForm/loginForm'
import { Switch, Route, withRouter } from "react-router-dom"
import Events from '../containers/Events'

const LoginFormRedux = reduxForm({ form: 'login' })(loginForm)

class Login extends React.Component {
  render () {
    const onSubmit = (formData) => {
      let serialFormData = JSON.stringify(formData);
      localStorage.setItem(`${formData.email}`, serialFormData);

      this.props.history.push('/events');
    };

    return (
      <div className="main-container">
        <div id="envelope" className="envelope">
          <b> Войти </b>
          <Switch>
              <Route path="/events" component={Events} />
              <Route
                path="/login"
                render={() => (
                  <React.Fragment>
                    
                      <LoginFormRedux onSubmit={onSubmit} />
                    
                  </React.Fragment>
                )}
              />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);