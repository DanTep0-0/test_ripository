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
          <title>Сервер для IPTV вещания Crypton Catch-up TV | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="Сервер Crypton Catch-up TV предназначен для организации услуг Live IPTV и отложенного просмотра телевизионных программ в сетях мультисервисных операторов(MSO) и провайдеров интернет услуг(ISP)." />
        </Helmet>

        <ProductInfo
          categories={[{text: "IPTV серверы", link: "iptv_servers"}]}
          name="Сервер для IPTV вещания Crypton Catch-up TV"
          photos={[hp_proliant.childImageSharp.fluid]}
          description={() => (
            <>
            <div className="product_aboutBlock">
              <div className="title flexbox">
                <FontAwesomeIcon className="fa_icon" icon={faInfoCircle}/>
                <p>Модель для средних и распределенных сетей</p>
              </div>
            </div>
            <div className="product_block">
              <p>
                Сервер Crypton Catch-up TV - это высокопроизводительный програмно-аппаратный комплекс. Он предназначен для организации услуг Live IPTV и отложенного просмотра телевизионных программ (Catch-up TV) в сетях мультисервисных операторов (MSO) и провайдеров интернет услуг(ISP).</p>
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
                <dd><span>SSD 2 TByte</span></dd>

                <dt><span>Тип вещания ТВ программ</span></dt>
                <dd><span>Live IPTV, Catch-up IPTV, Catch-up HLS</span></dd>

                <dt><span>Количество независимых IPTV потоков*</span></dt>
                <dd><span>2000(SD), 600(HD)</span></dd>

                <dt><span>Количество независимых VoD потоков*</span></dt>
                <dd><span>2000(SD), 600(HD)</span></dd>

                <dt><span>Количество программ в архиве**</span></dt>
                <dd><span>50(SD), 15(HD)</span></dd>

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

          // <h1 class="title">Сервер для IPTV вещания</h1>
          // <img src="/sites/all/files/img/hp_proliant.jpg " class="img-b" />
          // <h2>Описание</h2>
          // Сервер Crypton Catch-up TV представляет собой высокопроизводительный програмно-аппаратный
          // комплекс. Он предназначен для организации услуг Live IPTV и отложенного просмотра телевизионных
          // программ(Catch-up TV) в сетях мультисервисных операторов(MSO) и провайдеров интернет услуг(ISP).
          // Устройство используется совместно с устройствами захвата цифровых телевизионных программ,
          // вещаемых со спутников, в наземных, кабельных, или интернет сетях.
          // <div align="center"><h2>Технические характеристики:</h2>
          // <table class="pure-table pure-table-bordered">
          // <tr><th>Модель устройства</th><th>Сервер Crypton Catch-up TV CRT3001CTS</th><th>Сервер Crypton Catch-up TV Lite CRT3002CTS</th><th>На базе HP Proliant</th> </tr>
          //
          // <tr><th colspan="4">Сетевой интерфейс №1</th></tr>
          // <tr><td>Назначение</td><td colspan="3">Организация Http Live/On-Demand вещания, управление устройством.</td></tr>
          // <tr><td>Физический интерфейс</td><td colspan="2">10Gbit Ethernet</td><td>40Gbit Ethernet</td></tr>
          // <tr><td>Коннектор</td><td colspan="3">SFP+ slot (SFF-8431)</td></tr>
          // <tr><td>Протоколы</td><td colspan="3">TCP/IP, Http, SNMP</td></tr>
          // <tr><th colspan="4">Сетевой интерфейс №2</th></tr>
          // <tr><td>Назначение</td><td colspan="3">Прием транспортных телевизионных потоков, управление устройством.</td></tr>
          // <tr><td>Физический интерфейс</td><td colspan="3">1Gbit Ethernet</td></tr>
          // <tr><td>Коннектор</td><td colspan="3">RJ45</td></tr>
          // <tr><td>Протоколы</td><td colspan="3">UDP, TCP/IP, DVB-over-IP (ETSI TS 102034), Http, SNMP</td></tr>
          // <tr><td>Тип входных потоков</td><td colspan="3">UDP multicast/unicast</td></tr>
          // <tr><th colspan="4"> </th></tr><tr>
          // </tr><tr><td>Емкость дискового массива</td><td>SSD 2 TByte</td><td>HDD 4 TByte</td><td>SSD</td></tr>
          // <tr><td>Тип вещания ТВ программ</td><td colspan="3">Live IPTV, Catch-up IPTV, Catch-up HLS</td></tr>
          // <tr><td>Количество независимых IPTV потоков**</td><td> 2000(SD), 600(HD)</td><td>2000(SD), 500(HD)</td><td>5000(SD),1500(HD)</td></tr>
          // <tr><td>Количество независимых VoD потоков**</td><td> 2000(SD), 600(HD)</td><td>250(SD), 80(HD)</td><td>5000(SD),1500(HD)</td></tr>
          // <tr><td>Количество программ в архиве****</td><td>50(SD), 15(HD)</td><td>128(SD), 40(HD)</td><td>200(SD), 150(HD)</td></tr>
          // <tr><td>Глубина ТВ архива, часов******</td><td colspan="2">24</td><td>зависит от комплектации</td></tr>
          // <tr><td><b>Управляющее ПО</b></td><td colspan="3">Web Interface</td></tr>
          // <tr><td><b>Напряжение питания</b></td><td colspan="3">220В, 50Гц</td></tr>
          //
          // <tr><th colspan="4">Условия эксплуатации</th></tr>
          // <tr><td>Номинальная температура</td><td colspan="3">10-30 ºС</td></tr>
          // <tr><td>Относительная влажность не более</td><td colspan="3">80 %</td></tr>
          //
          //
          // <tr><th colspan="4">Физические характеристики</th></tr>
          // <tr><td>Высота</td><td colspan="3">90 мм</td></tr>
          // <tr><td>Ширина</td><td colspan="3">485 мм</td></tr>
          // <tr><td>Глубина</td><td colspan="2">295 мм</td><td>730мм</td></tr>
          // <tr><td>Масса</td><td colspan="2">6 кг.</td><td>16 кг.</td></tr>
          // </table></div>
          // * Зависит от битовой скорости записываемых данных.<br />
          // ** Зависит от битовой скорости записываемых данных.<br />
          // *** Может быть увеличено или уменьшено в зависимости от количества программ помещаемых
          // в ТВ архив. Не рекомендуется использовать глубину менее 12 часов и заполнять SSD массив
          // более чем на 70 %, т. к. это может привести к уменьшению срока службы носителей.<br />
          //
          //
          //
          //
          //
          //
          //
          //
          // <a href="/sites/all/files/pdf/Catch_Up_Server_Datasheet_ru.pdf" target="_blank" class="map"><img src="/sites/all/files/img/adobe_reader_logo.jpg" width="35" height="35" border="0" alt="Сервер Crypton Catch-up TV CRT3001CTS техническое описание в формате PDF" align="absmiddle" /> Сервер Crypton Catch-up TV CRT3001CTS техническое описание в формате PDF</a>
          // <br />
          // <a href="/sites/all/files/pdf/Catch_Up_Server_Lite_Datasheet_ru.pdf" target="_blank" class="map"><img src="/sites/all/files/img/adobe_reader_logo.jpg" width="35" height="35" border="0" alt="Сервер Crypton Catch-up TV Lite CRT3002CTS техническое описание в формате PDF" align="absmiddle" /> Сервер Crypton Catch-up TV Lite CRT3002CTS техническое описание в формате PDF</a>

//
// //короткое описание:
//
// <img src="/sites/all/files/img/hp_proliant.jpg " class="img-s" />
// <div align="center"><h3>Особенность технических характеристик:</h3>
// <table class="pure-table pure-table-bordered">
// <tr><td>Емкость SSD массива</td><td>2 TByte</td></tr>
// <tr><td>Количество независимых потоков*</td><td> 2000(SD), 600(HD)</td></tr>
// <tr><td>Количество программ в архиве****</td><td>50(SD), 15(HD)</td></tr>
// <tr><td>Глубина ТВ архива, часов******</td><td>24</td></tr>
// </table></div>
