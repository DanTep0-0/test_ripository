import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";

export default () => (
  <StaticQuery
  query = {
      graphql`
        query   {
              crt1041ird_t2_ip_front: file(relativePath: {eq: "crt1041ird_t2_ip_front.png"}) {
                  childImageSharp {
                      fluid(maxWidth: 4160, maxHeight: 1600) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              crt1041ird_t2_ip_back: file(relativePath: {eq: "crt1041ird_t2_ip_back.png"}) {
                  childImageSharp {
                      fluid(maxWidth: 4160, maxHeight: 1600) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              scheme_crt1041ird_t2_ip: file(relativePath: {eq: "scheme_crt1041ird_t2_ip.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 791, maxHeight: 260) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
    `}
    render= {({ crt1041ird_t2_ip_front, crt1041ird_t2_ip_back, scheme_crt1041ird_t2_ip }) => (
      <>

      <Helmet>
        <title>4-канальный DVB-C/T/T2 ресивер - IP стример CRT1041IRD-T2-IP | Оборудование для головной станции ТВ | Crypton.com.ua</title>
        <meta name="description" content="CRT1041IRD-T2-IP обеспечивает сопряжение с DVB мультиплексорами, IP стримерами и т.д., поддерживает DVB-over-IP. Применяется в SMATV, CATV, MMDS, MVDS головных станциях" />
      </Helmet>

      <ProductInfo
        categories={[{text: "Ресиверы", link: "p_receivers"}]}
        name="4-канальный DVB-C/T/T2 ресивер - IP стример CRT1041IRD-T2-IP"
        photos={[crt1041ird_t2_ip_front.childImageSharp.fluid, crt1041ird_t2_ip_back.childImageSharp.fluid, scheme_crt1041ird_t2_ip.childImageSharp.fluid]}
        description={() => (
          <>
            <div className="product_block">
              <p>
                CRT1041IRD-T2-IP представляет собой компактный 4-канальный профессиональный мультистандартный DVB-С/T/T2 ресивер-декодер c IP стримером.</p>
            </div>
            <div className="product_block">
              <h4>Возможности</h4>
              <ul>
                <li>4 независимых DVB-C/T/T2 FTA тюнера</li>
                <li>4 PCMCIA DVB-CI слота с поддержкой мультипрограммного декодирования (опционально, под заказ)</li>
                <li>4 ASI выхода</li>
                <li>1Gbit IP стример (32 SPTS или 4 MPTS)</li>
                <li>Поддержка SD, HD, UHD (4k)</li>
                <li>Управление через WEB интерфейс</li>
              </ul>
            </div>
            <div className="product_block">
              <p>
                Он состоит из 4-х полнофункциональных DVB-C/T/T2 ресиверов для приема телевизионных каналов. Возможна установка 4-х PCMCIA DVB-CI слота с поддержкой мультипрограммного декодирования (опционально, под заказ).
              </p>
              <p>
                Настройка работы каждого из ресиверов осуществляется через простой и интуитивно понятный WEB интерфейс.
              </p>
              <p>
                В устройстве предусмотрено использование двух выходных интерфейсов передачи данных.
              </p>
              <p>
                Первый интерфейс – ASI. Позволяет обеспечить сопряжение с внешними DVB мультиплексорами, модуляторами и другими устройствами формирования потоков цифрового телевидения. Каждый выход соответствует одному из   DVB-C/T/T2 входу.
              </p>
              <p>
                Второй интерфейс - IP стример. Позволяет организовать инкапсуляцию DVB сервисов в соответствии с DVB-over-IP протоколом. Возможна организация Multicast (SPTS) вещания до 32 цифровых телевизионных программ, либо транспорт каждого из принятых DVB-Т2 приемником транспондеров посредством Unicast передачи.
              </p>
              <p>
                IP стример позволяет быстро и просто запустить вещание 32-х эфирных Т2 каналов в вашей IPTV (OTT) сети.
              </p>
              <p>
                В качестве физической среды передачи IP потоков используется сетевой адаптер 1Gbit Ethertnet.
              </p>
              <p>
                Устройство выполнено в 1U корпусе для монтирования в стандартные 19” телекоммуникационные стойки. Такое компактное высоко интегрированное и легко масштабируемое решение позволит вам строить центральные станции ваших сетей с исключительно высокой эффективностью.</p>
              <p>
                Область применения: SMATV, CATV, MMDS, MVDS головные станции.
              </p>
            </div>
          </>
      )}
      propertiesTable={() => (<>

        <div className="properties_section">
          <h4>DVB-C/T/T2 ресивер</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Количевство каналов</span></dt>
              <dd><span>4</span></dd>
              <dt><span>Диапазон принимаемых частот</span></dt>
              <dd><span>48 - 850 МГц</span></dd>
              <dt><span>Уровень входного сигнала</span></dt>
              <dd><span>65 ~ -25 дБм</span></dd>
              <dt><span>Номинальный импеданс входа</span></dt>
              <dd><span>75 Ом</span></dd>
              <dt><span>Тип разъема</span></dt>
              <dd><span>IEC 169-2</span></dd>
            </dl>
          </section>
        </div>
        <div className="properties_section">
          <h4>DVB-ASI выход</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Количество выходов</span></dt>
              <dd><span>4</span></dd>
              <dt><span>Спецификация</span></dt>
              <dd><span>EN 50083-9</span></dd>
              <dt><span>Номинальный импеданс выхода</span></dt>
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
          <h4>DVB-over-IP</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Спецификация</span></dt>
              <dd><span>ETSI TS 102034</span></dd>
              <dt><span>Протоколы передачи в IP сети</span></dt>
              <dd><span>RTP, UDP</span></dd>
              <dt><span>Количество Multicast потоков</span></dt>
              <dd><span>32 (SPTS) или 4(MPTS)</span></dd>
              <dt><span>Количество Unicast соединений</span></dt>
              <dd><span>4 (MPTS)</span></dd>
              <dt><span>Сетевой интерфейс</span></dt>
              <dd><span>RJ45, 1Gbit Ethernet</span></dd>
            </dl>
          </section>
        </div>
        <div className="properties_section">
          <h4>Управление</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Управление</span></dt>
              <dd><span>WEB интерфейс</span></dd>
              <dt><span>Язык</span></dt>
              <dd><span>Русский / Английский</span></dd>
              <dt><span>Интерфейс</span></dt>
              <dd><span>RJ45, 10/100M Ethernet</span></dd>
            </dl>
          </section>
        </div>

      </>)}
      />
    </>
  )}
/>)

 //короткое описание
 // CRT1081IRD-T2-IP представляет собой компактный 4-канальный профессиональный  мультистандартный  DVB-С/T/T2 ресивер. В устройстве предусмотрено использование двух интерфейсов передачи принятых данных. Первый, стандартный для области DVB-ASI интерфейс, позволяет обеспечить сопряжение с DVB мультиплексорами, IP стримерами и другими устройствами формирования потоков цифрового телевидения. Второй позволяет организовать инкапсуляцию  DVB сервисов в соответствии с DVB-over-IP протоколом. Возможна организация Multicast вещания до 32 цифровых телевизионных программ либо транспорт каждого из принятых приемником транспондеров посредством Unicast или Multicast передачи. В качестве физической среды передачи IP потоков используется сетевой адаптер 1Gbit Ethertnet. Устройство выполнено в 1U корпусе для монтирования в стандартные 19” телекоммуникационные стойки.
 // Такое компактное высоко-интегрированное решение позволит вам строить центральные станции ваших сетей с исключительно высокой эффективностью. WEB интерфейс управления позволяет управлять системой где бы вы не были в данный момент.
 // Область применения: SMATV, CATV, MMDS, MVDS головные станции.
