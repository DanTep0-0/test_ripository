import React from "react"
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      extraInfo: getExtraInfo()
    };
  }

  render () {
    return (
      <>
        {getCodeOfClass()}
      </>
    )
  }

  componentDidMount() {
    setClass();
  }

}


function setClass() {
}

function getExtraInfo() {
}

function getCodeOfClass(){
  return(
    <>
    <footer>
      <div className="container">
        <div className="footer_mobile">

          <div className="footer_menu">
            <div className="footer_group">
              <h4 className="subtitle">Поддержка</h4>
              <ul className="footer_list">
                <li><Link to="/faq">Вопросы и ответы</Link></li>
                <li><Link to="/technical_support">Снятое с производства</Link></li>
                <li><Link to="/payment_shipping">Доставка и оплата</Link></li>
                <li><Link to="/warranty">Гарантия</Link></li>
              </ul>
            </div>
            <div className="footer_group">
              <h4 className="subtitle">Компания</h4>
              <ul className="footer_list">
                <li><Link to="/contact">Контакты</Link></li>
                <li><Link to="/profile">О нас</Link></li>
                <li><Link to="/news">Новости</Link></li>
                <li><Link to="/company_history">История компании</Link></li>
                <li><Link to="/sitemap">Карта сайта</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer_info">
            <div className="row">

              <div className="col footer_info_col address_col">
                <p>Отрадный проспект, 95C</p>
                <p>03061, Киев, Украина</p>
              </div>
              <div className="col footer_info_col phone_col">
                <a className="footer_link footer_custom_link" href="tel:+380442251221">+38 044 225 12 21</a>
                <a className="footer_link" href="tel:+380988461181">+38 098 846 11 81</a>
                <a className="footer_link" href="tel:+380503262475">+38 050 326 24 75</a>
                <a className="footer_link" href="mailto:office@crypton.com.ua" >office@crypton.com.ua</a>
              </div>
              <div className="col footer_info_col social_col">
                <a className="footer_link" href="https://www.youtube.com/channel/UC8k5sx0vZWGGdX3WvQxMkMw" target="_blank" rel="noreferrer">Youtube</a>
                <a className="footer_link" href="https://www.facebook.com/Crypton-satellite-cable-TV-IPTV-equipment-109155924201055" target="_blank" rel="noreferrer">Facebook</a>
              </div>
              <div className="col footer_info_col lang_col">
                <div className="dropdown switch_lang">
                  <span>RU<FontAwesomeIcon className="fa_icon" icon={faChevronDown}/></span>
                  <div className="dropdown_content">
                    <ul className="dropdown_list">
                      <li><Link to="/">UA</Link></li>
                      <li><Link to="/">EN</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="footer_desktop">

          <div className="footer_group">
            <h4 className="subtitle">Поддержка</h4>
            <ul className="footer_list">
              <li><Link to="/faq">Вопросы и ответы</Link></li>
              <li><Link to="/technical_support">Снятое с производства</Link></li>
              <li><Link to="/payment_shipping">Доставка и оплата</Link></li>
              <li><Link to="/warranty">Гарантия</Link></li>
            </ul>
          </div>
          <div className="footer_group">
            <h4 className="subtitle">Компания</h4>
            <ul className="footer_list">
              <li><Link to="/contact">Контакты</Link></li>
              <li><Link to="/profile">О нас</Link></li>
              <li><Link to="/news">Новости</Link></li>
              <li><Link to="/company_history">История компании</Link></li>
              <li><Link to="/sitemap">Карта сайта</Link></li>
            </ul>
          </div>
          <div className="footer_group phone_col">
            <a className="footer_link" href="mailto:office@crypton.com.ua" >office@crypton.com.ua</a>
            <a className="footer_link footer_custom_link" href="tel:+380442251221">+38 044 225 12 21</a>
            <a className="footer_link" href="tel:+380988461181">+38 098 846 11 81</a>
            <a className="footer_link" href="tel:+380503262475">+38 050 326 24 75</a>
          </div>
          <div className="footer_group">
            <div className="address_col">
              <p>Отрадный проспект, 95C</p>
              <p>03061, Киев, Украина</p>
            </div>
            <div className="social_col">
              <a className="footer_link" href="https://www.youtube.com/channel/UC8k5sx0vZWGGdX3WvQxMkMw" target="_blank" rel="noreferrer">Youtube</a>
              <a className="footer_link" href="https://www.facebook.com/Crypton-satellite-cable-TV-IPTV-equipment-109155924201055" target="_blank" rel="noreferrer">Facebook</a>
            </div>
            <div className="lang_col">
              <div className="dropdown switch_lang">
                <span>RU<FontAwesomeIcon className="fa_icon" icon={faChevronDown}/></span>
                <div className="dropdown_content">
                  <ul className="dropdown_list">
                    <li><Link to="/">UA</Link></li>
                    <li><Link to="/">EN</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>

    <div className="block copyright_block">
      <p className="copyright">&copy; 2020 ООО "Криптон ЛТД". Все права защищены</p>
    </div>
    </>
  )
}

// <div className="footer_group">
//   <h4 className="subtitle">Поддержка</h4>
//   <ul className="footer_list">
//     <li><Link to="/faq">Вопросы и ответы</Link></li>
//     <li><Link to="/payment_shipping">Доставка и оплата</Link></li>
//     <li><Link to="/warranty">Гарантия</Link></li>
//   </ul>
// </div>
// <div className="footer_group">
//   <h4 className="subtitle">Компания</h4>
//   <ul className="footer_list">
//     <li><Link to="/contact">Контакты</Link></li>
//     <li><Link to="/profile">О нас</Link></li>
//     <li><Link to="/company_history">История компании</Link></li>
//     <li><Link to="/sitemap">Карта сайта</Link></li>
//   </ul>
// </div>
// <div className="footer_group footer_group_social">
//   <h4 className="subtitle">Присоединяйтесь</h4>
//   <div className="footer_socials">
//     <a className="footer_link" className="social_link" href="https://www.facebook.com/Crypton-satellite-cable-TV-IPTV-equipment-109155924201055" target="_blank" rel="noreferrer">Facebook</a>
//     <a className="footer_link" className="social_link" href="https://www.youtube.com/channel/UC8k5sx0vZWGGdX3WvQxMkMw" target="_blank" rel="noreferrer">Youtube</a>
//   </div>
// </div>


// <div className="row">
//   <div className="col">
//     <p className="footerCatName">Поддержка</p>
//   </div>
//   <div className="col">
//     <p className="footerCatName">Компания</p>
//   </div>
// </div>
// <div className="row">
//   <div className="col">
//     <p><Link to="/faq">Вопросы и ответы
//     </Link></p>
//   </div>
//   <div className="col">
//     <p><Link to="/contact">Контакты</Link></p>
//   </div>
// </div>
// <div className="row">
//   <div className="col">
//     <p><Link to="/payment_shipping">Доставка и оплата</Link></p>
//   </div>
//   <div className="col">
//     <p><Link to="/profile">О нас</Link></p>
//   </div>
// </div>
// <div className="row">
//   <div className="col">
//     <p><Link to="/warranty">Гарантия</Link></p>
//   </div>
//   <div className="col">
//     <p><Link to="/company_history">История компании</Link></p>
//   </div>
// </div>
// <div className="row">
//   <div className="col"></div>
//   <div className="col">
//     <p><Link to="/sitemap">Карта сайта</Link></p>
//   </div>
// </div>
// </div>
//
// <div className="footer_info">
// <div className="row row-padding">
// <div className="col">
//   <p className="footerCatName">Позвоните нам</p>
// </div>
// </div>
// <div className="row">
// <div className="col col-numbers">
//   <a className="footer_link" href="tel:+380442251221">+38 044 225 12 21</a>
// </div>
// </div>
// <div className="row">
// <div className="col col-numbers">
//   <a className="footer_link" href="tel:+380988461181">+38 098 846 11 81</a>
// </div>
// </div>
// <div className="row">
// <div className="col col-numbers">
//   <a className="footer_link" href="tel:+380503262475">+38 050 326 24 75</a>
// </div>
// </div>
// </div>
//
//
// <div className="containerBottom">
// <a className="footer_link" className="footer_contacts_mail" href="mailto:office@crypton.com.ua">office@crypton.com.ua</a>
// <ul className="footer_contacts">
// <li><a className="footer_link" href="/">Facebook</a></li>
// <li><a className="footer_link" href="https://www.youtube.com/channel/UC8k5sx0vZWGGdX3WvQxMkMw">Youtube</a></li>
// </ul>
// <p className="copyright">&copy; 2020 ООО "Криптон ЛТД".</p>
// </div>
