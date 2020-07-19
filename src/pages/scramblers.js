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
                catsh_up_854_419: file(relativePath: {eq: "catsh_up_854_419.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 419) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                crt1041m_c_ip: file(relativePath: {eq: "crt1041m-c-ip.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
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
                cod982ASI: file(relativePath: {eq: "cod982.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 250) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                cod912: file(relativePath: {eq: "cod912.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
          }
      `}
      render= {({ catsh_up_854_419, crt1041m_c_ip, cod912ipe, cod982ASI, cod912 }) => (
    <>

    <Helmet>
      <title>Скремблеры | Оборудование для головной станции ТВ | Crypton.com.ua</title>
      <meta name="description" content='Скремблеры - это системы условного доступа CAS Crypton, используются в цифровом и кабельном телевидении для предоставления доступа к платному контенту.' />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/products">Все товары</Link></li>
          <li><span>Скремблеры</span></li>
        </ul>
      </div>
    </div>

    <div className="page category_page">
      <div className="container">

        <h1 className="pageName">Скремблеры</h1>
        <div className="products_wrapper">

          <Link to="/cod912ipe" className="product_item">
            <h4 className="title">Скремблер COD912IPE</h4>
            <Img className="product_item_img" fluid={cod912ipe.childImageSharp.fluid} alt="4-канальный DVB скремблер COD912IPE Crypton" />
            <hr></hr>
            <span>4-канальный DVB скремблер, предназначенный для работы в составе головных станций, использующих DVB-over-IP технологию распределения транспортных потоков.</span>
          </Link>

          <Link to="/cod912ipe_asi" className="product_item">
            <h4 className="title">Скремблер COD912IPE-ASI</h4>
            <Img className="product_item_img" fluid={cod912ipe.childImageSharp.fluid} alt="4-канальный DVB скремблер COD912IPE-ASI Crypton" />
            <hr></hr>
            <span>4-канальный DVB скремблер с интерфейсом ASI, предназначен для работы в составе головных станций, использующих DVB-over-IP технологию распределения транспортных потоков.</span>
          </Link>

          <Link to="/cas_server" className="product_item">
            <h4 className="title">CAS сервер Crypton</h4>
            <Img className="product_item_img" fluid={catsh_up_854_419.childImageSharp.fluid} alt="CAS сервер Crypton" />
            <hr></hr>
            <span>С помощью CAS сервера происходит управление остальным оборудованием.</span>
          </Link>

          <Link to="/cod912" className="product_item">
            <h4 className="title">Скремблер COD912ASI</h4>
            <Img className="product_item_img" fluid={cod912.childImageSharp.fluid} alt="Скремблер COD912ASI Crypton" />
            <hr></hr>
            <span>Скремблер COD912ASI предназначен для работы в цифровых широковещательных DVB и IPTV сетях.</span>
          </Link>

          <Link to="/cod912" className="product_item">
            <h4 className="title">Скремблер с модулятором COD912MSL</h4>
            <Img className="product_item_img" fluid={cod912.childImageSharp.fluid} alt="Скремблер с модулятором COD912MSL Crypton" />
            <hr></hr>
            <span>Скремблер COD912MSL предназначен для работы в цифровых широковещательных DVB и IPTV сетях. Имеет QPSK модулятор на выходе.</span>
          </Link>

          <Link to="/cod982asi" className="product_item">
            <h4 className="title">Мультиплексор со скремблером COD982ASI</h4>
            <Img className="product_item_img" fluid={cod982ASI.childImageSharp.fluid} alt="8-канальный мультиплексор со скремблером COD982ASI Crypton" />
            <hr></hr>
            <span>8-канальный DVB ремультиплексор, предназначен для выборочного ремультиплексирования программ с последующими  мультиплексированием в один транспортный поток и скремблированием</span>
          </Link>

          <Link to="/crt1041m-c-ip" className="product_item">
            <h4 className="title">Модулятор  со скремблером CRT1041M-C-IP</h4>
            <Img className="product_item_img" fluid={crt1041m_c_ip.childImageSharp.fluid} alt="4-канальный IP DVB-C модулятор со скремблером CRT1041M-C-IP Crypton" />
            <hr></hr>
            <span>4-канальный IP DVB-C модулятор цифрового сигнала со встроенным скремблером системы условного доступа CAS Crypton.</span>
          </Link>
        </div>

        <div className="page_block category_description">
          <h3 className="pageName">Cкремблеры</h3>
          <p>Скремблеры - это системы условного доступа CAS Crypton, которые используются в цифровом и кабельном телевидении для предоставления доступа к платному контенту и предотвращения кражи транслируемого сигнала. Инвертирование одной из составляющих телесигнала и передача данных происходит без участия клиентской стороны, а вот восстановление исходной последовательности сигнала происходит на стороне пользователя.</p>
        </div>

      </div>
    </div>
    <Footer/>
    </>
   )}
   />
 )
