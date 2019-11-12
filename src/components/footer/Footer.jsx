import React from 'react';
import Logo from './Layer-5.png';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <footer>
                    <span>
                        <img src={Logo} alt="Logo" />
                        <h1>Студенты Москвы</h1>
                    </span>
                </footer>
            </div>
        );
    }
}
