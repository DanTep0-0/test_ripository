import React from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default class Biss extends React.Component {

  scrollToRef(ref){window.scroll({top: ref.current.offsetTop - 60, left: 0, behavior: "smooth"})}

  render () {

    var descriptionRef = React.createRef();
    var propertiesRef = React.createRef();
    var instructionRef = React.createRef();

    return (
      <>
      <StaticQuery
      query = {
          graphql`
            query   {
                  i_1: file(relativePath: {eq: "i_1.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 840, maxHeight: 547) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  ip_qam_ch: file(relativePath: {eq: "ip-qam-ch.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 840, maxHeight: 547) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  ip_qam_bl_ch: file(relativePath: {eq: "ip-qam-bl-ch.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 1123, maxHeight: 794) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  arrow: allImageSharp(filter: {fluid: {originalName: {eq: "down-arrow.png"}}}) {
                    edges {
                      node {
                        fluid {
                          src
                        }
                      }
                    }
                  }
                  tick: allImageSharp(filter: {fluid: {originalName: {eq: "feature_tick.png"}}}) {
                    edges {
                      node {
                        fluid {
                          src
                        }
                      }
                    }
                  }
              }
        `}

        render= {({ i_1, ip_qam_ch, ip_qam_bl_ch, arrow, tick }) => (
          <>

          <Header/>

          <div className="pageContent productPage">
            <div className="productPage_top">
              <Link to="/" className="moreBtn backToCat_button flexbox">
                <Img className="backArrow" fluid={arrow.edges[0].node.fluid}></Img>
                Back to home
              </Link>

              <h1>Приставка IP&gt;QAM</h1>
            </div>

            <div className="productPage_main">
              <div className="productPage_navbar">
                <ul className="productPage_tabs_list flexbox">
                  <li>
                    <span className="productPage_tabs_link activeTab" onClick={(event) => {event.preventDefault()
                      this.scrollToRef(descriptionRef)}}>Описание</span>
                  </li>
                  <li>
                    <span className="productPage_tabs_link" onClick={(event) => {event.preventDefault()
                      this.scrollToRef(propertiesRef)}}>Характеристики</span>
                  </li>
                  <li>
                    <span className="productPage_tabs_link" onClick={(event) => {event.preventDefault()
                      this.scrollToRef(instructionRef)}}>Инструкция</span>
                  </li>
                </ul>
              </div>
              <Img className="product_img" fluid = {i_1.childImageSharp.fluid}></Img>
            </div>

            <div className="productPage_description" ref={descriptionRef}>
              <h2 className="product_description_heading">Description</h2>

              <div className="product_block">
                <p>Модуль IP>QAM представляет собой универсальный модуль доступа к IPTV сети. Способен принимать телевизионные каналы, вещаемые на него из TCP/IP сети.</p>
              </div>
              <div className="product_block">
              <h4>У устройства есть ряд удобных преимуществ:</h4>
              <ul>
                <li>
                <p>В устройстве предусмотрено два пользовательских интерфейса, обеспечивающих комфортный просмотр телевизионных программ.
                </p>
                <p>Первый, ИК приемник, позволяет переключать каналы по плейлисту провайдера IPTV вещания. Для этой цели предусмотрен собственный пульт телевизионного приемника.
                </p>
                <p>Второй, Second Screen - это приложение для поиска программ в сети, управления отложенным просмотром, получения аннотаций к программам, а также других функций, в то время как выбранный канал непрерывно транслируется на экране телевизионного приемника.
                </p>
                </li>
                <li>Присутствует функция Multiscreen. Используя мобильное устройство, можно поставить просмотр на паузу на одном телевизоре, а продолжить его на любом другом в вашей домашней сети, или на мобильном экране.
                </li>
                <li>
                Устройство поддерживает функцию автоматического обновления ПО с сервера провайдера IPTV сети или сайта производителя.
                </li>
                <li>
                Встроенный сценарный язык программирования использует отркрытый  API  и расширяет возможности адаптирования устройства в сети провайдера.
                </li>
                <li>
                Устройство выполнено в компактном пластиковом корпусе и предназначено для питания от USB порта телевизионного или кабельного приемника.
                </li>
                <li>
                Есть WEB интерфейс для индивидуальной настройки.
                </li>
              </ul>
              </div>

              <div className="productPage_properties" ref={propertiesRef}>
                <h2>Характеристики</h2>
                  <div className="product_block">
                    <h4>Сетевой интерфейс</h4>
                    <section className="properties_group">
                    <dl className="flexbox">

                      <dt><span>Тип разъема</span></dt>
                      <dd><span>RJ45</span></dd>

                      <dt><span>Физический интерфейс</span></dt>
                      <dd><span>100Мbit Ethernet</span></dd>

                      <dt><span>Cетевой протокол</span></dt>
                      <dd><span>TCP/IP</span></dd>

                      <dt><span>Протокол вещания.</span></dt>
                      <dd><span>DVB-over-Http</span></dd>

                      <dt><span>Сетевая идентификация</span></dt>
                      <dd><span>Static IP, DHCP</span></dd>

                      <dt><span>Поддержка DNS</span></dt>
                      <dd><span>Да</span></dd>

                    </dl>
                    </section>
                  </div>
                  <div className="product_block">
                    <h4>Модулятор</h4>
                    <section className="properties_group">
                    <dl className="flexbox">

                      <dt><span>Тип разъема</span></dt>
                      <dd><span>IEC 61169-2, type 9,52 (Belling-Lee)</span></dd>

                      <dt><span>Тип модуляции</span></dt>
                      <dd><span>DVB-C</span></dd>

                      <dt><span>Спецификация</span></dt>
                      <dd><span>EN 300429</span></dd>

                      <dt><span>Частота, кГц</span></dt>
                      <dd><span>EN 300429</span></dd>

                      <dt><span>Символьная скорость, Msps</span></dt>
                      <dd><span>6750</span></dd>

                    </dl>
                    </section>
                  </div>
                  <div className="product_block">
                    <h4>Управление доступом к сети</h4>
                    <section className="properties_group">
                    <dl className="flexbox">

                      <dt><span>Встроенный модуль защиты доступа</span></dt>
                      <dd><span>Да</span></dd>

                      <dt><span>Пароль по-умолчанию </span></dt>
                      <dd><span>admin</span></dd>

                      <dt><span>IP адрес по-умолчанию </span></dt>
                      <dd><span>192.168.0.100</span></dd>

                      <dt><span>Имя пользователя по-умолчанию </span></dt>
                      <dd><span>admin</span></dd>

                    </dl>
                    </section>
                  </div>
                  <div className="product_block">
                    <h4>Питание</h4>
                    <section className="properties_group">
                    <dl className="flexbox">

                      <dt><span>Тип разъема</span></dt>
                      <dd><span>Micro USB</span></dd>

                      <dt><span>Напряжение питания</span></dt>
                      <dd><span>5В</span></dd>

                      <dt><span>Максимальный ток потребления</span></dt>
                      <dd><span>0.5А</span></dd>

                    </dl>
                    </section>
                  </div>
              </div>

              <div className="productPage_description">
                <h2 >Описание</h2>
                <div className="product_block">
                  <h4>Составляющие</h4>
                  <Img className="product_img" fluid = {ip_qam_ch.childImageSharp.fluid}></Img>
                  <ol>
                    <li>
                      Шнур для подключения к DVB-C входу телевизионного приемника
                    </li>
                    <li>
                      Разъем для подключения к Ethernet сети
                    </li>
                    <li>
                      Кнопка сброса настроек по-умолчанию
                    </li>
                    <li>
                      Разъем для подключения к USB порту телевизионного приемника
                    </li>
                    <li>
                      ИК приемник
                    </li>
                  </ol>
                </div>
                <div className="product_block">
                  <h4>Функциональная блок-схема</h4>
                  <Img className="product_img" fluid = {ip_qam_bl_ch.childImageSharp.fluid}></Img>
                  <ul>
                    <li>
                      100Mbit Ethernet используется для подключения устройства к Ethernet сети
                    </li>
                    <li>
                      IR Receiver принимает команды от ПДУ
                    </li>
                    <li>
                      Aplication CPU выполняет пользовательскую программу и прием IPTV программ из сети провайдера IPTV
                    </li>
                    <li>
                      Secure Module отвечает за безопасность обмена данными между IP>QAM модулем и сервером провайдера IPTV для управления доступом
                    </li>
                    <li>
                      DVB-C Модулятор преобразует входной IPTV поток в DVB-C сигнал, понятный кабельному приемнику или телевизору
                    </li>
                    <li>
                      RF Up-Convertor переносит DVB-C сигнал в ВЧ диапазон(62 МГц)
                    </li>
                  </ul>

                </div>
                <div className="product_block" ref={instructionRef}>
                  <h3>
                  Вы также можете <Link to={"/ip-qam/user_manual"}>ознакомится</Link> с инструкцией по использованию приставки IP&gt;QAM
                </h3>
                </div>
              </div>

            </div>
          </div>

          <Footer/>

          </>
        )}
      />
    </>)

    }
  }

      //   <h1>Техническое описание</h1>
      //     <p>Модуль   IP&gt;QAM представляет собой универсальный модуль доступа к IPTV сети. Модуль выполняет функцию портативного DVB-C модулятора, способного принимать телевизионные каналы, вещаемые на него из TCP/IP сети.
      // </p><p>В устройстве предусмотрено два пользовательских интерфейса, обеспечивающих комфортный просмотр телевизионных программ.</p>
      // <p>Первый, ИК приемник, позволяет переключать каналы по плейлисту провайдера IPTV вещания. Для этой цели удобно использовать собственный пульт телевизионного приемника.</p>
      // <p>Второй, Second Screen,  использует мобильное устройство, которое позволяет организовать удобный пользовательский интерфейс поиска программ в сети, управление отложенным просмотром, получение аннотации
      //    к программам, а также другой сопутствующей информации из интернета, в то время как выбранный канал непрерывно транслируется на экране телевизионного приемника.</p>
      // <p>Очень удобной функцией реализуемой устройством является Multiscreen. Используя мобильное устройство, можно поставить просмотр на паузу на одном телевизоре, а продолжить его на любом
      //   другом в вашей домашней сети, или при помощи встроенного плеера на мобильном экране.</p>
      // <p>Устройство поддерживает функцию автоматического обновления ПО с сервера провайдера IPTV сети или сайта производителя.</p>
      // <p>Встроенный сценарный язык программирования использует отркрытый  API  и расширяет возможности адаптирования устройства в сети провайдера.</p>
      // <p>Устройство выполнено в компактном пластиковом корпусе и предназначено для питания от USB порта телевизионного или кабельного приемника.</p>
      // <p>WEB интерфейс служит для индивидуальной настройки.</p>
      // </div>
      //
      //
      // <div align="center">
      // <h2>Технические характеристики</h2>
      // <table class="pure-table pure-table-bordered">
      // <thead>
      // <tr><th>Сетевой интерфейс</th><th></th></tr>
      // </thead>
      // <tr><td>Тип разъема</td><td>RJ45</td></tr>
      // <tr><td>Физический интерфейс</td><td>100Мbit Ethernet </td></tr>
      // <tr><td>Cетевой протокол</td><td>TCP/IP</td></tr>
      // <tr><td>Протокол вещания.</td><td>DVB-over-Http</td></tr>
      // <tr><td>Сетевая идентификация</td><td>Static IP, DHCP</td></tr>
      // <tr><td>Поддержка DNS</td><td>Да</td></tr>
      // <thead>
      // <tr><th>Модулятор</th><th></th></tr>
      // </thead>
      // <tr><td>Тип разъема</td><td>IEC 61169-2, type 9,52 (Belling-Lee)</td></tr>
      // <tr><td>Тип модуляции</td><td>DVB-C</td></tr>
      // <tr><td>Спецификация</td><td>EN 300429</td></tr>
      // <tr><td>Частота, кГц</td><td>62000</td></tr>
      // <tr><td>Символьная скорость, Msps</td><td>6750</td></tr>
      // <thead>
      // <tr><th>Управление доступом к сети</th><th></th></tr>
      // </thead>
      // <tr><td>Встроенный модуль защиты доступа</td><td>Да</td></tr>
      // <thead>
      // <tr><th>Настройки по-умолчанию</th><th></th></tr>
      // </thead>
      // <tr><td>IP адрес</td><td>192.168.0.100</td></tr>
      // <tr><td>Имя пользователя</td><td>admin</td></tr>
      // <tr><td>Пароль</td><td>admin</td></tr>
      // <thead>
      // <tr><th>Питание</th><th></th></tr>
      // </thead>
      // <tr><td>Тип разъема</td><td>Micro USB</td></tr>
      // <tr><td>Напряжение питания</td><td>5В</td></tr>
      // <tr><td>Максимальный ток потребления</td><td>0.5А</td></tr>
      // </table>
      // </div>
      // <h2>Описание</h2>
      //    <img src="/sites/all/files/img/ip-qam-ch.jpg" alt="IP&gt;QAM" class="img-b" />
      // <ol>
      // <li> Шнур для подключения к DVB-C входу телевизионного приемника;</li>
      // <li> Разъем для подключения к Ethernet сети;</li>
      // <li> Кнопка сброса настроек по-умолчанию;</li>
      // <li> Разъем для подключения к USB порту телевизионного приемника;</li>
      // <li> ИК приемник.</li>
      // </ol>
      // <h2>Функциональная блок-схема</h2>
      //    <img src="/sites/all/files/img/ip-qam-bl-ch.jpg" alt="IP&gt;QAM" class="img-b" />
      //
      // <ol>
      // <li>  100Mbit Ethernet используется для подключения устройства к Ethernet сети;</li>
      // <li> IR Receiver принимает команды от ПДУ;</li>
      // <li> Aplication CPU выполняет пользовательскую программу и прием IPTV программ  из сети провайдера IPTV;</li>
      // <li>Secure Module отвечает за безопасность обмена данными между IP&gt;QAM модулем и сервером провайдера IPTV для управления доступом;</li>
      // <li> DVB-C Модулятор преобразует входной IPTV поток в DVB-C сигнал, понятный кабельному приемнику или телевизору;</li>
      // <li> RF Up-Convertor переносит DVB-C сигнал в ВЧ диапазон(62 МГц).</li>
      // </ol>
