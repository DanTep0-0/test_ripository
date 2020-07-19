//p_receivers + multiplexers
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ProductInfo from "../components/ProductInfo"
import {Helmet} from "react-helmet";

export default () => (
  <StaticQuery
  query = {
      graphql`
        query   {
          crt1081ird_s2_ip: file(relativePath: {eq: "crt1081ird_s2_ip.jpg"}) {
              childImageSharp {
                  fluid(maxWidth: 4158, maxHeight: 1600) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          crt1081ird_s2_mx_bl: file(relativePath: {eq: "crt1081ird_s2_mx_bl.jpg"}) {
              childImageSharp {
                  fluid(maxWidth: 808, maxHeight: 347) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
        }
    `}
    render= {({ crt1081ird_s2_ip, crt1081ird_s2_mx_bl }) => (
      <>

      <Helmet>
        <title>8-канальный DVB-S/S2 ресивер c мультиплексором CRT1081IRD-S2-MX | Оборудование для головной станции ТВ | Crypton.com.ua</title>
        <meta name="description" content="CRT1081IRD-S2-MX может использоватся как IP стример с DVB-over-IP. Он обеспечивает сопряжение с DVB мультиплексорами, модуляторами и т.д.
        CRT1081IRD-S2-MX – это головная станция компактных размеров. В ее состав входят 8 независимых полнофункциональных DVB-S/S2 ресиверов с Common Interface, 4 внешних ASI входа, встроенный мультиплексор с EPG и NIT сервером, блок вывода сигнала - 4 ASI выхода и IP – и все это в одном корпусе." />
      </Helmet>

      <ProductInfo
        categories={[{text: "Ресиверы", link: "p_receivers"}, {text: "Мультиплексоры", link: "multiplexers"}]}
        name="8-канальный DVB-S/S2 ресивер c мультиплексором CRT1081IRD-S2-MX"
        photos={[crt1081ird_s2_ip.childImageSharp.fluid, crt1081ird_s2_mx_bl.childImageSharp.fluid]}
        description={() => (
          <>
            <div className="product_block">
              <p>
                CRT1081IRD-S2-MX представляет собой компактный 8-канальный профессиональный ресивер-декодер c мультиплексором.</p>
            </div>
            <div className="product_block">
              <h4>Возможности</h4>
              <ul>
                <li>8 независимых DVB-S/S2 тюнеров с Common Interface</li>
                <li>8 PCMCIA DVB-CI слотов с поддержкой мультипрограммного декодирования</li>
                <li>4 ASI входа</li>
                <li>Встроенный мультиплексор обрабатывает сигналы со входов DVB-S/S2 и ASI</li>
                <li>Встроенные EPG и NIT серверы</li>
                <li>Редактирование PID, PSI/SI</li>
                <li>4 ASI выхода и IP выход (4 MPTS, как зеркало ASI выходов)</li>
                <li>Поддержка точной коррекции PCR</li>
                <li>Поддержка SD, HD, UHD (4k)</li>
                <li>Управление через WEB интерфейс</li>
              </ul>
            </div>
            <div className="product_block">
              <p>
                Профессиональный ресивер CRT1081IRD-S2-MX состоит из 8 независимых полнофункциональных DVB-S/S2 ресиверов с Common Interface, 4 внешних ASI входов, встроенного мультиплексора с EPG и NIT сервером и блока вывода сигнала - 4 ASI выхода и IP (4 MPTS, как зеркало ASI).</p>
              <p>
                Мультиплексор обрабатывает сигналы с 8 входов DVB-S/S2 и 4 входов ASI, и передает на любой из 4 выходов ASI и IP. Он имеет функции поддержки автоматического генерации информации PSI/SI, редактирования PID, фильтрации каналов и автоматической коррекции PCR. Встроенный EPG сервер позволяет легко добавлять электронный программный гид в выходной транспортный поток TS.</p>
              <p>
                CRT1081IRD-S2-MX поддерживает работу с SD, HD и UHD (4k) каналами.</p>
              <p>
                Высокая интеграция и экономичная конструкция делают это устройство широко используемым в системах цифрового телевидения, а Web интерфейс позволяет управлять устройством, вне зависимости от местонахождения оператора.</p>
            </div>
          </>
      )}
      propertiesTable={() => (
        <>
        <div className="properties_section">
          <h4>DVB-S/S2 ресивер</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Количевство каналов</span></dt>
              <dd><span>8</span></dd>
              <dt><span>Диапазон принимаемых частот</span></dt>
              <dd><span>950-2150 МГц</span></dd>
              <dt><span>Уровень входного сигнала</span></dt>
              <dd><span>-65…-25 дБм</span></dd>
              <dt><span>Номинальный входной импеданс</span></dt>
              <dd><span>75 Ом</span></dd>
              <dt><span>Тип разъема</span></dt>
              <dd><span>IEC, F-type</span></dd>
              <dt><span>Модуляция</span></dt>
              <dd><span>QPSK, 8PSK, 16APSK</span></dd>
              <dt><span>Символьная скорость SR</span></dt>
              <dd><span>1-45Msps(QPSK,8PSK), 1-36Msps(16APSK)</span></dd>
              <dt><span>FEC</span></dt>
              <dd><span>авто 1/2, 3/5, 2/3, 3/4, 4/5, 5/6, 6/7, 7/8, 8/9, 9/10</span></dd>
              <dt><span>Питание LNB</span></dt>
              <dd><span>13/18 В, 400 мА макс.</span></dd>
            </dl>
          </section>
        </div>
        <div className="properties_section">
          <h4>Common interface</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Количевство каналов</span></dt>
              <dd><span>8</span></dd>
              <dt><span>Спецификация</span></dt>
              <dd><span>EN50221, ETSI TS 101699</span></dd>
            </dl>
          </section>
        </div>
        <div className="properties_section">
          <h4>DVB-ASI входы</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Количество входов</span></dt>
              <dd><span>4</span></dd>
              <dt><span>Спецификация</span></dt>
              <dd><span>EN 50083-9</span></dd>
              <dt><span>Импеданс входа</span></dt>
              <dd><span>75 Ом</span></dd>
              <dt><span>Тип разъема</span></dt>
              <dd><span>IEC 169-8, BNC-type</span></dd>
              <dt><span>Режим работы</span></dt>
              <dd><span>Авто</span></dd>
              <dt><span>Максимальная скорость входного потока</span></dt>
              <dd><span>213 Мбит/с (пакетный), 72 Мбит/с (байтовый)</span></dd>
            </dl>
          </section>
        </div>
        <div className="properties_section">
          <h4>Мультиплексор</h4>
          <section className="properties_group">
            <dl className="flexbox">
              <dt><span>Количество входов</span></dt>
              <dd><span>12 (8 DVB-S2 +4 ASI)</span></dd>
              <dt><span>Количество выходов</span></dt>
              <dd><span>4</span></dd>
              <dt><span>Спецификация</span></dt>
              <dd><span>ISO IEC 13818-1</span></dd>
              <dt><span>Максимальная скорость потока (все каналы включены)</span></dt>
              <dd><span>300 Мбит/с (IP), 400 Мбит/с (ASI)</span></dd>
              <dt><span>Редактирование PID</span></dt>
              <dd><span>Есть</span></dd>
              <dt><span>Редактирование SI/PSI</span></dt>
              <dd><span>Есть</span></dd>
              <dt><span>DVB EPG сервер</span></dt>
              <dd><span>Есть (встроенный)</span></dd>
              <dt><span>DVB NIT сервер</span></dt>
              <dd><span>Есть (встроенный)</span></dd>
              <dt><span>Нестабильность PCR</span></dt>
              <dd><span>Не более 500 нс</span></dd>
            </dl>
          </section>
        </div>

        </>)}
        />
      </>
    )}
/>)
