import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";

export default () => (
  <StaticQuery
  query = {
      graphql`
        query   {
              crt1041qam: file(relativePath: {eq: "crt1041qam.jpg"}) {
                  childImageSharp {
                      fluid(maxWidth: 864, maxHeight: 260) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
    `}
    render= {({ crt1041qam  }) => (
      <>

      <Helmet>
        <title> DVB-C модулятор CRT1041M-C | Оборудование для головной станции ТВ | Crypton.com.ua</title>
        <meta name="description" content="CRT1041M-C - это 4-канальный DVB-C модулятор. Поток с четырех независимых мультиплексоров преобразуется в QAM модулированный сигнал  и выдается на два ВЧ выхода попарно. Устройство предназначено для использования в кабельных, ММДС и SMATV сетях цифрового телевидения." />
      </Helmet>

      <ProductInfo
        categories={[{text: "Модуляторы", link: "qam_modulators"}]}
        name="Модулятор CRT1041M-C"
        photos={[crt1041qam.childImageSharp.fluid]}
        description={() => (
          <>
            <div className="product_block">
              <p>CRT1041M-C представляет собой компактный 4-канальный DVB-C модулятор. Транспортный поток с четырех независимых мультиплексоров принимается на DVB-ASI входы каждого из четырех модуляторов. QAM модулированный сигнал выдается на два ВЧ выхода попарно. Центральная частота первого из модуляторов в паре перестраивается в диапазоне   48–850Мгц, второго смещена вверх на 8МГц.</p><p>Устройство поддерживает QAM16, 32, 64, 128 и 256 и фиксированную символьную скорость 7,000 Мсим/с. Устройство предназначено для использования в кабельных, ММДС и SMATV сетях цифрового телевидения.</p>
            </div>
            <div className="product_block">
              <h4>Возможности</h4>
              <ul className="bigger_margin_ul">
                <li>4 DVB-ASI входа. EN 50083-9 совместимые входы для приема данных в виде транспортного потока DVB.</li>
                <li>4 DVB-C модулятора. Четыре мультиплексированных потока модулируются независимо используя один из типов модуляции в соответствии с EN 300429.</li>
                <li>ВЧ выходы. QAM модулированные сигналы попарно смещаются в необходимую вещателю полосу частот в диапазоне 48-850 МГц.</li>
                <li>Управление. Для установки и контроля параметров модуляторов устройство снабжено кнопочной клавиатурой и символьным жидкокристаллическим дисплеем.</li>
                <li>AC 220V источник питания. 220В источник питания используется для обеспечения нормальной работы устройства.</li>
                <li>Компактные размеры.  Благодаря своим компактным размерам (19” 1U) устройство может быть легко интегрировано в состав головных станций цифрового телевизионного вещания.</li>
                <li>Применение. CATV, MMDS, SMATV.</li>
              </ul>
            </div>
          </>
        )}
        propertiesTable={() => (false)}
        />
    </>
  )}
/>)

// краткое описание
// CRT1041M-C представляет собой компактный 4-канальный DVB-C модулятор. Транспортный поток с четырех независимых мультиплексоров принимается на DVB-ASI входы каждого из четырех модуляторов. QAM модулированный сигнал выдается на два ВЧ выхода попарно. Центральная частота первого из модуляторов в паре перестраивается в диапазоне   48–850Мгц, второго смещена вверх на 8МГц. Устройство поддерживает QAM16, 32, 64, 128 и 256 и фиксированную символьную скорость 7,000 Мсим/с. Устройство предназначено для использования в кабельных, ММДС и SMATV сетях цифрового телевидения.

// <p><img src="/files/u2/crt1041qam.jpg" class="img_left" /></p>
// <h3>Описание:</h3>CRT1041M-C представляет собой компактный 4-канальный DVB-C модулятор. Транспортный поток с четырех независимых мультиплексоров принимается на DVB-ASI входы каждого из четырех модуляторов. QAM модулированный сигнал выдается на два ВЧ выхода попарно. Центральная частота первого из модуляторов в паре перестраивается в диапазоне   48–850Мгц, второго смещена вверх на 8МГц. Устройство поддерживает QAM16, 32, 64, 128 и 256 и фиксированную символьную скорость 7,000 Мсим/с. Устройство предназначено для использования в кабельных, ММДС и SMATV сетях цифрового телевидения.
//
// <h3>Возможности:</h3><ul>
// <li>4 DVB-ASI входа. EN 50083-9 совместимые входы для приема данных в виде транспортного потока DVB.</li>
//
// <li>4 DVB-C модулятора. Четыре мультиплексированных потока модулируются независимо используя один из типов модуляции в соответствии с EN 300429.</li>
//
// <li>ВЧ выходы. QAM модулированные сигналы попарно смещаются в необходимую вещателю полосу частот в диапазоне 48-850 МГц.</li>
//
// <li>Управление. Для установки и контроля параметров модуляторов устройство снабжено кнопочной клавиатурой и символьным жидкокристаллическим дисплеем.</li>
//
// <li>AC 220V источник питания. 220В источник питания используется для обеспечения нормальной работы устройства.</li>
//
// <li>Компактные размеры.  Благодаря своим компактным размерам (19” 1U) устройство может быть легко интегрировано в состав головных станций цифрового телевизионного вещания.</li>
//
// <li>Применение. CATV, MMDS, SMATV.</li>
//
// <br /><a href="/sites/all/files/pdf/crt1041mc_ru.pdf" target="_blank" class="map"><img src="/files/u2/adobe_reader_logo.jpg" width="35" height="35" border="0" alt="Download Datasheet PDF" align="absmiddle" /> Загрузить техническое описание в формате pdf (1.0 MБ)</a></ul>",
