import React from 'react'
import Header from '../header/Header'
import Block from '../block/Block'
import { Link } from 'react-router-dom'
import './sale.scss'
import Footer from '../footer/Footer'
import first from '../pageMain/assets/img/1.jpg'
import second from '../pageMain/assets/img/2.jpg'
import third from '../pageMain/assets/img/3.jpg'

export default class Sale extends React.Component {
  render () {
    return (
      <div className="">
        <div className="main">
          <Header />

          <div className="up-events">
            <Link  >
              {' '}
              <Block src={first} p="Большой театр" address=' Театральная пл., д. 1' description='Для того, чтобы попасть на спектакль всего за 100 рублей, необходимо прийти в кассу за полтора часа до начала и предъявить студенческий.'/>
            </Link>
            <Link  >
              {' '}
              <Block
                src={second}
                p="Третьяковская галерея"
                address=' пер. Лаврушинский, д. 10'
                description='Эту обитель шедевров студенты могут посетить всего за 150 рублей. Однако вряд ли удастся ограничиться одним визитом, ведь для того, чтобы обойти всю галерею и уделить подобающее время каждому произведению искусства, понадобится не один день, но это того стоит.'
              />
            </Link>
            <Link  >
              {' '}
              <Block
                src={third}
                p="Денди кафе"
                address=' Новый Арбат, д. 28'
                description=' Для студентов действует 20-процентная скидка на основное меню с 16:00 до 19:00 в будние дни.'
              />
            </Link>
            <Link  >
            
              <Block
                src='https://kudago.com/media/thumbs/xl/images/place/98/79/9879b72c84fe2169f671f3fc10f6d823.jpg'
                p=" Московский планетарий "
                address=' ул. Садовая-Кудринская, д. 5, стр. 1 '
                description=' Студентов ждет скидка в размере 10%, а если им придет в голову заглянуть сюда в свой День рождения, то она увеличится до 20%.'
              />
            </Link>
            <Link  >
            
              <Block
                src='https://kudago.com/media/thumbs/xl/images/place/cc/5a/cc5a469132aa005c28340728a0884638.jpg'
                p="Московский зоопарк"
                address=' ул. Большая Грузинская, д. 1 '
                description='Право на бесплатное посещение зоопарка (при предъявлении документа) имеют дети до 17 лет, студенты очной формы обучения'
              />
            </Link>

            <Link  >
            
              <Block
                src='https://kudago.com/media/thumbs/xl/images/place/73/c1/73c1b62923bc615d2d1c34e39b540d68.jpg'
                p="Музей современного искусства «Гараж»"
                address=' ул. Крымский Вал, д. 9, стр. 32 '
                description='Разве представители студенчества могут оставаться в стороне от такого увлекательного процесса? Конечно, нет! Именно поэтому для них здесь действуют льготные цены на билет (150 рублей).'
              />
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
