import React from "react";
import "./block.scss";

class Block extends React.Component {
  render() {
    let date;
    let address;
    let cost;
    let description;
    if (this.props.date != null) {
      date = (
        <p>
          {" "}
          <p className="onImg">Дата: {this.props.date}</p> <br />
        </p>
      );
    }
    if (this.props.address != null) {
      address = (
        <p>
          {" "}
          <p className="onImg">Место: {this.props.address}</p>
          <br />
        </p>
      );
    }
    if (this.props.description != null) {
      description = (
        <p>
          {" "}
          <p className="onImg"> {this.props.description}</p>
          <br />
        </p>
      );
    }
    if (this.props.cost != null) {
      cost = (
        <p>
          {" "}
          <p className="onImg">Цена: {this.props.cost}</p>
          <br />
        </p>
      );
    }
    return (
      <div className="block">
        <div className="i">
          <h3>
            {date}

            {cost}

            {address}

            {description}
          </h3>

          <img src={this.props.src} />
        </div>

        <p className="P">{this.props.p}</p>
      </div>
    );
  }
}

export default Block;
