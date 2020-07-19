import React from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Biss extends React.Component {

  scrollToRef(ref){window.scroll({top: ref.current.offsetTop - 60, left: 0, behavior: "smooth"})}

  render () {

    var instructionRef = React.createRef();
    var descriptionRef = React.createRef();
    var allInfoRef = React.createRef();

    return (
      <>
      <StaticQuery
      query = {
          graphql`
            query   {
                  ip-qam_m : file(relativePath: {eq: "ip-qam_m .png"}) {
                      childImageSharp {
                          fluid(maxWidth: 620, maxHeight: 548) {
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

        render= {({ ip-qam_m }) => (
          <>

          <Header/>

          <div className="pageContent productPage productPage_ip_qam">
            <div className="productPage_top">
              <Link to="/" className="moreBtn backToCat_button flexbox">
                <Img className="backArrow" fluid={arrow.edges[0].node.fluid}></Img>
                Back to home
              </Link>

              <h1>IPTV приставка IP>QAM</h1>
            </div>

            <div className="productPage_main" ref={allInfoRef}>
              <div className="productPage_navbar">
                <ul className="productPage_tabs_list flexbox">
                  <li>
                    <span className="productPage_tabs_link activeTab" onClick={(event) => {event.preventDefault()
                      this.scrollToRef(allInfoRef)}}>All info</span>
                  </li>
                  <li>
                    <span className="productPage_tabs_link" onClick={(event) => {event.preventDefault()
                      this.scrollToRef(descriptionRef)}}>Description</span>
                  </li>
                  <li>
                    <span className="productPage_tabs_link" onClick={(event) => {event.preventDefault()
                      this.scrollToRef(instructionRef)}}>Instruction</span>
                  </li>
                </ul>
              </div>
              <Img className="product_img" fluid = {ip-qam_m.childImageSharp.fluid}></Img>
            </div>

            <ul className="product_statuses flexbox">
              <li className="flexbox">
                <p className="product_status product_status_instock">
                <Img fluid={tick.edges[0].node.fluid}/>Есть в наличии</p>
              </li>
            </ul>

            <div className="productPage_aboutBlock product_delivery">
              <div className="productPage_aboutBlock_heading flexbox">
                <p>Доставка по:</p><span>Киеву, Украине</span>
              </div>
            </div>

            <div className="productPage_description" ref={descriptionRef}>
              <h2 className="product_description_heading">Description</h2>



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
                <p>BISS (от англ. Basic Interoperable Scrambling System) - система условного доступа.</p>
                <p>Спутниковые программы вещаются на большие регионы и обычно доступны на территориях нескольких государств. Но не весь контент лицензирован для трансляции в другие страны. Таким образом, открытое вещание может нарушать законодательства отдельных стран.  К самой простой, из используемых кодировок, относится BISS. Она использует статичный ключ доступа. Код доступа не меняется, поэтому ключ можно ввести один раз и постоянно иметь доступ. По этой причине использование кодировки BISS позволяет вещателю совершенно формально уйти от нарушения законодательства, при этом пользователю не сложно узнать ключ для раскодирования. BISS достаточно популярна в спутниковом вещании и в этом легко убедиться по списку программ.</p>
              </div>
              <div className="product_block">
                <h4>Профессиональное мультипрограммное дескремблирование BISS PRO</h4>
                <p>Если в транспортном потоке несколько программ с кодировкой БИСС, то один модуль способен одновременно обрабатывать сразу 8 программ, каждую своим ключом. Такая возможность используется только в профессиональном применении. В профессиональных ресиверах, таких как <Link to="/crt1081ird-s2-ip">CRT1081IRD-S2-IP</Link>, не нужно на каждую программу ставить отдельный модуль. Один Crypton BISS может заменить 8 модулей. В телевизорах эта возможность не используется.</p>
              </div>
              <h2 ref={instructionRef}>Инструкция по использованию CryptOn BISS CAM</h2>
              <div className="product_block">
                <ol>
                  <li>Войдите в меню CI  вашего телевизора, или ресивера. В зависимости от конкретной модели меню может называться иначе, например: "Общий интерфейс", "Common Interface", «СА Интерфейс», «CI Interface», «СА Модуль» «САМ» и т.д. Расположение меню также зависит от производителя телевизора и модели. Читайте описание к телевизору. </li>
                  <li>В меню CI выберите пункт меню - «Crypton BISS».</li>
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





          <Footer/>

          </>
        )}
      />
    </>)

    }
  }
