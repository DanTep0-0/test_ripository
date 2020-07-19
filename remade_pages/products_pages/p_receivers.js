import {  Link, StaticQuery, graphql } from "gatsby"
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
                crt1081ird_s2_mx: file(relativePath: {eq: "crt1081ird_s2_ip.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 4158, maxHeight: 1600) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                crt1041ird_t2_ip_front: file(relativePath: {eq: "crt1041ird_t2_ip_front.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 4160, maxHeight: 1600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ crt1081ird_s2_ip, crt1081ird_s2_mx, crt1041ird_t2_ip_front }) => (
        <>

        <Helmet>
          <title>Профессиональные спутниковые ресиверы | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content='Ресиверы компании "Crypton" получают ТВ контент со спутников, эфирного и кабельного вещания. Они имеют CI слоты для CAM модулей, а также могут выполнять функции IP стримеров.' />
        </Helmet>

        <Header/>

        <div className="breadcrumbs_div">
          <div className="container">
            <ul className="breadcrumbs">
              <li>Вы здесь:</li>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/products">Все товары</Link></li>
              <li><span>Ресиверы</span></li>
            </ul>
          </div>
        </div>

        <div className="page category_page">
          <div className="container">

            <h1 className="pageName">Ресиверы (приёмники)</h1>
            <div className="products_wrapper">

              <Link to="/crt1081ird_s2_ip" className="product_item">
                <h4 className="title">DVB-S/S2 ресивер - IP стример CRT1081IRD-S2-IP</h4>
                <Img className="product_item_img" fluid={crt1081ird_s2_ip.childImageSharp.fluid} alt="8-канальный профессиональный DVB-S/S2 ресивер c IP стримером CRT1081IRD-S2-IP Crypton" />
                <span>8-канальный профессиональный ресивер-декриптор для приёма спутниковых сигналов.</span>
              </Link>

              <Link to="/crt1081ird_s2_mx" className="product_item">
                <h4 className="title">DVB-S/S2 ресивер c мультиплексором CRT1081IRD-S2-MX</h4>
                <Img className="product_item_img" fluid={crt1081ird_s2_mx.childImageSharp.fluid} alt="8-канальный профессиональный DVB-S/S2 ресивер c мультиплексором CRT1081IRD-S2-MX Crypton" />
                <span>8-канальный профессиональный ресивер-декриптор для приёма спутниковых сигналов с функцией ремультиплексирования.</span>
              </Link>

              <Link to="/crt1041ird-t2-ip" className="product_item">
                <h4 className="title">DVB-C/T/T2 ресивер - IP стример CRT1041IRD-T2-IP</h4>
                <Img className="product_item_img" fluid={crt1041ird_t2_ip_front.childImageSharp.fluid} alt="4-канальный профессиональный DVB-C/T/T2 ресивер Crypton" />
                <span>4-канальный профессиональный мультистандартный ресивер для приёма эфирных и кабельных сигналов.</span>
              </Link>
            </div>

            <div className="page_block category_description">
              <h3 className="pageName">Профессиональные спутниковые ресиверы (IRD)</h3>
              <p>Профессиональный спутниковый ресивер является одним из устройств, с которого начинается головная станция для ТВ вещания. Будучи приемником сигнала для дальнейшей его передачи в сеть, ресивер служит фундаментом качества.</p>

              <p>8-канальный профессиональный ресивер является по сути восемью DVB-S2 ресиверами, позволяющий принять сигнал с 8 различных источников. Наличие 8 CI слотов позволяет одновременное декодирование скремблированных сервисов. В зависимости от конфигурации на выходе можно использовать DVB-ASI интерфейсы, которые обеспечивают сопряжение с DVB модуляторами, скремблерами и другими устройствами формирования потоков цифрового телевидения.</p>

              <p>С помощью многоканального профессионального ресивера также возможна организация Multicast вещания до 64 цифровых телевизионных программ либо транспорт каждого из принятых DVB-S2 приемником транспондеров посредством Unicast передачи. В этом случае ресиверы выполняют функции IP стримеров.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </>
   )}
   />

 )
