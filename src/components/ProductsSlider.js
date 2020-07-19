import React from "react"
import Img from "gatsby-image"

import Slider from "react-slick"
import "../styles/slick.css"
import "../styles/slick-theme.css"
import { Link, StaticQuery, graphql } from "gatsby";

export default class ProductsSlider extends React.Component {

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

  var settings = {
    dots: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return(
    <StaticQuery

      query = {
        graphql`
          query  {
            crt1041m_c_ip: file(relativePath: {eq: "crt1041m-c-ip.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 4158, maxHeight: 1600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            crt1001cam: file(relativePath: {eq: "crt1001cam.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 854, maxHeight: 260) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            crt1081ird_s2_ip: file(relativePath: {eq: "crt1081ird_s2_ip.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 4158, maxHeight: 1600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hp_proliant: file(relativePath: {eq: "hp_proliant.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1234, maxHeight: 422) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
        `
      }

      render = {({ crt1041m_c_ip, crt1001cam, crt1081ird_s2_ip, hp_proliant }) => (

        <>
        <h2>Лидеры продаж</h2>
        <Slider {...settings}>
          <Link to="/crt1081ird_s2_ip" className="slider_item">
            <div className="item_pic">
              <Img fluid={crt1081ird_s2_ip.childImageSharp.fluid} alt="8-канальный DVB-S/S2 ресивер c IP стримером CRT1081IRD-S2-IP Crypton"/>
            </div>
            <div className="textDiv">
              <h4 className="title">Профессиональный ресивер - IP стример</h4>
              <p className="model">CRT1081IRD-S2-IP</p>
              <p className="price">$1800,00</p>
            </div>
          </Link>

          <Link to="/crt1041m-c-ip" className="slider_item">
            <div className="item_pic">
              <Img fluid={crt1041m_c_ip.childImageSharp.fluid} alt=" Crypton"/>
            </div>
            <div className="textDiv">
              <h4 className="title">4-канальный DVB-C модулятор</h4>
              <p className="model">CRT1041M-C-IP</p>
              <p className="price">$1400,00</p>
            </div>
          </Link>

          <Link to="/cam" className="slider_item">
            <div className="item_pic">
              <Img fluid={crt1001cam.childImageSharp.fluid} alt="CI/CAM модуль доступа Crypton CRT1001CAM Crypton"/>
            </div>
            <div className="textDiv">
              <h4 className="title">CAM модуль доступа Crypton</h4>
              <p className="model">CRT1001CAM</p>
              <p className="price">$32,00</p>
            </div>
          </Link>

          <Link to="/catch_up_server_lite" className="slider_item">
            <div className="item_pic">
              <Img fluid={hp_proliant.childImageSharp.fluid} alt="Сервер для IPTV вещания Crypton"/>
            </div>
            <div className="textDiv">
              <h4 className="title">Catch-up сервер для IPTV вещания</h4>
              <p className="model">Catch-up TV Lite</p>
              <p className="price">$1500,00</p>
            </div>
          </Link>
        </Slider>
        </>
      )}
    />
  )
}
