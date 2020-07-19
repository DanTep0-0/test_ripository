import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import {Helmet} from "react-helmet";

export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
              crt1081ird_s2_ip: file(relativePath: {eq: "crt1081ird_s2_ip.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 4158, maxHeight: 1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
                cod912ipe: file(relativePath: {eq: "cod912ipe.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
          }
      `}
      render= {({ cod912ipe, crt1081ird_s2_ip }) => (
      <>

      <Helmet>
        <title>Многоканальные IP стримеры | Оборудование для головной станции ТВ | Crypton.com.ua</title>
        <meta name="description" content='Многоканальные IP стримеры для вещания DTV в IP-сетях.' />
      </Helmet>

      <Header/>

      <div className="breadcrumbs_div">
        <div className="container">
          <ul className="breadcrumbs">
            <li>Вы здесь:</li>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/products">Все товары</Link></li>
            <li><span>IP стримеры</span></li>
          </ul>
        </div>
      </div>

      <div className="page category_page">
        <div className="container">

          <h1 className="pageName">IP стримеры</h1>
          <div className="products_wrapper">

            <Link to="/crt1081ird_s2_ip" className="product_item">
              <h4 className="title">8-канальный DVB-S/S2 ресивер - IP стример CRT1081IRD-S2-IP</h4>
              <Img className="product_item_img" fluid={crt1081ird_s2_ip.childImageSharp.fluid} alt="8-канальный DVB-S/S2 ресивер c IP стримером CRT1081IRD-S2-IP Crypton"/>
              <hr></hr>
              <span>8-канальный профессиональный ресивер-декриптор для приёма спутниковых сигналов. IP-выход - 1 Гб, multicast, unicast, mpts, spts(64 канала).</span>
            </Link>

            <Link to="/crt1081mcr" className="product_item">
              <h4 className="title">Многоканальный IP стример CRT1081MCR</h4>
              <Img className="product_item_img" fluid={cod912ipe.childImageSharp.fluid} alt="Многоканальный IP стример CRT1081MCR Crypton"/>
              <hr></hr>
              <span>Высокопроизводительный многоканальный IP стример. Предназначен для организации услуги IPTV и ОТТ в интернет сетях.</span>
            </Link>
          </div>

          <div className="page_block category_description">
            <h3 className="pageName">IP стримеры</h3>
            <p>IP стримеры используются для трансляции телевизионного контента в сетях IPTV или для мониторинга сигналов головного узла DTV. Стример - это простое и экономичное решение для вещания DTV в IP-сетях.</p>
          </div>

        </div>
      </div>

      <Footer/>
    </>
   )}
   />
 )
