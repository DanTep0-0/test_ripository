import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
                hp_proliant: file(relativePath: {eq: "hp_proliant.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 856, maxHeight: 254) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ hp_proliant }) => (
        <>

        <Helmet>
          <title>Сервер для IPTV вещания Crypton Catch-up TV Lite | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="Сервер Crypton Catch-up TV предназначен для организации услуг Live IPTV и отложенного просмотра телевизионных программ в сетях мультисервисных операторов(MSO) и провайдеров интернет услуг(ISP)." />
        </Helmet>

        <ProductInfo
          categories={[{text: "IPTV серверы", link: "iptv_servers"}]}
          name="Сервер для IPTV вещания Crypton Catch-up TV Lite"
          photos={[hp_proliant.childImageSharp.fluid]}
          description={() => (
            <>
            <div className="product_aboutBlock">
              <div className="title flexbox">
                <FontAwesomeIcon className="fa_icon" icon={faInfoCircle}/>
                <p>Модель для малых сетей, бюджетное решение</p>
              </div>
            </div>
            <div className="product_block">
              <p>
                Сервер Crypton Catch-up TV Lite - это высокопроизводительный програмно-аппаратный комплекс, предназначенный для организации услуг Live IPTV и отложенного просмотра телевизионных программ (Catch-up TV) в сетях мультисервисных операторов (MSO) и провайдеров интернет услуг (ISP).</p>
              <p>
                Данный сервер для интерактивного вещания нужен Вам, если у Вас уже есть головная станция линейного телевидения. В таком случае достаточно поставить сервер Crypton Catch-Up на выходе в качестве IP стримера. Всего одно устройство и Вы можете начать вещание интерактивного телевидения IPTV!
              </p>
              <p>
                Устройство используется совместно с устройствами захвата цифровых телевизионных программ, вещаемых со спутников, в наземных, кабельных, или интернет сетях.
              </p>
            </div>
            </>
          )}
          propertiesTable={() => (<>
            <div className="properties_section">
              <h4>Сетевой интерфейс №1</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Назначение</span></dt>
                  <dd><span>Организация Http Live/On-Demand вещания, управление устройством.</span></dd>

                  <dt><span>Физический интерфейс</span></dt>
                  <dd><span>10Gbit Ethernet</span></dd>

                  <dt><span>Коннектор</span></dt>
                  <dd><span>SFP+ slot (SFF-8431)</span></dd>

                  <dt><span>Протоколы</span></dt>
                  <dd><span>TCP/IP, Http, SNMP</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Сетевой интерфейс №2</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Назначение</span></dt>
                  <dd><span>Прием транспортных телевизионных потоков, управление устройством.</span></dd>

                  <dt><span>Физический интерфейс</span></dt>
                  <dd><span>1Gbit Ethernet</span></dd>

                  <dt><span>Коннектор</span></dt>
                  <dd><span>RJ45</span></dd>

                  <dt><span>Протоколы</span></dt>
                  <dd><span>UDP, TCP/IP, DVB-over-IP (ETSI TS 102034), Http, SNMP</span></dd>

                  <dt><span>Тип входных потоков</span></dt>
                  <dd><span>UDP multicast/unicast</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Основное</h4>
              <section className="properties_group">
                <dl className="flexbox">
                <dt><span>Емкость дискового массива</span></dt>
                <dd><span>HDD 4 TByte</span></dd>

                <dt><span>Тип вещания ТВ программ</span></dt>
                <dd><span>Live IPTV, Catch-up IPTV, Catch-up HLS</span></dd>

                <dt><span>Количество независимых IPTV потоков*</span></dt>
                <dd><span>2000(SD), 500(HD)</span></dd>

                <dt><span>Количество независимых VoD потоков*</span></dt>
                <dd><span>250(SD), 80(HD)</span></dd>

                <dt><span>Количество программ в архиве**</span></dt>
                <dd><span>128(SD), 40(HD)</span></dd>

                <dt><span>Глубина ТВ архива, часов***</span></dt>
                <dd><span>24</span></dd>

                <dt><span>Напряжение питания</span></dt>
                <dd><span>220В, 50Гц</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Управление</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Управляющее ПО</span></dt>
                  <dd><span>Web Interface</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Условия эксплуатации</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Номинальная температура</span></dt>
                  <dd><span>10-30 ºС</span></dd>

                  <dt><span>Относительная влажность, не более</span></dt>
                  <dd><span>80 %</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Габаритные размеры</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Высота</span></dt>
                  <dd><span>90 мм</span></dd>

                  <dt><span>Ширина</span></dt>
                  <dd><span>485 мм</span></dd>

                  <dt><span>Глубина</span></dt>
                  <dd><span>295 мм</span></dd>

                  <dt><span>Масса</span></dt>
                  <dd><span>6 кг</span></dd>
                </dl>
              </section>
            </div>

            <div className="properties_section">
              <h3>Примечания:</h3>
              <p>* Зависит от битовой скорости записываемых данных.</p>
              <p>** Зависит от битовой скорости записываемых данных.</p>
              <p>*** Может быть увеличено или уменьшено в зависимости от количества программ помещаемых в ТВ архив. Не рекомендуется использовать глубину менее 12 часов и заполнять SSD массив более чем на 70 %, т. к. это может привести к уменьшению срока службы носителей.</p>
            </div>

          </>)}
          />
        </>
      )}
  />
)

// <div className="properties_section">
//   <h3>Модель Catch-up TV Lite CRT3002CTS</h3>
//   <h4>Сетевой интерфейс №1</h4>
//   <section className="properties_group">
//     <dl className="flexbox">
//       <dt><span>Физический интерфейс</span></dt>
//       <dd><span>40Gbit Ethernet</span></dd>
//     </dl>
//   </section>
// </div>
// <div className="properties_section">
//   <h4>Сетевой интерфейс №2</h4>
//   <section className="properties_group">
//     <dl className="flexbox">
//       <dt><span>Емкость дискового массива</span></dt>
//       <dd><span>SSD</span></dd>
//
//       <dt><span>Количество независимых IPTV потоков*</span></dt>
//       <dd><span>5000(SD),1500(HD)</span></dd>
//
//       <dt><span>Количество независимых VoD потоков*</span></dt>
//       <dd><span>5000(SD),1500(HD)</span></dd>
//
//       <dt><span>Количество программ в архиве**</span></dt>
//       <dd><span>200(SD), 150(HD)</span></dd>
//
//       <dt><span>Глубина ТВ архива, часов***</span></dt>
//       <dd><span>зависит от комплектации</span></dd>
//     </dl>
//   </section>
// </div>
// <div className="properties_section">
//   <h4>Физические характеристики</h4>
//   <section className="properties_group">
//     <dl className="flexbox">
//       <dt><span>Глубина</span></dt>
//       <dd><span>730мм</span></dd>
//
//       <dt><span>Масса</span></dt>
//       <dd><span>16 кг.</span></dd>
//     </dl>
//   </section>
// </div>
