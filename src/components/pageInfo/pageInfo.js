import React from "react";
import "./Info.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Info from "./Info"


class pageInfо extends React.Component {
  render() {
    return (
      <div className="info">
      <Header/>
      <Info/>
        <Footer/>
      </div>
    );
  }
}

export default pageInfо
