import React from 'react'
// import store from "../../redux/redux-store";
import {reduxForm, Field} from 'redux-form'
import store from "../../redux/redux-store";
// import { configureStore } from 'redux-mock-store';
import {Provider} from 'react-redux'
import {requiredField, validatePasswordCreator} from '../utils/validators/validators';
import {Input} from '../common/FormsControls/FormsControls'

const validatePassCreator = validatePasswordCreator(8);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder="Login"
                    name="login"
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    placeholder="Password"
                    name="password"
                    component={Input}
                    validate={[requiredField, validatePassCreator]}
                />
            </div>
            <div>
                <Field
                    type="checkbox"
                    name="remember-me"
                    component={Input}
                />
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className="main-container">
            <h1>Login</h1>
            <Provider store={store}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </Provider>
        </div>
    );
};

export default Login
