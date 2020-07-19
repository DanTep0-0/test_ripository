import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import {Helmet} from "react-helmet";

export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
              cstb2014logo: file(relativePath: {eq: "cstb2014logo.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 500, maxHeight: 90) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
              eebc2013logo: file(relativePath: {eq: "eebc2013logo.jpeg"}) {
                  childImageSharp {
                      fluid(maxWidth: 225, maxHeight: 225) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
              ibc2013_logo: file(relativePath: {eq: "ibc2013_logo.jpeg"}) {
                  childImageSharp {
                      fluid(maxWidth: 500, maxHeight: 333) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
              logo_ibc: file(relativePath: {eq: "logo_ibc.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 866, maxHeight: 1024) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
              eebc2011_logo: file(relativePath: {eq: "eebc2011_logo.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 298, maxHeight: 263) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
              scat2011_logo: file(relativePath: {eq: "scat2011_logo.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 130, maxHeight: 110) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
              eebc_award: file(relativePath: {eq: "eebc_award.jpeg"}) {
                  childImageSharp {
                      fluid(maxWidth: 314, maxHeight: 451) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
              certificate: file(relativePath: {eq: "certificate.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 264, maxHeight: 373) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
              sgs: file(relativePath: {eq: "sgs.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 480, maxHeight: 251) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
              eebc: file(relativePath: {eq: "105.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 100, maxHeight: 100) {
                      ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      `}
      render= {({ cstb2014logo, eebc2013logo, ibc2013_logo, logo_ibc, eebc2011_logo, scat2011_logo, eebc_award, certificate, sgs, eebc }) => (
    <>

    <Helmet>
      <title>Новости | Crypton.com.ua</title>
      <meta name="description" content='Новости компании "Криптон"' />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/profile">Компания</Link></li>
          <li>Новости</li>
        </ul>
      </div>
    </div>

     <div className="page news_page">
      <div className="container">
        <h1 className="pageName">Новости</h1>

        <div className="news_wrapper">

          <Link  to="/cod912ipe_asi" className="news_item">
            <div className="title">
              <h6>Новейшая разработка &mdash; скремблер COD912IPE с интерфейсом ASI</h6>
            </div>
            <div className="date">
              <p>10.07.2020</p>
            </div>
            <div className="textDiv">
              <p>Криптон представил новую модель &mdash; 4-х канальный DVB скремблер системы условного доступа CAS Crypton, предназначенный для работы в составе головных станций. Мы усовершенствовали данное устройство и добавили ему ASI-интерфейс.</p>
            </div>
          </Link>

          <Link to="/top_sales" className="news_item">
            <div className="title">
              <h6>Профессиональный DVB-S2 приемник &mdash; лидер продаж</h6>
            </div>
            <div className="textDiv">
              <p>Универсальным ответом на вопрос "Где взять сигнал? Что является источником сигала?" является спутниковый приёмник. Объединение в одном корпусе нескольких ресиверов даёт значительный выигрыш в цене, размерах, потребляемой мощности и удобстве управления.</p>
            </div>
          </Link>

          <Link to="/news/no_scr_t2" className="news_item">
            <div className="title">
              <h6>В связи с отменой кодирования Т2 мы предлагаем бюджетное решение для принятия эфирных каналов</h6>
            </div>
            <div className="date">
              <p>18.07.14</p>
            </div>
            <div className="textDiv">
              <p>Национальный Совет Украины по вопросам телевидения и радиовещания 17 июля принял решение №296 об отмене кодирования сигнала цифрового эфирного сигнала Т2, поэтому компания "Криптон" предлагает свое бюджетное решение для принятия эфирных каналов и ретрансляции в кабельных и IPTV сетях.</p>
            </div>
          </Link>

          <Link to="/news/cstb2014" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={cstb2014logo.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Криптон принял участие в международной выставке CSTB-2014 в Москве</h6>
                <div className="date">
                  <p>31.01.14</p>
                </div>
              </div>
            </div>
            <div className="textDiv">
              <p>На выставке были представлены  новые разработки &mdash; профессиональный 4-х входовый DVB-T2 приемник, 4-х канальный IP-QAM модулятор с функцией скремблирования, профессиональный 8-входовый DVB-S2 приемник-декриптор со встроенным 4-х канальным мультиплексором.</p>
            </div>
          </Link>

          <Link to="/news/eebc2013" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={eebc2013logo.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Криптон принял участие в международной выставке EEBC2013 в Киеве</h6>
                <div className="date">
                  <p>26.10.13</p>
                </div>
              </div>
            </div>
            <div className="textDiv">
              <p>На этой выставке впервые была представлена новая разработка — цифровой 4-х канальный IP-QAM модулятор со встроенным 4-х канальным скремблером CAS Crypton. Устройство получило награду «Лучшая отечественная разработка, представленая на выставках «EEBC 2013 и Expotel 2013».</p>
            </div>
          </Link>

          <Link to="/news/ibc2013" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={ibc2013_logo.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Криптон принял участие в международной выставке IBC-2013 в Амстердаме</h6>
                <div className="date">
                  <p>18.09.13</p>
                </div>
              </div>
            </div>
            <div className="textDiv">
              <p>13-17 сентября 2013 Криптон уже четвертый год подряд принимал учаcтие в основном событии телекоммуникационного рынка Европы- выставке IBC2013 в Амстердаме. С каждым годом внимание к продукции, производимой нашей компанией растет. Вот и в этот раз выставка прошла плодотворно и с максимальной отдачей.</p>
            </div>
          </Link>

          <Link to="/news/cstb2013" className="news_item">
            <div className="title">
              <h6>Криптон принял участие в международной выставке CSTB-2013 в Москве</h6>
            </div>
            <div className="date">
              <p>01.02.2013</p>
            </div>
            <div className="textDiv">
              <p>На выставке были представлены - мультиплексоры, энкодеры, скремблеры, QAM модуляторы, система условного доступа. Также был представлен лидер продаж среди профессиональных приемников - DVB-S2/S приемник CRT1081IRD-S2-IPE Посетителям выставки были представлены две новейших разработки. Спасибо всем, кто посетил наш стенд за приятное и конструктивное общение.</p>
            </div>
          </Link>

          <Link to="/news/eebc2012" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={eebc_award.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Криптон принял участие в международной выставке EEBC 2012 в Киеве</h6>
                <div className="date">
                  <p>21.10.2012</p>
                </div>
              </div>
            </div>
            <div className="textDiv">
              <p>На выставке EEBC 2012 (17-19 октября, Киев) Криптон завоевал важную награду за лучшую отечественную разработку.</p>
            </div>
          </Link>

          <Link to="/news/ibc2012" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={logo_ibc.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Криптон принял участие в международной выставке IBC2012 в Амстердаме</h6>
                <div className="date">
                  <p>12.09.2012</p>
                </div>
              </div>
            </div>
            <div className="textDiv">
              <p>Особый интерес вызвало обсуждение использования 8-канального ресивера CRT1081IPE в качестве стримера в IPTV сети на примере действующего в Амстердаме вещания IPTV с этим приёмником.</p>
            </div>
          </Link>

          <Link to="/news/cstb2012" className="news_item">
            <div className="title">
              <h6>Криптон принял участие в международной выставке CSTB-2012 в Москве</h6>
            </div>
            <div className="date">
              <p>10.02.2012</p>
            </div>
            <div className="textDiv">
              <p>«Криптон» принял участие в выставке CSTB-2012, которая проходила в Москве с 07 по 09 февраля 2012 года. На неё мы пришли с новейшими разработками системы условного достпа CAS Crypon.</p>
            </div>
          </Link>

          <Link to="/news/eebc2011" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={eebc2011_logo.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Криптон принял участие в международной выставке EEBC-2011 в Киеве</h6>
                <div className="date">
                  <p>22.10.2011</p>
                </div>
              </div>
            </div>
            <div className="textDiv">
              <p>Криптон принял участие в выставке EEBC-2011 в Киеве. Было представлено оборудование для организации условного доступа</p>
            </div>
          </Link>

          <Link to="/news/scat2011" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={scat2011_logo.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Криптон принял участие в международной выставке SCaT India 2011 в Индии</h6>
                <div className="date">
                  <p>18.10.2011</p>
                </div>
              </div>
            </div>
            <div className="textDiv">
              <p>SCaT India - самая крупная выставка спутникового и кабельного телевидения в Индии. Оборудование Криптон представлялось нашим партнёром в Индии - фирмой Traxvision India.</p>
            </div>
          </Link>

          <Link to="/news/cstb2011" className="news_item">
            <div className="title">
              <h6>Криптон принял участие в международной выставке CSTB-2011 в Москве</h6>
            </div>
            <div className="date">
              <p>4.02.2011</p>
            </div>
            <div className="textDiv">
              <p>Мы приняли участие в международной выставке CSTB 2011, которая проходила в Москве с 1 по 3 февраля в выставочном центре "Крокус-Экспо". Криптон представил свою продукцию на стенде своего дилера по России – компании «Globo Trading».</p>
            </div>
          </Link>

          <Link to="/news/rfcert" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={certificate.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Российский сертификат</h6>
                <div className="date">
                  <p>24.03.2010</p>
                </div>
              </div>
            </div>
            <div className="textDiv">
              <p>ООО «Компания «Криптон» получила сертификат соответствия СИСТЕМЫ СЕРТИФИКАЦИИ В ОБЛАСТИ СВЯЗИ РФ. Регистрационный номер ОС-1-ОТ-0334. Сертификат выдан на ВСЕ оборудование, производимое Компанией на данный момент и имеет срок действия до 24 марта 2013 года.</p>
            </div>
          </Link>

          <Link to="/news/sales" className="news_item">
            <div className="title">
              <h6>СУПЕРАКЦИЯ!</h6>
            </div>
            <div className="date">
              <p>25.02.2010</p>
            </div>
            <div className="textDiv">
              <p>С 25 февраля 2010 года «Криптон» предлагает Вам приобрести четырехканальный аналоговый кодер <b>COD506.300M</b> по весенней антикризисной цене – всего <b>990 долларов США</b>.</p>
            </div>
          </Link>

          <Link to="/news/sgs" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={sgs.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Абонентский ресивер с функцией PVR</h6>
              </div>
            </div>
            <div className="textDiv">
              <p>Всем операторам, работающим в системе вещания «Митрис» и их абонентам доступен для продажи спутниковый абонентский ресивер с функцией PVR. Торговая марка: SkyGate Модель: Smart  Поддержка системы условного доступа (CAS) Crypton подтверждена нашими специалистами.</p>
            </div>
          </Link>

          <Link to="/news/broadcast_india2009" className="news_item">
            <div className="title">
              <h6>Выставка 19th Broadcast India 2009</h6>
            </div>
            <div className="date">
            <p>01.11.2009</p>
            </div>
            <div className="textDiv">
              <p>29-31 октября 2009 года компания Crypton стала частью будущего технологий вещания, посетив выставку Broadcast India 2009, проходившую в Мумбаи, Индия. Наш стенд был № L1214. Шоу Broadcast India было серьезно настроено внести свой вклад в прогресс быстро развивающейся индустрии вещания и развлечений. В 2009 году Broadcast India Show продемонстрировала все признаки того, что она стала еще больше. Местом проведения стал выставочный центр Бомбея - площадь 1 000 000 кв. Футов, в которой разместились 1000 компаний-экспонентов и 75 000 посетителей!</p>
            </div>
          </Link>

          <Link to="/news/eebc2009" className="news_item">
            <div className="title">
              <h6>Выставка EEBC-2009</h6>
            </div>
            <div className="date">
              <p>24.10.2009</p>
            </div>
            <div className="textDiv">
              <p>Crypton принял участие в ведущем событии в области электронных медиа-коммуникаций в Восточной Европе - «EEBC 2009 Telecom & Broadcasting», которое состоялось в Киеве, Украина. Мы продемонстрировали новую платформу нашего оборудования - COMPACT HEADEND. Наши специалисты и инженеры по продажам продемонстрировали новую линейку оборудования в работе и ответили на все вопросы посетителей, касающиеся спецификации наших устройств.</p>
            </div>
          </Link>

          <Link to="/news_cstb-2009" className="news_item">
            <div className="title">
              <h6>Выставка CSTB-2009</h6>
            </div>
            <div className="date">
              <p>06.02.2009</p>
            </div>
            <div className="textDiv">
              <p>Компании «GLOBO TRADING» и «Crypton» на международной выставке CSTB 2009 объявили о начале совместной работы в рамках стратегического партнерства в области производства, продвижения и реализации потребителям Российской Федерации, Республики Украина и третьих стран оборудования и других программно-аппаратных средств организации цифрового телевидения и управления цифровым контентом. В рамках этой партнерской программы предполагается реализация ряда проектов, целью которых является упрощение и удешевление процесса внедрения и эксплуатации цифрового телевидения в сетях КТВ, МИТРИС, MMDS, LMDS и тому подобных сетях многоканального телевещания (МКТ).</p>
            </div>
          </Link>

          <Link to="/news_cstb-2008" className="news_item">
            <div className="title">
              <h6>Выставка CSTB-2008</h6>
            </div>
            <div className="date">
              <p>08.02.2008</p>
            </div>
            <div className="textDiv">
              <p>4 февраля - 7 февраля 2008г. Компания "Криптон" принимает участие в 10-ой международной выставке и конференции CSTB-2008 в МВЦ «Крокус Экспо» в Москве. Наш стенд 408</p>
            </div>
          </Link>

          <Link to="/news_eebc-2008" className="news_item">
            <div className="title">
              <div className="left_side">
                <Img fluid={eebc.childImageSharp.fluid} />
              </div>
              <div className="right_side">
                <h6>Компания "Криптон" принимает участие в выставке ЕЕВС-2008</h6>
                <div className="date">
                  <p>01.11.2008</p>
                </div>
              </div>
            </div>
            <div className="textDiv">
              <p>ЕЕВС-2008 - Еastern Europe Broadband Convention -шестая восточно-европейская выставка и конференция по телекоммуникациям и телерадиовещанию состоялась 29-31 октября в выставочном центре «КиевЭкспоПлаза», г. Киев, Украина. Компания Криптон успешно участвовала в международной выставке EEBC 2008 (г.Киев). Наш стенд под номером С101.</p>
            </div>
          </Link>

          <div className="news_item">
            <div className="title">
              <h6>Вышла новая версия программы Crypton Software Suite</h6>
            </div>
            <div className="textDiv">
              <p>Вышла новая версия (CSS_v1.3.0.12) программы управления оборудованием Криптон для цифрового вещания Crypton Software Suite. За дополнительной информацией обращайтесь в службу техподдержки или пишите на support@crypton.com.ua</p>
            </div>
          </div>

          <div className="news_item">
            <div className="title">
              <h6>Изменились наши контактные телефоны</h6>
            </div>
            <div className="textDiv">
              <p>Внимание! У нас изменились контактные номера телефонов. Наши новые номера следующие: (+380642) 71-98-33, 71-81-35, 71-79-89, 71-62-80, 71-86-90</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
   )}
   />
 )
