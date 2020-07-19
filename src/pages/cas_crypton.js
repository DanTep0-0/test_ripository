import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import {Helmet} from "react-helmet";

export default function () {

  return  <StaticQuery
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
                smart_card: file(relativePath: {eq: "smart-card.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 180, maxHeight: 85) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                ci_module: file(relativePath: {eq: "ci_module.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
          }
      `}
      render= {({ catsh_up_854_419, smart_card, ci_module }) => (
    <>

    <Helmet>
      <title>CAS Система условного доступа | Оборудование для телевизионного вещания | Crypton.com.ua</title>
      <meta name="description" content="Система условного доступа “Crypton” для цифрового ТВ позволяет организовать вещание программ в digital формате в сетях различной топологии и с учетом особенностей заказчика." />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/products">Все товары</Link></li>
          <li><span>CAS</span></li>
        </ul>
      </div>
    </div>

    <div className="page category_page">
      <div className="container">

        <h1 className="pageName">Система условного доступа</h1>
        <div className="products_wrapper">

          <Link to="/cas_server" className="product_item">
            <h4 className="title">CAS сервер Crypton</h4>
            <Img className="product_item_img" fluid={catsh_up_854_419.childImageSharp.fluid} alt="CAS сервер Crypton" />
            <hr></hr>
            <span>С помощью Cas сервера происходит управление остальным оборудованием.</span>
          </Link>

          <Link to="/smart-card" className="product_item">
            <h4 className="title">Смарт-карты SMART-card</h4>
            <Img className="product_item_img" fluid={smart_card.childImageSharp.fluid} alt="Карта условного доступа Crypton SMART-card" />
            <hr></hr>
            <span>Абонентские контактные смарт-карты для просмотра программ.</span>
          </Link>

          <Link to="/cam" className="product_item">
            <h4 className="title">CI/CAM модуль доступа Crypton</h4>
            <Img className="product_item_img" fluid={ci_module.childImageSharp.fluid} alt="CI/CAM модуль доступа Crypton" />
            <hr></hr>
            <span>Адресный модуль доступа к услугам платных телевизионных сетей, предназначен для использования совместно с цифровыми телевизионными приемниками и приставками, поддерживающими Common Interface спецификацию.</span>
          </Link>
        </div>

        <div className="page_block category_description">
          <h3 className="pageName">Система условного доступа</h3>
          <p>Компания „Криптон” предлагает для внедрения систему условного доступа (CAS) “Crypton” для цифрового ТВ. CAS «Crypton» соответствует ETR-289 (DVB Simulcrypt), позволяет организовать вещание программ в digital формате в сетях различной топологии и с учетом особенностей заказчика. Система зарегистрирована мировым консорциумом DVB Project и имеет ID 0x4347. Возможно применение для любого способа доставки сигнала.</p>

          <p>Для кодирования указанных во входном потоке программ используется необратимый алгоритм, защищенный для каждой программы оригинальным динамическим ключом, что на практике делает невозможным несанкционированный просмотр телевизионных программ, передаваемых в потоке. Ключ и данные об абонентах защищены высокоэффективными алгоритмами шифрования.</p>

          <p>Абонентская служба поддерживает 16 миллионов произвольно адресуемых CAM/CI модулей. Модули условного доступа реализованы на SMART-карте последнего поколения, что позволяет сменить версию системы быстро и без замены ресивера и кодирующего оборудования.</p>
        </div>

      </div>
    </div>

    <Footer/>
    </>
   )}
   />
 }

// <Link to="/cod912ipe" className="moreBtn">Больше</Link>
