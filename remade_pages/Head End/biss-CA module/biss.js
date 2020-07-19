import React from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class Biss extends React.Component {

  scrollToRef(ref, headerRef) {
    window.scroll({top: ref.current.offsetParent.offsetTop + ref.current.offsetTop - (headerRef.current.offsetWidth > 1006 ? 0 : headerRef.current.offsetHeight), left: 0, behavior: "smooth"})
  }

  readMore(e, excerpt) {
    var excerptObj = excerpt.current;
    var readMore_btn = e.target;

    if(readMore_btn.textContent.toLowerCase() === "читать полностью"){
      readMore_btn.textContent = "Свернуть";
      excerptObj.classList.remove('excerpt_hidden');
      excerptObj.classList.add('excerpt_visible');
    } else {
      readMore_btn.textContent = "Читать полностью";
      excerptObj.classList.remove('excerpt_visible');
      excerptObj.classList.add('excerpt_hidden');
    }
  }


  render () {

    var instructionRef = React.createRef();
    var descriptionRef = React.createRef();
    var allInfoRef = React.createRef();

    var headerRef = React.createRef();
    var excerpt = React.createRef();

    return (
      <>
      <StaticQuery
      query = {
          graphql`
            query   {
                  cam_biss: file(relativePath: {eq: "cam-biss.jpg"}) {
                      childImageSharp {
                          fluid(maxWidth: 620, maxHeight: 548) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
        `}

        render= {({ cam_biss }) => (
          <>

          <Helmet>
            <title>CAM модуль BISS | Купить CA-модуль с доставкой по Киеву, Украине | Crypton.com.ua</title>
            <meta name="description" content="CAM модуль BISS купить недорого с доставкой по Киеву и Украине" />
          </Helmet>

          <Header refer={headerRef} />

          <div className="breadcrumbs_div">
            <div className="container">
              <ul className="breadcrumbs">
                <li>Вы здесь:</li>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/products">Все товары</Link></li>
                <li><Link to="/customer_equipment">Абонентское оборудование</Link></li>
                <li>CAM модуль BISS</li>
              </ul>
            </div>
          </div>

          <div className="page product_page biss_page">
            <div className="container">
              <div className="productPage_top">
                <Link to="/products" className="moreBtn backToCat_button" >
                  <FontAwesomeIcon className="fa_icon" icon={faChevronLeft}/>
                  Все товары
                </Link>

                <h1>CAM модуль BISS купить недорого с доставкой по Киеву и Украине</h1>
              </div>

              <div className="productPage_main" ref={allInfoRef}>
                <div className="navbar">
                  <ul className="tabs_list  flexbox">
                    <li>
                      <button className="activeTab" onClick={(event) => {event.preventDefault()
                        this.scrollToRef(allInfoRef, headerRef)}}>Все о товаре</button>
                    </li>
                    <li>
                      <button onClick={(event) => {event.preventDefault()
                        this.scrollToRef(descriptionRef, headerRef)}}>Описание</button>
                    </li>
                    <li>
                      <button onClick={(event) => {event.preventDefault()
                        this.scrollToRef(instructionRef, headerRef)}}>Инструкция</button>
                    </li>
                  </ul>
                </div>
                <Img className="product_img" fluid = {cam_biss.childImageSharp.fluid} alt="CAM модуль доступа BISS Crypton"/>
              </div>

              <ul className="product_statuses flexbox">
                <li className="flexbox">
                  <p className="product_status product_status_instock">
                  <FontAwesomeIcon className="fa_icon" icon={faCheckCircle}/>Есть в наличии</p>
                </li>
              </ul>

              <div className="product_aboutBlock product_delivery">
                <div className="title flexbox">
                  <p>Доставка по:</p><span>Киеву, Украине</span>
                </div>
              </div>

              <div className="description" ref={descriptionRef}>
                <h2 className="title">Описание</h2>

                <div ref={excerpt} className="js_excerpt excerpt_hidden">
                  <h3 className="h3_bright">Используя CAM модуль BISS, вы без абонплаты сможете дополнительно смотреть множество спутниковых каналов!</h3>
                  <div className="product_block">
                    <p>Технологии не стоят на месте. Если несколько лет назад для приёма спутниковых программ обязательно нужен был специальный ресивер, то сейчас современные телевизоры имеют универсальные встроенные тюнеры, которые позволяют просматривать аналоговые, кабельные, эфирные и, в том числе, спутниковые каналы. Наличие такого телевизора, с универсальным цифровым тюнером и поддержкой DVB-S и DVB-S2, позволяет смотреть спутниковое телевидение без дополнительных устройств, просто подключив спутниковую антенну напрямую к телевизору.</p>
                  </div>
                  <div className="product_block">
                    <h4>При этом есть ряд преимуществ:</h4>
                    <ul>
                      <li>нет дополнительного рессивера</li>
                      <li>нет лишних соединительных шнуров</li>
                      <li>нет отдельного пульта дистанционного управления</li>
                    </ul>
                  </div>
                  <div className="product_block">
                    <p>Однако, не все каналы на спутнике вещаются в открытом виде. Некоторые каналы закрыты полностью, и их просмотр возможен только после покупки фирменного CAM-модуля транслятора и оплаты ежемесячной абонплаты. А есть и каналы закрытые кодировкой BISS, которые можно открыть при помощи ресивера со встроенным эмулятором кодировок. Здесь нет никакой абонплаты. В память тюнера нужно ввести статический ключ, после чего канал станет доступным к просмотру.</p>
                    <p>Но ради этого устанавливать рессивер?! И лишаться преимуществ самого телевизора?! НЕТ!</p>
                    <p>САМ-модуль Crypton BISS PRO решает проблему доступа к каналам закрытым BISS кодировкой. Установите модуль Crypton BISS PRO в CI-слот вашего телевизора, один раз введите ключи на интересующие вас каналы и наслаждайтесь просмотром. Модуль может хранить во внутренней памяти до 64 ключей и автоматически применять нужный ключ при переключении каналов.</p>
                    <p>На данный момент, используя всего одну спутниковую антенну, вы получаете возможность просмотра более 80 каналов на русском и украинском языках, а также сотен европейских и ближневосточных телеканалов, которые транслируются в некодированном формате или с кодировкой BISS со спутников Astra 4A/ Amos/ Eutelsat Hot Bird.</p>
                  </div>
                  <div className="product_block">
                    <h4>Что такое BISS?</h4>
                    <p>BISS (от англ. Basic Interoperable Scrambling System) &mdash; система условного доступа.</p>
                    <p>Спутниковые программы вещаются на большие регионы и обычно доступны на территориях нескольких государств. Но не весь контент лицензирован для трансляции в другие страны. Таким образом, открытое вещание может нарушать законодательства отдельных стран.  К самой простой, из используемых кодировок, относится BISS. Она использует статичный ключ доступа. Код доступа не меняется, поэтому ключ можно ввести один раз и постоянно иметь доступ. По этой причине использование кодировки BISS позволяет вещателю совершенно формально уйти от нарушения законодательства, при этом пользователю не сложно узнать ключ для раскодирования. BISS достаточно популярна в спутниковом вещании и в этом легко убедиться по списку программ.</p>
                  </div>
                  <div className="product_block">
                    <h4>Профессиональное мультипрограммное дескремблирование BISS PRO</h4>
                    <p>Если в транспортном потоке несколько программ с кодировкой БИСС, то один модуль способен одновременно обрабатывать сразу 8 программ, каждую своим ключом. Такая возможность используется только в профессиональном применении. В профессиональных ресиверах, таких как <Link to="/crt1081ird-s2-ip">CRT1081IRD-S2-IP</Link>, не нужно на каждую программу ставить отдельный модуль. Один Crypton BISS может заменить 8 модулей. В телевизорах эта возможность не используется.</p>
                  </div>
                </div>
                <button className="moreBtn .readMore_btn" onClick={(e) => this.readMore(e, excerpt)}>Читать полностью
                <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                </button>

                <h2 ref={instructionRef}>Инструкция по использованию Crypton BISS CAM</h2>
                <div className="product_block">
                  <ol>
                    <li>Войдите в меню CI  вашего телевизора, или ресивера. В зависимости от конкретной модели меню может называться иначе, например: "Общий интерфейс", "Common Interface", «СА Интерфейс», «CI Interface», «СА Модуль» «САМ» и т.д. Расположение меню также зависит от производителя телевизора и модели. Читайте описание к телевизору. </li>
                    <li>В меню CI выберите пункт меню &mdash; «Crypton BISS».</li>
                    <li>В меню «Crypton BISS» увидите следующие пункты меню:
                      <ul>
                        <li>«Key 1»</li>
                        <li>«Key 2»</li>
                        <li>«Key 3»</li>
                        <li>и т. д. до «Key 64»</li>
                      </ul>
                    </li>
                    <li>Войдите в меню «Key...», например: «Key 1»
                    </li>
                    <li>В меню «Key...» увидите следующие пункты меню:
                      <ul>
                        <li>«Key»</li>
                        <li>«PID»</li>
                        <li>«Back»</li>
                      </ul>
                    </li>
                    <li>В пункте меню «Key» вводите необходимый ключ. В пункте меню «PID» вводите video PID программы — которую необходимо декодировать.</li>
                    <li>После окончания введения данных нажимаете на «Back» и выходите из режима редактирования.</li>
                  </ol>
                </div>
                <div className="product_block">
                  <h4>Приятного просмотра!</h4>
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

// короткое описание:
//
// <font size="5" color="red">Вы можете купить с доставкой по  Киеву и Украине.</font><br /><br />
// <font size="5" color="green">Используя CAM модуль BISS, вы без абонплаты сможете дополнительно смотреть множество спутниковых каналов!</font><br /><br />
// DVB-CI модуль Biss  используется для декодирования системы условного доступа с фиксированным ключом BISS. Модуль  подходит к телевизорам, спутниковым ресиверам и другому оборудованию с  CI-интерфейсом.  В соответствии со спецификацией BISS, для обеспечения доступа необходимо предварительно ввести специальный ключ, карта доступа не требуется. Удобное меню этого модуля позволяет быстро вручную ввести ключи и идентификаторы. Модуль может хранить во внутренней энергонезависимой памяти <b>до 64 ключей</b> и автоматически применять нужный ключ при распознавании сервиса.
