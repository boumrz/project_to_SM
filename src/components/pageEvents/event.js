import React from 'react'
import Block from '../blockEvent/BlockEvent'
import { Link } from 'react-router-dom'

function Event (props) {
  return props.events.events.map(event => {
    if (
      props.events.eventsCategory === event.category ||
      props.events.eventsCategory === 'all'
    ) {
      return (
        <Link to="/event_info">
          {' '}
          <Block src={event.link} p={event.title} date={event.date} />{' '}
        </Link>
      )
    }
  })
}

export default Event
