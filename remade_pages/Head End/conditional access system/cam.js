import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";


export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
                crt1001cam: file(relativePath: {eq: "crt1001cam.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 260) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ crt1001cam }) => (
        <>

        <Helmet>
          <title>CI/CAM модуль условного доступа Crypton | Оборудование для телевизионного вещания | Crypton.com.ua</title>
          <meta name="description" content="CRT1001CAM - это адресный модуль доступа к услугам платных телевизионных сетей на основе CAS Crypton." />
        </Helmet>

        <ProductInfo
          categories={[{text: "CAS", link: "cas_crypton"}]}
          name="CI/CAM модуль доступа Crypton CRT1001CAM"
          photos={[crt1001cam.childImageSharp.fluid]}
          description={() => (
            <>
              <div className="product_block">
                <p>CRT1001CAM представляет собой адресный модуль доступа  к услугам платных телевизионных сетей на основе CAS Crypton.  Он предназначен для использования совместно с цифровыми телевизионными приемниками и цифровыми телевизионными приставками(Set-Top-Box) поддерживающими Common Interface спецификацию.</p>
              </div>
              <div className="product_block">
                <h4>Возможности</h4>
                <ul className="bigger_margin_ul">
                  <li>Common Interface. Модуль выполнен в соответствии с EN50221 и предназначен для работы совместно с цифровыми телевизионными приемниками и цифровыми телевизионными приставками, поддерживающими Common Interface спецификацию.</li>
                  <li>DVB-CAS Descrambler. Стандартизованный Common Descrambling Algorithm используется модулем для декодирования цифровых телевизионных программ в соответствии с ETR 289 спецификацией.</li>
                  <li>CAS Crypton. Система условного доступа CAS Crypton используется модулем для организации адресного доступа абонентов к услугам платного цифрового телевидения.</li>
                  <li>Применение. Сети вещания цифровых телевизионных программ в которых доступ к услугами организован при помощи CAS Crypton.</li>
                </ul>
              </div>
            </>
          )}
          propertiesTable={() => (false)}
        />
      </>
    )}
  />)


//короткое описание

// <p><img width="427" height="127" src="/files/u2/crt1001cam.jpg" class="img_left" /></p>
// <h3>Описание</h3>
// CRT1001CAM представляет собой адресный модуль доступа  к услугам платных телевизионных сетей на основе CAS Crypton.  Он предназначен для использования совместно с цифровыми телевизионными приемниками и цифровыми телевизионными приставками(Set-Top-Box) поддерживающими Common Interface спецификацию.

// <p><img src="/files/u2/crt1001cam.jpg" class="img_left" /></p>
//
// <h3>Описание</h3>
// CRT1001CAM представляет собой адресный модуль доступа  к услугам платных телевизионных сетей на основе CAS Crypton.  Он предназначен для использования совместно с цифровыми телевизионными приемниками и цифровыми телевизионными приставками(Set-Top-Box) поддерживающими Common Interface спецификацию.

// <h3>Возможности</h3><ul>
// <li>Common Interface. Модуль выполнен в соответствии с EN50221 и предназначен для работы совместно с цифровыми телевизионными приемниками и цифровыми телевизионными приставками, поддерживающими Common Interface спецификацию.</li>
//
// <li>DVB-CAS Descrambler. Стандартизованный Common Descrambling Algorithm используется модулем для декодирования цифровых телевизионных программ в соответствии с ETR 289 спецификацией.</li>
//
// <li>CAS Crypton. Система условного доступа CAS Crypton используется модулем для организации адресного доступа абонентов к услугам платного цифрового телевидения.</li>
//
// <li>Применение. Сети вещания цифровых телевизионных программ в которых доступ к услугами организован при помощи CAS Crypton.</li>
// <a href="/pdf/crt1001cam.pdf" target="_blank" class="map"><img src="/files/u2/adobe_reader_logo.jpg" width="35" height="35" border="0" alt="Download Datasheet PDF" align="absmiddle" /> Загрузить техническое описание в формате pdf (534 кБ)</a>
// </ul>
