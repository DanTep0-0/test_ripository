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
                        fluid(maxWidth: 856, maxHeight: 254) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ cod912ipe }) => (
        <>

        <Helmet>
          <title>Многоканальный IP стример CRT1081MCR | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="CRT1081MCR предназначен для организации услуги IPTV и ОТТ в различных вариантах." />
        </Helmet>

        <ProductInfo
          categories={[{text: "IP стримеры", link: "ip_streamers"}]}
          name="Многоканальный IP стример CRT1081MCR"
          photos={[cod912ipe.childImageSharp.fluid]}
          description={() => (
            <>
            <div className="product_block">
              <p>
                CRT1081MCR - это высокопроизводительный многоканальный IP стример.  Предназначен для организации услуги IPTV  и ОТТ в интернет сетях в различных форматах кодирования телевидения (MPEG-2, MPEG-4, H-264, H-265), различных разрешений (в том числе SD, HD, UHD),  различных транспортных протоколов.
              </p>
            </div>
            <div className="product_block">
              <ul>
                <li>
                Для приёма входных телевизионных потоков устройство имеет  два типа интерфейсов - IP и  ASI, которые могут использоваться одновременно.  1Gbit Ethernet порт используется для приема до 8 DVB-over-IP инкапсулированных многопрограммных MPTS потоков и 4 входа ASI - для приёма DVB-ASI-MPTS потоков.
                </li>
                <li>
                Стример позволяет организовать IPTV вещание до 256 каналов в формате IPTV SPTS с использованием multicast или unicast протоколов. Если используется multicast вещание, то стример может обслужить любое количество абонентов.
                </li>
                <li>
                Для http вещания на большую аудиторию дополнительно потребуется устройство, способное поддерживать большое количество интернет соединений, например, <a href="/catch_up_server">Catch-Up сервер</a>
                </li>
                <li>
                В каждый из каналов добавляются MPEG SPI и DVB-SI данные для отображения информации о программе на абонентском приемнике.
                </li>
                <li>
                Управление устройством  и выбор каналов для стриминга из входных потоков осуществляется через Web интерфейс.
                </li>

              </ul>
            </div>
            </>
          )}
          propertiesTable={() => (<>
            <div className="properties_section">
              <h4>DVB-over-IP вход</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Спецификации</span></dt>
                  <dd><span>ETSI TS 102034, ETSI TS 13818-1</span></dd>

                  <dt><span>Протокол вещания</span></dt>
                  <dd><span>UDP</span></dd>

                  <dt><span>Тип вещания</span></dt>
                  <dd><span>Multicast, Unicast</span></dd>

                  <dt><span>Макс. Количество MPTS потоков</span></dt>
                  <dd><span>8</span></dd>

                  <dt><span>Сетевой интерфейс</span></dt>
                  <dd><span>1Gbit Ethernet</span></dd>

                  <dt><span>Сетевой интерфейс</span></dt>
                  <dd><span>1Gbit Ethernet</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>DVB-ASI входы</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Количество входов</span></dt>
                  <dd><span>4  (BNC, 75 Ом)</span></dd>

                  <dt><span>Спецификации</span></dt>
                  <dd><span>EN 50083-9</span></dd>

                  <dt><span>Макс. скорость потоков</span></dt>
                  <dd><span>216 Мбит\с</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>IPTV выходы</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Спецификации</span></dt>
                  <dd><span>ETSI TS 102034, ETSI TS 13818-1</span></dd>

                  <dt><span>Протокол вещания</span></dt>
                  <dd><span>UDP, RTP</span></dd>

                  <dt><span>Тип вещания</span></dt>
                  <dd><span>Multicast, unicast</span></dd>

                  <dt><span>Макс. количество потоков SPTS</span></dt>
                  <dd><span>256</span></dd>

                  <dt><span>Сетевой интерфейс</span></dt>
                  <dd><span>1Gbit Ethernet</span></dd>

                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Инжектор SPI/SI</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Передаваемые таблицы</span></dt>
                  <dd><span>PAT, PMT, SDT</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Управление</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Количество Ethernet портов</span></dt>
                  <dd><span>1</span></dd>

                  <dt><span>Спецификация</span></dt>
                  <dd><span>100 Base-T, http (Web интерфейс)</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Размеры</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Высота</span></dt>
                  <dd><span>44</span></dd>

                  <dt><span>Ширина</span></dt>
                  <dd><span>490 мм</span></dd>

                  <dt><span>Глубина</span></dt>
                  <dd><span>300 мм</span></dd>
                </dl>
              </section>
            </div>
          </>)}
          />
        </>
      )}
  />
)

// //короткое описание:
//
// <img src="/sites/all/files/photo/cod912ipe.jpg" alt="Многоканальный IPTV стример CRT1081MCR" title="Многоканальный IPTV стример CRT1081MCR" class="img-s" />
// CRT1081MCR представляет собой высокопроизводительный многоканальный IPTV стример.  Предназначен для организации услуги IPTV  и ОТТ в интернет сетях в различных форматах кодирования телевидения (MPEG-2, MPEG-4, H-264, H-265), различных разрешений (в том числе SD, HD, UHD),  различных транспортных протоколов. Для приёма входных телевизионных потоков могут одновременно использоваться два типа интерфейсов - IP и ASI.  1Gbit Ethernet порт используется для приема до 8 DVB-over-IP инкапсулированных многопрограммных MPTS потоков и 4 входа ASI - для приёма DVB-ASI-MPTS потоков. Стример позволяет организовать IPTV вещание до 256 каналов в формате IPTV SPTS с использованием multicast или unicast протоколов. В каждый из каналов добавляются MPEG SPI и DVB-SI данные для отображения информации о программе на абонентском приемнике. Управление устройством  и выбор каналов для стриминга из входных потоков осуществляется через Web интерфейс.

//
// <img src="/sites/all/files/photo/cod912ipe.jpg" class="img-b" alt="Многоканальный IPTV стример CRT1081MCR" title="Многоканальный IPTV стример CRT1081MCR" />
// <h2>Описание</h2>
// CRT1081MCR представляет собой высокопроизводительный многоканальный IPTV стример.  Предназначен для организации услуги IPTV  и ОТТ в интернет сетях в различных форматах кодирования телевидения (MPEG-2, MPEG-4, H-264, H-265), различных разрешений (в том числе SD, HD, UHD),  различных транспортных протоколов.<br /><br />
// Для приёма входных телевизионных потоков устройство имеет  два типа интерфейсов - IP и  ASI, которые могут использоваться одновременно.  1Gbit Ethernet порт используется для приема до 8 DVB-over-IP инкапсулированных многопрограммных MPTS потоков и 4 входа ASI - для приёма DVB-ASI-MPTS потоков. Стример позволяет организовать IPTV вещание до 256 каналов в формате IPTV SPTS с использованием multicast или unicast протоколов. В каждый из каналов добавляются MPEG SPI и DVB-SI данные для отображения информации о программе на абонентском приемнике.<br /><br />
//  Управление устройством  и выбор каналов для стриминга из входных потоков осуществляется через Web интерфейс. Если используется multicast вещание, то стример может обслужить любое количество абонентов. Для http вещания на большую аудиторию дополнительно потребуется устройство, способное поддерживать большое количество интернет соединений, например, <a href="/catch_up_server">Catch-Up сервер</a>
// <div align="center"><h2>Технические характеристики:</h2>
// <table class="pure-table pure-table-bordered">
// <tr><th colspan="2">DVB-over-IP вход</th></tr>
// <tr><td>Спецификации</td><td>ETSI TS 102034, ETSI TS 13818-1</td></tr>
// <tr><td>Протокол вещания</td><td>UDP</td></tr>
// <tr><td>Тип вещания</td><td>Multicast, Unicast</td></tr>
// <tr><td>Макс. Количество MPTS потоков</td><td>8</td></tr>
// <tr><td>Сетевой интерфейс</td><td>1Gbit Ethernet</td></tr>
//
// <tr><th colspan="2">DVB-ASI входы</th></tr>
// <tr><td>Количество входов</td><td>4  (BNC, 75 Ом)</td></tr>
// <tr><td>Спецификации</td><td>EN 50083-9</td></tr>
// <tr><td>Макс. скорость потоков</td><td>216 Мбит\\с</td></tr>
//
// <tr><th colspan="2">IPTV выходы</th></tr>
// <tr><td>Спецификации</td><td>ETSI TS 102034, ETSI TS 13818-1</td></tr>
// <tr><td>Протокол вещания</td><td>UDP, RTP</td></tr>
// <tr><td>Тип вещания</td><td>Multicast, unicast</td></tr>
// <tr><td>Макс. количество потоков SPTS</td><td>256</td></tr>
// <tr><td>Сетевой интерфейс</td><td>1Gbit Ethernet</td></tr>
//
// <tr><th colspan="2">Инжектор SPI/SI</th></tr>
// <tr><td>Передаваемые таблицы</td><td>PAT, PMT, SDT</td></tr>
//
// <tr><th colspan="2">Управление</th></tr>
// <tr><td>Количество Ethernet портов</td><td>1</td></tr>
// <tr><td>Спецификация</td><td>100 Base-T, http (Web интерфейс)</td></tr>
//
// <tr><th colspan="2">Размеры</th></tr>
// <tr><td>Высота</td><td>44</td></tr>
// <tr><td>Ширина</td><td>490 мм</td></tr>
// <tr><td>Глубина</td><td>300 мм</td></tr>
// </table></div>
//
// <br />
//
//
//
// <a href="/sites/all/files/pdf/CRT1081MCR_Datasheet_RU.pdf" target="_blank" class="map"><img src="/sites/all/files/img/adobe_reader_logo.jpg" width="35" height="35" border="0" alt="скачать техническое описание в формате PDF" align="absmiddle" /> Техническое Oписание в формате pdf </a>
//
//               //короткое описание:
//
// <img src="/sites/all/files/photo/cod912ipe.jpg" alt="Многоканальный IPTV стример CRT1081MCR" title="Многоканальный IPTV стример CRT1081MCR" class="img-s" />
// CRT1081MCR представляет собой высокопроизводительный многоканальный IPTV стример.  Предназначен для организации услуги IPTV  и ОТТ в интернет сетях в различных форматах кодирования телевидения (MPEG-2, MPEG-4, H-264, H-265), различных разрешений (в том числе SD, HD, UHD),  различных транспортных протоколов. Для приёма входных телевизионных потоков могут одновременно использоваться два типа интерфейсов - IP и ASI.  1Gbit Ethernet порт используется для приема до 8 DVB-over-IP инкапсулированных многопрограммных MPTS потоков и 4 входа ASI - для приёма DVB-ASI-MPTS потоков. Стример позволяет организовать IPTV вещание до 256 каналов в формате IPTV SPTS с использованием multicast или unicast протоколов. В каждый из каналов добавляются MPEG SPI и DVB-SI данные для отображения информации о программе на абонентском приемнике. Управление устройством  и выбор каналов для стриминга из входных потоков осуществляется через Web интерфейс.
