import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image";
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default class Server_Solutions extends React.Component {

  render () {
    return (
    <>

    <Helmet>
      <title>Организация IPTV вещания для средних и больших сетей | Оборудование для головной станции ТВ | Crypton.com.ua</title>
      <meta name="description" content='Решение предназначено для организации цифрового Live TV и VoD вещания в средних и больших сетях.' />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><span>Решения</span></li>
          <li><Link to="/iptv_exx">Организация IPTV вещания</Link></li>
          <li><span>Средняя сеть</span></li>
        </ul>
      </div>
    </div>

    <StaticQuery
      query = {
          graphql`
            query   {
                  iptv_2000: file(relativePath: {eq: "iptv_2000.png"}) {
                      childImageSharp {
                          fluid(maxWidth: 1123, maxHeight: 794) {
                          ...GatsbyImageSharpFluid
                          }
                      }
                  }
            }
        `}
        render={({ iptv_2000 }) => (
        <div className="page category_page">
          <div className="container">
            <div className="productPage_top">
              <Link to="/iptv_exx" className="moreBtn backToCat_button flexbox">
                <FontAwesomeIcon className="fa_icon" icon={faChevronLeft}/>
                Организация IPTV вещания
              </Link>
              <h1>Интерактивное ТВ. Для средних сетей 10 Gbps</h1>
            </div>
            <div className="productPage_main">
              <div className="product_block">
                <h3>Назначение</h3>
                <p>
                  Решение предназначено для организации цифрового Live TV и VoD вещания в небольших и средних отелях, небольших отельных комплексах, а также в сетях небольших провайдеров комплексных телекоммуникационных услуг(MSO). Сеть строится на основе двух устройств компании Криптон и сетевых коммутаторах среднего уровня. Масштабирование может быть достигнуто пропорциональным увеличением количества оборудования. Видеопотоки вещаются на клиентские устройства по http протоколу, что позволяет использовать в сети как стационарные приставки или телевизоры, так и мобильные устройства.
                </p>
              </div>
              <div className="product_block">
                <h3>Компоненты системы</h3>
                <Img fluid={iptv_2000.childImageSharp.fluid} alt="Организация IPTV вещания от компании Crypton - блок-схема Интерактивное ТВ - решение для средних сетей 10 Gbps Гбит/с"/>
              </div>
              <div className="product_block">
                <h3>Описание компонентов:</h3>
                <ul>
                  <li>
                    Sat-IP Gate Way - это оборудование захвата спутниковых, эфирных либо кабельных телевизионных программ. Примером такого оборудования являются цифровые спутниковые и эфирные приемники-декодеры серии Crypton Compact HeadEnd, способные вещать в IP сеть цифровые потоки выбранных программ.
                  </li>
                  <li>
                    Crypton Catch-up TV Server - это устройство записи потоков цифровых телевизионных программ на дисковые накопители с организацией адресного http вещания выбранных программ на пользовательское оборудование.
                  </li>
                  <li>
                    Crypton Catch-up TV Client - это кросс платформенного приложения IPTV/VoD плеера с расширенным пользовательским интерфейсом, оптимизированным для поиска и проигрывания записанных в архив телевизионных программ.
                  </li>
                </ul>
              </div>
              <div className="product_block">
              <h3>Технические параметры</h3>
                <section className="properties_group">
                  <dl className="flexbox">
                    <dt><span>Количество подключаемых LNB к каждому приёмнику</span></dt>
                    <dd><span>8 x n (n — количество приёмников)</span></dd>

                    <dt><span>Количество CI слотов</span></dt>
                    <dd><span>8 x n (n — количество приёмников)</span></dd>

                    <dt><span>Глубина ТВ архива*</span></dt>
                    <dd><span>24 часа</span></dd>

                    <dt><span>Количество VoD программ на каждом сервере**</span></dt>
                    <dd><span>	50(SD) или 15(HD)</span></dd>

                    <dt><span>Количество независимых пользователей***</span></dt>
                    <dd><span>	2500(SD) или 800(HD)</span></dd>

                    <dt><span>Интерфейс передачи выходных потоков</span></dt>
                    <dd><span>DVB-over-Http</span></dd>

                    <dt><span>Тип вещания</span></dt>
                    <dd><span>Live, VoD</span></dd>

                    <dt><span>Интерфейс управления устройствами Crypton</span></dt>
                    <dd><span>Web, SNMP</span></dd>

                    <dt><span>Доступное клиентское оборудование****</span></dt>
                    <dd><span>Windows/Linux PC client, Android IPTV player, MAG250/254</span></dd>
                  </dl>
                </section>

                <p>
                  * -  глубина ТВ архива зависит от количества Catch-up TV серверов, емкости установленного в каждый из них SSD массива и количества VoD программ.
                </p>
                <p>
                  ** - количество VoD программ зависит от количества Catch-up TV серверов, емкости установленного в каждый из них SSD массива и глубины ТВ архива.
                </p>
                <p>
                  *** - количество независимых пользователей зависит от разрешения (SD/HD) и суммарной битовой скорости одновременно вещаемых программ. **** Указаны устройства адаптированные к Crypton Catch-up TV инфраструктуре. Возможно использование IPTV плееров и устройств других производителей.
                </p>
              </div>
            </div>
          </div>
        </div>
        )}
      />
      <Footer/>
    </>
    )
  }


}
