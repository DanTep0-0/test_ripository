import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image";
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet";

export default class Server_Solutions extends React.Component {

  render () {
    return (
    <>

    <Helmet>
      <title>Организация кабельного и IPTV вещания | Оборудование для головной станции ТВ | Crypton.com.ua</title>
      <meta name="description" content='Компания "Crypton" поможет Вам организовать кабельное + IPTV вещание.' />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><span>Решения</span></li>
          <li><span>Кабельное + IPTV вещание</span></li>
        </ul>
      </div>
    </div>

    <StaticQuery
      query = {
          graphql`
            query   {
                  hybrid_tv: file(relativePath: {eq: "hybrid_tv.png"}) {
                      childImageSharp {
                          fluid(maxWidth: 1123, maxHeight: 794) {
                          ...GatsbyImageSharpFluid
                          }
                      }
                  }
            }
        `}
        render={({ hybrid_tv }) => (
        <div className="page solution_page">
          <div className="container">
            <h1 className="pageName">Головная станция кабельного и IPTV вещания</h1>
              <div className="product_block">
                <p>
                  Компания "Crypton" предоставляет ряд решений проблем, которые могут возникать при работе с кабельным + IPTV вещанием.
                </p>
              </div>

              <div className="product_block">
                <h3>Блок-схема головной станции кабельного и IPTV вещания</h3>
                <Img fluid={hybrid_tv.childImageSharp.fluid} className="img-margin" alt="Организация кабельного и IPTV вещания (гибридное ТВ) от компании Crypton - Блок-схема головной станции "/>
              </div>

              <div className="product_block">
                <p>
                  Такое решение дает много преимуществ:
                </p>
                <ul>
                  <li>
                    Позволяет убрать повторяющиесь модули в различных устройствах
                  </li>
                  <li>
                    Идеальная аппаратная совместимость, высокая надежность и ремонтопригодность оборудования за лучшую в отрасли цену.
                  </li>
                  <li>

                    Реализует такие важные функции как:

                    <ol>
                      <li>
                        Прием DVB-S/S2, DVB-T/T2, DVB-C сигнала
                      </li>
                      <li>
                        Common Interface (CI)
                      </li>
                      <li>
                        Ремультиплексирование MPTS потоков
                      </li>
                      <li>
                        Организация цифрового телегида(EPG)
                      </li>
                      <li>
                        Организация условного доступа(CAS)
                      </li>
                      <li>
                        Формирование модулированного DVB-C сигнала
                      </li>
                      <li>
                        Формирование unicast/multicast IPTV потоков
                      </li>
                      <li>
                        Обмен данными по IP протоколу упрощающает архитектуру головной станции мультисервисного оператора(MSO)
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
              <div className="product_block">
                <p>Станция состоит из:</p>

                <ul>
                  <li>
                    <Link to="/crt1081ird_s2_ip">Профессиональный 8-канальный DVB-S2 приёмник CRT1081IRD-S2-IP</Link>
                  </li>
                  <li>
                    <Link to="/crt1081ird_s2_mx">8-канальный DVB-S2 приемник-декодер со встроенным 4-х канальным DVB ремультиплексером CRT1081IRD-S2-MX</Link>
                  </li>
                  <li>
                    <Link to="/crt1041ird-t2-ip">Профессиональный 4-канальный мультистандартный DVB-С/T/T2 ресивер</Link>
                  </li>
                  <li>
                    <Link to="/crt1041m-c-ip">4-канальный IP DVB-C модулятор со встроенным скремблером системы условного доступа CAS Crypton CRT1041M-C-IP</Link>
                  </li>
                  <li>
                    <Link to="/crt1081mcr">Маршрутизатор IPTV CRT1081MCR</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      />
    <Footer/>
    </>
    )
  }


}
