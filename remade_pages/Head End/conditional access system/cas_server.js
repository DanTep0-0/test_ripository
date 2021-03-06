import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";


export default () => (
    <StaticQuery
    query = {
        graphql`
          query   {
                catsh_up_854_419: file(relativePath: {eq: "catsh_up_854_419.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 854, maxHeight: 419) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
      `}
      render= {({ catsh_up_854_419 }) => (
        <>

        <Helmet>
          <title>CAS сервер Crypton | Оборудование для телевизионного вещания | Crypton.com.ua</title>
          <meta name="description" content="CAS сервер Crypton представляет собой полнофункциональный сервер, предназначенный для работы в составе головных станций совместно со скремблерами системы условного доступа CAS Crypton COD912IPE и CRT1041M-C-IP" />
        </Helmet>

        <ProductInfo
          categories={[{text: "CAS", link: "cas_crypton"}, {text: "скремблеры", link: "scramblers"}]}
          name="CAS сервер Crypton"
          photos={[catsh_up_854_419.childImageSharp.fluid]}
          description={() => (
            <>
              <div className="product_block">
                <p>Сервер CAS Crypton представляет собой полнофункциональный сервер системы условного доступа «CAS Crypton», предназначенный для работы в составе головных станций совместно со скремблерами системы условного доступа CAS Crypton <Link to="/cod912ipe">COD912IPE</Link> и <Link to="/crt1041m-c-ip">CRT1041M-C-IP</Link>.
                </p>
                <p>Simulcrypt-совместимый сервер абонентских сообщений(ECM) используется  для организации адресного доступа подписчиков к услугам сетей цифрового телевидения.
                </p>
                <p>Серверы http и ftp позволяют загрузить на сервер текущей информации о состоянии подписок абонентов.
                </p><p> Полнофункциональный web интерфейс служит для мониторинга и управления.
                </p>
                <p>Опционально в системой поддерживается API стыковки со сторонними биллинговыми системами а также встроенная система управления подписками посредством доступа к внутренней базе данных абонентов через WEB интерфейс.
                </p>
                <p>Интерфейс системы CAS Crypton имеет модульную структуру. Каждый модуль представлен соответствующей закладкой и содержит набор инструментов, необходимых для выполнения определённых задач. Администратор имеет полный контроль над системой, в то время как оператор имеет доступ только к функциям мониторинга и документации.
                </p>
              </div>
            </>
          )}
          propertiesTable={() => (false)}
        />
      </>
    )}
  />)

// <img src="/sites/all/files/photo/catsh_up_854_419.png " class="img-b" />
// <p>Сервер CAS Crypton представляет собой полнофункциональный сервер системы условного доступа «CAS Crypton», предназначенный для работы в составе головных станций совместно со скремблерами системы условного доступа CAS Crypton <a href="/cod912"> COD912IPE</a> и <a href="/crt1041m-c-ip">CRT1041M-C-IP</a>.
// </p><p>Simulcrypt-совместимый сервер абонентских сообщений(ECM) используется  для организации адресного доступа подписчиков к услугам сетей цифрового телевидения.
// </p><p>Серверы http и ftp позволяют загрузить на сервер текущей информации о состоянии подписок абонентов.
// </p><p> Полнофункциональный web интерфейс служит для мониторинга и управления.
// </p><p>Опционально в системой поддерживается API стыковки со сторонними биллинговыми системами а также встроенная система управления подписками посредством доступа к внутренней базе данных абонентов через WEB интерфейс.
// </p><p>Интерфейс системы CAS Crypton имеет модульную структуру. Каждый модуль представлен соответствующей закладкой и содержит набор инструментов, необходимых для выполнения определённых задач. Администратор имеет полный контроль над системой, в то время как оператор имеет доступ только к функциям мониторинга и документации.
// </p>
