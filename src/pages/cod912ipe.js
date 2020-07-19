import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";

export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
                cod912ipe: file(relativePath: {eq: "cod912ipe.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 256) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ cod912ipe }) => (
        <>

        <Helmet>
          <title>DVB скремблер COD912IPE | Оборудование для головной станции ТВ | Crypton.com.ua</title>
          <meta name="description" content="COD912IPE - это четырехканальный DVB скремблер системы условного доступа CAS Crypton, использующий DVB-over-IP технологию распределения транспортных потоков." />
        </Helmet>

        <ProductInfo
          categories={[{text: "Скремблеры", link: "scramblers"}]}
          name="Скремблер COD912IPE"
          photos={[cod912ipe.childImageSharp.fluid]}
          description={() => (
            <>
              <div className="product_block">
                <p>COD912IPE представляет собой четырехканальный DVB скремблер системы условного доступа CAS Crypton, предназначенный для работы в составе головных станций, использующих DVB-over-IP технологию распределения транспортных потоков. Такое компактное и высоко интегрированное решение позволяет с исключительной эффективностью построить центральную головную станцию с условным доступом. Web интерфейс позволяет управлять устройством, вне зависимости от местонахождения оператора.</p>
              </div>
            </>
        )}
        propertiesTable={() => (false)}
      />
    </>
  )}
/>)


// COD912IPE представляет собой четырехканальный DVB скремблер системы
// условного доступа CAS Crypton, предназначенный для работы в составе головных станций, использующих DVB-over-IP технологию распределения транспортных потоков. Такое
// компактное и высоко интегрированное решение позволяет с исключительной
// эффективностью построить центральную головную станцию с условным доступом. Web-интерфейс позволяет управлять устройством, вне зависимости от местонахождения
// оператора.<br />
//
// <a href="/pdf/cod912ipe_manual_ru.pdf" target="_blank" class="map"><img src="/files/u2/adobe_reader_logo.jpg" width="35" height="35" border="0" alt="скачать техническое описание в формате PDF" align="absmiddle" /> Oписание DTV скремблера COD912IPE в формате pdf (1,2 Мбайт)</a>
