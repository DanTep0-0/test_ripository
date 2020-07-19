import React from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet";

export default class Biss extends React.Component {

  render () {

    return (
      <>

      <Helmet>
        <title>История компании Crypton | Crypton.com.ua</title>
        <meta name="description" content="История развития компании Crypton." />
      </Helmet>

      <Header/>

      <div className="breadcrumbs_div">
        <div className="container">
          <ul className="breadcrumbs">
            <li>Вы здесь:</li>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/profile">Компания</Link></li>
            <li><span>История компании Crypton</span></li>
          </ul>
        </div>
      </div>

      <StaticQuery
      query = {
          graphql`
            query   {
                  about_p1: file(relativePath: {eq: "about_p1.png"}) {
                      childImageSharp {
                          fluid(maxWidth: 325, maxHeight: 160) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  about_p2: file(relativePath: {eq: "about_p2.png"}) {
                      childImageSharp {
                          fluid(maxWidth: 423, maxHeight: 160) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  about_p3: file(relativePath: {eq: "about_p3.png"}) {
                      childImageSharp {
                          fluid(maxWidth: 451, maxHeight: 141) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  mux_841_02: file(relativePath: {eq: "mux_841-02.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 200, maxHeight: 100) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  enc: file(relativePath: {eq: "enc.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 200, maxHeight: 100) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  cod_980_rms_02: file(relativePath: {eq: "cod_980_rms-02.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 200, maxHeight: 100) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  prize_eebc_2006_02: file(relativePath: {eq: "prize_eebc-2006_02.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 150, maxHeight: 200) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  crt1082ipe_sm: file(relativePath: {eq: "crt1082ipe_sm.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 364, maxHeight: 108) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
        `}

        render= {({ about_p1, about_p2, about_p3, mux_841_02, enc, cod_980_rms_02, prize_eebc_2006_02, crt1082ipe_sm }) => (
          <>


        <div className="page about_page history_page">
          <div className="container">

            <h1 className="pageName">История компании Crypton</h1>

            <div className="page_block">
              <h3>1992</h3>
              <p>
                История фирмы начинается 10 марта 1992 года.
              </p>
            </div>
            <div className="page_block">
             <h3>1993</h3>
             <p>
               Первая система адресного кодирования фирмы «Криптон» была запущена в коммерческую эксплуатацию в 1993 году на эфирных каналах телекомпании “Антел” (г. Антрацит Луганской обл., Украина). В принципе кодирования была положена инверсия групп строк. Для зрителя инверсные строки беспорядочно перемещались.</p>
             <p>
              Абонентский декодер, несмотря на свою простоту и небольшую стоимость, умел определять, каким будет расположение инверсных строк в следующем кадре. Для повышения качества восстановленного изображения, декодер имел схему измерения и корректировки нелинейности всего тракта. Высокая криптостойкость, хорошее качество восстановленного сигнала и низкая стоимость студийного и абонентского оборудования определили успех проекта и принёс доходы телекомпании.
             </p>
            </div>
            <div className="page_block">
             <h3>1996</h3>
             <p>
               Развитие рынка недорогих однокристальных микроконтроллеров от Microchip позволило реализовать новое техническое решение для защиты сигнала аналогового телевидения от несанкционированного просмотра, ставшее основой аналоговой системы адресного кодирования «Криптон».
             </p>
            </div>
            <div className="page_block">
             <h3>1997</h3>
             <Img fluid={about_p1.childImageSharp.fluid} style={{maxWidth: "325px", maxHeight: "160px"}} alt="Кодер Crypton К-303, абонетский декодер DV-01 и DRA-01"/>
             <p>
               Начало выпуска кодера К-303, абонетских декодеров DV-01 и DRA-01. Кодирование осуществлялось без цифровой обработки, однако абонентские устройства уже могли поддерживать полноформатное кодирование повышенной криптостойкости с цифровой обработкой ТВ сигнала. Стартовал проект Митрис (MITRIS) в Луганске с кодировкой "Криптон"
             </p>
            </div>
            <div className="page_block">
             <h3>2001</h3>
             <Img fluid={about_p2.childImageSharp.fluid} style={{maxWidth: "423px", maxHeight: "160px"}} alt="Кодеры Crypton серии COD500: COD-503, COD-502, COD-505. А также групповой декодер DRG-01"/>
             <p>
               Начало выпуска кодеров серии COD500 c цифровой обработкой ТВ сигнала. Наличие встроенного кадрового синхронизатора позволило осуществить групповое кодирование ТВ сигнала в сетях MMDS с помощью группового декодера DRG-01.
             </p>
            </div>
            <div className="page_block">
             <h3>2003</h3>
             <Img fluid={about_p3.childImageSharp.fluid} style={{maxWidth: "451px", maxHeight: "141px"}} alt="Кодеры Crypton серии COD506: COD-506.200 и COD-506.400"/>
             <p>
              Начало выпуска кодеров серии COD-506 c цифровой обработкой ТВ сигнала, конструкция которых существенно улучшила характеристики устройств, добавлена возможность коммутации входных ТВ сигналов без нарушения синхронизации. Начало выпуска абонентского декодера DRA-03 для широкополосных сетей кабельного ТВ.</p>
             <p>
              Использование  цифровых технологий обработки ТВ сигнала при кодировании обеспечило высокие показатели криптостойкости, благодаря которым система “Криптон” стала самой распространенной на территории стран бывшего СССР, и в настоящее время используется операторами России, Белоруссии, Украины, Грузии, Азербайджана, Молдовы, Казахстана, Латвии. Даже сегодня, несмотря на активное развитие цифровых систем условного доступа, аналоговая система «Криптон» устойчиво сохраняет свои позиции.
             </p>
            </div>
            <div className="page_block">
             <h3>2005</h3>
             <Img fluid={mux_841_02.childImageSharp.fluid} style={{maxWidth: "200px", maxHeight: "100px"}} alt="Система кодирования CAS Crypton для цифрового ТВ вещания"/>
            <Img fluid={enc.childImageSharp.fluid} style={{maxWidth: "200px", maxHeight: "100px"}} alt="Система кодирования CAS Crypton для цифрового ТВ вещания"/>
             <p>
               Начинается первое коммерческое использование оборудования для цифрового вещания и системы кодирования CAS Crypton в цифровом телевидении МИТРИС (MITRIS) в Ужгороде и Львове. С этого времени "Криптон" постоянно работает над развитием системы кодирования CAS Crypton, решений и оборудования для цифрового вещания.
             </p>
            </div>
            <div className="page_block">
             <h3>2006</h3>
             <Img fluid={cod_980_rms_02.childImageSharp.fluid} style={{maxWidth: "200px", maxHeight: "100px"}} alt="Декодеры Crypton 98x серии - COD980RMS"/>
             <p>
               Компания Криптон заканчивает разработку и начинает продажи новых устройств 98х серии. На киевской международной выставке EEBC/expoTEL устройство COD980RMS организаторы отмечают дипломом «Лучшая отечественная разработка».
             </p>
            </div>
            <div className="page_block">
             <h3>2007</h3>
             <Img fluid={prize_eebc_2006_02.childImageSharp.fluid} style={{maxWidth: "150px", maxHeight: "200px"}} alt="Лучшая отечественная разработка - Crypton, EEBC 2006"/>
             <p>
               Во время проведения выставки CSTB подписано дилерское соглашение с компанией «ТВТ Телевизионные Технологии», г. Санкт-Пертербург, Россия.</p>
              <p>
                Разработаны и поступают в продажу устройства в корпусах 1U, более компактные, функциональные и надежные. В скремблеры и мультиплексоры добавлены функции создания EPG и NIT таблиц.
             </p>
            </div>
            <div className="page_block">
             <h3>2008</h3>
             <p>
               Компания участвует в ряде международных выставок, изучает рынок.  Руководством компании принимаются стратегические планы по направления разработки и освоению рынка сбыта. Обновляется конструкция всего модельного ряда выпускаемой продукции. Особое вннимание уделяется качеству и долговечности. Разрабатываются новый DVB-S модулятор и сумматор.
             </p>
            </div>
            <div className="page_block">
             <h3>2009</h3>
             <p>
               Начинается разработка собственного профессионального ресивера-декриптора серии СRT1081IRD c управлением через WEB-интерфейс. Проводится ряд тестов в «полевых» условиях, начинаются продажи.  На московской выставке CSTB подписывается дилерское соглашение с компанией «Globo Traiding», Калининград, Росссия. На выставке в Индии подписывается дилерское соглашение с компанией «Traxvision», Индия.
             </p>
            </div>
            <div className="page_block">
             <h3>2010</h3>
             <p>
               Разрабатывается CAM модуль собственного производства (СRT1001CAM) для использования в современных телевизионных абонентских приемниках. Производится адаптация нового изделия для работы с большинством  имеющихся на рынке телевизионных приемников. Начинаются продажи нового DVB-S2 профессионального приемника-декриптора CRT1082IPE. На выставке EEBC/expoTEL организатор отмечает устройствo СRT1081MUX в номинации «Лучшая отечественная разработка». Компания получает сертификат соответствия системы связи России на всю выпускаемую продукцию. Индия.
             </p>
            </div>
            <div className="page_block">
             <h3>2011</h3>
             <p>
               Компанией разрабатывается DVB скремблер CAS «Crypton» c входным интерфейсом IP, начинаются его тесты. Ведется разработка собственного четырехканального DVB-C модулятора CRT1041QAM.  Криптон участвует в международных выставках в  Индии, Киеве, Москве.
             </p>
            </div>
            <div className="page_block">
             <h3>2012</h3>
             <p>
               Начинаются продажи скремблера COD912IPE, полнодиапазонного DVB-С модулятора. Ведутся разработки по таким перспективным направлениям, как: DVB-T2 приемник-декриптор с функцией мультиплексирования, HDMI-ASI энкодер. Участие в выставке IBC2012 в Амстердаме показывает, что оборудование Криптон успешно конкурирует с мировыми брендами и вдохновляет на дальнейшее развитие.
             </p>
            </div>
            <div className="page_block">
             <h3>2013</h3>
             <Img fluid={crt1082ipe_sm.childImageSharp.fluid} style={{maxWidth: "364px", maxHeight: "108px"}} alt="8-канальный DVB-S/S2 ресивер c мультиплексором CRT1081IRD-S2-MX - новейшая разработка компании Crypton"/>
             <p>
               Новейшая разработка нашей компании - CRT1081IRD-S2-MX. Устройство имеет  8 полнофункциональных DVB-S/S2 профессиональных приемников с Common Interface для дескремблирования программ, 4 ASI входа, 4 DVB мультиплексора с ASI и IP выходами. Одно такое устройство позволяет собрать 4 новых потока из 12 входных. Управление устройством осуществляется посредством Web интерфейса.
             </p>
            </div>
            <div className="page_block">
             <h3>2014</h3>
             <p>
               С целью улучшения производственных возможностей и логистики компания сменила фактическое расположение и юридический адрес на: г. Киев. пр. Отрадный, д. 95С. Новые производственные возможности позволили резко увеличить объёмы выпускаемых партий и снизить себестоимость. Коллектив Компании практически не изменился, поэтому все разработки и огромный практический опыт подключились к реализации грандиозных замыслов и планов.
             </p>
            </div>
            <div className="page_block">
             <h3>2015</h3>
             <p>
               Новое изделие - Catch Up Server и новое направление разработок - интерактивное телевидение IPTV.
             </p>
            </div>

          </div>
        </div>

          </>
        )}
      />

      <Footer/>

    </>)

    }
  }

// <div className="contacts_item flexbox">
//   <div className="contacts_item-icon">
//     <FontAwesomeIcon className="fa_icon" icon={faClock}/>
//   </div>
//   <div className="contacts_item-content">
//     <h5>График работы</h5>
//     <p>Пон-пт: 9<sup>00</sup> &mdash; 18<sup>00</sup>
//       <br></br>
//       Суб-воскр: выходной
//     </p>
//   </div>
// </div>