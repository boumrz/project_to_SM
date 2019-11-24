import React from 'react'
import Header from "../header/Header";
import Block from "../blockEvent/BlockEvent";
import { Link } from "react-router-dom";
import './events.scss';
import Footer from "../footer/Footer";
import AddEvent from "./AddEvent";

export default class Events extends React.Component {

    state = {events: []}

    componentDidMount() {
        fetch('/events')
        .then(res => res.json())
        .then(events => this.setState({ events }));
    }
        render() {
        return(
            <div className="">
                <div className="main">
                <Header/>

                <div class="site-container archive-categories-list">

			<Link to="" class="archive-category">  <div class="archive-category-img volunteering">
                </div>
                <div className="archive-category-title">  Волонтёрство </div>
                </Link>
	        <Link to="" className="archive-category">                <div className="archive-category-img culture">
                </div>
                <div className="archive-category-title">  Культура </div>
                </Link>
	        <Link to="" className="archive-category">                <div className="archive-category-img education">
             </div>
                <div className="archive-category-title">  Образование </div>
                </Link>
	           <Link to="" className="archive-category">                <div className="archive-category-img entertainment" >
                </div>
                <div className="archive-category-title">  Развлечения </div>
                </Link>
	        <Link to="" className="archive-category">                <div className="archive-category-img sport" >
                </div>
                <div className="archive-category-title">  Спорт </div>
                </Link>

    </div>
    <div className="up-events">
    {this.state.events.map(event =>
 
           
                    <Link to="/event_info">
                        {" "}
                        <Block
                            src={event.link}
                            p={event.title}
                            date={event.date}
                        />{" "}
                    </Link>
                   
              
        
        )}

        </div>   

                <AddEvent/>

            </div>
                <Footer/>
            </div>
        );
    }
}




