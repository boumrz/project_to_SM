import React from "react";
import Header from "../header/Header";
import Block from "../block/Block";
import { Link } from "react-router-dom";
import "./news.scss";
import Footer from "../footer/Footer";

export default class News extends React.Component {
  render() {
    return (
      <div className="">
        <div className="main">
          <Header />

          <div className="up-events">
          <Link to="/news">
              <Block
                date="24.11.2019"
                description="К участию в программе приглашаются технологические команды и стартапы, которые создали готовые инновационные продукты и уже завоевали симпатию клиентов.Призовой фонд акселератора составит 10 млн рублей, и будет распределен среди финалистов трека, продемонстрировавших наилучшую динамику роста бизнес-показателей.Заявки принимаются до 15 декабря!"
                src="https://im0-tub-ru.yandex.net/i?id=0f3ab022124fdfc456b59caa31de727f&n=13&exp=1"
                p="Московский акселератор начал прием заявок"
              />{" "}
            </Link>
            <Link to="/news">
              {" "}
              <Block
                date="19.11.2019"
                description="19 ноября в Доме Общественных Организаций состоялась встреча с Борисом Корчевниковым – российским журналистом, телеведущим, генеральным директором телеканала “Спас”."
                src="https://topstudents.ru/wp-content/uploads/2019/11/m5k6S7Ecf6U-1024x1024.jpg"
                p="«Диалог с профессионалом»"
              />
            </Link>
            <Link to="/news">
              {" "}
              <Block
                date="25.10.2019"
                description="8 станций, 53 участника, 1 Дом Студента.Ребята прошли различные задания: где-то нужно было спеть, где-то показать свои физические способности, где-то решить сложные головоломки. И все это происходило практически в полной темноте."
                src="https://topstudents.ru/wp-content/uploads/2019/10/qNLdPS2px9U-1024x682.jpg"
                p="В Москве прошел квест, посвященный открытию Дома Студента"
              />
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
