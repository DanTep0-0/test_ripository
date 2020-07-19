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
                ip_qam: file(relativePath: {eq: "ip-qam_m.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 600, maxHeight: 424) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                biss: file(relativePath: {eq: "cam-biss.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 620, maxHeight: 548) {
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
      render= {({ ip_qam, biss, smart_card, ci_module }) => (
    <>

    <Helmet>
      <title>Ресиверы и CAM/CI модули | Абонентское оборудование цифрового ТВ | Crypton.com.ua</title>
      <meta name="description" content="Абонентское оборудование Crypton обеспечивает удобный и качевственный просмотр ТВ." />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/products">Все товары</Link></li>
          <li>Абонентское оборудование</li>
        </ul>
      </div>
    </div>

    <div className="page category_page">
      <div className="container">

        <h1 className="pageName">Абонентское оборудование цифрового ТВ</h1>
         <div className="products_wrapper">

          <Link to="/biss" className="product_item">
            <h4 className="title">CAM модуль BISS</h4>
            <Img className="product_item_img" fluid={biss.childImageSharp.fluid} alt="CAM модуль BISS, CA-модуль доступа Crypton" />
            <hr></hr>
            <span>CAM модуль BISS используется для декодирования системы условного доступа с фиксированным ключом BISS. Модуль подходит к телевизорам, спутниковым ресиверам и другому оборудованию с CI-интерфейсом.</span>
          </Link>

          <Link to="/cam" className="product_item">
            <h4 className="title">CI/CAM модуль доступа Crypton</h4>
            <Img className="product_item_img" fluid={ci_module.childImageSharp.fluid} alt="CI/CAM модуль доступа Crypton CRT1001CAM" />
            <hr></hr>
            <span>Адресный модуль доступа к услугам платных телевизионных сетей, предназначен для использования совместно с цифровыми телевизионными приемниками и приставками, поддерживающими Common Interface спецификацию.</span>
          </Link>

          <Link to="/smart-card" className="product_item">
            <h4 className="title">Смарт-карты SMART-card</h4>
            <Img className="product_item_img" fluid={smart_card.childImageSharp.fluid} alt="Смарт-карты SMART-card Crypton" />
            <hr></hr>
            <span>Абонентские контактные смарт-карты для просмотра программ.</span>
          </Link>
        </div>

        <div className="page_block category_description">
          <h3 className="pageName">Абонентское оборудование</h3>
          <p>Абонентское оборудование цифрового ТВ предназначено для приема и воспроизведения телепрограмм, передаваемых по сети проводного вещания, клиентом. Криптон производит абонентские ресиверы, CAM/CI модули доступа, карты условного доступа, а также SMART-карты.</p>
        </div>

      </div>
    </div>

    <Footer/>
    </>
   )}
   />
 )


 //   <div className="productPresentBlock">
 //     <Link to="/ip-qam" className="title">Приставка IP-QAM</Link>
 //     <Img className="product_item_img" fluid={ip_qam.childImageSharp.fluid}></Img>
 //     <hr></hr>
 //     <span>Наша IPTV приставка подключается к антенному входу телевизора вместо HDMI. В этом будущее IPTV!</span>
 //     <p className="moreBtn">
 //     <Link to="/ip-qam" className="moreBtn">Больше</Link>
 //     </p>
 //   </div>
