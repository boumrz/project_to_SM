import React from "react";
import "./Info.scss";



class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <h2 className="H2"> {this.props.title} </h2>
        <div className="content-info">
          <div className=" imgInfo">
            <img className=" imgInfo" src={this.props.link} />
          </div>
          <div className="content-text-info">
            <h3>Организатор</h3>
            <p> {this.props.organizer} </p>
            <h3>Дата</h3>
            <p> {this.props.date}</p>
            <h3>Время проведения</h3>
            <p> {this.props.time}</p>
            <h3>Адресс</h3>
            <p> {this.props.address}</p>
            <h3>Цена </h3>
            <p> {this.props.price}</p>
            <h3>Описание мероприятия</h3>
            <p> {this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
