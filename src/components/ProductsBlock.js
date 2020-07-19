import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import i_receivers from '../images/i_router.svg'
// import i_receivers from '../images/i_tv_satellite.svg'
import i_scramblers from '../images/i_padlock_close.svg'
import i_cas from '../images/i_padlock_open.svg'
import i_multiplexers from '../images/i_folder.svg'
// import i_multiplexers from '../images/i_data_transfer.svg'
import i_servers from '../images/i_server.svg'
import i_streamers from '../images/i_video.svg';
// import i_streamers from '../images/i_tv_screen.svg';

export default class ProductsBlock extends React.Component {

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
    <div className="row">
      <div className="col col_33">
        <div className="complex_block_headline">
          <h2>Оборудование</h2>
          <Link to="/products" className="moreBtn">Смотреть все<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link>
        </div>
        <div className="textDiv">
          <p>Компания Криптон производит оборудование для организации телевизионного вещания - кабельного, эфирного, спутникового, IPTV. В том числе - платного с использованием системы условного доступа CAS Crypton.</p>
          <p>Есть в наличии всё необходимое профессиональное оборудование.</p>
        </div>
      </div>

      <div className="col col_66">
        <div className="row">
          <div className="card_wrapper">
            <Link to="/p_receivers" className="card">
              <h4>Ресиверы IRD</h4>
              <p className="moreBtn">Подробнее<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></p>
              <img className="card_img" src={i_receivers} alt="Приемники / ресиверы IRD Crypton"/>
            </Link>
          </div>
          <div className="card_wrapper">
            <Link to="/scramblers" className="card">
              <h4>Скремблеры</h4>
              <p className="moreBtn">Подробнее<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></p>
              <img className="card_img" src={i_scramblers} alt="Скремблеры Crypton"/>
            </Link>
          </div>
          <div className="card_wrapper">
            <Link to="/cas_crypton" className="card">
              <h4>Система<br></br>условного доступа</h4>
              <p className="moreBtn">Подробнее<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></p>
              <img className="card_img" src={i_cas} alt="Система условного доступа CAS Crypton"/>
            </Link>
          </div>
          <div className="card_wrapper">
            <Link to="/multiplexers" className="card">
              <h4>Мульти&shy;плексоры DVB</h4>
              <p className="moreBtn">Подробнее<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></p>
              <img className="card_img" src={i_multiplexers} alt="Мультиплексоры DVB сигнала Crypton"/>
            </Link>
          </div>

          <div className="card_wrapper">
            <Link to="/iptv_servers" className="card">
              <h4>Серверы<br></br>Catch-up</h4>
              <p className="moreBtn">Подробнее<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></p>
              <img className="card_img" src={i_servers} alt="Catch-up серверы для IPTV Crypton"/>
            </Link>
          </div>
          <div className="card_wrapper">
            <Link to="/ip_streamers" className="card">
              <h4>IP стримеры</h4>
              <p className="moreBtn">Подробнее<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></p>
              <img className="card_img" src={i_streamers} alt="IP стримеры Crypton"/>
            </Link>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

// <h3>IPTV</h3>
// <h3>Цифровое телевидение</h3>


// <div className="products_div">
//   <h4>Цифровое телевидение</h4>
//   <ul>
//     <li>Ресиверы IRD</li>
//     <li>Скремблеры</li>
//     <li>Система условного доступа CAS Crypton</li>
//     <li>Мультиплексоры DVB</li>
//     <li>Модуляторы</li>
//     <li>Энкодеры MPEG-2</li>
//     <li>Сумматоры мощности</li>
//   </ul>
// </div>
// <div className="products_div">
//   <h4>IPTV</h4>
//   <ul>
//     <li>IP стримеры</li>
//     <li>Серверы Catch-up</li>
//   </ul>
// </div>
