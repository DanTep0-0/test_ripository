import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet"
import {Link} from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default class ProfilePage extends React.Component {

  render () {
    return (
    <>
      <Helmet>
        <title>Профиль компании | Crypton.com.ua</title>
        <meta name="description" content='.'/>
      </Helmet>

      <Header/>

      <div className="breadcrumbs_div">
        <div className="container">
          <ul className="breadcrumbs">
            <li>Вы здесь:</li>
            <li><Link to="/">Главная</Link></li>
            <li><span>Компания</span></li>
          </ul>
        </div>
      </div>


      <div className="page about_page">
        <div className="container">

          <h1 className="pageName">Профиль компании</h1>
          <div className="page_block">
            <p>Компания "Криптон" была основана в 1992 году. За время своего существования Криптон превратился в динамично развивающееся торгово-промышленное предприятие, уделяющее значимую часть внимания научным исследованиям и тестированию, благодаря чему мы стали специалистами высшего уровня в сфере технологий.</p>
            <p>Crypton обладает передовыми технологиями, большим научным потенциалом и квалифицированными специалистами.</p>
          </div>

          <div className="page_block">
            <div className="extraDiv">
              <FontAwesomeIcon className="fa_icon" icon={faInfoCircle}/>
              <h4>За 28 лет активной деятельности Криптон позволил более чем 150 телекомпаниям по всему миру организовать платное телевидение!</h4>
            </div>
          </div>

          <div className="page_block">
            <h3>Деятельность компании "Криптон"</h3>
            <ul>
              <li>разработка и производство систем скремблирования телевизионного сигнала и сопутствующего оборудования</li>
              <li>разработка решений для организации платного ТВ: IPTV вещание, кабельное вещание либо IPTV + кабельное (гибридное) телевещание</li>
              <li>проектирование и производство профессионального оборудования для цифрового широковещательного ТВ в кабельных, эфирных и спутниковых сетях</li>
              <li>производство оборудования для организации интерактивного телевидения - VoD, Multiscren, TVoIP, Time Shifted TV, Catch-up TV</li>
            </ul>
          </div>

          <div className="page_block">
            <p>Мы сотрудничаем с более, чем 150 телекомпаниями по всему миру, включая Европу, страны СНГ, Ближний Восток, Азию и Северную Америку.</p>
            <p>Начав с рынка абонентских приемников спутникового телевидения и закрепившись на нем, компания успешно расширяла свои производственные и исследовательские интересы, охватывая все новые отрасли. Прежде всего, это касается систем наземного телевизионного вещания, таких как MITRIS. С этими системами мы прошли весь путь от эволюции систем многоканального аналогового телевизионного вещания до интерактивных мультимедийных систем.</p>
          </div>

          <div className="page_block">
            <h3>Активное участие</h3>
            <p>Наша деятельность не ограничивается разработкой методов кодирования ТВ, мы также учавствуем в выставках и конференциях. На протяжении многих лет компания является активным участником таких крупных мероприятий: SCaT India, IBC Exhibition, "Восточноевропейская выставка по телекоммуникациям и радиовещанию EEBC Telecom & Broadcasting (EEBC/expoTEL)", "Международная выставка телевидения и телекоммуникаций CSTB Telecom & Media", Broadcast India Show и многих других.</p>
          </div>

          <div className="page_block">
            <h3>Дальнейшие планы</h3>
            <p>У компании "Криптон" есть как возможности, так и амбиции. У нас много планов насчет технического и делового развития. Мы многое делаем для того, чтобы привлечь отечественных и зарубежных парнтнеров.</p>
            <p>Приглашаем всех, кто готов сотрудничать с нами, к взаимовыгодному сотрудничеству!</p>
          </div>

          <div className="contactForm_div">
            <h1 className="pageName">По бизнес-предложениям:</h1>
            <form action="https://formspree.io/xeqrzkoz" method="POST">
              <input aria-label="username" placeholder="Имя" name="name" type="text"/>
              <input aria-label="email" placeholder="Email*" name="email" type="email" required/>
              <input aria-label="subject" placeholder="Тема*" name="subject" type="text" required/>
              <textarea aria-label="message" placeholder="Сообщение" name="message" required></textarea>
              <input aria-label="submit" type="submit" name="submit" value="Отправить" className="btn colored"/>
            </form>
          </div>

        </div>
      </div>

      <Footer/>
    </>
    )
  }

}
