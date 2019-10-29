import React from 'react'
import '../../style/registration.css'
import {reduxForm, Field} from 'redux-form'
import {Provider} from 'react-redux'
import store from "../../redux/redux-store";
import {Input} from '../common/FormsControls/FormsControls';
import {requiredField, validatePasswordCreator} from '../utils/validators/validators';

const validatePassCreator = validatePasswordCreator(8);

const RegistrationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-container">
                <div className="form-group ">
                    <i className="fa fa-user-circle-o" aria-hidden="true"/>
                    <Field
                        name="name"
                        placeholder="Имя"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div className="form-group ">
                    <i className="fa fa-user-circle-o" aria-hidden="true"/>
                    <Field
                        name="surname"
                        placeholder="Фамилия"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div className="form-group ">
                    <i className="fa fa-user-circle-o" aria-hidden="true"/>
                    <Field
                        name="midname"
                        placeholder="Отчетсво (если есть)"
                        component={Input}
                    />
                </div>
                <div className="form-group ">
                    <i className="fa fa-envelope-o" aria-hidden="true"/>
                    <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div className="form-group">
                    <i className="fa fa-user-date" aria-hidden="true"/>
                    <Field
                        type="date"
                        name="date"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div className="form-group ">
                    <i className="fa fa-envelope-o" aria-hidden="true"/>
                    <Field
                        type="text"
                        name="university"
                        placeholder="ВУЗ"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div className="form-group">
                    <i className="fa fa-university-date" aria-hidden="true"/>
                    <Field
                        type="number"
                        name="year"
                        placeholder="Год поступления"
                        min="2000"
                        max="2030"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div className="form-group ">
                    <i className="fa fa-mobile" aria-hidden="true"/>
                    <Field
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div className="form-group ">
                    <i className="fa fa-envelope-o" aria-hidden="true"/>
                    <Field
                        type="text"
                        name="VK"
                        placeholder="ВК"
                        component={Input}
                    />
                </div>
                <div className="form-group ">
                    <i className="fa fa-envelope-o" aria-hidden="true"/>
                    <Field
                        type="text"
                        name="Instagram"
                        placeholder="Instagram"
                        component={Input}
                    />
                </div>
                <div className="form-group ">
                    <i className="fa fa-key" aria-hidden="true"/>
                    <Field
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        component={Input}
                        validate={[requiredField, validatePassCreator]}
                    />
                </div>
                <div className="form-group ">
                    <i className="fa fa-key" aria-hidden="true"/>
                    <Field
                        type="password"
                        name="repeat-password"
                        placeholder="Повторите пароль"
                        component={Input}
                        validate={[requiredField, validatePassCreator]}
                    />
                </div>


                <div className="r">
                    {" "}
                    <Field
                        type="checkbox"
                        name="consent"
                        className="consent"
                        component={Input}
                        validate={[requiredField]}
                    />
                    <label className="consent" id="consent">
                        <a href="#">Я согласен с политикой конфиденциальности </a>
                    </label>
                </div>

                <input id="btn" type="submit" value="Зарегистрироваться"/>
            </div>
        </form>
    );
};

const RegistrationReduxForm = reduxForm({form: 'registration'})(RegistrationForm);

export default class Registration extends React.Component {

    render() {
        const onSubmit = (formData) => {
            let serialFormData = JSON.stringify(formData);
            localStorage.setItem('Пользователь', serialFormData);
        };

        return (
            <div className="main-container">
                <div id="envelope" className="envelope">
                    <Provider store={store}>
                        <RegistrationReduxForm onSubmit={onSubmit}/>
                    </Provider>
                </div>
                <div id="fade" className="black_overlay"/>
            </div>
        )
    }
}
