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
                cod882asi: file(relativePath: {eq: "cod882msl.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                cod882msl: file(relativePath: {eq: "cod882msl.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
          }
      `}
      render= {({ cod882asi, cod882msl }) => (
    <>

    <Helmet>
      <title>MPEG2 кодеры, энкодеры, декодеры | Оборудование для головной станции ТВ | Crypton.com.ua</title>
      <meta name="description" content='MPEG2 кодеры для преобразования аналоговых сигналов в цифровой MPEG2 многопрограммный транспортный поток (MPTS).' />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/products">Все товары</Link></li>
          <li><span>Энкодеры</span></li>
        </ul>
      </div>
    </div>

    <div className="page category_page">
      <div className="container">

        <h1 className="pageName">Энкодеры</h1>
        <div className="products_wrapper">

          <Link to="/cod882asi" className="product_item">
            <h4 className="title">MPEG2 кодер Crypton COD882ASI</h4>
            <Img className="product_item_img" fluid={cod882asi.childImageSharp.fluid} alt="MPEG2 кодер Crypton COD882ASI" />
            <hr></hr>
            <span>Преобразует аналоговые сигналы в цифровой MPEG2 многопрограммный транспортный поток (MPTS). Имеет ASI выход, предназначенный для работы совместно с DVB модулятором.</span>
          </Link>

          <Link to="/cod882msl" className="product_item">
            <h4 className="title">MPEG2 кодер Crypton COD882MSL</h4>
            <Img className="product_item_img" fluid={cod882msl.childImageSharp.fluid} alt="MPEG2 кодер Crypton COD882MSL" />
            <hr></hr>
            <span>Преобразует аналоговые сигналы в цифровой MPEG2 многопрограммный транспортный поток (MPTS), со встроенным DVB-S модулятором. Сформированный таким образом и готовый к вещанию поток выдается в виде DVB-S модулированного сигнала для дальнейшего распространения в сетях либо трансмодулирования в другие форматы.</span>
          </Link>
        </div>

        <div className="page_block category_description">
          <h3 className="pageName">Энкодеры</h3>
          <p>Энкодеры нужны для преобразования аналоговых аудио- и видеоданных в цифровые стандарты MPEG-2. Данное оборудование обеспечивает эффективную доставку контента на приемные устройства разных типов.</p>
        </div>

      </div>
    </div>

    <Footer/>
    </>
   )}
   />
 )
