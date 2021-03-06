import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";

export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
                pwc1120l_rear: file(relativePath: {eq: "pwc1120l_rear.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 257) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ pwc1120l_rear }) => (
        <>

        <Helmet>
          <title>12-канальный сумматор мощности PWC1120L | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="Подробнее можно узнать тут." />
        </Helmet>

        <ProductInfo
          categories={[{text: "Сумматоры мощности", link: "combiners"}]}
          name="Сумматор мощности PWC1120L"
          photos={[pwc1120l_rear.childImageSharp.fluid]}
          description={() => (
            <>
              <div className="product_block">
                <p>Сумматор мощности радиочастотных сигналов PWC1120L представляет собой 12-канальный сумматор мощности широкополосных радиочастотных сигналов. Мощность каждого из 12-и входов регулируется отдельным ВЧ аттенюатором. Суммарная мощность также регулируется на выходе устройства. Количество суммируемых сигналов может быть увеличено, если на вход каскадирования устройства подать предварительно просуммированный сигнал с другого PWC1120L или подобного устройства. Для питания передающего устройства (BUC) в устройстве предусмотрен инжектор постоянного напряжения 24В. Некоторые BUC модули для своей работы требуют наличия в выходном сигнале  опорной частоты . PWC1120L дополнительно содержит инжектор опорной частоты 10МГц. Устройство выполнено в 1U корпусе и предназначено для установки в стандартные 19” приборные стойки для телекоммуникационного оборудования.</p>
              </div>
              <div className="product_block">
                <h4>Возможности</h4>
                <ul className="bigger_margin_ul">
                  <li>12 L-Band входов. Устройство имеет 12 регулируемых по мощности ВЧ входов для приема суммируемых сигналов. Рабочий диапазон частот 950 – 2150 МГц.</li>
                  <li>Вход каскадирования. Количество суммируемых сигналов может быть увеличено, если на вход каскадирования устройства подать ранее просуммированный другим PWC1120L или подобным устройством сигнал.</li>
                  <li>Питание BUC модуля. В устройстве предусмотрена возможность подачи по сигнальному фидеру напряжения питания передающего устройства(BUC) 24В.</li>
                  <li>Опорная частота BUC.  В случае если передающее устройство требует для своей работы наличия во входном сигнале опорной частоты, в PWC1120L предусмотрена схема инжектора опорной частоты 10МГц.</li>
                  <li>Регулятор мощности выходного сигнала. Для удобного согласования PWC1120L с передающим устройством предусмотрена регулировка мощности выходного сигнала.</li>
                  <li>AC 220V источник питания.  220В источник питания используется для обеспечения нормальной работы устройства.</li>
                  <li>Компактные размеры. Благодаря своим компактным размерам (19”, 1U) устройство может быть легко установлено в стандартные стойки для монтажа телекоммуникационного оборудования.</li>
                  <li>Применение. Головные станции MVDS сетей, наземные головные станции спутниковых сетей.</li>
                </ul>
              </div>
            </>
          )}
          propertiesTable={() => (false)}
        />
      </>
    )}
  />)

// короткое описание:
//Сумматор мощности радиочастотных сигналов PWC1120L представляет собой 12-канальный сумматор мощности широкополосных радиочастотных сигналов.   Мощность каждого из 12-и входов регулируется отдельным ВЧ аттенюатором. Суммарная мощность также регулируется на выходе устройства. Количество суммируемых сигналов может быть увеличено, если на вход каскадирования устройства подать предварительно просуммированный сигнал с другого PWC1120L или подобного устройства. Для питания передающего устройства (BUC) в устройстве предусмотрен инжектор постоянного напряжения 24В. Некоторые BUC модули для своей работы требуют наличия в выходном сигнале  опорной частоты . PWC1120L дополнительно содержит инжектор опорной частоты 10МГц. Устройство выполнено в 1U корпусе и предназначено для установки в стандартные 19” приборные стойки для телекоммуникационного оборудования.
//
//
// <h3>Описание</h3>
//     Сумматор мощности радиочастотных сигналов PWC1120L представляет собой 12-канальный сумматор мощности широкополосных радиочастотных сигналов.   Мощность каждого из 12-и входов регулируется отдельным ВЧ аттенюатором. Суммарная мощность также регулируется на выходе устройства. Количество суммируемых сигналов может быть увеличено, если на вход каскадирования устройства подать предварительно просуммированный сигнал с другого PWC1120L или подобного устройства. Для питания передающего устройства (BUC) в устройстве предусмотрен инжектор постоянного напряжения 24В. Некоторые BUC модули для своей работы требуют наличия в выходном сигнале  опорной частоты . PWC1120L дополнительно содержит инжектор опорной частоты 10МГц. Устройство выполнено в 1U корпусе и предназначено для установки в стандартные 19” приборные стойки для телекоммуникационного оборудования.
//
// <h3>Возможности</h3>
// <ul>
// <li>12 L-Band входов. Устройство имеет 12 регулируемых по мощности ВЧ входов для приема суммируемых сигналов. Рабочий диапазон частот 950 – 2150 МГц.
// </li><li>Вход каскадирования. Количество суммируемых сигналов может быть увеличено, если на вход каскадирования устройства подать ранее просуммированный другим PWC1120L или подобным устройством сигнал.
//
// <li>Питание BUC модуля.  В устройстве предусмотрена возможность подачи по сигнальному фидеру напряжения питания передающего устройства(BUC) 24В.
//
// </li><li>Опорная частота BUC.  В случае если передающее устройство требует для своей работы наличия во входном сигнале опорной частоты, в PWC1120L предусмотрена схема инжектора опорной частоты 10МГц.
// </li><li>Регулятор мощности выходного сигнала.  Для удобного согласования PWC1120L с передающим устройством предусмотрена регулировка мощности выходного сигнала.
// </li><li>AC 220V источник питания.  220В источник питания используется для обеспечения нормальной работы устройства.
// </li><li>Компактные размеры.   Благодаря своим компактным размерам (19”, 1U) устройство может быть легко установлено в стандартные стойки для монтажа телекоммуникационного оборудования.
// </li><li>Применение.  Головные станции MVDS сетей, наземные головные станции спутниковых сетей.</li></li></ul>
// <a href="/pdf/pwc1120l_ru.pdf" target="_blank" class="map"><img src="/files/u2/adobe_reader_logo.jpg" width="35" height="35" border="0" alt="Download Datasheet PDF" align="absmiddle" /> Загрузить техническое описание в формате pdf (407 кБ)</a>
