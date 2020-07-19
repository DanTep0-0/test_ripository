import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";

export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
            cod912ipe: file(relativePath: {eq: "cod912ipe.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 854, maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cod912ipe_asi_front: file(relativePath: {eq: "cod912ipe_asi_front.png"}) {
                childImageSharp {
                    fluid(maxWidth: 903, maxHeight: 172) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cod912ipe_asi_rear: file(relativePath: {eq: "cod912ipe_asi_rear.png"}) {
                childImageSharp {
                    fluid(maxWidth: 848, maxHeight: 144) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            scheme_cod912ipe_asi: file(relativePath: {eq: "scheme_cod912ipe_asi.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1123, maxHeight: 794) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
      `}
      render= {({ cod912ipe, cod912ipe_asi_front, cod912ipe_asi_rear, scheme_cod912ipe_asi }) => (
        <>

        <Helmet>
          <title>DVB скремблер COD912IPE-ASI | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="COD912IPE-ASI - это четырехканальный DVB скремблер системы условного доступа CAS Crypton, использующий DVB-over-IP технологию распределения транспортных потоков." />
        </Helmet>

        <ProductInfo
          categories={[{text: "Скремблеры", link: "scramblers"}]}
          name="Скремблер COD912IPE-ASI"
          photos={[cod912ipe.childImageSharp.fluid, cod912ipe_asi_front.childImageSharp.fluid, cod912ipe_asi_rear.childImageSharp.fluid, scheme_cod912ipe_asi.childImageSharp.fluid]}
          description={() => (
            <>
              <div className="product_block">
                <p>COD912IPE-ASI представляет собой скремблер системы условного доступа CAS Crypton. До четырех MPTS потоков инкапсулированных в IP пакеты могут быть приняты на MPE входе устройства.</p>
                <p>Выборочное DVB-CAS кодирование телевизионных программ и система адресных абонентских сообщений CAS Crypton позволяют
                управлять доступом в коммерческих телевизионных сетях. Каждый из потоков подается на DVB-ASI выход для сопряжения с модуляторами или другими устройствами головной станции.</p> <p>Управление устройством производится через Web интерфейс. SNMP интерфейс позволяет производить непрерывный контроль и логирование основных параметров работы устройства.</p>
              </div>
              <div className="product_block">
                <h4>Вид спереди</h4>
                <ol className="bigger_margin_ul">
                  <li>1Gbit Ethernet MPE TS транспортный порт</li>
                  <li>Сброс сетевых настроек</li>
                  <li>Светодиоды индикации TS lock и состояния CA системы</li>
                  <li>100Mbit Ethernet порт для работы CAS и управления устройством</li>
                </ol>
              </div>
              <div className="product_block">
                <p>* SNMP опция поддерживается по запросу</p>
              </div>
              <div className="product_block">
                <h4>Вид сзади</h4>
                <ol className="bigger_margin_ul">
                  <li>Задняя панель</li>
                  <li>Четыре DVB-ASI выхода</li>
                  <li>Разъем питания</li>
                  <li>Выключатель питания</li>
                </ol>
              </div>
              <div className="product_block">
                <h4>Краткое описание основных блоков</h4>
                <ul className="bigger_margin_ul">
                  <li><b>DVB-over-IP MPE</b> обеспечивает прием инкапсулированных в IP транспортных MPTS потоков</li>
                  <li><b>MPE Channel Filter</b> формирует канал приема из IP сети одного MPTS потока, ранее созданного сторонним мультиплексором.</li>
                  <li><b>Scrambler CAS Crypton</b> производит выборочное кодирование телевизионных программ в потоке и организует условный доступ к ним по протоколу CAS Crypton</li>
                  <li><b>DVB-ASI Out</b> выводит MPTS поток в формате удобном для подключения модуляторов или других совместимых устройств головной станции.</li>
                  <li><b>Control 100Mbit Ethernet</b> порт формирует физический канал связи для управления устройством через Web интерфейс и передачи абонентских сообщений системы условного доступа CAS Crypton.</li>
                  <li><b>SNMP 100Mbit Ethernet</b> обеспечивает физический интерфейс для SNMP агента и необходим для мониторинга работы основных функциональных модулей устройства</li>
                </ul>
              </div>
            </>
        )}
        propertiesTable={() => (
        <>
        <div className="properties_section">
          <h4>TS входы</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Количество 1Gbit Ethernet портов</span></dt>
              <dd><span>1</span></dd>
              <dt><span>Макс. количество MPTS потоков</span></dt>
              <dd><span>4</span></dd>
              <dt><span>Спецификация</span></dt>
              <dd><span>ETSI TS 102034, ETSI TS 13818-1</span></dd>
              <dt><span>Протокол IP вещания</span></dt>
              <dd><span>UDP</span></dd>
              <dt><span>Тип вещения</span></dt>
              <dd><span>Multicast, Unicast</span></dd>
            </dl>
          </section>
        </div>
        <div className="properties_section">
          <h4>DVB-ASI выходы</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Количество</span></dt>
              <dd><span>4</span></dd>
              <dt><span>Спецификация</span></dt>
              <dd><span>EN 50083-9</span></dd>
              <dt><span>Режим работы</span></dt>
              <dd><span>Пакетный</span></dd>
              <dt><span>Макс. скорость потока</span></dt>
              <dd><span>216 Мбит/с</span></dd>
            </dl>
          </section>
        </div>
        <div className="properties_section">
          <h4>Условный доступ</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Спецификации</span></dt>
              <dd><span>TSI ETR 289 (DVB-CAS)</span></dd>
              <dt><span>Система условного доступа</span></dt>
              <dd><span>CAS Crypton</span></dd>
              <dt><span>Макс. количество DVB-CAS скремблеров</span></dt>
              <dd><span>4</span></dd>
              <dt><span>Макс. количество SCG/скремблер</span></dt>
              <dd><span>16 (64 на устройсво)</span></dd>
              <dt><span>Макс. количество PID/скремблер</span></dt>
              <dd><span>256</span></dd>
            </dl>
          </section>
        </div>
        <div className="properties_section">
          <h4>Управление</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Управление устройством</span></dt>
              <dd><span>100Мбит/с Ethernet</span></dd>
              <dt><span>Спецификация</span></dt>
              <dd><span>Http (Web интерфейс)</span></dd>
              <dt><span>SNMP</span></dt>
              <dd><span>v1, v2</span></dd>
            </dl>
          </section>
        </div>
        <div className="properties_section">
          <h4>Габаритные размеры</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Ширина, мм</span></dt>
              <dd><span>490</span></dd>
              <dt><span>Высота, мм</span></dt>
              <dd><span>44</span></dd>
              <dt><span>Глубина, мм</span></dt>
              <dd><span>300</span></dd>
              <dt><span>Вес, кг</span></dt>
              <dd><span>2,7</span></dd>
            </dl>
          </section>
        </div>
        </>
        )}
      />
    </>
  )}
/>)
