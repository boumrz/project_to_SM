import React from 'react';
import './header.css';
import Logo from '../../components/assets/images/Logo.png'
import { Link } from 'react-router-dom';
import Registration from "../registration/Registration";
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
        <div className="header-container">
            <header>
                <img src={Logo} className="Img"  alt="logo"/>
                <Link to='/camp'> <div className="header_li li"> НОВОСТИ </div>  </Link>
                <Link to='/change'>  <div className="header_li li"> МЕРОПРИЯТИЯ </div> </Link>
                <Link to='/FAQ'>  <div className="header_li li"> СКИДКИ </div> </Link>
                <Link to='/camp'> <div className="header_li li"> ОРГАНИЗАЦИИ </div>  </Link>
                <Link to='/change'>  <div className="header_li li"> О НАС </div> </Link>
                <div className="button-container">
                    <Switch>
                        <Route path="/registration" component={Registration} />
                        <Route
                            path="/events"
                            render={() => (
                                <React.Fragment>
                                    <div onClick={this.handleClickLogin}>
                                        <button className="signIn">Войти</button>
                                    </div>
                                    <div onClick={this.handleClickRegistration}>
                                        <button className="registration">Регистрация</button>
                                    </div>
                                </React.Fragment>
                            )}
                        />
                    </Switch>
                </div>
            </header>
        </div>
    )
  }
}

export default withRouter(Header);

