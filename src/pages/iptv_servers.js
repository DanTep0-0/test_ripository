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
                hp_proliant: file(relativePath: {eq: "hp_proliant.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 1234, maxHeight: 422) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
          }
      `}
      render= {({ hp_proliant }) => (
      <>

      <Helmet>
        <title>IPTV серверы Catch-up для IPTV вещания| Оборудование для головной станции ТВ | Crypton.com.ua</title>
        <meta name="description" content='IPTV серверы для Live IPTV и Catch-up TV в сетях мультисервисных операторов (MSO) и провайдеров интернет услуг (ISP)' />
      </Helmet>

      <Header/>

      <div className="breadcrumbs_div">
        <div className="container">
          <ul className="breadcrumbs">
            <li>Вы здесь:</li>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/products">Все товары</Link></li>
            <li><span>IPTV серверы</span></li>
          </ul>
        </div>
      </div>

      <div className="page category_page">
        <div className="container">
          <h1 className="pageName">IPTV серверы</h1>
          <div className="products_wrapper">

            <Link to="/catch_up_server" className="product_item">
              <h4 className="title">Мощный сервер для IPTV вещания Crypton Catch-up TV</h4>
              <Img className="product_item_img" fluid={hp_proliant.childImageSharp.fluid} alt="Мощный Catch-up сервер для IPTV вещания Crypton"/>
              <hr></hr>
              <span>Высокопроизводительный програмно-аппаратный комплекс для организации услуг Live IPTV и Catch-up TV в сетях мультисервисных операторов (MSO) и провайдеров интернет услуг (ISP). Модель для средних сетей.</span>
            </Link>

            <Link to="/catch_up_server_lite" className="product_item">
              <h4 className="title">Сервер для IPTV вещания Crypton Catch-up TV Lite</h4>
              <Img className="product_item_img" fluid={hp_proliant.childImageSharp.fluid} alt="Мощный Catch-up сервер для IPTV вещания Crypton"/>
              <hr></hr>
              <span>Высокопроизводительный програмно-аппаратный комплекс для организации услуг Live IPTV и Catch-up TV в сетях мультисервисных операторов (MSO) и провайдеров интернет услуг (ISP). Модель для малых сетей.</span>
            </Link>
          </div>

          <div className="page_block category_description">
            <h3 className="pageName">IPTV серверы Catch-up</h3>
            <p>Сервер Catch-Up TV нужен вам, если у Вас уже есть головная станция линейного телевидения. В таком случае достаточно поставить Сервер Crypton Catch-Up на выходе в качестве IP стримера. Всего одно устройство и Вы можете начать вещание интерактивного телевидения IPTV!</p>
          </div>

        </div>
      </div>

      <Footer/>
    </>
   )}
   />
 )
