//p_receivers + multiplexers + ip_streamers
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";

export default () => (
    <StaticQuery
    query = {
        graphql`
          query {
                first: file(relativePath: {eq: "crt1081ird_s2_ip.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 4158, maxHeight: 1600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                scheme: allImageSharp(filter: {fluid: {originalName: {eq: "crt1081ird_s2_ip_bl.jpg"}}}) {
                    nodes {
                        fluid(maxWidth: 757, maxHeight: 251) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ first, scheme }) => (
        <>

        <Helmet>
          <title>IP стримеры - профессиональные DVB-S2 многоканальные ресиверы с ремультиплексором | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="Могут использоватся как IP стримеры с DVB-over-IP. Модель MX имеет встроенный DVB ремультиплексор." />
        </Helmet>

        <ProductInfo
          categories={[{text: "Ресиверы", link: "p_receivers"}, {text: "Мультиплексоры", link: "multiplexers"}, {text: "IP Стримеры", link: "ip_streamers"}]}
          name="IP стримеры - профессиональные DVB-S2 многоканальные ресиверы с ремультиплексором"
          photos={[first.childImageSharp.fluid, scheme.nodes[0].fluid]}
          description={() => (
            <>
            <div className="product_block">
              <p>Профессиональные 8-канальные DVB-S2 ресиверы представлены двумя изделиями, выполненными на одной платформе: CRT1081IRD-S2-IP и CRT1081IRD-S2-MX. Второе изделие отличается тем, что имеет встроенный 4-х канальный DVB ремультиплексор. CRT1081IRD-S2-IP представляет собой компактный 8-канальный профессиональный ресивер декодер. Он состоит из 8-и полнофункциональных DVB-S2 ресиверов с Common Interface, для декодирования сервисов.</p>
              <p>В устройстве предусмотрено использование двух интерфейсов передачи принятых данных. Первый, стандартный для области DVB-ASI интерфейс позволяет обеспечить сопряжение с DVB мультиплексорами, IPTV стримерами и другими устройствами формирования потоков цифрового телевидения. Второй позволяет организовать инкапсуляцию DVB сервисов в соответствии с DVB-over-IP протоколом. Возможна организация Multicast вещания до 64 цифровых телевизионных программ либо транспорт каждого из принятых DVB-S2 приемником транспондеров посредством Unicast передачи. В качестве физической среды IP стримера используется сетевой адаптер 1Gbit Ethertnet.</p>
              <p>Устройство выполнено в 1U корпусе для монтирования в стандартные 19” телекоммуникационные стойки. Такое компактное высоко-интегрированное решение позволит вам строить центральные станции ваших сетей с исключительно высокой эффективностью. WEB интерфейс управления позволяет управлять системой где бы вы не были в данный момент.</p>
              <p>Область применения: SMATV, CATV, MMDS, MVDS головные станции.</p>
            </div>
            <div className="product_block">
              <h4>Отличия двух изделий</h4>
              <p><b>CRT1081IRD-S2-MX</b> имеет встроенный 4-х канальный DVB ремультиплексор. Кроме IP, имеет 4 ASI входа и 4 ASI выхода. Позволяет создать 4 новых выходных потока из 12 входных. Имеется DVB EPG и NIT процессор. Не может выдавать на выход SPTS потоки. Востребован кабельными и эфирными операторами, когда вновь сформированные мультиплексы подаются на модуляторы для широковещательных передач.</p>
              <p><b>CRT1081IRD-S2-IP</b> не имеет ремультиплексора. Имеет 8 ASI выходов (каждый тюнер может работать на свой выход). Больше возможностей IP стриминга: 8 MPTS потоков или 64 SPTS потока. Востребован как IP стример а также кабельными и эфирными операторами в том случае, когда передачи транспондеров передаются без изменений.</p>
            </div>
            <div className="product_block">
              <h4>Возможности</h4>
              <ul className="bigger_margin_ul">
                <li>8 DVB-S2 Ресиверов. Полнофункциональные DVB-S2 ресиверы для приема цифровых телевизионных программ.</li>
                <li>8 CI Слотов. DVB-CI совместимый интерфейс доступа к CAM модулям для декодирования скремблированных сервисов.</li>
                <li>DVB-ASI выходы. EN 50083-9 совместимые выходы для обеспечения ASI сопряжения с другими устройствами.</li>
                <li>1Gbps IP стример. Для организации передачи IPTV используется адаптер 1Gbit Ethernet сети.</li>
                <li>TCP/IP соединение. TCP/IP интерфейс используется для доступа к устройствам через 100Мбит Ethernet адаптер.</li>
                <li>Web интерфейс. Конфигурации встроенных приложений производится посредством Web интерфейса.</li>
                <li>AC 220V источник питания. 220В источник питания используется для обеспечения нормальной работы устройства.</li>
                <li>Компактные размеры. Благодаря своим компактным размерам (19”, 1U) устройство может быть легко интегрировано в состав DVB, IPTV или иных головных станций.</li>
                <li>Применение. SMATV, CATV, MMDS, MVDS, IPTV головные станции.</li>
              </ul>
            </div>
          </>
        )}
        propertiesTable={() => (
          <>
          <div className="properties_section">
            <h4>DVB-S2 ресивер</h4>
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
                <dt><span>Спецификация</span></dt>
                <dd><span>EN 50083-9</span></dd>
                <dt><span>Тип разъема</span></dt>
                <dd><span>IEC 169-8, BNC-type</span></dd>
                <dt><span>Рабочие режимы</span></dt>
                <dd><span>Байтовый/пакетный, 188 байт</span></dd>
                <dt><span>Макс. выходная скорость</span></dt>
                <dd><span>213 Мбит/с (пакетный), 72 Мбит/с (байтовый)</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>Управление</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Управляющее ПО</span></dt>
                <dd><span>Web интерфейс	</span></dd>
                <dt><span>Управление устройством</span></dt>
                <dd><span>100Мбит/с Ethernet, TCP/IP</span></dd>
              </dl>
            </section>
          </div>

          <h2>Отличия</h2>
          <h3>CRT1081IRD-S2-IP</h3>

          <div className="properties_section">
            <h4>DVB-ASI входы, DVB мультиплексоры</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>-</span></dt>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>DVB-ASI выходы</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Количество выходных потоков ASI</span></dt>
                <dd><span>8</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>IP стример</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Спецификация</span></dt>
                <dd><span>ETSI TS102034</span></dd>
                <dt><span>Протокол вещания</span></dt>
                <dd><span>RTP, UDP</span></dd>
                <dt><span>Тип IP вещания</span></dt>
                <dd><span>Multicast/Unicast</span></dd>
                <dt><span>Количество multicast потоков IP</span></dt>
                <dd><span>64 (SPTS) или 8 (MPTS)</span></dd>
                <dt><span>Количество unicast соединений IP</span></dt>
                <dd><span>8 (MPTS)</span></dd>
                <dt><span>Физический интерфейс</span></dt>
                <dd><span>1 Гбит/с Ethernet</span></dd>
              </dl>
            </section>
          </div>

          <h3>CRT1081IRD-S2-MX</h3>

          <div className="properties_section">
            <h4>DVB-ASI входы</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Количество каналов</span></dt>
                <dd><span>4</span></dd>
                <dt><span>Спецификация</span></dt>
                <dd><span>EN 50083-9</span></dd>
                <dt><span>Тип разъема</span></dt>
                <dd><span>IEC 169-8, BNC-type</span></dd>
                <dt><span>Рабочие режимы</span></dt>
                <dd><span>авто</span></dd>
                <dt><span>Макс. скорость входного потока</span></dt>
                <dd><span>213 Мбит/с (пакетный), 72 Мбит/с (байтовый)</span></dd>
              </dl>
            </section>
          </div>

          <div className="properties_section">
            <h4>DVB мультиплексоры</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Количество входов</span></dt>
                <dd><span>12 (8 с ресиверов + 4 с ASI)</span></dd>
                <dt><span>Количество выходов</span></dt>
                <dd><span>4</span></dd>
                <dt><span>Спецификация</span></dt>
                <dd><span>ISO IEC 13818-1</span></dd>
                <dt><span>Макс. скорость потока (все каналы включены)</span></dt>
                <dd><span>300 Мбит/с (IP), 400 Мбит/с (ASI)</span></dd>
                <dt><span>Редактирование PID</span></dt>
                <dd><span>есть</span></dd>
                <dt><span>Редактирование SI/PSI</span></dt>
                <dd><span>есть</span></dd>
                <dt><span>DVB EPG сервер</span></dt>
                <dd><span>есть (встроенный)</span></dd>
                <dt><span>DVB NIT сервер</span></dt>
                <dd><span>есть (встроенный)</span></dd>
                <dt><span>Нестабильность PCR</span></dt>
                <dd><span>500 нс</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>DVB-ASI выходы</h4>
            <section className="properties_group">
              <dl className="flexbox">
              <dt><span>Количество выходных потоков ASI</span></dt>
              <dd><span>4</span></dd>
              </dl>
            </section>
          </div>
          <div className="properties_section">
            <h4>IP стример</h4>
            <section className="properties_group">
              <dl className="flexbox">
                <dt><span>Спецификация</span></dt>
                <dd><span>ETSI TS102034</span></dd>
                <dt><span>Протокол вещания</span></dt>
                <dd><span>UDP</span></dd>
                <dt><span>Тип IP вещания</span></dt>
                <dd><span>Multicast/Unicast</span></dd>
                <dt><span>Количество multicast потоков IP</span></dt>
                <dd><span>4 (MPTS)</span></dd>
                <dt><span>Количество unicast соединений IP</span></dt>
                <dd><span>4 (MPTS)</span></dd>
                <dt><span>Физический интерфейс</span></dt>
                <dd><span>1 Гбит/с Ethernet</span></dd>
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
