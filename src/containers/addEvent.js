import React from 'react'
import {reduxForm} from 'redux-form'
import addEventsPage from '../components/addEventsPage/AddEventsPage'

const AddEventsPage = reduxForm({form: 'event'})(addEventsPage);

export default class Event extends React.Component {

    render() {
        const onSubmit = (formData) => 
            new Promise((resolve, reject) => {
              fetch("http://localhost:3001/events/", {method: "post", body: JSON.stringify(formData)})
                .then(res => res.json())
                .then(res => {
                  if (res.hasOwnProperty("errors")) {
                    reject(res.errors);
                    console.log("много хочешь");
                  } else {
                    resolve(res.data);
                        console.log("я сделаль");
                    
                  }
                })
            })
          ;

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


