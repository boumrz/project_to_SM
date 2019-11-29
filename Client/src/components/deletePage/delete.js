import React from "react";
import { Link } from "react-router-dom";
import "./delete.scss";

class Delete extends React.Component {
  render() {
    return (
      <div className="delete">
        <div>
          <h1 className="delete"> Вы успешно удалили мероприятие!</h1>
          <Link to="/events">Вернуться на страницу мероприятий</Link>
        </div>
      </div>
    );
  }
}

export default Delete;
