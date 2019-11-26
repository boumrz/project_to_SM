import React from 'react'
import { reduxForm } from 'redux-form'
import addEventsPage from '../components/addEventsPage/ChangeEvent'
import { connect } from 'react-redux'

const AddEventsPage = reduxForm({ form: 'eventChange' })(addEventsPage)

class Event extends React.Component {
  render () {
    const submit = (formData) =>
      new Promise((resolve, reject) => {
        fetch('event/change_event', {
          method: 'put',
          body: JSON.stringify({ formData: formData})
        })
          .then(res => res.json())
          .then(res => {
            if (res.hasOwnProperty('errors')) {
              reject(res.errors)
            } else {
              resolve(res.data)
            }
          })
      })

    return (
      <div className="main-container">
        <div id="envelope" className="envelope">
          <b> Обновить мероприятие </b>
          <AddEventsPage onSubmit={submit} id={this.props.events.event.id} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    events: store.events
  }
}

export default connect(mapStateToProps)(Event)
