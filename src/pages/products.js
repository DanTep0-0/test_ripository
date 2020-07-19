import React from "react";
// import Img from "gatsby-image";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import { Link, StaticQuery, graphql } from "gatsby";
import {Helmet} from "react-helmet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <>
  <Header/>

  <Helmet>
    <title>Оборудование для головной станции ТВ | Crypton.com.ua</title>
    <meta name="description" content='Ресиверы, скремблеры, мультиплексоры, QAM Модуляторы, Энкодеры/декодеры, Сумматоры (делители) мощности, IPTV серверы Catch-Up, IP стримеры, Абонентское оборудование' />
  </Helmet>

  <div className="breadcrumbs_div">
    <div className="container">
      <ul className="breadcrumbs">
        <li>Вы здесь:</li>
        <li><Link to="/">Главная</Link></li>
        <li><span>Все товары</span></li>
      </ul>
    </div>
  </div>

  <div className='content'>

    <section className="block start_block">
      <div className="container">
        <h1>
          Оборудование Crypton
        </h1>
        <p>Качество и надежность</p>
      </div>
    </section>

    <div className="page allProducts_page">
      <div className="container">

        <ul className="list">
          <li>
            <h3><Link to="/p_receivers" className="moreBtn">Ресиверы/приёмники<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link></h3>
            <div className="textDiv">
              <p>
                Профессиональный спутниковый ресивер является одним из устройств, с которых начинается головная станция для телевещания, поскольку он получает ТВ контент из разных источников: со спутников, из эфирного и кабельного вещания. Ресиверы имеют CI слоты для CAM модулей, которые позволяют дескремблировать кодированные программы, а также они могут выполнять функции IP стримеров.
              </p>
              <p>
                Особенность приёмников от Криптона заключается в том, что они многоканальные (то есть имеют несколько приёмных модулей в одном устройстве), за счёт чего значительно снижается цена, уменьшаются размеры, а удобство в управлении выходит на новый уровень. Появляется возможность получить готовые мультиплексы нужных программ с одного устройства, что тоже весьма экономно.
              </p>
            </div>
          </li>

          <li>
            <h3><Link to="/scramblers" className="moreBtn">Cкремблеры<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link></h3>
            <div className="textDiv">
              <p>
                Скремблеры - это системы условного доступа CAS Crypton, которые используются в цифровом и кабельном телевидении для предоставления доступа к платному контенту и предотвращения кражи транслируемого сигнала. Инвертирование одной из составляющих телесигнала и передача данных происходит без участия клиентской стороны, а вот восстановление исходной последовательности сигнала происходит на стороне пользователя.
              </p>
            </div>
          </li>

          <li>
            <h3><Link to="/multiplexers" className="moreBtn">Мультиплексоры DVB<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link></h3>
            <div className="textDiv">
              <p>
                Мультиплексоры позволяют разобрать входные мультипрограммные (MPTS) потоки и ремультиплексировать (объединить) полученные программы в MPEG-TS транспортный поток с необходимым набором программ на выходе.
              </p>
              <p>
                Мультиплексор DVB выполняет такие функции, как передача составляющих телевизионного сигнала по одному цифровому каналу передачи данных, а также снабжение служебными пакетами поиска, декодирования и воспроизведения на приемной стороне.
              </p>
            </div>
          </li>

          <li>
            <h3><Link to="/qam_modulators" className="moreBtn">Модуляторы DVB<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link></h3>
            <div className="textDiv">
              <p>
                Модуляторы преобразуют цифровой сигнал в радиочастотный для распространения на большие расстояния в кабеле (QAM модуляция) или эфире (QPSK модуляция, которая широко используется в спутниковом телевидении, МИТРИС, LVDS).
              </p>
            </div>
          </li>

          <li>
            <h3><Link to="/encoders" className="moreBtn">Энкодеры/декодеры<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link></h3>
            <div className="textDiv">
              <p>
                Энкодеры нужны для преобразования аналоговых аудио- и видеоданных в цифровые стандарты MPEG-2. Данное оборудование обеспечивает эффективную доставку контента на приемные устройства разных типов.
              </p>
            </div>
          </li>

          <li>
            <h3><Link to="/combiners" className="moreBtn">Сумматоры (делители) мощности<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link></h3>
            <div className="textDiv">
              <p>
                Сумматоры мощности используются для объединения нескольких входных радиочастотных сигналов на одном выходе.
              </p>
            </div>
          </li>

          <li>
            <h3><Link to="/iptv_servers" className="moreBtn">IPTV серверы Catch-Up<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link></h3>
            <div className="textDiv">
              <p>
                Сервер Catch-Up TV нужен вам, если у Вас уже есть головная станция линейного телевидения. В таком случае достаточно поставить Сервер Crypton Catch-Up на выходе в качестве IP стримера. Всего одно устройство и Вы можете начать вещание интерактивного телевидения IPTV!
              </p>
            </div>
          </li>

          <li>
            <h3><Link to="/ip_streamers" className="moreBtn">IP стримеры<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link></h3>
            <div className="textDiv">
              <p>
                IP стримеры используются для трансляции телевизионного контента в сетях IPTV или для мониторинга сигналов головного узла DTV. Стример - это простое и экономичное решение для вещания DTV в IP-сетях.
              </p>
            </div>
          </li>
        </ul>

        <ul className="productsBlocks">
          <li>
          <h3><Link to="/customer_equipment" className="moreBtn">Абонентское оборудование<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link></h3>
          <div className="textDiv">
            <p>
              Абонентское оборудование цифрового ТВ предназначено для приема и воспроизведения телепрограмм, передаваемых по сети проводного вещания, клиентом. Криптон производит абонентские ресиверы, CAM/CI модули доступа, карты условного доступа, а также SMART-карты.
            </p>
          </div>
          </li>
        </ul>

      </div>
    </div>
  </div>

  <Footer/>
</>
)
