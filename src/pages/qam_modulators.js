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
            crt1041m_c_ip: file(relativePath: {eq: "crt1041m-c-ip.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 4158, maxHeight: 1600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            crt1041m_c_modulator: file(relativePath: {eq: "crt1041qam.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 854, maxHeight: 256) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
          }
      `}
      render= {({ crt1041m_c_ip, crt1041m_c_modulator }) => (
    <>

    <Helmet>
      <title>QAM/QPSK Модуляторы | Оборудование для головной станции ТВ | Crypton.com.ua</title>
      <meta name="description" content='QAM модуляция - для распространения на большие расстояния в кабеле, QPSK модуляция - для использования в эфире(спутниковое телевидение, МИТРИС, LVDS).' />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/products">Все товары</Link></li>
          <li><span>Модуляторы</span></li>
        </ul>
      </div>
    </div>

    <div className="page category_page">
      <div className="container">

        <h1 className="pageName">Модуляторы</h1>
        <div className="products_wrapper">

          <Link to="/crt1041m-c-ip" className="product_item">
            <h4 className="title">DVB-C модулятор со скремблером CRT1041M-C-IP</h4>
            <Img className="product_item_img" fluid={crt1041m_c_ip.childImageSharp.fluid} alt="DVB-C модулятор со скремблером CRT1041M-C-IP Crypton" />
            <hr></hr>
            <span>4-канальный IP DVB-C модулятор цифрового сигнала кабельного телевидения со встроенным скремблером.</span>
          </Link>

          <Link to="/crt1041m-c" className="product_item">
            <h4 className="title">Модулятор CRT1041M-C</h4>
            <Img className="product_item_img" fluid={crt1041m_c_modulator.childImageSharp.fluid} alt="DVB-C модулятор CRT1041M-C Crypton" />
            <hr></hr>
            <span>Компактный 4-канальный DVB-C модулятор цифрового сигнала кабельного телевидения, предназначен для использования в кабельных, ММДС и SMATV сетях цифрового телевидения.</span>
          </Link>

        </div>

        <div className="page_block category_description">
          <h3 className="pageName">Модуляторы</h3>
          <p>Модуляторы преобразуют цифровой сигнал в радиочастотный для распространения на большие расстояния в кабеле (QAM модуляция) или эфире (QPSK модуляция, которая широко используется в спутниковом телевидении, МИТРИС, LVDS).</p>
        </div>


      </div>
    </div>

    <Footer/>
    </>
   )}
   />
 )
