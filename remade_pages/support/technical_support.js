import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image";
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class Server_Solutions extends React.Component {

  render () {
    return (
    <>

    <Helmet>
      <title>Снятое с производства | Оборудование для головной станции ТВ | Crypton.com.ua</title>
      <meta name="description" content='Техническая информация по предоставляем компанией "Crypton" товарам, снятым с производства.' />
    </Helmet>

    <Header/>

    <div className="breadcrumbs_div">
      <div className="container">
        <ul className="breadcrumbs">
          <li>Вы здесь:</li>
          <li><Link to="/">Главная</Link></li>
          <li><span>Поддержка</span></li>
          <li><span>Снятое с производства</span></li>
        </ul>
      </div>
    </div>

    <StaticQuery
      query = {
          graphql`
            query   {
                scheme_cod_881_asi: file(relativePath: {eq: "scheme_cod_881_asi.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 500, maxHeight: 183) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                scheme_cod_881_ms: file(relativePath: {eq: "scheme_cod_881_ms.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 500, maxHeight: 176) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                scheme_cod_980_rms: file(relativePath: {eq: "scheme_cod_980_rms.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 500, maxHeight: 184) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                scheme_rmd_940: file(relativePath: {eq: "scheme_rmd_940.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 500, maxHeight: 176) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={({ scheme_cod_881_asi, scheme_cod_881_ms,  scheme_cod_980_rms, scheme_rmd_940 }) =>(
        <div className="page support_page">
         <div className="container">
            <div className="productPage_main">
              <h1 className="pageName">Техническая информация по снятому с производства оборудованию</h1>
              <div className="product_block">
                <details className="accordion-item">
                  <summary>
                    <span>Двухканальный кодер-мультиплексор COD802MS</span>
                    <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                  </summary>

                  <div className="content productPage">
                    <div className="product_block">
                      <p>
                      Более современная модель - <Link to="/cod882msl">MPEG2 кодер Crypton COD882MSL</Link>
                      </p>
                      <h3>Назначение</h3>
                      <p>
                        Двухканальный кодер-мультиплексор СOD802MS предназначен для выборочного кодирования сервисов во входных транспортных DVB-потоках согласно спецификации EN50083-9, для поддержки абонентской службы (SMS).
                      </p>
                    </div>
                    <div className="product_block">
                      <h3>Возможности</h3>
                      <ul>
                        <li>
                          конфигурация выходного транспортного потока и управление условным доступом
                        </li>
                        <li>
                          мультиплексирование 2-х входных DVB многопрограммных транспортных потоков от различных источников
                        </li>
                        <li>
                          кодирование до 8-и телевизионных программ с индивидуальными ключами
                        </li>
                        <li>
                          замена PID и формирование SI согласно DVB спецификации
                        </li>
                        <li>
                          работа в единой сети группы устройств (интерфейс TCP-IP)
                        </li>
                        <li>
                          информационный выход с QPSK модулятора
                        </li>
                      </ul>
                    </div>
                    <div className="product_block">
                      <h3>Краткое описание</h3>
                      <p>
                        В основу работы кодера-мультиплексора COD802MS положен принцип мультиплексирования двух потоков DVB сигналов с дальнейшим кодированием и QPSK модуляцией кодированного сигнала в L-band диапазон. Устройство осуществляет преобразование входных SLVDS (Serial LVDS) сигналов в DVB-SPI сигналы, коммутацию многопрограммных транспортных потоков от двух различных источников в один транспортный поток, конфигурирование выходного транспортного потока и управление условным доступом, выполняет кодирование до 8-и телевизионных программ, связь с внешним управляющим компьютером через TCP/IP интерфейс.
                      </p>
                      <p>
                        Модуль QPSK модулятора преобразует выходной сигнал модуля кодера в высокочастотный (L-band) сигнал. Поставляемая вместе с изделием базовая программа управления DVB устройствами Криптон "DVB Master", позволяет настраивать режимы работы изделия, осуществлять его конфигурирование. Областью применения являются головные станции цифровых кабельных, МИТРИС-, MMDS-, LMDS-сетей.
                      </p>
                    </div>
                    <div className="productPage_properties">
                      <div className="product_block">
                        <h3>Технические характеристики</h3>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Основное</h4>
                            <dl className="flexbox">
                              <dt><span>Входы</span></dt>
                              <dd><span>cериализованный (Serial LVDS) транспортный поток DVB-SPI (опционально DVB-ASI или DVB-SPI)</span></dd>
                              <dt><span>Количество входов</span></dt>
                              <dd><span>2</span></dd>
                              <dt><span>Система кодирования</span></dt>
                              <dd><span>	CAS Crypton (соответствует DVB-CA спецификации)</span></dd>
                              <dt><span>Макс. количество кодированных каналов</span></dt>
                              <dd><span>8</span></dd>
                              <dt><span>Макс. суммарная скорость входных потоков</span></dt>
                              <dd><span>45 Мбит/с</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>QPSK модулятор</h4>
                            <dl className="flexbox">
                              <dt><span>Количество скремблируемых программ</span></dt>
                              <dd><span>8</span></dd>
                              <dt><span>Макс. скорость входного потока</span></dt>
                              <dd><span>70Мбит/с</span></dd>
                              <dt><span>Макс. символьная скорость</span></dt>
                              <dd><span>45Мсимв/с</span></dd>
                              <dt><span>Диапазон частот</span></dt>
                              <dd><span>970-2150МГц</span></dd>
                              <dt><span>Точность установки частоты</span></dt>
                              <dd><span>±5кГц</span></dd>
                              <dt><span>Режимы FEC</span></dt>
                              <dd><span>1/2, 2/3, 3/4, 5/6, 7/8 (согласно DVB-S спецификации)</span></dd>
                              <dt><span>Выход</span></dt>
                              <dd><span>L-Band</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Управление</h4>
                            <dl className="flexbox">
                              <dt><span>Способ</span></dt>
                              <dd><span>Удаленное(Ethernet (TCP/IP))</span></dd>
                              <dt><span>Программное обеспечение</span></dt>
                              <dd><span>«Cryptоn DVB Master»</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Физические параметры</h4>
                            <dl className="flexbox">
                              <dt><span>Размер</span></dt>
                              <dd><span>2U(19inch)</span></dd>
                              <dt><span>Размер</span></dt>
                              <dd><span>93мм х 482,6мм х 300мм</span></dd>
                              <dt><span>Питание</span></dt>
                              <dd><span>AC 90 - 260В</span></dd>
                              <dt><span>Мощность</span></dt>
                              <dd><span>{"< 40W"}</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Климатические условия</h4>
                            <dl className="flexbox">
                              <dt><span>Температура при работе</span></dt>
                              <dd><span>0°С - +45°С</span></dd>
                              <dt><span>Влажность при работе</span></dt>
                              <dd><span>5% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Температура при хранении</span></dt>
                              <dd><span>-40°С - +70°С</span></dd>
                              <dt><span>Влажность при хранении</span></dt>
                              <dd><span>0% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Вентиляция</span></dt>
                              <dd><span>Принудительная циркуляция воздуха</span></dd>
                            </dl>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>

                <details className="accordion-item">
                  <summary>
                    <span>Четырехканальный MPEG2 кодер-мультиплексор MUX841</span>
                    <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                  </summary>

                  <div className="content productPage">
                    <div className="product_block">
                      <h3>Назначение</h3>
                      <p>
                        Четырехканальный MPEG2 видео-аудио кодер-мультиплексор MUX841 предназначен для мультиплексирования 4-х входных аналоговых или цифровых D1 (для кодера COD841S-1) видео-аудиопотоков в один многопрограммный DVB-транспортный поток, преобразования входных аналоговых видео-аудиопотоков в цифровые (MPEG-2), формирования SI согласно DVB спецификации, преобразования выходного транспортного потока в последовательный (Serial LVDS) формат.
                      </p>
                    </div>
                    <div className="product_block">
                      <h3>Возможности</h3>
                      <ul>
                        <li>
                          наличие CVBS- и D1 (CCIR-601) входов
                        </li>
                        <li>
                          индикация готовности каналов к работе
                        </li>
                        <li>
                          синхронная коммутация звуковых и видеосигналов
                        </li>
                        <li>
                          кадровая синхронизация
                        </li>
                        <li>
                          коррекция временных искажений видеосигнала
                        </li>
                        <li>
                          возможность вывода потока в DVB-ASI формате (опционально)
                        </li>
                        <li>
                          возможность каскадирования изделий путем их последовательного соединения
                        </li>
                      </ul>
                    </div>
                    <div className="product_block">
                      <h3>Краткое описание</h3>
                      <p>
                        Четырехканальный MPEG2 видео-аудио кодер-мультиплексор MUX841 устанавливается в разрыв цепи между источником видеосигнала и модулятором радиосигнала телевизионного изображения. Для управления изделием, его подключают к коммуникационному COM-порту компьютера. Управление несколькими изделиями осуществляется путем их последовательного соединения.
                      </p>
                      <p>
                        Областью использования четырехканального MPEG2 видео-аудио кодера-мультиплексора MUX841 являются головные станции цифровых кабельных, МИТРИС-, MMDS-, LMDS- сетей, а также в качестве коммутаторов региональной рекламы в цифровых телевизионных сетях.
                      </p>
                      <p>
                        Работой четырехканального MPEG2 видео-аудио кодера-мультиплексора MUX841 управляет программа "Loader_1_0", которая распространяется вместе с оборудованием ООО "Криптон". Программа тестировалась под управлением следующих ОС: Windows 98, Windows XP, Windows 2000. Программа позволяет считывать текущую конфигурацию, редактировать ее и загружать измененные параметры в изделие, т.е. осуществлять перенастройку системы.
                      </p>
                    </div>
                    <div className="product_block">
                      <div className="productPage_properties">
                        <h3>Технические характеристики</h3>
                        <div className="properties_section">
                          <section className="properties_group">
                          <h4>Основное</h4>
                            <dl className="flexbox">
                              <dt><span>Количество каналов</span></dt>
                              <dd><span>4</span></dd>
                              <dt><span>Количество источников сигнала/канал</span></dt>
                              <dd><span>4</span></dd>
                              <dt><span>Тип входного видеосигнала</span></dt>
                              <dd><span>CVBS, D1</span></dd>
                              <dt><span>Система цветности входного сигнала</span></dt>
                              <dd><span>SECAM, PAL</span></dd>
                              <dt><span>Система цветности выходного сигнала</span></dt>
                              <dd><span>PAL</span></dd>
                              <dt><span>Кодер видео</span></dt>
                              <dd><span>MPEG2</span></dd>
                              <dt><span>Кодер аудио</span></dt>
                              <dd><span>MPEG1</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Управление</h4>
                            <dl className="flexbox">
                              <dt><span>Интерфейс</span></dt>
                              <dd><span>RS-232</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>DB-9</span></dd>
                              <dt><span>Программное обеспечение</span></dt>
                              <dd><span>«LoadDevs»</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Физические параметры</h4>
                            <dl className="flexbox">
                              <dt><span>Размер</span></dt>
                              <dd><span>2U(19inch)</span></dd>
                              <dt><span>Размер</span></dt>
                              <dd><span>93мм х 482,6мм х 300мм</span></dd>
                              <dt><span>Питание</span></dt>
                              <dd><span>AC 90 - 260V</span></dd>
                              <dt><span>Мощность</span></dt>
                              <dd><span>{"< 40W"}</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Климатические условия</h4>
                            <dl className="flexbox">
                              <dt><span>Температура при работе</span></dt>
                              <dd><span>0°С - +45°С</span></dd>
                              <dt><span>Влажность при работе</span></dt>
                              <dd><span>5% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Температура при хранении</span></dt>
                              <dd><span>-40°С - +70°С</span></dd>
                              <dt><span>Влажность при хранении</span></dt>
                              <dd><span>0% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Вентиляция</span></dt>
                              <dd><span>Принудительная циркуляция воздуха</span></dd>
                            </dl>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>

                <details className="accordion-item">
                  <summary>
                    <span>DTV сервер Crypton COD881ASI</span>
                    <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                  </summary>

                  <div className="content productPage">
                    <div className="product_block">
                      <p>
                        Более современный аналог - <Link to="/cod882asi">MPEG2 кодер Crypton COD882ASI</Link>
                      </p>
                      <h3>Описание</h3>
                      <p>
                        DTV сервер Crypton COD881ASI - это многофункциональный сервер услуг платного цифрового телевидения. COD881ASI представляет собой функционально законченное устройство преобразования аналоговых сигналов в цифровой поток DVB. Имеет ASI выход, предназначенный для работы совместно с DVB модулятором. Система имеет 8 цифровых ТВ программ, которые в выборочном порядке могут быть скремблированы уникальными для каждой программы динамическими ключами. Система пользовательских сообщений рассчитана на поддержку до 16 миллионов абонентов суммарно для всех восьми каналов. Данное устройство в соответствии со спецификацией ETS-300468 включает в поток PSI и SI информацию.
                      </p>
                      <p>
                        Все работы по управлению этим устройством, а также мониторинг его состояния выполняется на персональном компьютере оператора, где установлен пакет ПО “Crypton DTV Master”. Коммуникационной средой между сервером и управляющим компьютером является обычная TCP/IP сеть (100 Base TX, кабель UTP5, разъем RJ45, активное сетевое оборудование). Ограничения на количество устройств в сети не накладываются.
                      </p>
                      <p>
                        Основное применение COD881ASI находит в головных станциях кабельного телевидения, сетях МИТРИС, MMDS и LMDS.
                      </p>
                    </div>
                    <div className="product_block">
                      <h3>Возможности</h3>
                      <ul>
                        <li>
                          Восемь аналоговых входов. Видео и стерео звук для каждого из восьми каналов преобразуются в 8 DVB совместимых потоков (MPEG2 видео, MPEG1 Layer 2 звук). Каждый из этих потоков затем мультиплексируется в один общий DVB поток
                        </li>
                        <li>
                          Набор битовых скоростей для видео и звука.
                          Для каждого канала имеется возможность установить свою скорость потока. Гибкая настройкапозволяет более эффективно использовать частотный ресурс. Каналы с преимущественно динамической картинкой могут быть настроены на высокую скорость потока. Для каналов, где преобладают статические изображения, скорость потока может быть уменьшена без существенной потери качества
                        </li>
                        <li>
                          ТВ и радио каналы. Каждый канал может быть настроен как ТВ канал (видео и стерео звук) или как радио канал (только стерео звук)
                        </li>
                        <li>
                          Автономная перенастройка канала. Эксплуатация данного устройства в течении длительного времени требует наличия механизма быстрого устранения возможных неполадок. Любой из восьми MPEG энкодеров в течении короткого времени может быть перезагружен и перенастроен в соответствии с настройками данного канала
                        </li>
                        <li>
                          Отключение канала при необходимости. На время профилактических работ (или по другим причинам) любой из каналов может быть отключен. Отключение канала приводит к полному исключению потока этого канала из суммарного выходного потока и не влияет на остальные каналы
                        </li>
                        <li>
                          DVB-совместимый скремблер. Скремблер представляет собой реализацию Common Scrambler Algorithm, описание которого приведено в спецификации DVB-CAS ETR-289
                        </li>
                        <li>
                          Цифровой ASI выход. С выхода устройства сигнал может быть подан на канальный модулятор, поддерживающий интерфейс ASI
                        </li>
                        <li>
                          Сеть TCP/IP. Соединение данного устройства и управляющего компьютера оператора выполнено через обычное оборудование TCP/IP сетей
                        </li>
                        <li>
                          Надежное ПО. Пакет ПО “Crypton DTV Master” позволяет выполнять задачи управления и мониторинга состояния устройств в сети в реальном времени
                        </li>
                      </ul>
                    </div>
                    <div className="product_block">
                      <div className="productPage_properties">
                        <h3>Технические характеристики</h3>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Входы видео</h4>
                            <dl className="flexbox">
                              <dt><span>Количество</span></dt>
                              <dd><span>8</span></dd>
                              <dt><span>Форматы</span></dt>
                              <dd><span>PAL/SECAM</span></dd>
                              <dt><span>Аналоговый интерфейс</span></dt>
                              <dd><span>композитный (CVBS)</span></dd>
                              <dt><span>A/D</span></dt>
                              <dd><span>10 бит</span></dd>
                              <dt><span>Напряжение на входе</span></dt>
                              <dd><span>0,1 – 1В</span></dd>
                              <dt><span>Автоматическая регулировка усиления</span></dt>
                              <dd><span>Да</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>BNC</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Входы аудио</h4>
                            <dl className="flexbox">
                              <dt><span>Количество</span></dt>
                              <dd><span>8 стерео каналов (аналоговый)</span></dd>
                              <dt><span>Напряжение на входе</span></dt>
                              <dd><span>0,1 – 1В</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>RCA</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Параметры кодирования видео</h4>
                            <dl className="flexbox">
                              <dt><span>Формат</span></dt>
                              <dd><span>MPEG-2 4:2:0 P@ML</span></dd>
                              <dt><span>Битовые скорости</span></dt>
                              <dd><span>3, 4, 5, 6 Мбит/с (CBR), 4 Мбит/с (VBR)</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Параметры кодирования аудио</h4>
                            <dl className="flexbox">
                              <dt><span>Формат</span></dt>
                              <dd><span>MPEG I Layer II</span></dd>
                              <dt><span>Частота дискретизации</span></dt>
                              <dd><span>44.1 KHz</span></dd>
                              <dt><span>Битовые скорости</span></dt>
                              <dd><span>64, 128, 192, 224, 256, 384 Kbps</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Генератор таблиц PSI/SI</h4>
                            <dl className="flexbox">
                              <dt><span>Вставка таблиц</span></dt>
                              <dd><span>в соответствии с ETS-300468</span></dd>
                              <dt><span>SDT</span></dt>
                              <dd><span>таблица описания программ</span></dd>
                              <dt><span>ECM</span></dt>
                              <dd><span>информация условного доступа</span></dd>
                              <dt><span>PAT </span></dt>
                              <dd><span>таблица программ</span></dd>
                              <dt><span>PMT </span></dt>
                              <dd><span>таблица содержания программы</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Мультиплексор</h4>
                            <dl className="flexbox">
                              <dt><span>Количество транспортных DVB потоков</span></dt>
                              <dd><span>до 8</span></dd>
                              <dt><span>Назначение PID</span></dt>
                              <dd><span>Да</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Условный доступ</h4>
                            <dl className="flexbox">
                              <dt><span>Скремблер</span></dt>
                              <dd><span>Встроенный DVB-совместимый скремблер</span></dd>
                              <dt><span>Система условного доступа</span></dt>
                              <dd><span>cas “Crypton” соответствует ETR-289, DVB Simulcrypt</span></dd>
                              <dt><span>Макс. количество скремблируемых каналов</span></dt>
                              <dd><span>8</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Выходы</h4>
                            <dl className="flexbox">
                              <dt><span>Интерфейс</span></dt>
                              <dd><span>DVB ASI(EN50083-9)</span></dd>
                              <dt><span>Количество</span></dt>
                              <dd><span>Электрические 2 х ASI</span></dd>
                              <dt><span>Скорость выходного потока</span></dt>
                              <dd><span>54Мбит/с</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>BNC</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Управление</h4>
                            <dl className="flexbox">
                              <dt><span>Способ</span></dt>
                              <dd><span>Удаленное(Ethernet (TCP/IP))</span></dd>
                              <dt><span>Программное обеспечение</span></dt>
                              <dd><span>«Cryptоn DTV Master»</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Физические параметры</h4>
                            <dl className="flexbox">
                              <dt><span>Размер</span></dt>
                              <dd><span>2U(19inch)</span></dd>
                              <dt><span>Размер</span></dt>
                              <dd><span>93мм х 482,6мм х 336мм</span></dd>
                              <dt><span>Вес</span></dt>
                              <dd><span>4,3 кг</span></dd>
                              <dt><span>Питание</span></dt>
                              <dd><span>90-260V AC 50/60 Hz</span></dd>
                              <dt><span>Мощность</span></dt>
                              <dd><span>{"< 80W"}</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Климатические условия</h4>
                            <dl className="flexbox">
                              <dt><span>Температура при работе</span></dt>
                              <dd><span>0°С - +45°С</span></dd>
                              <dt><span>Влажность при работе</span></dt>
                              <dd><span>5% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Температура при хранении</span></dt>
                              <dd><span>-40°С - +70°С</span></dd>
                              <dt><span>Влажность при хранении</span></dt>
                              <dd><span>0% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Вентиляция</span></dt>
                              <dd><span>Принудительная циркуляция воздуха</span></dd>
                            </dl>
                          </section>
                        </div>
                      </div>
                      <div className="product_block">
                        <h3>Функциональная блок-схема DTV сервера Crypton COD881ASI</h3>
                        <Img fluid={scheme_cod_881_asi.childImageSharp.fluid} alt="Функциональная блок-схема DTV сервера Crypton COD881ASI" />
                      </div>
                      <div className="product_block">
                        <h3>Краткое описание основных блоков COD881ASI</h3>
                        <ul>
                          <li>
                            MPEG енкодер. Модуль MPEG 2 енкодер преобразует аналоговые сигналы изображения и звука в цифровой поток согласно спецификации DVB.
                          </li>
                          <li>
                            Мультиплексор. Восемь сформированных цифровых канала мультиплексируются в один общий транспортный поток DVB в модуле 8-канального мультиплексора.
                          </li>
                          <li>
                            DVB Скремблер.Используемый в устройстве скремблер является DVB-совместимым и соответствует спецификации DVB-CAS ETR-289. Он производит выборочное скремблирование цифровых телевизионных программ. Главная цель скремблирования - исключить несанкционированный просмотр телевизионных программ. С выхода скремблера поток подается на ASI передатчик, а затем сигнал может быть подан на внешний канальный DVB модулятор, также поддерживающий интерфейс ASI. Конечным пунктом системы является экран телевизора у абонента телекомпании.
                          </li>
                          <li>
                            Генератор служебной информации. Генератор служебной информации выполняет операции вставки управляющих сообщений, по которым ресивер на приемной стороне может решать, что делать с выбранным телеканалом.
                          </li>
                          <li>
                            Управляющий модуль. Управляющий модуль используется для выполнения операции управления подписчиками, сбор статусной информации, управления mpeg энкодерами и для других задач.
                          </li>
                          <li>
                            ASI интерфейс - выходной интерфейс передачи цифрового транспортного потока, согласно EN 50083-9.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>

                <details className="accordion-item">
                  <summary>
                    <span>DTV сервер COD881MS</span>
                    <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                  </summary>

                  <div className="content productPage">
                    <div className="product_block">
                      <h3>Описание</h3>
                      <p>
                        DTV сервер Crypton COD881MS - это многофункциональный сервер услуг платного цифрового телевидения. COD881MS представляет собой функционально законченное устройство преобразования аналоговых сигналов в цифровой поток DVB. Встроенный в изделие QPSK модулятор на выходе имеет сигнал в L-диапазоне (950-1950 МГц), который с помощью преобразователя частот может быть перенесен в желаемый участок ВЧ диапазона (например, в Ku-диапазон для систем спутникового вещания и МИТРИС).
                      </p>
                      <p>
                        Система имеет 8 цифровых ТВ программ, которые в выборочном порядке могут быть скремблированы уникальными для каждой программы динамическими ключами. Система пользовательских сообщений рассчитана на поддержку до 16 миллионов абонентов суммарно для всех восьми каналов. Данное устройство в соответствии со спецификацией ETS-300468 включает в поток PSI и SI информацию.
                      </p>
                      <p>
                        Все работы по управлению этим устройством, а также мониторинг его состояния выполняется на персональном компьютере оператора, где установлен пакет ПО “Crypton DTV Master”. Коммуникационной средой между сервером и управляющим компьютером является обычная TCP/IP сеть (100 Base TX, кабель UTP5, разъем RJ45, активное сетевое оборудование). Ограничения на количество устройств в сети не накладываются.
                      </p>
                      <p>
                        Основное применение COD881MS находит в головных станциях кабельного телевидения, сетях МИТРИС, MMDS и LMDS.
                      </p>
                    </div>
                    <div className="product_block">
                      <h3>Возможности</h3>
                      <ul>
                        <li>
                          Восемь аналоговых входов. Видео и стерео звук для каждого из восьми каналов преобразуются в 8 DVB совместимых потоков (MPEG2 кодер видео, MPEG1 Layer 2 - звук). Каждый из этих потоков затем мультиплексируется в один общий DVB поток
                        </li>
                        <li>
                          Набор битовых скоростей для видео и звука. Для каждого канала имеется возможность установить свою скорость потока. Гибкая настройка позволяет более эффективно использовать частотный ресурс. Каналы с преимущественно динамической картинкой могут быть настроены на высокую скорость потока. Для кана-лов, где преобладают статические изображения, скорость потока может быть уменьшена без существенной потери качества
                        </li>
                        <li>
                          ТВ и радио каналы. Каждый канал может быть настроен как ТВ канал (видео и стерео звук) или как радио канал (только стерео звук)
                        </li>
                        <li>
                          Автономная перенастройка канала. Эксплуатация данного устройства в течении длительного времени требует наличия механизма быстрого устранения возможных неполадок. Любой из восьми MPEG энкодеров в течении короткого времени может быть перезагружен и перенастроен в соответствии с настройками данного канала
                        </li>
                        <li>
                          Отключение канала при необходимости. На время профилактических работ (или по другим причинам) любой из каналов может быть отключен. Отключение канала приводит к полному исключению потока этого канала из суммарного выходного потока и не влияет на остальные каналы
                        </li>
                        <li>
                          DVB-совместимый скремблер. Скремблер представляет собой реализацию Common Scrambler Algorithm, описание которого приведено в спецификации DVB-CAS ETR-289
                        </li>
                        <li>
                          QPSK модулятор L-диапазона. QPSK модулятор имеет согласованный 50 Ом выход и точность установки частоты 5 кГц
                        </li>
                        <li>
                          Сеть TCP/IP. Соединение данного устройства и управляющего компьютера оператора выполнено через обычное оборудование TCP/IP сетей
                        </li>
                        <li>
                          Надежное ПО. Пакет ПО “Crypton DTV Master” позволяет выполнять задачи управления и мониторинга состояния устройств в сети в реальном времени
                        </li>
                      </ul>
                    </div>
                    <div className="productPage_properties">
                      <div className="product_block">
                        <h3>Технические характеристики</h3>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Входы видео</h4>
                            <dl className="flexbox">
                              <dt><span>Количество</span></dt>
                              <dd><span>8</span></dd>
                              <dt><span>Форматы</span></dt>
                              <dd><span>PAL/SECAM</span></dd>
                              <dt><span>Аналоговый интерфейс</span></dt>
                              <dd><span>композитный (CVBS)</span></dd>
                              <dt><span>A/D</span></dt>
                              <dd><span>10 бит</span></dd>
                              <dt><span>Напряжение на входе</span></dt>
                              <dd><span>0,1 – 1В</span></dd>
                              <dt><span>Автоматическая регулировка усиления</span></dt>
                              <dd><span>Да</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>BNC</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Входы аудио</h4>
                            <dl className="flexbox">
                              <dt><span>Количество</span></dt>
                              <dd><span>8 стерео каналов (аналоговый)</span></dd>
                              <dt><span>Напряжение на входе</span></dt>
                              <dd><span>0,1 – 1В</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>RCA</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Параметры кодирования видео</h4>
                            <dl className="flexbox">
                              <dt><span>Формат</span></dt>
                              <dd><span>MPEG-2 4:2:0 P@ML</span></dd>
                              <dt><span>Битовые скорости</span></dt>
                              <dd><span>3, 4, 5, 6 Мбит/с (CBR), 4 Мбит/с (VBR)</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Параметры кодирования аудио</h4>
                            <dl className="flexbox">
                              <dt><span>Формат</span></dt>
                              <dd><span>MPEG I Layer II</span></dd>
                              <dt><span>Частота дискретизации</span></dt>
                              <dd><span>44.1 KHz</span></dd>
                              <dt><span>Битовые скорости</span></dt>
                              <dd><span>64, 128, 192, 224, 256, 384 Kbps</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Генератор таблиц PSI/SI</h4>
                            <dl className="flexbox">
                              <dt><span>Вставка таблиц</span></dt>
                              <dd><span>в соответствии с ETS-300468</span></dd>
                              <dt><span>SDT</span></dt>
                              <dd><span>таблица описания программ</span></dd>
                              <dt><span>ECM</span></dt>
                              <dd><span>информация условного доступа</span></dd>
                              <dt><span>PAT </span></dt>
                              <dd><span>таблица программ</span></dd>
                              <dt><span>PMT </span></dt>
                              <dd><span>таблица содержания программы</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Мультиплексор</h4>
                            <dl className="flexbox">
                              <dt><span>Количество транспортных DVB потоков</span></dt>
                              <dd><span>до 8</span></dd>
                              <dt><span>Назначение PID</span></dt>
                              <dd><span>Да</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Условный доступ</h4>
                            <dl className="flexbox">
                              <dt><span>Скремблер</span></dt>
                              <dd><span>Встроенный DVB-совместимый скремблер</span></dd>
                              <dt><span>Система условного доступа</span></dt>
                              <dd><span>cas “Crypton” соответствует ETR-289, DVB Simulcrypt</span></dd>
                              <dt><span>Макс. количество скремблируемых каналов</span></dt>
                              <dd><span>8</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>DVB ASI(EN50083-9) Выход</h4>
                            <dl className="flexbox">
                              <dt><span>QPSK модуляция</span></dt>
                              <dd><span>В соответствии с EN 300421</span></dd>
                                <dt><span>Скорость входного потока</span></dt>
                                <dd><span>1 – 50Мбит/с</span></dd>
                                <dt><span>Символьная скорость</span></dt>
                                <dd><span>25 – 30Мсимв/с (шаг 0,125Мсимв/с)</span></dd>
                                <dt><span>Диапазон частот</span></dt>
                                <dd><span>950-1500МГц или 1450-1950МГц</span></dd>
                                <dt><span>Точность установки частоты</span></dt>
                                <dd><span>±5кГц</span></dd>
                                <dt><span>Шаг перестройки частоты</span></dt>
                                <dd><span>1 Гц</span></dd>
                                <dt><span>Режимы FEC</span></dt>
                                <dd><span>1/2, 2/3, 3/4, 5/6, 7/8</span></dd>
                                <dt><span>Выходное сопротивление</span></dt>
                                <dd><span>50 Ом</span></dd>
                                <dt><span>Разъем </span></dt>
                                <dd><span>SMA</span></dd>
                              </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Управление</h4>
                            <dl className="flexbox">
                              <dt><span>Способ</span></dt>
                              <dd><span>Удаленное(Ethernet (TCP/IP))</span></dd>
                              <dt><span>Программное обеспечение</span></dt>
                              <dd><span>«Cryptоn DTV Master»</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Физические параметры</h4>
                            <dl className="flexbox">
                              <dt><span>Размер</span></dt>
                              <dd><span>2U(19inch)</span></dd>
                              <dt><span>Размер</span></dt>
                              <dd><span>93мм х 482,6мм х 336мм</span></dd>
                              <dt><span>Вес</span></dt>
                              <dd><span>4,3 кг</span></dd>
                              <dt><span>Питание</span></dt>
                              <dd><span>90-260V AC 50/60 Hz</span></dd>
                              <dt><span>Мощность</span></dt>
                              <dd><span>{"< 80W"}</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Климатические условия</h4>
                            <dl className="flexbox">
                              <dt><span>Температура при работе</span></dt>
                              <dd><span>0°С - +45°С</span></dd>
                              <dt><span>Влажность при работе</span></dt>
                              <dd><span>5% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Температура при хранении</span></dt>
                              <dd><span>-40°С - +70°С</span></dd>
                              <dt><span>Влажность при хранении</span></dt>
                              <dd><span>0% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Вентиляция</span></dt>
                              <dd><span>Принудительная циркуляция воздуха</span></dd>
                            </dl>
                          </section>
                        </div>
                      </div>
                      <div className="product_block">
                    </div>
                    </div>
                    <div className="product_block">
                      <h3>Функциональная блок-схема DTV сервера COD881MS</h3>
                      <Img fluid={scheme_cod_881_ms.childImageSharp.fluid} alt="Функциональная блок-схема DTV сервера Crypton COD881MS" />
                    </div>
                    <div className="product_block">
                      <h3>Краткое описание основных блоков COD881MS</h3>
                      <ul>
                        <li>
                          MPEG Encoder. Модуль MPEG encoderа преобразует аналоговые сигналы изображения и звука в цифровой поток согласно спецификации DVB.
                        </li>
                        <li>
                          Мультиплексор. Восемь сформированных цифровых канала мультиплексируются в один общий цифровой поток DVB в модуле 8-канального мультиплексора.
                        </li>
                        <li>
                          DVB Скремблер. Используемый в устройстве скремблер является DVB-совместимым и соответствует спецификации DVB-CAS ETR-289. Он производит выборочное скремблирование цифровых телевизионных программ. Главная цель скремблирования исключить несанкционированный просмотр телевизионных программ. С выхода скремблера поток подается на модулятор, а затем на преобразователь частот, после чего достигает абонентского оборудования это может быть цифровой ресивер с системой кодирования «Crypton» и обычный цветной телевизионный приемник. Конечным пунктом системы является экран телевизора у абонента телекомпании.
                        </li>
                        <li>
                          Генератор служебной информации. Генератор служебной информации выполняет операции вставки управляющих сообщений, по которым ресивер на приемной стороне может решать, что делать с выбранным телеканалом.
                        </li>
                        <li>
                          Управляющий модуль. Управляющий модуль используется для выполнения операции управления подписчиками, сбор статусной информации, управления энкодерами и для других задач.
                        </li>
                        <li>
                          QPSK модулятор. Устройство снабжено встроенным QPSK модулятором с несущей частотой перестраиваемой в диапазоне 950-1750 МГц.
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>

                <details className="accordion-item">
                  <summary>
                    <span>DTV сервер-ремультиплексор Crypton COD980ASI</span>
                    <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                  </summary>

                  <div className="content productPage">
                    <div className="product_block">
                      <h3>Описание</h3>
                      <p>
                        DTV сервер-ремультиплексор Crypton COD980ASI - это ремультиплексор с функциями DVB скремблера и сервера абонентской службы системы условного доступа CryptOn. Используется ASI интерфейс входных и выходных транспортных потоков DVB.</p>
                      <p>
                        Устройство имеет восемь ASI входов, на которые подаются транспортные потоки выбранных для ремультиплексирования цифровых телевизионных программ. Источником сигнала являются профессиональные спутниковые ресиверы с выходом транспортного потока в ASI формате согласно EN50083-9. Каналы в произвольном порядке могут быть скремблированы уникальными для каждой программы динамическими ключами. Система пользовательских сообщений рассчитана на поддержку до 16 миллионов абонентов.     Управление устройствами, а также мониторинг их состояния выполняется с персонального компьютера оператора при помощи пакета ПО “Crypton DТV Master” через TCP/IP соединение.     Основное применение COD980ASI находит в головных станциях кабельного телевидения, сетях МИТРИС, MMDS и LMDS.
                      </p>
                    </div>
                    <div className="product_block">
                      <h3>Возможности</h3>
                      <ul>
                        <li>
                          Использование восьми ASI входов. Выбранные для ремультиплексирования цифровые телевизионные программы поступают на вход ремультиплексора для дальнейшего их объединения в один многопрограммный транспортных поток. Источником сигнала обычно являются профессиональные спутниковые ресиверы выходом транспортного потока в ASI формате согласно EN 50083-9.
                        </li>
                        <li>
                          Оценка суммарного входного потока. Для каждого канала имеется возможность произвести оценку максимальной скорости транспортного потока. Устройством также производится оценка максимальной суммарной скорости транспортных потоков телевизионных программ подаваемых на ремультиплексор. Устройство сигнализирует об избыточной скорости входных данных, одновременно автоматически снижая битовую скорость некоторых программ в соответствии с установленными приоритетами. Гибкая настройка позволяет наиболее эффективно использовать частотный ресурс. Каналам с высокой динамикой изображения и рейтингом может быть присвоен наивысший приоритет, что в свою очередь обеспечит их прохождение по каналу с максимальным качеством, в тоже время телевизионные программы с меньшей динамикой либо с меньшим рейтингом могут проходить с уменьшенной скоростью потока практически без ухудшения качества, что обеспечивает высокие эксплуатационные характеристики канала в целом.
                        </li>
                        <li>
                          Редактирование сервисной информации и коррекция временных меток. В устройстве предусмотрена функция редактирования сервисной информации и коррекция временных меток, что обеспечивает высокое качество формирования нового многопрограммного транспортного потока, внося дополнительные сетевые функции очень удобные для конечного потребителя.
                        </li>
                        <li>
                          Открытый канал передачи пользовательских данных. В устройстве предусмотрена возможность организации открытого канала передачи данных с сервера провайдера услуг на абонентский DVB совместимый терминал через активное TCP/IP соединение. В этом канале можно передавать такую важную в современных цифровых вещательных сетях информацию как электронные программы телепередач, новости, прогноз погоды, интернет и т.д.
                        </li>
                        <li>
                          Система условного доступа. В случае необходимости защиты контента COD980ASI обеспечивает независимое скремблирование ТВ программ в соответствии с DVB-CAS спецификацией и эффективное управление абонентами платной телевизионной сети. Управление абонентами осуществляется через порт управления с ПК.
                          Цифровой ASI выход.С выхода устройства сигнал может быть подан на канальный модулятор, поддерживающий интерфейс ASI.
                        </li>
                        <li>
                          Управление. Управление устройствами в сети производится с персонального компьютера через обычное TCP/IP соединение.
                        </li>
                        <li>
                          Надежное ПО. Пакет ПО “Crypton DТV Master” позволяет выполнять задачи управления и мониторинга состояния устройств в сети.
                        </li>
                      </ul>
                    </div>
                    <div className="productPage_properties">
                      <div className="product_block">
                        <h3>Технические характеристики</h3>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Входы</h4>
                            <dl className="flexbox">
                              <dt><span>Интерфейс</span></dt>
                              <dd><span>DVB ASI (в соответствии с EN50083-9)</span></dd>
                              <dt><span>Количество</span></dt>
                              <dd><span>8 мультипрограммных входов</span></dd>
                              <dt><span>Тип</span></dt>
                              <dd><span>электрический</span></dd>
                              <dt><span>Скорость</span></dt>
                              <dd><span>до 54 Мбит/с на каждый вход</span></dd>
                              <dt><span>Разъем </span></dt>
                              <dd><span>BNC</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Ремультиплексор</h4>
                            <dl className="flexbox">
                              <dt><span>Макс. количество мультиплексированных программ</span></dt>
                              <dd><span>24</span></dd>
                              <dt><span>Замена PID</span></dt>
                              <dd><span>Да</span></dd>
                              <dt><span>Коррекция PCR</span></dt>
                              <dd><span>Да</span></dd>
                              <dt><span>Автоматический генератор таблиц PSI/SI</span></dt>
                              <dd><span>Да</span></dd>
                              <dt><span>Обработка и вставка таблиц PSI/SI</span></dt>
                              <dd><span>В соответствии с ETS300468</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Условный доступ</h4>
                            <dl className="flexbox">
                              <dt><span>Скремблер</span></dt>
                              <dd><span>Встроенный DVB-совместимый скремблер</span></dd>
                              <dt><span>Система условного доступа “Crypton”</span></dt>
                              <dd><span>соответствует ETR-289, DVB Simulcrypt</span></dd>
                              <dt><span>Макс. количество групп скремблирования</span></dt>
                              <dd><span>8</span></dd>
                              <dt><span>Макс. количество скремблируемых программ</span></dt>
                              <dd><span>24</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Выходы</h4>
                            <dl className="flexbox">
                              <dt><span>Интерфейс</span></dt>
                              <dd><span>DVB ASI (в соответствии с EN50083-9)</span></dd>
                                <dt><span>Количество</span></dt>
                                <dd><span>1</span></dd>
                                <dt><span>Тип</span></dt>
                                <dd><span>электрический</span></dd>
                                <dt><span>Скорость выходного потока</span></dt>
                                <dd><span>48Мбит/с</span></dd>                                       <dt><span>Разъем </span></dt>
                                <dd><span>BNC</span></dd>
                              </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Управление</h4>
                            <dl className="flexbox">
                              <dt><span>Способ</span></dt>
                              <dd><span>Удаленное(Ethernet (TCP/IP))</span></dd>
                              <dt><span>Программное обеспечение</span></dt>
                              <dd><span>«Cryptоn DTV Master»</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Физические параметры</h4>
                            <dl className="flexbox">
                              <dt><span>Размер</span></dt>
                              <dd><span>2U(19inch)</span></dd>
                              <dt><span>Размер</span></dt>
                              <dd><span>93мм х 482,6мм х 336мм</span></dd>
                              <dt><span>Вес</span></dt>
                              <dd><span>4,0 кг</span></dd>
                              <dt><span>Питание</span></dt>
                              <dd><span>90-260V AC 50/60 Hz</span></dd>
                              <dt><span>Мощность</span></dt>
                              <dd><span>{"< 50W"}</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Климатические условия</h4>
                            <dl className="flexbox">
                              <dt><span>Температура при работе</span></dt>
                              <dd><span>0°С - +45°С</span></dd>
                              <dt><span>Влажность при работе</span></dt>
                              <dd><span>5% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Температура при хранении</span></dt>
                              <dd><span>-40°С - +70°С</span></dd>
                              <dt><span>Влажность при хранении</span></dt>
                              <dd><span>0% - 85% (без конденсации влаги)</span></dd>
                            </dl>
                          </section>
                        </div>
                      </div>
                      <div className="product_block">
                    </div>
                    </div>
                    <div className="product_block">
                      <h3>Функциональная блок-схема DTV сервера-ремультиплексора Crypton COD980ASI</h3>
                      <Img fluid={scheme_cod_980_rms.childImageSharp.fluid} alt="Функциональная блок-схема DTV сервера-ремультиплексора Crypton COD980ASI" />
                    </div>
                    <div className="product_block">
                      <h3>Краткое описание основных блоков COD980ASI</h3>
                      <ul>
                        <li>
                          ASI интерфейс. В качестве входного и выходного интерфейса передачи цифрового транспортного потока устройство использует DVB ASI интерфейс согласно EN 50083-9.
                        </li>
                        <li>
                          Ремультиплексор. Восемь (по одной с каждого канала) независимых цифровых телевизионных программы могут быть поданы на входы ремультиплексора. Дополнительно на ремультиплексор могут быть поданы пользовательские данные, поступающие в устройство через открытый канал и соответствующее ему TCP/IP соединение с сервера пользовательских данных. В устройстве предусмотрен механизм коррекции меток подстройки частоты(PCR) и редактирования сервисной информации в соответствии с EN 300468.
                        </li>
                        <li>
                          DVB Скремблер. Используемый в устройстве скремблер является DVB-совместимым и соответствует спецификации DVB-CAS ETR-289. Он производит выборочное скремблирование цифровых телевизионных программ. Главная цель скремблирования исключить несанкционированный просмотр телевизионных программ.
                        </li>
                        <li>
                          Генератор служебной информации. Генератор служебной информации выполняет операции вставки управляющих сообщений, необходимых для включения либо выключения того или иного абонента платной телевизионной сети.
                        </li>
                        <li>
                          Управляющий модуль. Управляющий модуль используется для выполнения операции управления подписчиками, диагностики устройства, управления и настройки, связи с компьютером оператора сети через активное TCP/IP соединение.
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>

                <details className="accordion-item">
                  <summary>
                    <span>Сервер - ремультиплексор COD981RMS</span>
                    <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                  </summary>

                  <div className="content productPage">
                    <div className="product_block">
                      <h3>Описание</h3>
                      <p>
                         DTV сервер - ремультиплексор COD980RMS представляет собой ремультиплексор с функциями DVB скремблера и сервера абонентской службы системы условного доступа CryptOn. ASI интерфейс входных транспортных потоков и встроенный QPSK модулятор с РЧ выходом в L-диапазоне, который с помощью преобразователя частот может быть перенесен в желаемый участок УВЧ диапазона (например, в Ku-диапазон для систем спутникового вещания и МИТРИС) или QPSK/QAM трансмодулятора в МВ/ДМВ диапазон для сетей ММДС или кабельных сетей позволяет организовать цифровое вещание телевизионных программ с максимальным качеством и минимальными капиталовложениями.
                      </p>
                      <p>
                        Устройство имеет 8 ASI входов на которые подаются транспортные потоки выбранных для мультиплексирования цифровых телевизионных программ, которые в произвольном порядке могут быть скремблированы уникальным для каждой программы динамически изменяющимся ключом. Система пользовательских сообщений рассчитана на поддержку до 16 миллионов абонентов.     Управление устройствами, а также мониторинг их состояния выполняется с персонального компьютера оператора при помощи пакета ПО “Crypton DТV Master” через TCP/IP соединение.     Основное применение COD980RMS находит в головных станциях кабельного телевидения, сетях МИТРИС, MMDS и LMDS.
                      </p>
                    </div>
                    <div className="product_block">
                      <h3>Возможности</h3>
                      <ul>
                        <li>
                          Использование восьми ASI входов. Выбранные для ремультиплексирования цифровые телевизионные программы поступают на вход ремультиплексора для дальнейшего их объединения в один многопрограммный транспортных поток. Источником сигнала обычно являются профессиональные спутниковые ресиверы с выходом транспортного потока в ASI формате согласно EN 50083-9.
                        </li>
                        <li>
                          Оценка суммарного входного потока. Для каждого канала имеется возможность произвести оценку максимальной скорости транспортного потока. Устройством также производится оценка максимальной суммарной скорости транспортных потоков телевизионных программ подаваемых на ремультиплексор. Устройство сигнализирует об избыточной скорости входных данных, одновременно автоматически снижая битовую скорость некоторых программ в соответствии с установленными приоритетами. Гибкая настройка позволяет наиболее эффективно использовать частотный ресурс. Каналам с высокой динамикой изображения и рейтингом может быть присвоен наивысший приоритет, что в свою очередь обеспечит их прохождение по каналу с максимальным качеством, в тоже время телевизионные программы с меньшей динамикой либо с меньшим рейтингом могут проходить с уменьшенной скоростью потока практически без ухудшения качества, что обеспечивает высокие эксплуатационные характеристики канала в целом.
                        </li>
                        <li>
                          Редактирование сервисной информации и коррекция временных меток. В устройстве предусмотрена функция редактирования сервисной информации и коррекция временных меток, что обеспечивает высокое качество формирования нового многопрограммного транспортного потока, внося дополнительные сетевые функции очень удобные для конечного потребителя.
                        </li>
                        <li>
                          Открытый канал передачи пользовательских данных. В устройстве предусмотрена возможность организации открытого канала передачи данных с сервера провайдера услуг на абонентский DVB совместимый терминал через активное TCP/IP соединение. В этом канале можно передавать такую важную в современных цифровых вещательных сетях информацию как электронные программы телепередач, новости, прогноз погоды, интернет и т.д.
                        </li>
                        <li>
                          Система условного доступа. В случае необходимости защиты контента COD980RMS обеспечивает независимое скремблирование ТВ программ в соответствии с DVB-CAS спецификацией и эффективное управление абонентами платной телевизионной сети. Управление абонентами осуществляется через порт управления с ПК.
                        </li>
                        <li>
                          QPSK модулятор. Устройство снабжено встроенным QPSK модулятором с несущей частотой перестраиваемой в диапазоне 950-1950 МГц.
                        </li>
                        <li>
                          Управление. Управление устройствами в сети производится с персонального компьютера через обычное TCP/IP соединение.
                        </li>
                        <li>
                          Надежное ПО. Пакет ПО “Crypton DТV Master” позволяет выполнять задачи управления и мониторинга состояния устройств в сети
                        </li>
                      </ul>
                    </div>
                    <div className="productPage_properties">
                      <div className="product_block">
                        <h3>Технические характеристики</h3>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Входы</h4>
                            <dl className="flexbox">
                              <dt><span>Интерфейс</span></dt>
                              <dd><span>DVB ASI (в соответствии с EN50083-9)</span></dd>
                              <dt><span>Количество</span></dt>
                              <dd><span>8 мультипрограммных входов</span></dd>
                              <dt><span>Тип</span></dt>
                              <dd><span>электрический</span></dd>
                              <dt><span>Скорость</span></dt>
                              <dd><span>до 54 Мбит/с на каждый вход</span></dd>
                              <dt><span>Разъем </span></dt>
                              <dd><span>BNC</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Ремультиплексор</h4>
                            <dl className="flexbox">
                              <dt><span>Макс. количество мультиплексированных программ</span></dt>
                              <dd><span>24</span></dd>
                              <dt><span>Замена PID</span></dt>
                              <dd><span>Да</span></dd>
                              <dt><span>Коррекция PCR</span></dt>
                              <dd><span>Да</span></dd>
                              <dt><span>Автоматический генератор таблиц PSI/SI</span></dt>
                              <dd><span>Да</span></dd>
                              <dt><span>Обработка и вставка таблиц PSI/SI</span></dt>
                              <dd><span>В соответствии с ETS300468</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Условный доступ</h4>
                            <dl className="flexbox">
                              <dt><span>Скремблер</span></dt>
                              <dd><span>Встроенный DVB-совместимый скремблер</span></dd>
                              <dt><span>Система условного доступа “Crypton”</span></dt>
                              <dd><span>Соответствует ETR-289, DVB Simulcrypt</span></dd>
                              <dt><span>Макс. количество групп скремблирования</span></dt>
                              <dd><span>8</span></dd>
                              <dt><span>Макс. количество скремблируемых программ</span></dt>
                              <dd><span>24</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Выходы</h4>
                            <dl className="flexbox">
                              <dt><span>Интерфейс</span></dt>
                              <dd><span>DVB ASI (в соответствии с EN50083-9)</span></dd>
                                <dt><span>Количество</span></dt>
                                <dd><span>1</span></dd>
                                <dt><span>Тип</span></dt>
                                <dd><span>электрический</span></dd>
                                <dt><span>Скорость выходного потока</span></dt>
                                <dd><span>54Мбит/с</span></dd>                                       <dt><span>Разъем </span></dt>
                                <dd><span>BNC</span></dd>
                              </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Модулятор</h4>
                            <dl className="flexbox">
                              <dt><span>QPSK модуляция</span></dt>
                              <dd><span>В соответствии с EN 300421</span></dd>
                              <dt><span>Скорость входного потока</span></dt>
                              <dd><span>1 – 50Мбит/с</span></dd>
                              <dt><span>Символьная скорость</span></dt>
                              <dd><span>25 – 30Мсимв/с (шаг 0,125Мсимв/с)</span></dd>
                              <dt><span>Диапазон частот</span></dt>
                              <dd><span>950-1500МГц или 1450-1950МГц</span></dd>
                              <dt><span>Точность установки частоты</span></dt>
                              <dd><span>±5кГц</span></dd>
                              <dt><span>Шаг перестройки частоты</span></dt>
                              <dd><span>1 Гц</span></dd>
                              <dt><span>Режимы FEC</span></dt>
                              <dd><span>1/2, 2/3, 3/4, 5/6, 7/8</span></dd>
                              <dt><span>Выходное сопротивление</span></dt>
                              <dd><span>50 Ом</span></dd>
                              <dt><span>Разъем </span></dt>
                              <dd><span>SMA</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Управление</h4>
                            <dl className="flexbox">
                              <dt><span>Способ</span></dt>
                              <dd><span>Удаленное(Ethernet (TCP/IP))</span></dd>
                              <dt><span>Программное обеспечение</span></dt>
                              <dd><span>«Cryptоn DTV Master»</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Физические параметры</h4>
                            <dl className="flexbox">
                              <dt><span>Размер</span></dt>
                              <dd><span>2U(19inch)</span></dd>
                              <dt><span>Размер</span></dt>
                              <dd><span>93мм х 482,6мм х 336мм</span></dd>
                              <dt><span>Вес</span></dt>
                              <dd><span>4,6 кг</span></dd>
                              <dt><span>Питание</span></dt>
                              <dd><span>90-260V AC 50/60 Hz</span></dd>
                              <dt><span>Мощность</span></dt>
                              <dd><span>{"< 55W"}</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Климатические условия</h4>
                            <dl className="flexbox">
                              <dt><span>Температура при работе</span></dt>
                              <dd><span>0°С - +45°С</span></dd>
                              <dt><span>Влажность при работе</span></dt>
                              <dd><span>5% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Температура при хранении</span></dt>
                              <dd><span>-40°С - +70°С</span></dd>
                              <dt><span>Влажность при хранении</span></dt>
                              <dd><span>0% - 85% (без конденсации влаги)</span></dd>
                            </dl>
                          </section>
                        </div>
                      </div>
                      <div className="product_block">
                    </div>
                    </div>
                    <div className="product_block">
                      <h3>Функциональная блок-схема DVB ремультиплексора COD980RMS</h3>
                      <Img fluid={scheme_cod_980_rms.childImageSharp.fluid} alt="Функциональная блок-схема DVB ремультиплексора COD980RMS Crypton" />
                    </div>
                    <div className="product_block">
                      <h3>Краткое описание основных блоков COD980RMS</h3>
                      <ul>
                        <li>
                          ASI интерфейс. В качестве входного и выходного интерфейса передачи цифрового транспортного потока устройство использует DVB ASI интерфейс согласно EN 50083-9.
                        </li>
                        <li>
                          Ремультиплексор. Восемь (по одной с каждого канала) независимых цифровых телевизионных программы могут быть поданы на входы ремультиплексора. Дополнительно на ремультиплексор могут быть поданы пользовательские данные, поступающие в устройство через открытый канал и соответствующее ему TCP/IP соединение с сервера пользовательских данных. В устройстве предусмотрен механизм коррекции меток подстройки частоты(PCR) и редактирования сервисной информации в соответствии с EN 300468.
                        </li>
                        <li>
                          DVB Скремблер. Используемый в устройстве скремблер является DVB-совместимым и соответствует спецификации DVB-CAS ETR-289. Он производит выборочное скремблирование цифровых телевизионных программ. Главная цель скремблирования исключить несанкционированный просмотр телевизионных программ.
                        </li>
                        <li>
                          Генератор служебной информации. Генератор служебной информации выполняет операции вставки управляющих сообщений, необходимых для включения либо выключения того или иного абонента платной телевизионной сети.
                        </li>
                        <li>
                          Управляющий модуль. Управляющий модуль используется для выполнения операции управления подписчиками, диагностики устройства, управления и настройки, связи с компьютером оператора сети через активное TCP/IP соединение.
                        </li>
                        <li>
                          QPSK модулятор. Устройство снабжено встроенным QPSK модулятором с несущей частотой перестраиваемой в диапазоне 950 – 1750 МГц.
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>

                <details className="accordion-item">
                  <summary>
                    <span>Скремблер COD910ASI</span>
                    <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                  </summary>

                  <div className="content productPage">
                    <div className="product_block">
                      <p>
                      Более современная модель - <Link to="/cod912" >Скремблер COD912ASI</Link>
                      </p>
                      <h3>Описание</h3>
                      <p>
                        DVB Скремблер Crypton COD910ASI позволяет закодировать программы от нежелательного просмотра с использованием системы условного доступа Crypton и предназначен для работы совместно с DVB мультиплексором и DVB модулятором.     На вход устройства может быть подан многопрограммный транспортный поток, содержащий до 32-х телевизионных программ.
                      </p>
                      <p>
                         Макс. количество программ, которые могут быть кодированы с использованием системы условного доступа Crypton - 16. Кодированные цифровые телевизионные программы могут группироваться в сервисные группы, имеющие общий список абонентов и использующие один и тот же ключ скремблирования. Макс. количество сервисных групп - восемь. Абонентская служба независимо для каждой сервисной группы адресует до 256 тысяч абонентов в общем 16-ти миллионном непрерывном адресном пространстве <Link to="/cas_crypton" >системы условного доступа CryptOn</Link>.
                      </p>
                      <p>
                        Все работы по управлению этим устройством, а также мониторинг его состояния выполняется с персонального компьютера оператора, где установлен пакет ПО “Crypton DTV Master”. Коммуникационной средой между скремблером и управляющим компьютером является обычная TCP/IP сеть (100BaseTX, кабель UTP5, разъем RJ45, активное сетевое оборудование). Ограничения на количество устройств в сети не накладываются.
                      </p>
                      <p>
                        Основное применение COD910ASI находит в головных станциях кабельного телевидения, сетях МИТРИС, MMDS и LMDS.
                      </p>
                    </div>
                    <div className="product_block">
                      <h3>Возможности</h3>
                      <ul>
                        <li>
                          Цифровой ASI вход и выход. В качестве входных данных по интерфейсу ASI COD910ASI принимает заранее сформированный и мультиплексированный нужным образом DVB поток. Такое решение позволяет свести к минимуму потерю качества исходного сигнала и существенно уменьшить количество промежуточных звеньев. С выхода устройства сигнал может быть подан на канальный модулятор, также поддерживающий интерфейс ASI.
                        </li>
                        <li>
                          32 цифровых теле- и радио программ. Входной поток может состоять из большого количества программ. При конфигурации системы можно выбрать до 16 теле- и радио программ, подлежащие объединению в группы и последующему скремблированию. Оставшиеся программы (если есть) пропускаются на выход устройства без изменений.
                        </li>
                        <li>
                          До 8 сервисных групп. Новой функцией устройства COD910ASI является произвольная организация программ в группы. В каждую группу может быть включено любое количество цифровых программ. Различные группы скремблируются различными динамическими ключами.
                        </li>
                        <li>
                          DVB-совместимый скремблер. Скремблер представляет собой реализацию Common Scrambler Algorithm, описание которого приведено в спецификации DVB-CAS ETR-289.
                        </li>
                        <li>
                          Сеть TCP/IP. Соединение данного устройства и управляющего компьютера оператора выполнено через обычное оборудование TCP/IP сетей.
                        </li>
                        <li>
                          Надежное ПО. Пакет ПО “Crypton DTV Master” позволяет выполнять задачи управления и мониторинга состояния устройств в сети в реальном времени.
                        </li>
                      </ul>
                    </div>
                    <div className="productPage_properties">
                      <div className="product_block">
                        <h3>Технические характеристики</h3>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Входы</h4>
                            <dl className="flexbox">
                              <dt><span>Интерфейс</span></dt>
                              <dd><span>DVB ASI (в соответствии с EN50083-9)</span></dd>
                              <dt><span>Количество</span></dt>
                              <dd><span>1 мультипрограммный вход (max - 32 программы)</span></dd>
                              <dt><span>Тип</span></dt>
                              <dd><span>электрический</span></dd>
                              <dt><span>Скорость</span></dt>
                              <dd><span>до 54 Мбит/с</span></dd>
                              <dt><span>Разъем </span></dt>
                              <dd><span>BNC</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Условный доступ</h4>
                            <dl className="flexbox">
                              <dt><span>Скремблер</span></dt>
                              <dd><span>Встроенный DVB совместимый скремблер</span></dd>
                              <dt><span>Система условного доступа “Crypton”</span></dt>
                              <dd><span>соответствует ETR-289, DVB Simulcrypt</span></dd>
                              <dt><span>Макс. количество скремблируемых сервисных групп программ</span></dt>
                              <dd><span>8</span></dd>
                              <dt><span>Макс. количество скремблируемых программ</span></dt>
                              <dd><span>16</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Выходы</h4>
                            <dl className="flexbox">
                              <dt><span>Интерфейс</span></dt>
                              <dd><span>DVB ASI (в соответствии с EN50083-9)</span></dd>
                              <dt><span>Количество</span></dt>
                              <dd><span>1</span></dd>
                              <dt><span>Тип</span></dt>
                              <dd><span>электрический</span></dd>
                              <dt><span>Скорость выходного потока</span></dt>
                              <dd><span>54Мбит/с</span></dd>                                     <dt><span>Разъем </span></dt>
                              <dd><span>BNC</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Управление</h4>
                            <dl className="flexbox">
                              <dt><span>Способ</span></dt>
                              <dd><span>Удаленное(Ethernet (TCP/IP))</span></dd>
                              <dt><span>Программное обеспечение</span></dt>
                              <dd><span>«Cryptоn DTV Master»</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Физические параметры</h4>
                            <dl className="flexbox">
                              <dt><span>Размер</span></dt>
                              <dd><span>2U(19inch)</span></dd>
                              <dt><span>Размер</span></dt>
                              <dd><span>93мм х 482,6мм х 336мм</span></dd>
                              <dt><span>Вес</span></dt>
                              <dd><span>3,9 кг</span></dd>
                              <dt><span>Питание</span></dt>
                              <dd><span>90-260V AC 50/60 Hz</span></dd>
                              <dt><span>Мощность</span></dt>
                              <dd><span>{"< 45W"}</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Климатические условия</h4>
                            <dl className="flexbox">
                              <dt><span>Температура при работе</span></dt>
                              <dd><span>0°С - +45°С</span></dd>
                              <dt><span>Влажность при работе</span></dt>
                              <dd><span>5% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Температура при хранении</span></dt>
                              <dd><span>-40°С - +70°С</span></dd>
                              <dt><span>Влажность при хранении</span></dt>
                              <dd><span>0% - 85% (без конденсации влаги)</span></dd>
                            </dl>
                          </section>
                        </div>
                      </div>
                      <div className="product_block">
                    </div>
                    </div>
                    <div className="product_block">
                      <h3>Функциональная блок-схема DVB скремблера COD910ASI</h3>
                      <Img fluid={scheme_cod_881_asi.childImageSharp.fluid} alt="Функциональная блок-схема DVB скремблера COD910ASI" />
                    </div>
                    <div className="product_block">
                      <h3>Краткое описание основных блоков COD910ASI</h3>
                      <ul>
                        <li>
                          Приемник ASI. Для преобразования входного потока, поступающего по интерфейсу ASI во внутренний параллельный интерфейс, используется специализированный приемник ASI сигнала.
                        </li>
                        <li>
                          DVB Скремблер. Используемый в устройстве скремблер является DVB-совместимым и соответствует спецификации DVB-CAS ETR-289. Он производит выборочное скремблирование цифровых телевизионных программ. Главная цель скремблирования исключить несанкционированный просмотр телевизионных программ.
                        </li>
                        <li>
                          Генератор служебной информации. Генератор служебной информации выполняет операции вставки управляющих сообщений, по которым абонентский ресивер на приемной стороне может решать, что делать с выбранным телеканалом.
                        </li>
                        <li>
                          Управляющий модуль. Управляющий модуль используется для выполнения операции управления подписчиками, формирования сервисных пакетов, сбор статусной информации и для других задач.
                        </li>
                        <li>
                          Передатчик ASI. Для преобразования выходного потока из внутреннего параллельного интерфейса в ASI используется специализированный ASI передатчик.
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>

                <details className="accordion-item">
                  <summary>
                    <span>MPEG-2 кодер ENC810ASI</span>
                    <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                  </summary>

                  <div className="content productPage">
                    <div className="product_block">
                      <h3>Описание</h3>
                      <p>
                        MPEG-2 кодер Crypton ENC810ASI представляет собой функционально законченное устройство преобразования аналоговых сигналов в цифровой поток DVB. Имеет ASI выход, предназначенный для работы совместно с DVB модулятором. Основное применение ENC810ASI находит в головных станциях кабельного телевидения, сетях МИТРИС, MMDS и LMDS, в системах видеонаблюдения.
                      </p>
                    </div>
                    <div className="product_block">
                      <h3>Возможности</h3>
                      <ul>
                        <li>
                          Один аналоговый вход. Видео и стерео звук преобразуются в DVB совместимый поток (MPEG2 видео, MPEG1 Layer 2 звук).
                        </li>
                        <li>
                          ТВ канал. Канал может быть настроен как ТВ канал (видео и стерео звук).
                        </li>
                        <li>
                          Цифровой ASI выход. С выхода устройства сигнал может быть подан на канальный модулятор, поддерживающий интерфейс ASI, на мультиплексор или другое устройство для дальнейшей цифровой обработки.
                        </li>
                      </ul>
                    </div>
                    <div className="productPage_properties">
                      <div className="product_block">
                        <h3>Технические характеристики</h3>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Входы видео</h4>
                            <dl className="flexbox">
                              <dt><span>Количество</span></dt>
                              <dd><span>1</span></dd>
                              <dt><span>Форматы</span></dt>
                              <dd><span>PAL/SECAM</span></dd>
                              <dt><span>Аналоговый интерфейс</span></dt>
                              <dd><span>композитный (CVBS)</span></dd>
                              <dt><span>A/D</span></dt>
                              <dd><span>10 бит</span></dd>
                              <dt><span>Напряжение на входе</span></dt>
                              <dd><span>0,1 – 1В</span></dd>
                              <dt><span>Автоматическая регулировка усиления</span></dt>
                              <dd><span>Да</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>BNC</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Входы аудио</h4>
                            <dl className="flexbox">
                              <dt><span>Количество</span></dt>
                              <dd><span>1 стерео канал (аналоговый)</span></dd>
                              <dt><span>Напряжение на входе</span></dt>
                              <dd><span>0,1 – 1В</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>RCA</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Параметры кодирования видео</h4>
                            <dl className="flexbox">
                              <dt><span>Формат</span></dt>
                              <dd><span>MPEG-2 4:2:0 P@ML</span></dd>
                              <dt><span>Битовые скорости</span></dt>
                              <dd><span>3, 4, 5, 6 Мбит/с (CBR), 4 Мбит/с (VBR)</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Параметры кодирования аудио</h4>
                            <dl className="flexbox">
                              <dt><span>Формат</span></dt>
                              <dd><span>MPEG I Layer II</span></dd>
                              <dt><span>Частота дискретизации</span></dt>
                              <dd><span>44.1 KHz</span></dd>
                              <dt><span>Битовые скорости</span></dt>
                              <dd><span>64, 128, 192, 224, 256, 384 Kbps</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>DVB ASI(EN50083-9) Выходы</h4>
                            <dl className="flexbox">
                              <dt><span>Интерфейс</span></dt>
                              <dd><span>DVB ASI (в соответствии с EN50083-9)</span></dd>
                              <dt><span>Количество</span></dt>
                              <dd><span>Электрические 2 х ASI</span></dd>
                              <dt><span>Скорость выходного потока</span></dt>
                              <dd><span>54Мбит/с</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>BNC</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Физические параметры</h4>
                            <dl className="flexbox">
                              <dt><span>Размер</span></dt>
                              <dd><span>2U(19inch)</span></dd>
                              <dt><span>Размер</span></dt>
                              <dd><span>93мм х 482,6мм х 336мм</span></dd>
                              <dt><span>Вес</span></dt>
                              <dd><span>4,3 кг</span></dd>
                              <dt><span>Питание</span></dt>
                              <dd><span>90-260V AC 50/60 Hz</span></dd>
                              <dt><span>Мощность</span></dt>
                              <dd><span>{"< 80W"}</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Климатические условия</h4>
                            <dl className="flexbox">
                              <dt><span>Температура при работе</span></dt>
                              <dd><span>0°С - +45°С</span></dd>
                              <dt><span>Влажность при работе</span></dt>
                              <dd><span>5% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Температура при хранении</span></dt>
                              <dd><span>-40°С - +70°С</span></dd>
                              <dt><span>Влажность при хранении</span></dt>
                              <dd><span>0% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Вентиляция</span></dt>
                              <dd><span>Принудительная циркуляция воздуха</span></dd>
                            </dl>
                          </section>
                        </div>
                      </div>
                    </div>
                    <div className="product_block">
                      <h3>Краткое описание основных блоков ENC810ASI</h3>
                      <ul>
                        <li>
                          MPEG енкодер. Модуль MPEG 2 енкодер преобразует аналоговые сигналы изображения и звука в цифровой поток согласно спецификации DVB.
                        </li>
                        <li>
                          ASI интерфейс - выходной интерфейс передачи цифрового транспортного потока, согласно EN 50083-9.
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>

                <details className="accordion-item">
                  <summary>
                    <span>Ремодулятор RMD940</span>
                    <FontAwesomeIcon className="fa_icon" icon={faChevronDown}/>
                  </summary>

                  <div className="content productPage">
                    <div className="product_block">
                      <h3>Описание</h3>
                      <p>
                        Ремодулятор RMD940 представляет собой функционально законченное устройство предназначенное для восстановления основных характеристик цифрового QPSK модулированного радиосигнала, распространяемого на большие расстояния при помощи многократных ретрансляций.
                      </p>
                      <p>
                        Устройство имеет 4 независимых канала-ремодулятора, состоящих из модуля тюнера L-диапазона (950-2150 МГц), на входе, и модуля QPSK модулятора в L-диапазоне на выходе. Сигнал с выхода модулятора с помощью преобразователя частот может быть перенесен в желаемый участок СВЧ диапазона (например, в Ku-диапазон для систем спутникового вещания и МИТРИС).
                      </p>
                      <p>
                        Все работы по управлению этим устройством, а также мониторинг его состояния выполняется с персонального компьютера оператора, где установлен пакет ПО “Crypton DTV Master”. Коммуникационной средой между ремодулятором и управляющим компьютером является обычная TCP/IP сеть (100BaseTX, кабель UTP5, разъем RJ45, активное сетевое оборудование). Ограничений на количество устройств в сети нет. Основное применение RMD940 находит в сетях МИТРИС.
                      </p>
                    </div>
                    <div className="product_block">
                      <h3>Возможности</h3>
                      <ul>
                        <li>
                          Четыре канала ремодуляции. Позволяют, с помощью одного устройства производить восстановление сигнала четырех источников.
                        </li>
                        <li>
                          Отключение канала при необходимости. Если нет необходимости использовать все четыре канала (или по другим причинам) любой из каналов может быть отключен, при этом сигнал на выходе модулятора пропадает, канал переходит в режим пониженного энергопотребления. В отключенном состоянии остается возможность изменить настройки канала, но изменения вступят в силу только при включении канала.
                        </li>
                        <li>
                          QPSK тюнер L-диапазона. QPSK тюнер имеет допустимый уровень входного сигнала -25…-65 dBm.
                        </li>
                        <li>
                          QPSK модулятор L-диапазона. QPSK модулятор на нагрузке 50 Ом развивает мощность –3 дБм и имеет точность установки частоты ±5 кГц.
                        </li>
                        <li>
                          Сеть TCP/IP. Соединение данного устройства и управляющего компьютера оператора выполнено через обычное оборудование TCP/IP сетей.
                        </li>
                        <li>
                          Надежное ПО. Пакет ПО “Crypton DTV Master” позволяет выполнять задачи управления и мониторинга состояния устройств в сети в реальном времени.
                        </li>
                      </ul>
                    </div>
                    <div className="productPage_properties">
                      <div className="product_block">
                        <h3>Технические характеристики</h3>

                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Тюнер</h4>
                            <dl className="flexbox">
                              <dt><span>Количество</span></dt>
                              <dd><span>4</span></dd>
                              <dt><span>Демодуляция</span></dt>
                              <dd><span>QPSK (соответствие EN 300421)</span></dd>
                              <dt><span>Диапазон входных частот</span></dt>
                              <dd><span>950…2150 МГц</span></dd>
                              <dt><span>Допустимый уровень входного сигнала</span></dt>
                              <dd><span>-25…-65 dBm</span></dd>
                              <dt><span>Входное сопротивление</span></dt>
                              <dd><span>75 Ом</span></dd>
                              <dt><span>Скорость входного потока</span></dt>
                              <dd><span>25-30 Мсим/с</span></dd>
                              <dt><span>Режимы FEC</span></dt>
                              <dd><span>1/2, 2/3, 3/4, 5/6, 7/8</span></dd>
                              <dt><span>Разъем</span></dt>
                              <dd><span>F-тип (IEC 169-24</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>DVB ASI(EN50083-9) Выходы</h4>
                            <dl className="flexbox">
                              <dt><span>Количество</span></dt>
                              <dd><span>4</span></dd>
                              <dt><span>QPSK модуляция</span></dt>
                              <dd><span>В соответствии с EN 300421</span></dd>
                              <dt><span>Уровень выходного сигнала</span></dt>
                              <dd><span>-7…-3 dBm</span></dd>
                              <dt><span>Символьная скорость</span></dt>
                              <dd><span>25-30 Мсимв/с (шаг 0,125 Мсимв/с)</span></dd>
                              <dt><span>Диапазон частот</span></dt>
                              <dd><span>950-1500МГц или 1450-1800МГц</span></dd>
                              <dt><span>Точность установки частоты</span></dt>
                              <dd><span>±5кГц</span></dd>
                              <dt><span>Режимы FEC</span></dt>
                              <dd><span>1/2, 2/3, 3/4, 5/6, 7/8</span></dd>
                              <dt><span>Выходное сопротивление</span></dt>
                              <dd><span>50 Ом</span></dd>
                              <dt><span>Разъем </span></dt>
                              <dd><span>SMA</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Управление</h4>
                            <dl className="flexbox">
                              <dt><span>Способ</span></dt>
                              <dd><span>Удаленное(Ethernet (TCP/IP))</span></dd>
                              <dt><span>Программное обеспечение</span></dt>
                              <dd><span>«Cryptоn DTV Master»</span></dd>                                   </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Физические параметры</h4>
                            <dl className="flexbox">
                              <dt><span>Размер</span></dt>
                              <dd><span>2U(19inch)</span></dd>
                              <dt><span>Размер</span></dt>
                              <dd><span>93мм х 482,6мм х 300мм</span></dd>
                              <dt><span>Вес</span></dt>
                              <dd><span>4,3 кг</span></dd>
                              <dt><span>Питание</span></dt>
                              <dd><span>90-260V AC 50/60 Hz</span></dd>
                              <dt><span>Мощность</span></dt>
                              <dd><span>{"< 35W"}</span></dd>
                            </dl>
                          </section>
                        </div>
                        <div className="properties_section">
                          <section className="properties_group">
                            <h4>Климатические условия</h4>
                            <dl className="flexbox">
                              <dt><span>Температура при работе</span></dt>
                              <dd><span>0°С - +45°С</span></dd>
                              <dt><span>Влажность при работе</span></dt>
                              <dd><span>5% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Температура при хранении</span></dt>
                              <dd><span>-40°С - +70°С</span></dd>
                              <dt><span>Влажность при хранении</span></dt>
                              <dd><span>0% - 85% (без конденсации влаги)</span></dd>
                              <dt><span>Вентиляция</span></dt>
                              <dd><span>Принудительная циркуляция воздуха</span></dd>
                            </dl>
                          </section>
                        </div>
                      </div>
                      <div className="product_block">
                    </div>
                    </div>
                    <div className="product_block">
                      <h3>Функциональная блок-схема ремодулятора RMD940</h3>
                      <Img fluid={scheme_rmd_940.childImageSharp.fluid} alt="Функциональная блок-схема ремодулятора RMD940 Crypton" />
                    </div>
                    <div className="product_block">
                      <h3>Краткое описание основных блоков RMD940</h3>
                      <ul>
                        <li>
                          QPSK тюнер. Модуль тюнера осуществляет прием сигнала, его демодуляцию и коррекцию ошибок. Восстановленный сигнал подается на выход модуля тюнера в виде цифрового потока соответствующего спецификации DVB.
                        </li>
                        <li>
                          QPSK модулятор. Модуль модулятора осуществляет QPSK модуляцию и обработку помехозащитным кодом входной DVB поток, который затем преобразуется в выходной сигнал L-диапазона.
                        </li>
                        <li>
                          Управляющий модуль. Модуль управления обрабатывает команды управляющего компьютера, выполняет операции управления тюнерами и модуляторами, а так же периодически опрашивает состояния тюнеров и модуляторов и в случае возникновения некорректной работы этих модулей производит попытки восстановления их нормального функционирования.
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
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
