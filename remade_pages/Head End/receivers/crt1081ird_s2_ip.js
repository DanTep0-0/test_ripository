//p_receivers + ip_streamers
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
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
                crt1081ird_s2_ip_bl: file(relativePath: {eq: "crt1081ird_s2_ip_bl.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 757, maxHeight: 251) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ crt1081ird_s2_ip, crt1081ird_s2_ip_bl }) => (
        <>

        <Helmet>
          <title>8-канальный S2 Ресивер CRT1081IRD-S2-IP | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="CRT1081IRD-S2-IP может использоватся как IP стример с DVB-over-IP. Он обеспечивает сопряжение с DVB мультиплексорами, модуляторами и т.д." />
        </Helmet>

        <ProductInfo
          categories={[{text: "Ресиверы", link: "p_receivers"}, {text: "IP стримеры", link: "ip_streamers"}]}
          name="8-канальный DVB-S/S2 ресивер - IP стример CRT1081IRD-S2-IP"
          photos={[crt1081ird_s2_ip.childImageSharp.fluid, crt1081ird_s2_ip_bl.childImageSharp.fluid]}
          description={() => (
            <>
              <div className="product_block">
                <p>
                  CRT1081IRD-S2-IP представляет собой компактный 8-канальный профессиональный ресивер-декодер.</p>
              </div>
              <div className="product_block">
                <h4>Возможности</h4>
                <ul>
                  <li>8 независимых DVB-S/S2 тюнеров с Common Interface</li>
                  <li>8 PCMCIA DVB-CI слотов с поддержкой мультипрограммного декодирования</li>
                  <li>8 ASI выходов</li>
                  <li>1Gbit IP стример (64 SPTS или 8 MPTS)</li>
                  <li>Поддержка SD, HD, UHD (4k)</li>
                  <li>Управление через WEB интерфейс</li>
                </ul>
              </div>
              <div className="product_block">
                <p>В состав профессионального ресивера CRT1081IRD-S2-IP входит восемь независимых полнофункциональных DVB-S/S2 ресиверов с Common Interface, с поддержкой MSD (мультипрограммное дескремблирование) и совместимы с большинством CAS. Все сигналы обрабатываются процессором и подаются на два выходных интерфейса – ASI и IP.</p>
                <p>ASI интерфейс позволяет обеспечить сопряжение с внешними DVB мультиплексорами, модуляторами и другими устройствами формирования потоков для цифрового телевидения. Каждый ASI выход соответствует одному DVB-S/S2 входу.</p>
                <p>Гигабитный IP стример обеспечивает трансляцию сервисов в соответствии с протоколом  DVB-over-IP. Возможна организация вещания до 64 (SPTS) каналов, либо транспорт каждого из принятых DVB-S2 приемником транспондеров посредством передачи MPTS (Unicast или Multicast). В качестве физической среды передачи IP потоков используется 1Gbit Ethertnet adapter.</p>
                <p>Мощные возможности устройства CRT1081IRD-S2-IP  позволяют организовывать трансляцию SD, HD и UHD (4k) каналов.</p>
                <p>Управление системой происходит через простой и интуитивно понятный WEB интерфейс.</p>
                <p>Устройство выполнено в 1U корпусе для монтирования в стандартные 19” телекоммуникационные стойки. Такое компактное высоко интегрированное и легко масштабируемое решение позволит вам строить центральные станции ваших сетей с исключительно высокой эффективностью. </p>
                <p>Также есть облегченная 4-х канальная версия данной модели - CRT1041IRD-S2-IP. Функционал её полностью аналогичен, кроме количества DVB-S/S2 ресиверов и соответствующих им ASI и IP выходов.</p>
              </div>
            </>
        )}
        propertiesTable={() => (
          <>
          <div className="properties_section">
            <h4>DVB-S/S2 ресивер</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Количевство каналов</span></dt>
                <dd><span>8</span></dd>
                <dt><span>Диапазон принимаемых частот</span></dt>
                <dd><span>950-2150 МГц</span></dd>
                <dt><span>Уровень входного сигнала</span></dt>
                <dd><span>-65…-25 дБм</span></dd>
                <dt><span>Номинальный входной импеданс</span></dt>
                <dd><span>75 Ом</span></dd>
                <dt><span>Тип разъема</span></dt>
                <dd><span>IEC, F-type</span></dd>
                <dt><span>Модуляция</span></dt>
                <dd><span>QPSK, 8PSK, 16APSK</span></dd>
                <dt><span>Символьная скорость SR</span></dt>
                <dd><span>1-45Msps(QPSK,8PSK), 1-36Msps(16APSK)</span></dd>
                <dt><span>FEC</span></dt>
                <dd><span>авто 1/2, 3/5, 2/3, 3/4, 4/5, 5/6, 6/7, 7/8, 8/9, 9/10</span></dd>
                <dt><span>Питание LNB</span></dt>
                <dd><span>13/18 В, 400 мА макс.</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>Common interface</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Количевство каналов</span></dt>
                <dd><span>8</span></dd>
                <dt><span>Спецификация</span></dt>
                <dd><span>	EN50221, ETSI TS 101699</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>DVB-ASI выходы</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Количество выходов</span></dt>
                <dd><span>8</span></dd>
                <dt><span>Спецификация</span></dt>
                <dd><span>EN 50083-9</span></dd>
                <dt><span>Импеданс выхода</span></dt>
                <dd><span>75 Ом</span></dd>
                <dt><span>Тип разъема</span></dt>
                <dd><span>IEC 169-8, BNC-type</span></dd>
                <dt><span>Режим работы</span></dt>
                <dd><span>Packet, 188 byte</span></dd>
                <dt><span>Максимальная скорость выходного потока</span></dt>
                <dd><span>213 Мбит/с</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>DVB- over- IP</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Спецификация</span></dt>
                <dd><span>ETSI TS 102034</span></dd>
                <dt><span>Протоколы передачи в IP сети</span></dt>
                <dd><span>RTP, UDP</span></dd>
                <dt><span>Макс. количество multicast потоков</span></dt>
                <dd><span>64 SPTS или 8 MPTS</span></dd>
                <dt><span>Макс. количество unicast соединений</span></dt>
                <dd><span>8 MPTS</span></dd>
                <dt><span>Сетевой интерфейс</span></dt>
                <dd><span>RJ45 1Gbit Ethernet</span></dd>
              </dl>
            </section>
          </div>

          </>
        )}
          />
        </>
   )}
   />
 )
