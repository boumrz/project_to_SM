import React from 'react'
import { reduxForm } from 'redux-form'
import changeEventsPage from '../components/addEventsPage/ChangeEvent'
import { connect } from 'react-redux'

const ChangeEventsPage = reduxForm({ form: 'eventChange' })(changeEventsPage)

class eventChange extends React.Component {
  render () {
    
    return (
      <div className="main-container">
        <div id="envelope" className="envelope">
          <b> Обновить мероприятие </b>

          <ChangeEventsPage id={this.props.events.event.id} />
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

export default connect(mapStateToProps)(eventChange)
