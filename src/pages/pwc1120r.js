import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";

export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
                pwc1120r: file(relativePath: {eq: "pwc1120r.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ pwc1120r }) => (
        <>

        <Helmet>
          <title>12-канальный сумматор мощности PWC1120R | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="Подробнее можно узнать тут." />
        </Helmet>

        <ProductInfo
          categories={[{text: "Сумматоры мощности", link: "combiners"}]}
          name="12-канальный сумматор мощности ВЧ сигнала PWC1120R"
          photos={[pwc1120r.childImageSharp.fluid]}
          description={() => (
            <>
              <div className="product_block">
                <p>PWC1120R представляет собой 12-канальный сумматор мощности ВЧ радиосигнала. Устройство характеризуется высокими изоляционными характеристиками входов и компенсацией потери мощности суммирования на выходе. Оно идеально подходит для использования в многоканальных кабельных сетях вещания цифровых телевизионных программ.</p>
              </div>
            </>
          )}
          propertiesTable={() => (<>

            <div className="properties_section">
              <h4>Входы</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Количество ВЧ входов</span></dt>
                  <dd><span>12</span></dd>
                  <dt><span>Рабочий диапазон частот</span></dt>
                  <dd><span>50–850 MHz</span></dd>
                  <dt><span>Макс. Уровень входного сигнала</span></dt>
                  <dd><span>120 dBuV</span></dd>
                  <dt><span>Мин. изоляция каналов</span></dt>
                  <dd><span>30 dB</span></dd>
                  <dt><span>Номинальный входной импеданс</span></dt>
                  <dd><span>75 Ohm</span></dd>
                  <dt><span>Тип разъема</span></dt>
                  <dd><span>IEC, F-type</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Выходной усилитель</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>IP3</span></dt>
                  <dd><span>45 dBm</span></dd>
                  <dt><span>IP1</span></dt>
                  <dd><span>30 dBm</span></dd>
                  <dt><span>IP2</span></dt>
                  <dd><span>88 dB</span></dd>
                  <dt><span>Равномерность усиления</span></dt>
                  <dd><span>±0.4 dB(50-850 MHz)</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Выходы</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Количество ВЧ выходов</span></dt>
                  <dd><span>1</span></dd>
                  <dt><span>Разъем</span></dt>
                  <dd><span>IEC, F-type</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Питание</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Напряжение</span></dt>
                  <dd><span>220v, 50Hz</span></dd>
                  <dt><span>Макс. потребление</span></dt>
                  <dd><span>15 W</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Условия эксплуатации</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Номинальная температура</span></dt>
                  <dd><span>10…40 ºC</span></dd>
                  <dt><span>Макс. относительная влажность</span></dt>
                  <dd><span>80%</span></dd>
                </dl>
              </section>
            </div>
            <div className="properties_section">
              <h4>Габаритные размеры</h4>
              <section className="properties_group">
                <dl className="flexbox">
                  <dt><span>Ширина, мм</span></dt>
                  <dd><span>490</span></dd>
                  <dt><span>Глубина, мм</span></dt>
                  <dd><span>300</span></dd>
                  <dt><span>Высота, мм</span></dt>
                  <dd><span>44</span></dd>
                </dl>
              </section>
            </div>

          </>)}
        />
      </>
    )}
  />)

// короткое описание:

// PWC1120R представляет собой 12-канальный сумматор мощности ВЧ радиосигнала. Устройство характеризуется высокими изоляционными характеристиками входов и компенсацией потери мощности суммирования на выходе. Оно идеально подходит для использования в многоканальных кабельных сетях вещания цифровых телевизионных программ.",


// "<img src="/sites/all/files/photo/pwc1120r_back.jpg" class="img-b" alt="Power Combiner PWC1120R" />
// PWC1120R представляет собой 12-канальный сумматор мощности ВЧ радиосигнала. Устройство характеризуется высокими изоляционными характеристиками входов и компенсацией потери мощности суммирования на выходе. Оно идеально подходит для использования в многоканальных кабельных сетях вещания цифровых телевизионных программ.

// <div align="center"><h2>Технические характеристики:</h2>
// <table class="pure-table pure-table-bordered">
//
// <tr><th colspan="2" class="pure-table-odd">Входы</th></tr>
// <dt><span>Количество ВЧ входов</span></dt>
// <dd><span>12</span></dd>
// <dt><span>Рабочий диапазон частот</span></dt>
// <dd><span>50 – 850 MHz</span></dd>
// <dt><span>Макс. Уровень входного сигнала</span></dt>
// <dd><span>120 dBuV</span></dd>
// <dt><span>Мин. изоляция каналов</span></dt>
// <dd><span>30 dB</span></dd>
// <dt><span>Номинальный входной импеданс</span></dt>
// <dd><span>75 Ohm</span></dd>
// <dt><span>Тип разъема</span></dt>
// <dd><span>IEC, F-type</span></dd>
//
// <tr><th colspan="2" class="pure-table-odd">Выходной усилитель</th></tr>
// <dt><span>IP3</span></dt>
// <dd><span>45 dBm</span></dd>
// <dt><span>IP1</span></dt>
// <dd><span>30 dBm</span></dd>
// <dt><span>IP2</span></dt>
// <dd><span>88 dB</span></dd>
// <dt><span>Равномерность усиления</span></dt>
// <dd><span>±0.4 dB(50 — 850 MHz)</span></dd>
//
// <tr><th colspan="2" class="pure-table-odd">Выходы</th></tr>
// <dt><span>Количество ВЧ выходов</span></dt>
// <dd><span>1</span></dd>
// <dt><span>Разъем</span></dt>
// <dd><span>IEC, F-type</span></dd>
//
// <tr><th colspan="2" class="pure-table-odd">Питание</th></tr>
// <dt><span>Напряжение</span></dt>
// <dd><span>220v, 50Hz</span></dd>
// <dt><span>Макс. потребление</span></dt>
// <dd><span>15 W</span></dd>
//
// <tr><th colspan="2" class="pure-table-odd">Условия эксплуатации</th></tr>
// <dt><span>Номинальная температура</span></dt>
// <dd><span>10 … 40 ºC</span></dd>
// <dt><span>Макс. относительная влажность</span></dt>
// <dd><span>80%</span></dd>
//
// <tr><th colspan="2" class="pure-table-odd">Размеры</th></tr>
// <dt><span>Ширина, мм</span></dt>
// <dd><span>490</span></dd>
// <dt><span>Глубина, мм</span></dt>
// <dd><span>300</span></dd>
// <dt><span>Высота, мм</span></dt>
// <dd><span>44</span></dd>
//
// </table></div>
// <a href="/sites/all/files/pdf/PWC1120R_01_Datasheet_RU.pdf" target="_blank" class="map"><img src="/sites/all/files/img/adobe_reader_logo.jpg" width="35" height="35" border="0" alt="12-канальный сумматор мощности ВЧ сигнала PWC1120R" align="absmiddle" /> 12-канальный сумматор мощности ВЧ сигнала PWC1120R техническое описание в формате PDF</a><br />",
