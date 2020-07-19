import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Header from "../components/Header"
import Footer from "../components/Footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
import {Helmet} from "react-helmet";

// import { faClock } from '@fortawesome/free-solid-svg-icons'

export default class Biss extends React.Component {


  render () {

    return (
      <>
      <StaticQuery
      query = {
          graphql`
            query   {
                  cam_biss: file(relativePath: {eq: "cam-biss.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 620, maxHeight: 548) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
        `}

        render= {({ cam_biss }) => (
          <>

          <Helmet>
            <title>Контакты | Crypton.com.ua</title>
            <meta name="description" content="История создания и развития компании Crypton." />
          </Helmet>

          <Header/>

          <div className="breadcrumbs_div">
            <div className="container">
              <ul className="breadcrumbs">
                <li>Вы здесь:</li>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/profile">Компания</Link></li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>

          <div className="page about_page">
            <div className="container">
              <h1 className="pageName">Контакты</h1>
              <div className="contacts_div">
                <div className="contacts_item flexbox">
                  <div className="contacts_item-icon">
                    <FontAwesomeIcon className="fa_icon" icon={faPhone}/>
                  </div>
                  <div className="contacts_item-content">
                    <h5>Номер телефона</h5>
                    <a href="tel:+380442251221">+38 044 225 12 21</a>
                    <a href="tel:+380988461181">+38 098 846 11 81</a>
                    <a href="tel:+380503262475">+38 050 326 24 75</a>
                  </div>
                </div>
                <div className="contacts_item flexbox">
                  <div className="contacts_item-icon">
                    <FontAwesomeIcon className="fa_icon" icon={faMapMarkerAlt}/>
                  </div>
                  <div className="contacts_item-content">
                    <h5>Адрес</h5>
                    <p>ООО "Компания "Криптон"
                      <br></br>
                    03061, Украина, Киев
                      <br></br>
                    Отрадный проспект, 95C</p>
                  </div>
                </div>
                <div className="contacts_item flexbox">
                  <div className="contacts_item-icon">
                    <FontAwesomeIcon className="fa_icon" icon={faEnvelope}/>
                  </div>
                  <div className="contacts_item-content">
                    <h5>E-mail</h5>
                    <a href="mailto:office@crypton.com.ua">office@crypton.com.ua</a>
                    <h5>Тех.поддержка</h5>
                    <a href="mailto:support@crypton.com.ua">support@crypton.com.ua</a>
                  </div>
                </div>
                <div className="contacts_item flexbox">
                  <div className="contacts_item-icon">
                    <FontAwesomeIcon className="fa_icon" icon={faSkype}/>
                  </div>
                  <div className="contacts_item-content">
                    <h5>Skype</h5>
                    <a href="skype:CompanyCrypton">CompanyCrypton</a>
                  </div>
                </div>
              </div>
              <div className="map_div">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2542.190941977683!2d30.4245078!3d50.418914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c955d4452fb5%3A0x5c7d54b8bda73900!2z0JLRltC00YDQsNC00L3QuNC5INC_0YDQvtGB0L_QtdC60YIsIDk1Yywg0JrQuNGX0LIsIDAzMDYx!5e0!3m2!1suk!2sua!4v1591716750702!5m2!1suk!2sua" width="800" height="600" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" title="Местоположение главного оффиса компании Crypton на карте"></iframe>
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
        )}
      />
    </>)

    }
  }

// <div className="contacts_item flexbox">
//   <div className="contacts_item-icon">
//     <FontAwesomeIcon className="fa_icon" icon={faClock}/>
//   </div>
//   <div className="contacts_item-content">
//     <h5>График работы</h5>
//     <p>Пон-пт: 9<sup>00</sup> &mdash; 18<sup>00</sup>
//       <br></br>
//       Суб-воскр: выходной
//     </p>
//   </div>
// </div>
