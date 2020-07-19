//modulators + scramblers
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";


export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
                crt1041m_c_ip: file(relativePath: {eq: "crt1041m-c-ip.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                crt1041_block_sch: file(relativePath: {eq: "crt1041-block-sch.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 604) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ crt1041m_c_ip, crt1041_block_sch }) => (
        <>

        <Helmet>
          <title>DVB-C модулятор со скремблером CRT1041M-C-IP | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="CRT1041M-C-IP - это Edge QAM Модулятор + встроенный скремблер системы условного доступа CAS Crypton. Выборочное DVB-CAS кодирование телевизионных программ и система адресных абонентских сообщений позволяют управлять доступом в коммерческих телевизионных сетях." />
        </Helmet>

        <ProductInfo
          categories={[{text: "Модуляторы", link: "qam_modulators"}, {text: "Скремблеры", link: "scramblers"}]}
          name="DVB-C модулятор со скремблером CRT1041M-C-IP"
          photos={[crt1041m_c_ip.childImageSharp.fluid, crt1041_block_sch.childImageSharp.fluid]}
          description={() => (
            <>
              <div className="product_block">
                <p>CRT1041M-C-IP представляет собой Edge QAM Модулятор со встроенным скремблером системы условного доступа CAS Crypton. До четырех MPTS потоков, инкапсулированных в IP пакеты, могут быть приняты на IP входе устройства. Выборочное DVB-CAS кодирование телевизионных программ и система адресных абонентских сообщений CAS Crypton позволяют управлять доступом в коммерческих телевизионных сетях. </p>
                <p>Каждый из потоков преобразуется в DVB-C модулированный сигнал и может быть перенесен в произвольную область ВЧ диапазона(48-850МГц). Управление устройством производится через Web интерфейс. SNMP интерфейс позволяет производить непрерывный контроль и логирование основных параметров работы устройства.</p>
              </div>
              <div className="product_block">
                <h4>Краткое описание основных блоков</h4>
                <ul className="bigger_margin_ul">
                  <li>DVB-over-IP MPE обеспечивает прием инкапсулированных в IP транспортных MPTS потоков.</li>
                  <li>MPE Channel Filter формирует канал приема из IP сети одного MPTS потока, ранее созданного сторонним мультиплексором</li>
                  <li>crambler CAS Crypton производит выборочное кодирование телевизионных программ в потоке и организует условный доступ к ним по протоколу CAS Crypton</li>
                  <li>DVB-C Modulator	преобразует входной MPTS поток в DVB-C модулированный сигнал</li>
                  <li>RF Up Convertor	производит перенос пары смещенных на 8МГц одна относительно другой несущих DVB-C модулированного сигнала в произвольную область ВЧ диапазона(48-850МГц)</li>
                  <li>Control 100Mbit Ethernet	порт формирует физический канал связи для управления устройством через Web интерфейс и передачи абонентских сообщений системы условного доступа CAS Crypton</li>
                  <li>SNMP 100Mbit Ethernet	обеспечивает физический интерфейс для SNMP агента и необходим для мониторинга работы основных функциональных модулей устройства</li>
                </ul>
              </div>
            </>
        )}
        propertiesTable={() => (<>

          <div className="properties_section">
            <h4>TS Входы</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Количество 1Gbit Ethernet портов</span></dt>
                <dd><span>1</span></dd>
                <dt><span>Макс. количество MPTS</span></dt>
                <dd><span>4</span></dd>
                <dt><span>Спецификации</span></dt>
                <dd><span>ETSI TS 102034, ETSI TS 13818-1</span></dd>
                <dt><span>Протокол IP вещания</span></dt>
                <dd><span>UDP</span></dd>
                <dt><span>Тип вещания</span></dt>
                <dd><span>Multicast, Unicast</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>Скремблеры</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Спецификации</span></dt>
                <dd><span>TSI ETR 289</span></dd>
                <dt><span>Макс. Количество DVB-CAS скремблеров</span></dt>
                <dd><span>4</span></dd>
                <dt><span>Макс. Количество SCG на скремблер</span></dt>
                <dd><span>16</span></dd>
                <dt><span>Макс. Количество PID на скремблер</span></dt>
                <dd><span>256</span></dd>
                <dt><span>Система условного доступа</span></dt>
                <dd><span>CAS Crypton</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>DVB-C Модулятор</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Количество ВЧ выходов</span></dt>
                <dd><span>2</span></dd>
                <dt><span>Количество QAM модулированных каналов</span></dt>
                <dd><span>4 (Каждый ВЧ выход до 2 смежных QAM модулированных каналов)</span></dd>
                <dt><span>Сдвиг несущей смежного канала</span></dt>
                <dd><span>8 MHz</span></dd>
                <dt><span>Спецификация</span></dt>
                <dd><span>EN 300 429</span></dd>
                <dt><span>SR, Msps</span></dt>
                <dd><span>6.750, 6.875, 7.000</span></dd>
                <dt><span>Тип модуляции</span></dt>
                <dd><span>QAM16, QAM32, QAM64, QAM128, QAM256</span></dd>
                <dt><span>MER, QAM256</span></dt>
                <dd><span>40 dB</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>ВЧ преобразователь</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Рабочая полоса</span></dt>
                <dd><span>48 – 850MHz</span></dd>
                <dt><span>Мин. Размах ВЧ сигнала</span></dt>
                <dd><span>110 dBuV</span></dd>
                <dt><span>Импеданс выхода</span></dt>
                <dd><span>75 Ohm</span></dd>
                <dt><span>Тип разъема</span></dt>
                <dd><span>IEC F-type</span></dd>
                <dt><span>Излучения и гармоники</span></dt>
                <dd><span>-50 dBc</span></dd>
                <dt><span>Выходной аттенюатор</span></dt>
                <dd><span>0 – 31 dB, шаг 1dB</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>Управление</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Управление устройством</span></dt>
                <dd><span>100Мбит/с Ethernet, TCP/IP</span></dd>
                <dt><span>Спецификация</span></dt>
                <dd><span>Web интерфейс</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>Габаритные размеры</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Ширина, мм</span></dt>
                <dd><span>490</span></dd>
                <dt><span>Глубина, мм</span></dt>
                <dd><span>300</span></dd>
                <dt><span>Высота, мм</span></dt>
                <dd><span>44</span></dd>
              </dl>
            </section>
          </div>

      </>)}
      />
    </>
  )}
/>)
