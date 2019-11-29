import React from 'react'
import { reduxForm } from 'redux-form'
import addEventsPage from '../components/addEventsPage/AddEventsPage'

const AddEventsPage = reduxForm({ form: 'event' })(addEventsPage)

export default class Event extends React.Component {
  render () {

    return (
      <div className="main-container">
        <div id="envelope" className="envelope">
          <b> Добавить мероприятие </b>

          <AddEventsPage />
        </div>
      </div>
    )
  }
}
