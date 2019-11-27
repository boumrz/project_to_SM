import React from 'react'
import {reduxForm} from 'redux-form'
import addEventsPage from '../components/addEventsPage/AddEventsPage'

const AddEventsPage = reduxForm({form: 'event'})(addEventsPage);

export default class Event extends React.Component {

    render() {

        // const submit = (formData) => {
        //     console.log(formData);
        //     new Promise((resolve, reject) => {
        //         fetch("http://localhost:3001/events", {method: "post", body: JSON.stringify(formData)})
        //           .then(res => res.json())
        //           .then(res => {
        //               if (res.hasOwnProperty("errors")) {
        //                   reject(res.errors);
        //                   alert("много хочешь");
        //               } else {
        //                   resolve(res.data);
        //                   alert("я сделаль");
        //               }
        //           })
        //           .catch(() => {
        //               alert("ERROR");
        //           })
        //     });
        // }

        return (
            <div className="main-container">
                <div id="envelope" className="envelope">
               <b> Добавить мероприятие </b>
            <AddEventsPage/>
                </div>
            </div>
        )
    }
}


