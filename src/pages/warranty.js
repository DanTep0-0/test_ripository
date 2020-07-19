import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet"
import {Link} from "gatsby";

export default class WarrantyPage extends React.Component {

  render () {
    return (
    <>

      <Helmet>
        <title>Гарантия и сервисное обслуживание оборудования | Crypton.com.ua</title>
        <meta name="description" content='Обслуживание товара компании "Crypton"  при его неисправности, а также условия, при которых оно производится.' />
      </Helmet>

      <Header/>

      <div className="breadcrumbs_div">
        <div className="container">
          <ul className="breadcrumbs">
            <li>Вы здесь:</li>
            <li><Link to="/">Главная</Link></li>
            <li><span>Поддержка</span></li>
            <li><span>Гарантия и сервисное обслуживание</span></li>
          </ul>
        </div>
      </div>

      <div className="page support_page">
        <div className="container">
          <h1 className="pageName">Гарантия и сервисное обслуживание</h1>
          <section className="page_block">
            <h3>1) Гарантийное обслуживание</h3>
            <div className="answer">
              <p>Вы можете получить гарантийное и/или сервисное обслуживание при обращении в нашу службу поддержки:</p>
              <a href="mailto:support@crypton.com.ua">support@crypton.com.ua</a>
              <p>Транспортировка оборудования производится за ваш счет.</p>
            </div>
          </section>
          <section className="page_block">
            <h3>2) В каких случаях гарантия не предоставляется</h3>
            <div className="answer">
              <p>В гарантийном ремонте может быть отказано, если:</p>
              <ul>
                <li>нарушена сохранность гарантийных пломб</li>
                <li>есть механические или иные повреждения, которые возникли вследствие умышленных или неосторожных действий покупателя или третьих лиц</li>
                <li>нарушены правила использования, изложенные в эксплуатационных документах</li>
                <li>было совершено несанкционированное вскрытие, ремонт или изменение внутренних коммуникаций и компонент товара, изменена конструкция или схемы товара</li>
                <li>серийный номер, находящийся в памяти изделия, изменен, стерт или не может быть установлен</li>
              </ul>
              <p>Гарантийные обязательства не распространяются на следующие неисправности:</p>
              <ul>
                <li>естественный износ оборудования</li>
                <li>случайные повреждения, причиненные клиентом, или повреждения, возникшие вследствие небрежного отношения или использования (воздействие жидкости, запыленности, попадание внутрь корпуса посторонних предметов и т.п.)</li>
                <li>повреждения, вызванные аварийным повышением или понижением напряжения в электросети или неправильноым подключением к электросети</li>
                <li>повреждения, вызванные использованием товара не по назначению</li>
                <li>повреждения, вызванные дефектами системы, в которой использовался данный товар, или возникшие в результате соединения и подключения товара к оборудованию других производителей</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
    )
  }

}