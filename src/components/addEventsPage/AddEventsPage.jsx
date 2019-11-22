import React from 'react';
import {Field} from 'redux-form';
import {Input} from '../myForm/FormsControls/FormsControls'
import {requiredField} from '../myForm/validators/validators'
import {Select} from './Select'
import './addEventsPage.css';

class AddEventsPage extends React.Component {
    render(props) {
      
        return(
            <div className="form-add-events-container">
                <form onSubmit={this.props.onSubmit} method="post">
                    <div aria-hidden="true">
                        <Field
                            name="title"
                            component={Input}
                            type="text"
                            placeholder="Название мероприятия"
                            value="fdssf"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="category"
                            component={Select}
                            placeholder="Категория"
                            value="fdssf"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="sale"
                            component={Input}
                            type="text"
                            placeholder="Скидка для студентов"
                            value="fdssf"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="date"
                            component={Input}
                            type="date"
                            placeholder="Дата мероприятия"
                            value="fdssf"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="phone"
                            component={Input}
                            type="text"
                            placeholder="Номер телефона"
                            value="fdssf"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="address"
                            component={Input}
                            type="text"
                            placeholder="Адрес"
                            value="fdssf"
                            validate={[requiredField]}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="price"
                            component={Input}
                            type="text"
                            placeholder="Цена"
                            value="fdssf"
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
