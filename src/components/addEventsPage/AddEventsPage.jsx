import React from 'react';
import {Field} from 'redux-form';
import {Input} from '../myForm/FormsControls/FormsControls'
import {requiredField} from '../myForm/validators/validators'
import {Select} from './Select'
import './addEventsPage.css';

class AddEventsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            sale: '',
            date: '',
            phone: '',
            address: '',
            price: '',
            isFormValid: false
        }
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value});
    }
    handleSale = (e) => {
        this.setState({sale: e.target.value})
    }
    handleDate = (e) => {
        this.setState({date: e.target.value});
    }
    handlePhone = (e) => {
        this.setState({phone: e.target.value})
    }
    handleAddress = (e) => {
        this.setState({address: e.target.value});
    }
    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }
    handleIsFormValid = (e) => {
        this.setState({
            isFormValid: this.state.title && this.state.sale && this.state.date && this.state.phone &&
              this.state.address && this.state.price
        })
    }

    render() {

        return(
            <div className="form-add-events-container">
                <form onChange={this.handleIsFormValid} method="post">
                    <div aria-hidden="true">
                        <Field
                            name="title"
                            component={Input}
                            type="text"
                            placeholder="Название мероприятия"
                            validate={[requiredField]}
                            onChange={this.handleTitle}
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
                            onChange={this.handleSale}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="date"
                            component={Input}
                            type="date"
                            placeholder="Дата мероприятия"
                            validate={[requiredField]}
                            onChange={this.handleDate}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="phone"
                            component={Input}
                            type="text"
                            placeholder="Номер телефона"
                            validate={[requiredField]}
                            onChange={this.handlePhone}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="address"
                            component={Input}
                            type="text"
                            placeholder="Адрес"
                            validate={[requiredField]}
                            onChange={this.handleAddress}
                        />
                    </div>
                    <div aria-hidden="true">
                        <Field
                            name="price"
                            component={Input}
                            type="text"
                            placeholder="Цена"
                            validate={[requiredField]}
                            onChange={this.handlePrice}
                        />
                        <input disabled={!this.state.isFormValid} id="btn" type="submit" value="Создать мероприятие"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddEventsPage;
