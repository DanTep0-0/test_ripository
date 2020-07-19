import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet";
import {Link} from "gatsby"

export default class PaymentShipping extends React.Component {

  render () {
    return (
    <>

      <Helmet>
        <title>Доставка и оплата | Crypton.com.ua</title>
        <meta name="description" content='Здесь вы можете ознакомиться со способами доставки и оплаты купленых товаров.' />
      </Helmet>

      <Header/>

      <div className="breadcrumbs_div">
        <div className="container">
          <ul className="breadcrumbs">
            <li>Вы здесь:</li>
            <li><Link to="/">Главная</Link></li>
            <li><span>Поддержка</span></li>
            <li><span>Доставка и оплата</span></li>
          </ul>
        </div>
      </div>

      <div className="page support_page">
        <div className="container">
          <h1 className="pageName">Доставка и оплата</h1>
          <section className="page_block">
            <h3>1) Способы доставки</h3>
            <p>Мы отправляем оборудование любым удобным Вам перевозчиком, который работает в Украине. Вот перечень наиболее популярных:</p>
            <div className="grid_layout">
              <div className="grid_item">
                <h4>DHL</h4>
                <div className="content">
                  <ul>
                    <li>Экспресс-доставка в 220 стран мира</li>
                    <li>Доставка от двери до двери в кратчайшие сроки</li>
                  </ul>
                </div>
              </div>
              <div className="grid_item">
                <h4>TMM Express</h4>
                <div className="content">
                  <ul>
                    <li>Международная экспресс-доставка</li>
                    <li>Сроки доставки: 1-3 рабочих дня</li>
                  </ul>
                </div>
              </div>
              <div className="grid_item">
                <h4>TNT Express</h4>
                <div className="content">
                  <ul>
                    <li>Международная доставка в 200 стран</li>
                    <li>Экспресс-доставка на следующий день</li>
                    <li>Эконом-экспресс от 2 рабочих дней</li>
                  </ul>
                </div>
              </div>
              <div className="grid_item">
                <h4>Нова пошта</h4>
                <div className="content">
                  <p>Доставка как по Украине, так и международная в большинство стран мира</p>
                </div>
              </div>
              <div className="grid_item">
                <h4>Укрпочта</h4>
                <div className="content">
                  <ul>
                    <li>Наземная и авиадоставка в 230 стран и территорий</li>
                    <li>Упрощенное таможенное оформление</li>
                    <li>А также доставка в  более, чем 29 000 населенных пунктов Украины</li>
                  </ul>
                </div>
              </div>
              <div className="grid_item">
                <h4>Самовывоз из главного офиса</h4>
                <div className="content">
                  <ul>
                    <li>Адрес: 03061, Украина, Киев, Отрадный проспект, 95C</li>
                    <li>Подробнее можно узнать <Link to="/contact">здесь</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <p>Отправка товара происходит только после оплаты заказа.</p>
          </section>
          <section className="page_block">
            <h3>2) Способы оплаты</h3>
            <div className="grid_layout">
              <div className="grid_item">
                <h4>SWIFT перевод для физлиц</h4>
                <div className="content">
                  <ul>
                    <li>Один из самый простых и безопасных способов осуществить денежный перевод за границу</li>
                    <li>Комиссия составляет 0,2-1,5% от суммы</li>
                    <li>Срок перевода: 3-5 рабочих дней</li>
                  </ul>
                </div>
              </div>
              <div className="grid_item">
                <h4>Western Union перевод</h4>
                <div className="content">
                  <ul>
                    <li>Один из наиболее распространенных способов осуществить денежный перевод</li>
                    <li>Обратите внимание: в этой платежной системе есть ограничения на сумму перевода</li>
                    <li>Комиссия составляет 1% от суммы</li>
                    <li>Срок перевода: несколько минут</li>
                  </ul>
                </div>
              </div>
              <div className="grid_item">
                <h4>MoneyGram</h4>
                <div className="content">
                  <ul>
                    <li>Простые, быстрые и надежные денежные переводы</li>
                    <li>Комиссия составляет 1-2,5% от суммы</li>
                    <li>Срок перевода: несколько минут</li>
                  </ul>
                </div>
              </div>
              <div className="grid_item">
                <h4>PrivatMoney переводы</h4>
                <div className="content">
                  <ul>
                    <li>Быстрые переводы для стран ближнего зарубежья</li>
                    <li>Комиссия составляет 1-2,5% от суммы</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
    )
  }

}
