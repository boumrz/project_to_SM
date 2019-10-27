import React from 'react';
import '../../style/header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header-frame">
                <div id="header-container">
                    <div className="header-menu">
                        <div className="header-ul">
                            <div className="header_li">
                                <div className="header_li">
                                    <div className="header_li">
                                        <a href="#">Новости</a>
                                    </div>
                                    <div className="header_li">
                                        <a href="#">Мероприятия</a>
                                    </div>
                                    <div className="header_li">
                                        <a href="">Скидки</a>
                                    </div>
                                </div>
                            </div>
                            <div className="login-btn" id="header-buttons">
                                <div id="popup1" className="overlay">
                                    <div className="popup">
                                        <a className="close" href="#">&times;</a>
                                    </div>
                                </div>

                                <a href="#" className="primary_btn">Войти</a>
                                <a href="#" className="secondary_btn">Регистрация</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
