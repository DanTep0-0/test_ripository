import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";


const features = [
  ["Надежность", 'Криптон на рынке более 28 лет! За это время мы разработали наилучшую формулу тестирования, благодаря чему всё выпущенное нами оборудование бесперебойно работает у клиентов. Мы понимаем, что телекомпания - это надолго. Наш главный принцип - "включил и забыл".'],
  ["Качество", 'Разработки "Криптон" выполнены командой профессионалов высочайшего уровня. Все стандарты соблюдены. Испытание и тестирование проводится самым жёстким образом с использованием специальных технологий и оборудования.'],
  ["Сервис", "Мы говорим на Вашем языке и будем всегда рядом, даже если находимся с Вами в разных полушариях. Мы знаем об оборудовании всё - это наша разработка. Вы не останетесь без техподдержки, и это гарантировано: Криптон обслуживает клиентов даже во время войны, пандемии..."],
   ["Fourth feature", "fourth text"],
]

export default class Features extends React.Component {

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
  //Передаётся edges с 3мя src картинок
  return(
    <StaticQuery

    query = {graphql`
      query MyQuery {
        first: allImageSharp(filter: {fluid: {originalName: {eq: "feature_tick.png"}}}) {
          edges {
            node {
              fluid {
                src
                originalName
              }
            }
          }
        }
        second: allImageSharp(filter: {fluid: {originalName: {eq: "feature_tick.png"}}}) {
          edges {
            node {
              fluid {
                src
                originalName
              }
            }
          }
        }
        third: allImageSharp(filter: {fluid: {originalName: {eq: "feature_tick.png"}}}) {
          edges {
            node {
              fluid {
                src
                originalName
              }
            }
          }
        }
      }

      `}

      render={({ first, second, third }) => (
      <div className="block features">
        <h3>Наши преимущества</h3>

        <ul className="features_list">
          {[first.edges[0].node, second.edges[0].node, third.edges[0].node].map(({fluid}, i) => (

            <li className="feature_item" key={i}>
              <div className="featureHeading">
                <Img fluid={fluid} className="feature_tick" alt="Преимущество галочка"/>
                <h4 className="featureName">{getFeatureName(i)}</h4>
              </div>
              <div className="textDiv">
                <p className="featureText">{getFeatureText(i)}</p>
              </div>
            </li>

          ))}
        </ul>
      </div>
      )}

    />
  )
}

function getFeatureName(i){
  var res = i >= 0 && i < features.length ? features[i][0] : "";
  return res;
}

function getFeatureText(i){
  var res = i >= 0 && i < features.length ? features[i][1] : "";
  return res;
}
