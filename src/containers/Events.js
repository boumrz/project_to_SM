import React from 'react'
import Header from '../components/header/Header'
import Block from '../components/blockEvent/BlockEvent'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import AddEvent from '../components/pageEvents/AddEvent'
import '../components/pageEvents/events.scss'

export default class Events extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [],
      type: 'all'
    }

    this.changeCategory = this.chengeCategory.bind(this)
  }

  componentDidMount () {
    fetch('/events')
      .then(res => res.json())
      .then(events => this.setState({ events }))
  }

  chengeCategory (category) {
    this.setState(state => ({
      type: category
    }))
  }

  render () {
    return (
      <div className="">
        <div className="main">
          <Header />

          <div class="site-container archive-categories-list">
            <div
              className="archive-category"
              id="volunteer"
              onClick={() => {
                const category = 'volunteer'
                return this.changeCategory(category)
              }}
            >
              {' '}
              <div class="archive-category-img volunteering"></div>
              <div className="archive-category-title"> Волонтёрство </div>
            </div>
            <div className="archive-category" id="culture">
              {' '}
              <div className="archive-category-img culture"></div>
              <div className="archive-category-title"> Культура </div>
            </div>
            <div className="archive-category" id="education">
              {' '}
              <div className="archive-category-img education"></div>
              <div className="archive-category-title"> Образование </div>
            </div>
            <div className="archive-category" id="entertainment">
              {' '}
              <div className="archive-category-img entertainment"></div>
              <div className="archive-category-title"> Развлечения </div>
            </div>
            <div className="archive-category" id="sport">
              {' '}
              <div className="archive-category-img sport"></div>
              <div className="archive-category-title"> Спорт </div>
            </div>
          </div>
          <div className="up-events">
            {this.state.events.map(event => (
              <Link to="/event_info">
                {' '}
                <Block
                  src={event.link}
                  p={event.title}
                  date={event.date}
                />{' '}
              </Link>
            ))}
          </div>

          <AddEvent />
        </div>
        <Footer />
      </div>
    )
  }
}
