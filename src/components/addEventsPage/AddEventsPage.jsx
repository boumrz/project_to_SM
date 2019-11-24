import React from 'react';
import {Field} from 'redux-form';
import {Input} from '../myForm/FormsControls/FormsControls'
import {requiredField} from '../myForm/validators/validators'
import './addEventsPage.css';

class AddEventsPage extends React.Component {

    render() {

        return(
            <div className="form-add-events-container">
                <form onSubmit={this.props.submit} method="post">
                    <div aria-hidden="true">
                        <Field
                            name="title"
                            component={Input}
                            type="text"
                            placeholder="Название мероприятия"
                            validate={[requiredField]}
                           
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                        name="category"
                        component= "select"
                        placeholder="Категория"
                        validate={[requiredField]}>
                            <option value="volunteer">Волонтёрство </option>
                            <option value="culture">Культура</option> 
                            <option value="education">Образование</option> 
                            <option value="entertainment">Развлечения</option> 
                            <option value="sport">Спорт</option> 
                        </Field>
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="sale"
                            component={Input}
                            type="text"
                            placeholder="Скидка для студентов"
                            validate={[requiredField]}
                            value="10"
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="date"
                            component={Input}
                            type="date"
                            placeholder="Дата мероприятия"
                            validate={[requiredField]}
                            value="10.12.2019"
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="phone"
                            component={Input}
                            type="text"
                            placeholder="Номер телефона"
                            validate={[requiredField]}
                            value="88005553555"
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="address"
                            component={Input}
                            type="text"
                            placeholder="Адрес"
                            validate={[requiredField]}
                            value="Красная Пресня дом 4"
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="price"
                            component={Input}
                            type="text"
                            placeholder="Цена"
                            validate={[requiredField]}
                            value="100"
                        />
                        <input id="btn" type="submit" value="Создать мероприятие"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddEventsPage;
