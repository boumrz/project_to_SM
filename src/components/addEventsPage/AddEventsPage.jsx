import React from 'react';
import {Field} from 'redux-form';
import {Input} from '../myForm/FormsControls/FormsControls'
import {requiredField} from '../myForm/validators/validators'
import {Select} from './Select'
import './addEventsPage.css';

class AddEventsPage extends React.Component {
    render() {
        const {handleSubmit} = this.props;

        return(
            <div className="form-add-events-container">
                <form onSubmit={handleSubmit}>
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
                            component={Select}
                            placeholder="Категория"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="sale"
                            component={Input}
                            type="text"
                            placeholder="Скидка для студентов"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="date"
                            component={Input}
                            type="date"
                            placeholder="Дата мероприятия"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="phone"
                            component={Input}
                            type="text"
                            placeholder="Номер телефона"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="address"
                            component={Input}
                            type="text"
                            placeholder="Адрес"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="price"
                            component={Input}
                            type="text"
                            placeholder="Цена"
                            validate={[requiredField]}
                        />
                        <input id="btn" type="submit" value="Создать мероприятие"/>
                    </div>
                </form>
            </div>
        );
    }
}



export default AddEventsPage;
