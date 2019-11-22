import React from 'react'
import {reduxForm} from 'redux-form'
import addEventsPage from '../components/addEventsPage/AddEventsPage'

const AddEventsPage = reduxForm({form: 'event'})(addEventsPage);

export default class Event extends React.Component {
    
    render() {
        const onSubmit = (formData) => fetch('http://localhost:3000/', {method: "post", body: JSON.stringify(formData)});
  
        return (
            <div className="main-container">

                <div id="envelope" className="envelope">
               <b> Добавить мероприятие </b>
            <AddEventsPage onSubmit={onSubmit}/>

                </div>
            </div>
        )
    }
}


