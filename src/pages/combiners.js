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
                pwc1120r: file(relativePath: {eq: "pwc1120r.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                pwc1120l_rear: file(relativePath: {eq: "pwc1120l_rear.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
          }
      `}
      render= {({ pwc1120r, pwc1120l_rear }) => (
    <>

    <Helmet>
      <title>Сумматоры мощности | Оборудование для головной станции ТВ | Crypton.com.ua</title>
      <meta name="description" content='Сумматоры мощности компании "Crypton".' />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/products">Все товары</Link></li>
          <li><span>Сумматоры мощности</span></li>
        </ul>
      </div>
    </div>

    <div className="page category_page">
      <div className="container">

        <h1 className="pageName">Сумматоры мощности</h1>
        <div className="products_wrapper">

          <Link to="/pwc1120r" className="product_item">
            <h4 className="title">12-канальный сумматор мощности ВЧ сигнала PWC1120R</h4>
            <Img className="product_item_img" fluid={pwc1120r.childImageSharp.fluid} alt="12-канальный сумматор мощности ВЧ сигнала PWC1120R"></Img>
            <hr></hr>
            <span>12-канальный сумматор мощности ВЧ радиосигнала. Оно идеально подходит для использования в многоканальных кабельных сетях вещания цифровых телевизионных программ.</span>

          </Link>

          <Link to="/pwc1120l" className="product_item">
            <h4 className="title">Сумматор мощности PWC1120L</h4>
            <Img className="product_item_img" fluid={pwc1120l_rear.childImageSharp.fluid} alt="Сумматор мощности PWC1120L"></Img>
            <hr></hr>
            <span>12-канальный сумматор мощности широкополосных радиочастотных сигналов. Дополнительно содержит инжектор опорной частоты 10МГц.</span>

          </Link>

        </div>

        <div className="page_block category_description">
          <h3 className="pageName">Сумматоры мощности</h3>
          <p>Сумматоры мощности используются для объединения нескольких входных радиочастотных сигналов на одном выходе.</p>
        </div>

      </div>
    </div>

    <Footer/>
    </>
   )}
   />
 )
