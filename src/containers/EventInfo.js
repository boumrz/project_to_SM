import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { connect } from 'react-redux'
import EventInfo from '../components/pageInfo/Info'

class Events extends React.Component {
  render () {
    const { events } = this.props

    return (
      <div className="">
        <Header />

        <EventInfo event={events.event} />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    events: store.events
  }
}

export default connect(mapStateToProps)(Events)
