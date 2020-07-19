import React from "react"

import Header from "../components/Header";
import ProductsSlider from "../components/ProductsSlider";
import Spheres from "../components/Spheres";
import ProductsBlock from "../components/ProductsBlock";
import News from "../components/News";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";

import { Link, StaticQuery, graphql } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default class IndexPage extends React.Component {
  render () {
    return (
      <>
      <StaticQuery
      query = {
          graphql`
            query  {
              sphere_tv: file(relativePath: {eq: "sphere_tv.png"}) {
                  childImageSharp {
                      fluid(maxWidth: 50, maxHeight: 50) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              sphere_lock: file(relativePath: {eq: "sphere_lock.png"}) {
                  childImageSharp {
                      fluid(maxWidth: 50, maxHeight: 50) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              sphere_service: file(relativePath: {eq: "sphere_service.png"}) {
                  childImageSharp {
                      fluid(maxWidth: 50, maxHeight: 50) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }

            }

      `}

      render= {({ sphere_tv, sphere_lock, sphere_service }) => (
        <>

        <Helmet>
          <title>Crypton.com.ua | Оборудование для ТВ вещания</title>
          <meta name="description" content='Компания "Crypton" поможет Вам организовать ТВ вещание легко и без лишних затрат.' />
        </Helmet>

        <Header></Header>

        <div className="main">
          <div className="content">

            <section className="block start_block">
              <div className="container">
                <h1>
                  "Криптон" - это высокотехнологичные системы телевизионного вещания
                </h1>
                <Link to="/profile" className="moreBtn">
                  Узнать больше
                  <FontAwesomeIcon className="fa_icon" icon={faChevronRight}/>
                </Link>
              </div>
            </section>

            <section className="block products_slider">
              <div className="container">
                <ProductsSlider></ProductsSlider>
              </div>
            </section>

            <section className="block products_block">
              <div className="container">
                <ProductsBlock></ProductsBlock>
              </div>
            </section>

            <section className="block spheres_block">
              <div className="container">
                <Spheres></Spheres>
              </div>
            </section>

            <section className="block colored_block">
              <div className="container">
                <h2>Мы ответим на Ваши вопросы</h2>
                <Link to="/contact" className="moreBtn">Связаться с нами<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link>
              </div>
            </section>

            <section className="block news_block">
              <div className="container">
                <News></News>
              </div>
            </section>

          </div>
        </div>

        <Footer></Footer>
        </>
      )}
    />
    </>
    )
  }
}


// <section className="block buttons">
//   <div className="container">
//     <div className="card_wrapper">
//       <div className="card">
//         <FontAwesomeIcon className="fa_icon" icon={faInfoCircle}/>
//         <h4>Button 1</h4>
//       </div>
//     </div>
//     <div className="card_wrapper">
//       <div className="card">
//         <FontAwesomeIcon className="fa_icon" icon={faInfoCircle}/>
//         <h4>Button 2</h4>
//       </div>
//     </div>
//   </div>
// </section>

// <section className="block about_block">
//   <div className="container">
//     <div className="extraDiv">
//       <FontAwesomeIcon className="fa_icon" icon={faInfoCircle}/>
//       <h4>За 28 лет активной деятельности Криптон позволил более чем 150 телекомпаниям по всему миру организовать платное телевидение!</h4>
//     </div>
//   </div>
// </section>



// <div className="banner"></div>
//
// <Spheres></Spheres>
//
// <Features></Features>
//
// <div className="block products">
//   <h3>Оборудование</h3>
//   <ul className="products_list">
//     <li>
//       <h4 className="productsCat">Цифровое телевидение</h4>
//       <ul>
//         <li>Ресиверы</li>
//         <li>Скремблеры</li>
//         <li>Система условного доступа CAS Crypton</li>
//         <li>Мультиплексоры</li>
//         <li>Модуляторы</li>
//       </ul>
//     </li>
//     <li>
//       <h4 className="productsCat">Интерактивное телевидение</h4>
//       <ul>
//         <li>IP стримеры</li>
//         <li>Серверы Catch-up</li>
//       </ul>
//     </li>
//     <li>
//       <h4 className="productsCat">Абонентское оборудование</h4>
//       <ul>
//         <li>CAM-модуль BISS</li>
//         <li>Карты, модули доступа</li>
//         <li>IPTV приставка IP-QAM</li>
//       </ul>
//     </li>
//   </ul>
//
//   <p className="moreBtn"><Link to="/products" className="moreBtn_link">Больше</Link></p>
// </div>
