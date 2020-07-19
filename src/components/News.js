import React from "react"
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default class News extends React.Component {

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
    <div className="complex_block_headline">
      <h2>Новости</h2>
      <Link to="/news" className="moreBtn">Все новости<FontAwesomeIcon className="fa_icon" icon={faChevronRight}/></Link>
    </div>
    <div className="news_wrapper">
      <Link  to="/cod912ipe_asi" className="news_item">
        <div className="title">
          <h6>Новейшая разработка &mdash; скремблер COD912IPE с интерфейсом ASI</h6>
        </div>
        <div className="date">
          <p>10.07.2020</p>
        </div>
        <div className="textDiv">
          <p>Криптон представил новую модель &mdash; 4-х канальный DVB скремблер системы условного доступа CAS Crypton, предназначенный для работы в составе головных станций. Мы усовершенствовали данное устройство и добавили ему ASI-интерфейс.</p>
        </div>
      </Link>
      <Link to="/top_sales" className="news_item">
        <div className="title">
          <h6>Профессиональный DVB-S2 приемник &mdash; лидер продаж</h6>
        </div>
        <div className="textDiv">
          <p>Универсальным ответом на вопрос "Где взять сигнал? Что является источником сигала?" является спутниковый приёмник. Объединение в одном корпусе нескольких ресиверов даёт значительный выигрыш в цене, размерах, потребляемой мощности и удобстве управления.</p>
        </div>
      </Link>
      <Link to="/news/no_scr_t2" className="news_item">
        <div className="title">
          <h6>В связи с отменой кодирования Т2 мы предлагаем бюджетное решение для принятия эфирных каналов</h6>
        </div>
        <div className="date">
          <p>18.07.14</p>
        </div>
        <div className="textDiv">
          <p>Национальный Совет Украины по вопросам телевидения и радиовещания 17 июля принял решение №296 об отмене кодирования сигнала цифрового эфирного сигнала Т2, поэтому компания "Криптон" предлагает свое бюджетное решение для принятия эфирных каналов и ретрансляции в кабельных и IPTV сетях.</p>
        </div>
      </Link>
      <Link to="/news/cstb2014" className="news_item">
        <div className="title">
          <h6>Криптон принял участие в международной выставке CSTB-2014 в Москве</h6>
        </div>
        <div className="date">
          <p>31.01.14</p>
        </div>
        <div className="textDiv">
          <p>На выставке были представлены  новые разработки &mdash; профессиональный 4-х входовый DVB-T2 приемник, 4-х канальный IP-QAM модулятор с функцией скремблирования, профессиональный 8-входовый DVB-S2 приемник-декриптор со встроенным 4-х канальным мультиплексором.</p>
        </div>
      </Link>
    </div>
    </>
  )
}
