import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet";

export default class Server_Solutions extends React.Component {

  render () {
    return (
    <>

    <Helmet>
      <title>Варианты организации IPTV вещания | Оборудование для головной станции ТВ | Crypton.com.ua</title>
      <meta name="description" content='Компания "Crypton" поможет Вам организовать IPTV вещание легко и без лишних затрат.' />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><span>Решения</span></li>
          <li><span>Организация IPTV вещания</span></li>
        </ul>
      </div>
    </div>

    <StaticQuery
      query = {
          graphql`
            query   {
                  hybrid_tv: file(relativePath: {eq: "hybrid_tv.png"}) {
                      childImageSharp {
                          fluid(maxWidth: 1123, maxHeight: 794) {
                          ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  cable_tv: file(relativePath: {eq: "cable_tv.png"}) {
                      childImageSharp {
                          fluid(maxWidth: 794, maxHeight: 1123) {
                          ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  catv: file(relativePath: {eq: "catv.png"}) {
                      childImageSharp {
                          fluid(maxWidth: 1123, maxHeight: 794) {
                          ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  catchup_s: file(relativePath: {eq: "catchup_s.png"}) {
                      childImageSharp {
                          fluid(maxWidth: 728, maxHeight: 185) {
                          ...GatsbyImageSharpFluid
                          }
                      }
                  }
            }
        `}
        render={({ hybrid_tv, cable_tv, catv, catchup_s }) => (
        <div className="page solution_page">
          <div className="container">
            <div className="productPage_main">
              <h1 className="pageName">Организация IPTV вещания</h1>
              <div className="product_block">
                <p>
                  Компания Crypton предоставляет ряд решений проблем, которые могут возникать при работе с  IPTV вещанием.
                </p>
              </div>

              <div className="product_block">
                <h3>IPTV от Криптона это:</h3>
                <ul>
                  <li>
                    Захват видео со спутника и эфира
                  </li>
                  <li>
                    On-Line и On-Demand Http вещание
                  </li>
                  <li>
                    Удобный доступ к архиву телепередач
                  </li>
                  <li>
                    Дружественный интерфейс управления
                  </li>
                </ul>
              </div>

              <div className="product_block">
                <h3>Варианты организации IPTV вещания</h3>
                <p>
                  Компания Криптон предлагает оборудование и решения для организации вещания цифровых телевизионных программ в IP сетях. Единым программно-аппаратным комплексом поддерживается On-Line вещание и Сatch-up TV вещание записанных в ТВ архив программ.
                </p>
                <p>
                Нижеследующая таблица приводит ориентировочные сравнительные характеристики различных решений, с учетом бюджета проекта и проектного количества пользователей сети.
                </p>
              </div>

              <div className="product_block product_block_table">
                <table className="table">
                  <tbody>
                    <tr className="titles">
                      <td className="val">
                        Бюджетное решение
                      </td>
                      <td className="val">
                        Небольшая сеть
                      </td>
                      <td className="val">
                      Распределенная сеть
                      </td>
                    </tr>

                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Макс. количество подключений IPTV
                      </td>
                      <td className="val">
                        2000(SD)
                      </td>
                      <td className="val">
                        2000(SD)
                      </td>
                      <td className="val">
                        50000
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">Макс. количество подключений VoD</td>
                      <td className="val">
                        300(SD)(SD)
                      </td>
                      <td className="val">
                        2000(SD)
                      </td>
                      <td className="val">
                        50000
                      </td>
                    </tr>

                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Макс. количество ТВ программ IPTV
                      </td>
                      <td className="val">
                        128
                      </td>
                      <td className="val">
                        250
                      </td>
                      <td className="val">
                        &#8734;
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Макс. количество ТВ программ VoD</td>
                      <td className="val">
                        128
                      </td>
                      <td className="val">
                        128
                      </td>
                      <td className="val">
                        &#8734;
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Масштабируемость</td>
                      <td className="val">
                        Слабая
                      </td>
                      <td className="val">
                        Средняя
                      </td>
                      <td className="val">
                        Высокая
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Используемый сервер</td>
                      <td className="val">
                        Catch-up TV Server Lite
                      </td>
                      <td className="val">
                        Catch-up TV Server
                      </td>
                      <td className="val">
                        Catch-up TV Server
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Иерархия сети</td>
                      <td className="val">
                        LAN
                      </td>
                      <td className="val">
                        LAN
                      </td>
                      <td className="val">
                        LAN
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Макс. количество серверов
                      </td>
                      <td className="val">
                        3
                      </td>
                      <td className="val">
                        5
                      </td>
                      <td className="val">
                        20
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Способ вещания
                      </td>
                      <td className="val">
                        DVB-over-Http
                      </td>
                      <td className="val">
                        DVB-over-Http
                      </td>
                      <td className="val">
                        DVB-over-Http
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Использование CAS
                      </td>
                      <td className="val">
                        Возможно
                      </td>
                      <td className="val">
                        Возможно
                      </td>
                      <td className="val">
                        Возможно
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Sat IPTV GateWay
                      </td>
                      <td className="val">
                        Да
                      </td>
                      <td className="val">
                        Да
                      </td>
                      <td className="val">
                        Да
                      </td>
                    </tr>
                    <tr className="parameter">
                      <td className="propertiesGroup">
                        Интерфейс управления
                      </td>
                      <td className="val">
                        Web, SNMP
                      </td>
                      <td className="val">
                        Web, SNMP
                      </td>
                      <td className="val">
                        Web, SNMP
                      </td>
                    </tr>
                    <tr className="parameter parameter_buttons">
                      <td className="val">
                        <Link className="serverSolutions_moreBtn" to="/interactive_1Gbps">Подробнее</Link>
                      </td>
                      <td className="val">
                        <Link className="serverSolutions_moreBtn" to="/interactive_10Gbps">Подробнее</Link>
                      </td>
                      <td className="val">
                        <Link className="serverSolutions_moreBtn" to="/interactive_10Gbps">Подробнее</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="product_block">
                <h3>Сервер Catch-Up для интерактивного вещания</h3>
                <p>
                  IPTV вещание становится возможным благодаря Catch-Up серверу Crypton.
                </p>
                <p>
                Интерактивное телевидение позволяет абонентам:
                </p>
                <ul>
                  <li>
                    Смотреть, когда хочу, - решается записью телепрограмм в Catch-up TV архив.
                  </li>
                  <li>
                    Смотреть, где хочу, - решается адресным http стримингом телепрограммы на приемник пользователя, неважно это телевизор, приставка, планшет или смартфон.
                  </li>
                  <li>
                    Смотреть что хочу, - пользовательский интерфейс системы позволяет выбирать и активировать просмотр любой уже записанной в архив телевизионной программы согласно телегиду.
                  </li>
                </ul>
              </div>
              <div className="product_block">
                <p>
                  Естественным в данной архитектуре является возможность организации Multi-Screen просмотра и отложенного просмотра выбранной телепрограммы.
                </p>
                <div className="video_wrapper">
                  <iframe title="youtube" src="https://www.youtube.com/embed/L7Mx1ugSakk" loop={true} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
              <div className="product_block">
                <p>
                  Аппаратная реализация Crypton Catch-up TV достаточно проста, легко масштабируема для различных архитектур сетей и легко интегрируется с уже имеющимися системами организации цифрового телевизионного вещания Криптон и системами сторонних производителей.
                </p>
                <Img fluid={catchup_s.childImageSharp.fluid} />
                <p>
                  Она состоит из оборудования захвата, примером которого может быть цифровой спутниковый приемник-декодер CRT1081IRD-S2-IP, преобразователь многопрограммных потоков цифрового телевизионного вещания в широковещательные(multicast) однопрограммные IPTV потоки CRT1081MCR, а также любой другой источник потокового телевизионного вещания. Это оборудование объединяется в единую высокопроизводительную сеть с Crypton Catch-up TV cервером, программное обеспечение которого заполняет архив файлами цифровых потоков сразу нескольких каналов, и организует трансляцию(streaming) по http протоколу выбранных пользователем телевизионных программ.
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
// <div className="accordion">
//   <details className="accordion-item">
//     <summary>
//       <span>Серверные решения IPTV</span>
//       <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
//     </summary>
//
//     <div className="content">
//       <h3>IPTV от Криптона это:</h3>
//       <ul>
//         <li>
//           Захват видео со спутника и эфира
//         </li>
//         <li>
//           On-Line и On-Demand Http вещание
//         </li>
//         <li>
//           Удобный доступ к архиву телепередач
//         </li>
//         <li>
//           Дружественный интерфейс управления
//         </li>
//       </ul>
//       <h3>Варианты организации IPTV вещания</h3>
//       <p>
//         Компания Криптон предлагает оборудование и решения для организации вещания цифровых телевизионных программ в IP сетях. Единым программно-аппаратным комплексом поддерживается On-Line вещание и Сatch-up TV вещание записанных в ТВ архив программ.
//       </p>
//       <p>
//       Нижеследующая таблица приводит ориентировочные сравнительные характеристики различных решений, с учетом бюджета проекта и проектного количества пользователей сети.
//       </p>
//
//       <table>
//         <tr className="titles">
//           <td className="text"></td>
//           <td className="val">
//             Бюджетное решение
//           </td>
//           <td className="val">
//             Небольшая сеть
//           </td>
//           <td className="val">
//           Распределенная сеть
//           </td>
//         </tr>
//
//         <tr className="titles">
//           <td className="propertiesGroup">
//             Макс. количество подключений
//           </td>
//         </tr>
//
//         <tr className="parameter">
//           <td className="text">IPTV</td>
//           <td className="val">
//             2000(SD)
//           </td>
//           <td className="val">
//             2000(SD)
//           </td>
//           <td className="val">
//             50000
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">VoD</td>
//           <td className="val">
//               300(SD)(SD)
//           </td>
//           <td className="val">
//             2000(SD)
//           </td>
//           <td className="val">
//             50000
//           </td>
//         </tr>
//
//         <tr className="titles">
//           <td className="propertiesGroup">
//             Макс. количество ТВ программ
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">IPTV</td>
//           <td className="val">
//             128
//           </td>
//           <td className="val">
//             250
//           </td>
//           <td className="val">
//             &#8734;
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">VoD</td>
//           <td className="val">
//             128
//           </td>
//           <td className="val">
//             128
//           </td>
//           <td className="val">
//             &#8734;
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">Масштабируемость</td>
//           <td className="val">
//             Слабая
//           </td>
//           <td className="val">
//             Средняя
//           </td>
//           <td className="val">
//             Высокая
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">Используемый сервер</td>
//           <td className="val">
//             Catch-up TV Server Lite
//           </td>
//           <td className="val">
//             Catch-up TV Server
//           </td>
//           <td className="val">
//             Catch-up TV Server
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">Иерархия сети</td>
//           <td className="val">
//             LAN
//           </td>
//           <td className="val">
//             LAN
//           </td>
//           <td className="val">
//             LAN
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">
//             Макс. количество серверов
//           </td>
//           <td className="val">
//             3
//           </td>
//           <td className="val">
//             5
//           </td>
//           <td className="val">
//             20
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">
//             Способ вещания
//           </td>
//           <td className="val">
//             DVB-over-Http
//           </td>
//           <td className="val">
//             DVB-over-Http
//           </td>
//           <td className="val">
//             DVB-over-Http
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">
//             Использование CAS
//           </td>
//           <td className="val">
//             Возможно
//           </td>
//           <td className="val">
//             Возможно
//           </td>
//           <td className="val">
//             Возможно
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">
//             Sat IPTV GateWay
//           </td>
//           <td className="val">
//             Да
//           </td>
//           <td className="val">
//             Да
//           </td>
//           <td className="val">
//             Да
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text">
//             Интерфейс управления
//           </td>
//           <td className="val">
//             Web, SNMP
//           </td>
//           <td className="val">
//             Web, SNMP
//           </td>
//           <td className="val">
//             Web, SNMP
//           </td>
//         </tr>
//         <tr className="parameter">
//           <td className="text"></td>
//           <td className="val">
//             <Link className="serverSolutions_moreBtn" to="interactive_1Gbps">Подробнее</Link>
//           </td>
//           <td className="val">
//             <Link className="serverSolutions_moreBtn" to="interactive_10Gbps">Подробнее</Link>
//           </td>
//           <td className="val">
//             <Link className="serverSolutions_moreBtn" to="interactive_10Gbps">Подробнее</Link>
//           </td>
//         </tr>
//       </table>
//
//       <h3>Сервер Catch-Up</h3>
//       <p>
//         IPTV вещание становится возможным благодаря Catch-Up серверу Crypton.
//       </p>
//       <p>
//         Он позволяет абонентам:
//       </p>
//       <ul>
//         <li>
//           Смотреть, когда хочу, - решается записью телепрограмм в Catch-up TV архив.
//         </li>
//         <li>
//           Смотреть, где хочу, - решается адресным http стримингом телепрограммы на приемник пользователя, неважно это телевизор, приставка, планшет или смартфон.
//         </li>
//         <li>
//           Смотреть что хочу, - пользовательский интерфейс системы позволяет выбирать и активировать просмотр любой уже записанной в архив телевизионной программы согласно телегиду.
//         </li>
//         <li>
//           Естественным в данной архитектуре является возможность организации Multi-Screen просмотра и отложенного просмотра выбранной телепрограммы.
//         </li>
//       </ul>
//
//       <iframe className="catch_up_video" src="https://www.youtube.com/embed/L7Mx1ugSakk" loop={true} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//
//     </div>
//   </details>
//
//   <details className="accordion-item">
//     <summary>
//       <span>Для кабельных операторов</span>
//       <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
//     </summary>
//
//     <div className="content">
//
//     <details className="accordion-item">
//       <summary>
//         <span>Головная станция кабельного + IPTV вещания</span>
//         <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
//       </summary>
//
//       <div className="content">
//         <div className="product_block">
//           <p>
//             Такое решение дает много преимуществ:
//           </p>
//           <ul>
//             <li>
//               Позволяет убрать повторяющиесь модули в различных устройствах
//             </li>
//             <li>
//               Идеальная аппаратная совместимость, высокая надежность и ремонтопригодность оборудования за лучшую в отрасли цену.
//             </li>
//             <li>
//
//               Реализует такие важные функции как:
//
//               <ol>
//                 <li>
//                   Прием DVB-S/S2, DVB-T/T2, DVB-C сигнала
//                 </li>
//                 <li>
//                   Common Interface (CI)
//                 </li>
//                 <li>
//                   Ремультиплексирование MPTS потоков
//                 </li>
//                 <li>
//                   Организация цифрового телегида(EPG)
//                 </li>
//                 <li>
//                   Организация условного доступа(CAS)
//                 </li>
//                 <li>
//                   Формирование модулированного DVB-C сигнала
//                 </li>
//                 <li>
//                   Формирование unicast/multicast IPTV потоков
//                 </li>
//                 <li>
//                   Обмен данными по IP протоколу упрощающает архитектуру головной станции мультисервисного оператора(MSO)
//                 </li>
//               </ol>
//             </li>
//           </ul>
//         </div>
//         <div className="product_block">
//           <p>Станция состоит из:</p>
//
//           <ul>
//             <li>
//               <Link to="/crt1081ird-s2-ip">Профессиональный 8-канальный DVB-S2 приёмник CRT1081IRD-S2-IP</Link>
//             </li>
//             <li>
//               <Link to="/crt1081ird-s2-mx">8-канальный DVB-S2 приемник-декодер со встроенным 4-х канальным DVB ремультиплексером</Link>
//             </li>
//             <li>
//               <Link to="/crt1041ird-t2-ip">Профессиональный 4-канальный мультистандартный DVB-С/T/T2 ресивер</Link>
//             </li>
//             <li>
//               <Link to="/crt1041m-c-ip">Четырехканальный IP DVB-C модулятор со встроенным скремблером системы условного доступа CAS Crypton CRT1041M-C-IP</Link>
//             </li>
//             <li>
//               <Link to="/crt1081mcr">Маршрутизатор IPTV CRT1081MCR</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="product_block">
//           <p>Схема головной станции кабельного и IPTV вещания</p>
//           <Img fluid={hybrid_tv.childImageSharp.fluid}/>
//         </div>
//       </div>
//     </details>
//
//     <details className="accordion-item">
//       <summary>
//         <span>Головная станция кабельного вещания</span>
//         <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
//       </summary>
//
//       <div className="content">
//         <div className="product_block">
//           <details className="accordion-item">
//             <summary>
//               <span>интерфейс IP</span>
//               <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
//             </summary>
//
//             <div className="content">
//               <div className="product_block">
//                 <h3>Приёмная часть головной станции Crypton</h3>
//                 <p>Для того, чтобы удовлетворить потребности всех клиентов, а значит, заработать больше денег и выиграть у конкурентов, в кабельной сети нужно большое количество каналов. Тогда абоненты смогут подобрать программы на свой вкус. По наличию контента на спутниках можно говорить о программной услуге кабельного оператора не менее 100 программ. Специально для этого Криптон разработал и предлагает восьми-входовые спутниковые приёмники и четырёх-входовые эфирные. Спутниковые приёмники имеют 8 приёмных модулей, очень высокую степень интеграции и, если учесть возможность выбора желаемых программ и ремультиплексирования их в несколько транспортных потоков, то такое решение окажется оптимальным для построения головной станции. Всего 2 приёмника позволят недорого составить 8 транспондеров со 128 программами. Попоробуйте найти более конкурентное решение! Учтите, что во многих кабельных сетях сейчас более 500 программ, и представьте, как будет выглядеть аппаратная с таким количеством ресиверов!</p>
//               </div>
//               <div className="product_block">
//                 <h3>Модуляторы для КТВ</h3>
//                 <p>
//                   Сигналы с ресивера (а точнее - с мультиплексора, встроенного в ресивер) напрямую подаются на четырёхканальный модулятор. Модуляторы, опять же с целью экономии места и цены, выполнены 4 шт. в одном корпусе на одной платформе. Два модулятора дадут 8 несущих частот для тех восьми транспондеров, полученных с 2-х ресиверов.
//                   Цифровая головная станция готова! Из 4-х единиц. Одна связка ресивер - модулятор дают четыре несущих, до 64 программ. Умножаете в нужное количество раз, получаете нужную конфигурацию. Элементарное масштабирование! Для того, чтобы убедиться в экономической эффективности такого решения, загляните в прайс. Технические характеристики - максимально возможные. Если модуляторы с IP интерфейсом, то в них уже встроена CAS Crypton и для организации платного телевидения нужно купить ещё Сервер CAS Crypton.
//                 </p>
//               </div>
//               <div className="product_block">
//                 <h3>Абонентское оборудование КТВ</h3>
//                 <p>
//                   Для абонентских приёмников - карточки условного доступа и QAM модули.
//                 </p>
//               </div>
//               <div className="product_block">
//                 <h3>Блок-схема головной станции кабельного ТВ</h3>
//                 <Img fluid={catv.childImageSharp.fluid}/>
//               </div>
//             </div>
//           </details>
//
//           <details className="accordion-item">
//             <summary>
//               <span>интерфейс ASI</span>
//               <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
//             </summary>
//
//             <div className="content">
//               <Img fluid={cable_tv.childImageSharp.fluid}/>
//             </div>
//           </details>
//         </div>
//       </div>
//     </details>
//
//     </div>
//   </details>
//
//
//
// </div>
