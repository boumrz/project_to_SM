import React from 'react';
import '../../style/Header.css';
import Logo from '../../components/assets/images/logo.svg'
import Button from '../ui/Button/Button'
import { Link } from 'react-router-dom';
// import {Redirect} from "react-router-dom";
import Registration from "../registration/Registration";
// import Login from "../login/Login";
import {Route, Switch, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFormOn: false };
  }

  handleClickRegistration = () => {
      this.props.history.push('/registration');
  };
  handleClickLogin = () => {
      this.props.history.push('/login');
  };

  render() {
    return (
      <header>
        <img src={Logo} className="Img"  alt="logo"/>
        <Link to='/camp'> <div className="header_li li"> ЛАГЕРЯ </div>  </Link>
        <Link to='/change'>  <div className="header_li li"> СМЕНЫ </div> </Link>
        <Link to='/FAQ'>  <div className="header_li li"> FAQ </div> </Link>
        <div className="header_li ">
          <div className="header_li">
              <Switch>
              <Route path="/registration" component={Registration} />
              <Route
                  path="/events"
                  render={() => (
                      <React.Fragment>
                          <div onClick={this.handleClickLogin}>
                              <Button name="Войти" color="white" />
                          </div>
                          <div onClick={this.handleClickRegistration}>
                              <Button name="Регистрация" color="white" />
                          </div>
                      </React.Fragment>
                  )}
              />
            </Switch>

          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Header);

