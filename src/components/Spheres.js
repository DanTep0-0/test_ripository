import React from "react"
import { Link } from "gatsby"

const slides = [
  ["Кодировка", 'Криптон предлагает систему скремблирования телевизионного сигнала собственной разработки и сопутствующее профессиональное и абонентское оборудование.'],
  ["Телевещание", "Криптон разрабатывает и изготавливает весь спектр профессионального оборудования для цифрового широковещательного телевидения в кабельных (DVB-C), эфирных (DVB-T, DVB-T2) и спутниковых (DVB-S, DVB-S2) сетях."],
  ["IPTV", "Интерактивное телевидение - видео по запросу (Video on Demand - VoD), на любое устройство (Multiscren, TVoIP), с отложенным временем просмотра (Time Shifted TV), телевидение вслед за эфиром (Catch-up) и другие возможности."],
  ["Сервис", "Мы гарантируем высокое качество своей продукции, техническую поддержку, гарантийное обслуживание и разностороннюю помощь своим клиентам."],
]

export default class Spheres extends React.Component {

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

function getSphereName(i){
  var res = i >= 0 && i < slides.length ? slides[i][0] : "";
  return res;
}

function getSphereText(i){
  var res = i >= 0 && i < slides.length ? slides[i][1] : "";
  return res;
}

function getSpheres(){
  var spheres = new Array(slides.length);

  for(var i = 0; i < slides.length; i++) {
  spheres[i] = <div className="col">
      <div className="card">
        <h4>{getSphereName(i)}</h4>
        <div className="textDiv">
          <p>{getSphereText(i)}</p>
        </div>
      </div>
    </div>
  }
  return(spheres)
}

function getCodeOfClass(){

  var settings = {
    dots: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
    };
    return(
      <>
      <h2>Сферы деятельности</h2>

      <div className="row">
        {getSpheres()}
      </div>
    </>
  )
}



// <Slider {...settings}>
//   {[first.edges[0].node, second.edges[0].node, third.edges[0].node].map(( {fluid}, i) => (
//     <div className="slider_item" key={i}>
//       <div className="item_pic">
//         <Img fluid={fluid} key={i+100} className="spheresImage" alt={"Сфера деятельности"}/>
//       </div>
//       <div className="textDiv">
//         <h4 className="title sphereName">{getSphereName(i)}</h4>
//         <p className="sphereText">{getSphereText(i)}</p>
//       </div>
//    </div>
//  ))}
// </Slider>
