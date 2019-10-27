import React from 'react'
import '../../style/registration.css'

export default class Registration extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
    };

    render() {
        return (
            <div className="main-container">
                <div id="envelope" className="envelope">
                    <form method="post" action="" onSubmit={this.handleSubmit}>
                        <div className="form-container">
                        <div className="form-group ">
                            <i className="fa fa-user-circle-o" aria-hidden="true"/>
                            <input name="surname" placeholder="Имя"/>
                        </div>
                        <div className="form-group ">
                            <i className="fa fa-user-circle-o" aria-hidden="true"/>
                            <input name="name" placeholder="Фамилия"/>
                        </div>
                        <div className="form-group ">
                            <i className="fa fa-user-circle-o" aria-hidden="true"/>
                            <input name="midlle_name" placeholder="Отчетсво"/>
                        </div>
                        <div className="form-group ">
                            <i className="fa fa-envelope-o" aria-hidden="true"/>
                            <input type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <i className="fa fa-user-date" aria-hidden="true"/>
                            <input type="date" name="date"/>
                        </div>
                        <div className="form-group ">
                            <i className="fa fa-envelope-o" aria-hidden="true"/>
                            <input type="text" name="name" placeholder="ВУЗ"/>
                        </div>
                        <div className="form-group">
                            <i className="fa fa-university-date" aria-hidden="true"/>
                            <input type="number" name="number" placeholder="Год поступления" min="2000" max="2030"/>
                        </div>
                        <div className="form-group ">
                            <i className="fa fa-mobile" aria-hidden="true"/>
                            <input type="tel" name="phone" placeholder="Телефон"/>
                        </div>
                        <div className="form-group ">
                            <i className="fa fa-envelope-o" aria-hidden="true"/>
                            <input type="text" name="name" placeholder="ВК"/>
                        </div>
                        <div className="form-group ">
                            <i className="fa fa-envelope-o" aria-hidden="true"/>
                            <input type="text" name="name" placeholder="Instagram"/>
                        </div>
                        <div className="form-group ">
                            <i className="fa fa-key" aria-hidden="true"/>
                            <input type="password" name="password" placeholder="Пароль"/>
                        </div>
                        <div className="form-group ">
                            <i className="fa fa-key" aria-hidden="true"/>
                            <input
                                type="password"
                                name="password"
                                placeholder="Повторите пароль"
                            />
                        </div>


                        <div className="r">
                            {" "}
                            <input type="checkbox" name="consent" className="consent"/>
                            <label className="consent" id="consent">
                                Я согласен с <a href="">политикой конфиденциальности </a>
                            </label>
                        </div>

                        <input id="btn" type="submit" value="Зарегистрироваться"/>
                        </div>
                    </form>
                </div>
                <div id="fade" className="black_overlay"/>
            </div>
        )
    }
}
