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
                cod982: file(relativePath: {eq: "cod982.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 250) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                crt1081ird_s2_ip: file(relativePath: {eq: "crt1081ird_s2_ip.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 4158, maxHeight: 1600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                cod882asi: file(relativePath: {eq: "cod882msl.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                cod882msl: file(relativePath: {eq: "cod882msl.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
          }
      `}
      render= {({ cod982, crt1081ird_s2_ip, cod882asi, cod882msl }) => (
      <>

      <Helmet>
        <title>Мультиплексоры | Оборудование для головной станции ТВ | Crypton.com.ua</title>
        <meta name="description" content='DVB мультиплексоры, ремультиплексоры в различных комплектациях. Объединяют MPTS потоки в MPEG-TS' />
      </Helmet>

      <Header/>

      <div className="breadcrumbs_div">
        <div className="container">
          <ul className="breadcrumbs">
            <li>Вы здесь:</li>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/products">Все товары</Link></li>
            <li><span>Мультиплексоры</span></li>
          </ul>
        </div>
      </div>

      <div className="page category_page">
        <div className="container">

          <h1 className="pageName">Мультиплексоры</h1>
          <div className="products_wrapper">

            <Link to="/cod982asi" className="product_item">
              <h4 className="title">Мультиплексор COD982ASI</h4>
              <Img className="product_item_img" fluid={cod982.childImageSharp.fluid} alt="Мультиплексор со скремблером COD982ASI Crypton" />
              <hr></hr>
              <span>8-канальный DVB ремультиплексор, предназначен для выборочного ремультиплексирования программ с последующими  мультиплексированием в один транспортный поток и скремблированием.</span>
            </Link>

            <Link to="/cod982msl" className="product_item">
              <h4 className="title">Мультиплексор с модулятором COD982MSL</h4>
              <Img className="product_item_img" fluid={cod982.childImageSharp.fluid} alt="Мультиплексор с модулятором COD982MSL Crypton" />
              <hr></hr>
              <span>8-канальный DVB ремультиплексор со встроенным DVB-S модулятором, предназначен для выборочного ремультиплексирования программ с последующими  мультиплексированием в один транспортный поток и скремблированием.</span>
            </Link>

            <Link to="/crt1081ird_s2_mx" className="product_item">
              <h4 className="title">DVB-S/S2 ресивер c мультиплексором CRT1081IRD-S2-MX</h4>
              <Img className="product_item_img" fluid={crt1081ird_s2_ip.childImageSharp.fluid} alt="8-канальный DVB-S/S2 ресивер c мультиплексором CRT1081IRD-S2-MX Crypton" />
              <hr></hr>
              <span>8-канальный профессиональный ресивер-декриптор для приёма спутниковых сигналов с функцией ремультиплексирования.</span>
            </Link>

            <Link to="/cod882asi" className="product_item">
              <h4 className="title">Мультиплексор с аналоговыми входами COD882ASI</h4>
              <Img className="product_item_img" fluid={cod882asi.childImageSharp.fluid} alt="8 канальный DVB мультиплексор с аналоговыми входами COD882ASI Crypton" />
              <hr></hr>
              <span>8-канальный DVB мультиплексор, предназначен для преобразования восьми аналоговых телевизионных сигналов в цифровой поток DVB MPEG-2 TS.</span>
            </Link>

            <Link to="/cod882msl" className="product_item">
              <h4 className="title">Мультиплексор с аналоговыми входами с модулятором COD882MSL</h4>
              <Img className="product_item_img" fluid={cod882msl.childImageSharp.fluid} alt="8 канальный DVB мультиплексор с аналоговыми входами с модулятором COD882MSL Crypton" />
              <hr></hr>
              <span>8-канальный DVB мультиплексор со встроенным DVB-S модулятором, предназначен для преобразования восьми аналоговых телевизионных сигналов в цифровой поток DVB MPEG-2 TS.</span>
            </Link>
          </div>

          <div className="page_block category_description">
            <h3 className="pageName">Мультиплексоры DVB</h3>
            <p>Мультиплексоры позволяют разобрать входные мультипрограммные (MPTS) потоки и ремультиплексировать (объединить) полученные программы в MPEG-TS транспортный поток с необходимым набором программ на выходе.</p>

            <p>Мультиплексор DVB выполняет такие функции, как передача составляющих телевизионного сигнала по одному цифровому каналу передачи данных, а также снабжение служебными пакетами поиска, декодирования и воспроизведения на приемной стороне.</p>
          </div>

        </div>
      </div>

      <Footer/>
    </>
   )}
   />
 )

 // , входных 8 транспортных потоков, ASI входы, выход ASI, интерфейс управления TCP/IP, встроенный источник питания, корпус 1U
 // , 8 входов со спутниковыми ресиверами DVB-S/S2 с Common Interface +4 входа ASI. 4 выходных транспортных потока.  IP-выход - 1 Гб, multicast, unicast, mpts, spts(64 канала). 4 ASI выхода.
 // , встроенные скремблер CAS Crypton и QPSK модулятор, входы: 8 аналоговых входов видео-CVBS PAL/SECAM,  встроенный источник питания, корпус 1U.


 // <h5>Есть вариант исполнения со встроенным DVB-S модулятором - COD982MSL</h5>
 // <h5>Есть вариант исполнения со встроенным QPSK модулятором - COD882MSL</h5>


 // <Link to="/cod982asi"><h3>Мультиплексор  COD982ASI</h3>
 //     <Img fluid={first.childImageSharp.fluid} alt="" style={{height: "256px", width: "854px", backgroundSize: "cover"}} />
 //
 // 8-канальный DVB ремультиплексор, предназначен для выборочного ремультиплексирования программ с последующими  мультиплексированием в один транспортный поток и скремблированием, входных 8 транспортных потоков, ASI входы, выход ASI, интерфейс управления TCP/IP, встроенный источник питания, корпус 1U </Link>
 // <Link to="/cod982msl"><h4>Вариант исполнения со встроенным DVB-S модулятором - COD982MSL</h4></Link>
 //
 // <Link to="/crt1081ird-s2-ip"><h3>12-канальный мультиплексор, совмещённый со спутниковыми ресиверами</h3>
 //    <Img fluid={second.childImageSharp.fluid} alt="" style={{height: "255px", width: "854px", backgroundSize: "cover"}} />
 //   12 - входовый ремультиплексор DVB, 8 входов со спутниковыми ресиверами DVB-S/S2 с Common Interface +4 входа ASI. 4 выходных транспортных потока.  IP-выход - 1 Гб, multicast, unicast, mpts, spts(64 канала). 4 ASI выхода.
 // </Link>
 // <Link to="/cod882asi"><h3>8 канальный DVB мультиплексор с аналоговыми входами COD882ASI</h3>
 // <Img fluid={third.childImageSharp.fluid} alt="" style={{height: "256px", width: "854px", backgroundSize: "cover"}} />
 //  </Link>
 //  8-канальный DVB мультиплексор, предназначен для преобразования восьми аналоговых телевизионных сигналов в цифровой поток DVB MPEG-2 TS, встроенные скремблер CAS Crypton и QPSK модулятор, входы: 8 аналоговых входов видео-CVBS PAL/SECAM,  встроенный источник питания, корпус 1U
 //   <Link to="/cod882msl"><h4>Вариант исполнения со встроенным QPSK модулятором - COD882MSL</h4></Link>


 // <div>
 // Цифровой телевизионный сигнал состоит из следующих составляющих:<ul><li>Оцифрованный и компрессированный видеосигнал ;</li><li>Один или несколько каналов звука</li><li>Программный гид, телетекст, субтитры</li><li>Набор данных для платных кодированных каналов</li><li>Синхронизация</li></ul>Требуется передать их по одному цифровому каналу передачи данных (он может быть спутниковым, кабельным, эфирным, IP), при этом учесть, что скорость информации в различных сигналах разная. Для этого составляющие <b>мультиплексируются</b> - то есть режутся на блоки и складываются в один общий высокоскоростной <b>транспортный поток</b>. Для эффективного использования выделенного частотного ресурса в одном транспортном потоке обычно объединяется несколько телевизионных программ. Для поиска, декодирования и воспроизведения на приемной стороне, транспортный поток снабжается служебными пакетами. Всю эту работу выполняет специальное устройство - мультиплексор DVB.<br />У операторов телевидения часто на входе - большое количество входных <b>мультиплексированных</b> транспортных потоков, например, со спутников. И им нужно составить свой, с тем набором программ, который хотят абоненты. Для этого необходимо выполнить <b>ремультиплексирование</b> транспортных потоков. Именно для этого предназначены мультиплексоры, которые предлагает Криптон.<br />Различные мультиплексоры имеют 8 -12 входов цифровых потоков и 1-4 выходов. То есть, имея на входе до 12 различных цифровых потоков, оператор может провести анализ на предмет присутствия в них тех или иных сервисов и скрытых программ, отбросить ненужное и объединить их в новых выходных потоках. Таким образом, на выходе получаем поток с необходимым набором программ.<br />Криптон предлагает следующие мультиплексоры, которые имеются на складе и можно купить:
 // </div>

 // <MenuIPTV/>
