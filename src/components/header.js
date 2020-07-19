import React from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

var overlayRef = React.createRef();
var headerMobileMenuRef = React.createRef();

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      extraInfo: getExtraInfo()
    };
  }

  render () {
    return (
      <>
      <header className="header" ref={this.props.refer}>
        <div className="container">

        <StaticQuery
        query={graphql`
          query {
            logo: file(relativePath: {eq: "crypton_logo.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 86) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }

          `}

        render={
          ({ logo }) => (
          <>
          <div className="header_mobile">
            <div className="nav-col_left col">
              <button className="menuButton" onClick={(event) => (openMenu(event))}>
                <FontAwesomeIcon className="fa_icon fa_icon_menu" icon={faBars}/>
              </button>
            </div>
            <div className="nav-col_logo col">
              <div className="logo">
                <Link to="/" className="menu_link" onClick={closeMenu} >
                  <Img fluid={logo.childImageSharp.fluid} className="logoImg" alt="Crypton логотип" />
                </Link>
              </div>
            </div>
            <div className="nav-col_right col">
              <div className="dropdown switch_lang">
                <span>RU
                  <FontAwesomeIcon className="fa_icon fa_icon_transition" icon={faChevronDown}/>
                </span>
                <div className="dropdown_content">
                  <ul className="dropdown_list">
                    <li>
                      <Link to="/">
                        UA
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        EN
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mobile_menu_wrapper">
              <div ref={overlayRef} className="overlay dnone" onClick={closeMenu}></div>

              <div ref={headerMobileMenuRef} className="mobile_menu">
                <div className="top">
                  <button className="mobile_menu_close" onClick={(event) => (closeMenu(event))}>
                    <FontAwesomeIcon className="fa_icon fa_icon_menu" icon={faTimes}/>
                  </button>
                </div>

                <nav>
                  <li>
                    <Link to="/" className="menu_link" onClick={closeMenu} >
                      <FontAwesomeIcon className="fa_icon_menu_item" icon={faHome}/>
                      Главная
                    </Link>
                  </li>

                  <li>
                    <details className="details">
                      <summary className="menu_link menu_link_summary">
                        <FontAwesomeIcon className="fa_icon_menu_item" icon={faServer}/>
                        <span>Оборудование</span>
                        <FontAwesomeIcon className="fa_icon fa_icon_transition" icon={faChevronDown}/>
                      </summary>
                      <ul className="details_list">
                        <li>
                          <Link to="/products" onClick={closeMenu}>
                            Про оборудование
                          </Link>
                        </li>
                      </ul>
                      <ul className="details_list">
                        <p className="details_list_title">Профессиональное:</p>
                        <li>
                          <Link to="/p_receivers" onClick={closeMenu}>
                            Профессиональные ресиверы
                          </Link>
                        </li>
                        <li>
                          <Link to="/scramblers" onClick={closeMenu}>
                            Скремблеры
                          </Link>
                        </li>
                        <li>
                          <Link to="/cas_crypton" onClick={closeMenu}>
                            Система условного доступа Crypton
                          </Link>
                        </li>
                        <li>
                          <Link to="/multiplexers" onClick={closeMenu}>
                            Мультиплексоры DVB
                          </Link>
                        </li>
                        <li>
                          <Link to="/qam_modulators" onClick={closeMenu}>
                            Модуляторы
                          </Link>
                        </li>
                        <li>
                          <Link to="/encoders" onClick={closeMenu}>
                            Энкодеры MPEG-2
                          </Link>
                        </li>
                        <li>
                          <Link to="/combiners" onClick={closeMenu}>
                            Сумматоры мощности
                          </Link>
                        </li>
                        <li>
                          <Link to="/iptv_servers" onClick={closeMenu}>
                          IPTV серверы
                          </Link>
                        </li>
                        <li>
                          <Link to="/ip_streamers" onClick={closeMenu}>
                            IP стримеры
                          </Link>
                        </li>
                      </ul>
                      <ul className="details_list">
                        <p className="details_list_title">Абонентское:</p>
                        <li>
                          <Link to="/customer_equipment"
                          onClick={closeMenu}>
                          Смотреть все
                          </Link>
                        </li>
                        <li>
                          <Link to="/biss"
                          onClick={closeMenu}>
                            BISS модуль
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details className="details">
                      <summary className="menu_link menu_link_summary">
                        <FontAwesomeIcon className="fa_icon_menu_item" icon={faLightbulb}/>
                        <span>Решения</span>
                        <FontAwesomeIcon className="fa_icon fa_icon_transition" icon={faChevronDown}/>
                      </summary>
                      <ul className="details_list">
                        <li>
                          <Link to="/iptv_exx" onClick={closeMenu}>
                            Организация IPTV вещания
                          </Link>
                        </li>
                        <li>
                          <Link to="/cable_tv" onClick={closeMenu}>
                            Организация кабельного вещания
                          </Link>
                        </li>
                        <li>
                          <Link to="/hybrid_tv" onClick={closeMenu}>
                            Кабельное + IPTV вещание
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details className="details">
                      <summary className="menu_link menu_link_summary">
                      <FontAwesomeIcon className="fa_icon_menu_item" icon={faQuestionCircle}/>
                      <span>Поддержка</span>
                        <FontAwesomeIcon className="fa_icon fa_icon_transition" icon={faChevronDown}/>
                      </summary>
                      <ul className="details_list">
                        <li>
                          <Link to="/faq" onClick={closeMenu}>
                          Вопросы и ответы
                          </Link>
                        </li>
                        <li>
                          <Link to="/technical_support" onClick={closeMenu}>
                            Снятое с производства
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link to="/contact" className="menu_link" onClick={closeMenu} >
                      <FontAwesomeIcon className="fa_icon_menu_item" icon={faPhone}/>
                      Контакты
                    </Link>
                  </li>
                </nav>

              </div>
            </div>

          </div>


          <div className="header_desktop">
            <Link to="/">
              <Img fluid={logo.childImageSharp.fluid} className="logoImg" alt="Crypton логотип"/>
            </Link>
            <nav>
              <li>
                <Link to="/" className="menu_link" onClick={closeMenu} >
                  Главная
                </Link>
              </li>

              <li className="dropdown">
                <span>Оборудование
                  <FontAwesomeIcon className="fa_icon fa_icon_transition" icon={faChevronDown}/>
                </span>
                <div className="dropdown_content">
                  <ul className="dropdown_list">
                    <li>
                      <Link to="/products">
                        Про оборудование
                      </Link>
                    </li>
                  </ul>
                  <ul className="dropdown_list">
                    <p>Профессиональное:</p>
                    <li>
                      <Link to="/p_receivers">
                        Профессиональные ресиверы
                      </Link>
                    </li>
                    <li>
                      <Link to="/scramblers">
                        Скремблеры
                      </Link>
                    </li>
                    <li>
                      <Link to="/cas_crypton">
                        Система условного доступа Crypton
                      </Link>
                    </li>
                    <li>
                      <Link to="/multiplexers">
                        Мультиплексоры DVB
                      </Link>
                    </li>
                    <li>
                      <Link to="/qam_modulators">
                        Модуляторы
                      </Link>
                    </li>
                    <li>
                      <Link to="/encoders">
                        Энкодеры MPEG-2
                      </Link>
                    </li>
                    <li>
                      <Link to="/combiners">
                        Сумматоры мощности
                      </Link>
                    </li>
                    <li>
                      <Link to="/iptv_servers">
                      IPTV серверы
                      </Link>
                    </li>
                    <li>
                      <Link to="/ip_streamers">
                        IP стримеры
                      </Link>
                    </li>
                  </ul>
                  <ul className="dropdown_list">
                    <p>Абонентское:</p>
                    <li>
                      <Link to="/customer_equipment"
                     >
                      Смотреть все
                      </Link>
                    </li>
                    <li>
                      <Link to="/biss"
                     >
                        BISS модуль
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <span>Решения
                  <FontAwesomeIcon className="fa_icon fa_icon_transition" icon={faChevronDown}/>
                </span>
                <div className="dropdown_content">
                  <ul className="dropdown_list">
                    <li>
                      <Link to="/iptv_exx">
                        Организация IPTV вещания
                      </Link>
                    </li>
                    <li>
                      <Link to="/cable_tv">
                        Организация кабельного вещания
                      </Link>
                    </li>
                    <li>
                      <Link to="/hybrid_tv">
                        Кабельное + IPTV вещание
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <span>Поддержка
                  <FontAwesomeIcon className="fa_icon fa_icon_transition" icon={faChevronDown}/>
                </span>
                <div className="dropdown_content">
                  <ul className="dropdown_list">
                    <li>
                      <Link to="/faq">
                      Вопросы и ответы
                      </Link>
                    </li>
                    <li>
                      <Link to="/technical_support">
                        Снятое с производства
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/contact" className="menu_link" onClick={closeMenu} >
                  Контакты
                </Link>
              </li>
              <li className="dropdown switch_lang">
                <span>RU
                  <FontAwesomeIcon className="fa_icon fa_icon_transition" icon={faChevronDown}/>
                </span>
                <div className="dropdown_content">
                  <ul className="dropdown_list">
                    <li>
                      <Link to="/">
                        UA
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        EN
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </nav>
          </div>

              </>
            )}
          />
        </div>
      </header>
      </>
    )
  }

  componentDidMount() {

  }

}

function getExtraInfo() {

}

function openMenu(event) {
  var overlay = overlayRef.current;
  var mobileMenu = headerMobileMenuRef.current;

  mobileMenu.style.left = 0;
  overlay.classList.remove("dnone");
}

function closeMenu(event) {
  var overlay = overlayRef.current;
  var mobileMenu = headerMobileMenuRef.current;

  mobileMenu.style.left = "-100vw";
  overlay.classList.add("dnone");
}

Header.propTypes = {
  refer: PropTypes.object,
};



// function getProductTypes(){
//   var menu = getMenuStructure();
//   return(
//     <div className="menu">
//       {menu.map(( productType , i) => (
//         <div className="productType" key={i*10}>
//           {getProductType(productType)}
//         </div>
//       ))}
//     </div>
//   )
// }
//
// function getProductType(productType){
//   console.log(typeof productType);
//   if(typeof productType === "object" && !Array.isArray(productType)) {return(
//     <Link to={productType.link} className="productTypeLink">{productType.name}</Link>
//   )}
//   else if(Array.isArray(productType)) {
//     return(
//       <div className="productTypeDiv">
//     <div className="productTypeName">{productType[0]}</div>
//     <div className="productTypeContent">
//       {mapStrangeArray(productType[1], (group, i) => (
//         <div className="group" key={i*100}>{getGroup(group)}</div>
//       ))}
//     </div>
//     </div>
//   )
// }
//   // return null;
//   return(
//     <div></div>
//   )
// }
//
// function getGroup(group){
//   if(typeof group === "object" && !Array.isArray(group)) {return(
//     <Link to={group.link} className="productTypeLink">{group.name}</Link>
//   )} else if(Array.isArray(group)) {return(
//     <div className="groupDiv">
//     <div className="groupName">{group[0]}</div>
//     <div className="groupContent">
//     {mapStrangeArray(group[1], (product, i) => (
//       <div className="product" key={i*1000}>{getLinkComponent(product)}</div>
//     ))}
//     </div>
//     </div>
//   )}
//   return null;
// }
//
// function getLinkTo(path){
//   var res = !path | path.equals("") ? "#" : path;
//   return res;
// }
//
// function getElement(arrOrObj, i){
//   try{if(!!arrOrObj[i].length){return arrOrObj[i]}}
//    catch(e){if(!!arrOrObj.name){return i==0?arrOrObj.name:i==1?arrOrObj.link:false}}
//   return false;
// }
//
// function mapStrangeArray(arr, mapProcess){
//   try{if(!!arr.length){return arr.map(mapProcess)}} catch(e){}
//   return null;
// }
//
// function getLinkComponent(product){
//   var productLink = getElement(product, 1);
//   var productText = getElement(product, 0);
//   if(!productLink | !productText) {console.log("link: " + productLink);return;}
//   console.log("name: " + product.name);
//   return(
//     <Link to={productLink} >{productText}</Link>
//   )
// }
//
// function getMenuStructure(){
//   return(
//     [
//       //productType
//       {name: "Главная", link: "/"},
//       //productType
//       ["Продукция Head End",
//       //groups
//         [
//           //group
//           ["Профессиональные ресиверы(IRD)",
//           //groupBody
//             [
//               {name: "8-канальный DVB-S/S2 ресивер c IP стримером CRT1081IRD-S2-IP", link: "#"},
//               {name: "4 x DVB-C/T/T2 ресивер", link: "#"},
//               {name: "8-канальный DVB-S/S2 ресивер c мультиплексором CRT1081IRD-S2-MX", link: "#"}
//             ]
//           ],
//         ["Мультиплексоры DVB",
//           [
//             {name: "Профессиональный 8-канальный DVB-S2 ресивер с ремультиплексором", link: "#"},
//             {name: "Мультиплексор COD982ASI", link: "#"},
//             {name: "Мультиплексор COD982MSL", link: "#"}
//           ]
//         ],
//         ["Модуляторы"],
//         ["Энкодеры MPEG-2"],
//         ["Система условного доступа Crypton"],
//         ["Скремблеры"],
//         ["Biss CA модуль"],
//         ["Сумматоры мощноти"],
//         ]
//       ],
//       ["IPTV",
//         [
//           ["Серверы Catch-up TV", [] ],
//           ["IPTV стример", [] ]
//         ]
//       ]
//
//     ]
//   )
// }
