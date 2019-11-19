import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './addEventsPage.css';

class AddEventsPage extends React.Component {
    render() {
        const {handleSubmit} = this.props;

        return(
            <div className="form-add-events-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="title-event"
                            component="input"
                            type="text"
                            placeholder="Название мероприятия"
                        />
                    </div>
                    <div>
                        <Field
                            name="category"
                            component="input"
                            type="text"
                            placeholder="Категория"
                        />
                    </div>
                    <div>
                        <Field
                            name="sale-to-event"
                            component="input"
                            type="text"
                            placeholder="Скидка по мероприятию"
                        />
                    </div>
                    <div>
                        <Field
                            name="date"
                            component="input"
                            type="date"
                            placeholder="Дата мероприятия"
                        />
                    </div>
                    <div>
                        <Field
                            name="phone"
                            component="input"
                            type="text"
                            placeholder="Номер телефона"
                        />
                    </div>
                    <div>
                        <Field
                            name="address"
                            component="input"
                            type="text"
                            placeholder="Адрес"
                        />
                    </div>
                    <div>
                        <Field
                            name="price"
                            component="input"
                            type="text"
                            placeholder="Цена"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

AddEventsPage = reduxForm ({
   form: 'event',
}) (AddEventsPage);

export default AddEventsPage;
