import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet"
import {Link} from "gatsby";

export default class SiteMapPage extends React.Component {

  render () {
    return (
    <>

      <Helmet>
        <title>Карта сайта | Crypton.com.ua</title>
        <meta name="description" content='.'/>
      </Helmet>

      <Header/>

      <div className="breadcrumbs_div">
        <div className="container">
          <ul className="breadcrumbs">
            <li>Вы здесь:</li>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/profile">Компания</Link></li>
            <li><span>Карта сайта</span></li>
          </ul>
        </div>
      </div>


      <div className="page about_page sitemap_page">
        <div className="container">

          <h1 className="pageName">Карта сайта</h1>

          <Link to="/">Главная</Link>

          <h2>Компания</h2>
          <ul className="siteMap_ul">
            <li><Link to="/contact">Контакты</Link></li>
            <li><Link to="/profile">О нас</Link></li>
            <li><Link to="/company_history">История компании</Link></li>
            <li><Link to="/sitemap">Карта сайта</Link></li>
          </ul>

          <h2>Оборудование</h2>
          <ul className="siteMap_ul">
            <li><Link to="/products">Про оборудование</Link></li>
          </ul>

          <h4>Профессиональное оборудование</h4>
          <ul className="siteMap_ul">
            <li><Link to="/p_receivers">Профессиональные ресиверы</Link></li>
            <li><Link to="/scramblers">Скремблеры</Link></li>
            <li><Link to="/cas_crypton">Система условного доступа Crypton</Link></li>
            <li><Link to="/multiplexers">Мультиплексоры DVB</Link></li>
            <li><Link to="/qam_modulators">Модуляторы</Link></li>
            <li><Link to="/encoders">Энкодеры MPEG-2</Link></li>
            <li><Link to="/combiners">Сумматоры мощности</Link></li>
            <li><Link to="/iptv_servers">IPTV серверы</Link></li>
            <li><Link to="/ip_streamers">IP стримеры</Link></li>
          </ul>

          <h4>Абонентское оборудование</h4>
          <ul className="siteMap_ul">
            <li><Link to="/customer_equipment">Смотреть все</Link></li>
            <li><Link to="/biss">BISS модуль</Link></li>
            <li><Link to="/ip-qam">IPTV приставка IP-QAM</Link></li>
          </ul>

          <h2>Решения</h2>
          <ul className="siteMap_ul">
            <li><Link to="/iptv_exx">Организация IPTV вещания</Link></li>
            <li><Link to="/cable_tv">Организация кабельного вещания</Link></li>
            <li><Link to="/hybrid_tv">Кабельное + IPTV вещание</Link></li>
          </ul>

          <h2>Поддержка</h2>
          <ul className="siteMap_ul">
            <li><Link to="/faq">Вопросы и ответы</Link></li>
            <li><Link to="/technical_support">Снятое с производства</Link></li>
            <li><Link to="/payment_shipping">Доставка и оплата</Link></li>
            <li><Link to="/warranty">Гарантия</Link></li>
          </ul>

        </div>
      </div>


      <Footer/>
    </>
    )
  }

}
